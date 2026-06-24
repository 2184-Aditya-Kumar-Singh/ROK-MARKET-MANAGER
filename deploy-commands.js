require("dotenv").config();

const { REST, Routes } = require("discord.js");
const fs = require("fs");
const path = require("path");

const globalCommands = [];
const guildCommands = [];

// =======================
// RECURSIVE COMMAND LOADER
// =======================
const loadCommands = (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      loadCommands(filePath);
    } else if (file.endsWith(".js")) {
      const command = require(filePath);

      if (!command.data) continue;

      const json = command.data.toJSON();

      // 👇 SPLIT LOGIC
      if (command.guildOnly) {
        guildCommands.push(json);
        console.log(`🏠 Guild-only command: ${command.data.name}`);
      } else {
        globalCommands.push(json);
        console.log(`🌍 Global command: ${command.data.name}`);
      }
    }
  }
};

loadCommands(path.join(__dirname, "commands"));

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log("🔄 Deploying GLOBAL commands...");
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: globalCommands }
    );

    console.log("🔄 Deploying GUILD commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: guildCommands }
    );

    console.log("✅ Commands deployed successfully.");
  } catch (error) {
    console.error("❌ Deploy failed:", error);
  }
})();
