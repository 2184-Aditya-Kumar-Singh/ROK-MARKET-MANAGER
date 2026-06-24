const Deal = require("../models/Deal");
const { EmbedBuilder } = require("discord.js");

async function updateChecklist(client, deal) {

  if (!deal?.channelId || !deal?.checklistMessageId) return;

  const channel = await client.channels.fetch(deal.channelId).catch(() => null);
  if (!channel) return;

  const message = await channel.messages.fetch(deal.checklistMessageId).catch(() => null);
  if (!message) return;

  const checklistState = {
    payment: deal.status !== "waiting_payment",
    verified: deal.status !== "waiting_payment",
    secured: ["secured", "login_confirmed", "hold_24h", "completed"].includes(deal.status),
    login: ["login_confirmed", "hold_24h", "completed"].includes(deal.status),
    hold: ["hold_24h", "completed"].includes(deal.status),
    released: deal.status === "completed"
  };

  const checklistEmbed = new EmbedBuilder()
    .setTitle("📋 Deal Checklist")
    .setColor(0x2ecc71)
    .setDescription(`
${checklistState.payment ? "✅" : "⬜"} Payment Received  
${checklistState.verified ? "✅" : "⬜"} Account Verified  
${checklistState.secured ? "✅" : "⬜"} Account Secured  
${checklistState.login ? "✅" : "⬜"} Buyer Login Confirmed  
${checklistState.hold ? "✅" : "⬜"} 24h Hold Started  
${checklistState.released ? "✅" : "⬜"} Payment Released  
`);

  // Keep existing embeds safely
  const existingEmbeds = message.embeds || [];

  await message.edit({
    embeds: [...existingEmbeds.slice(0, 2), checklistEmbed]
  });
}

module.exports = {
  updateChecklist
};

module.exports = {
  updateChecklist
};

