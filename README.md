# ROK Market Manager — Discord Marketplace Bot

A friendly, in-server marketplace bot built for Discord to run safe, moderated buy/sell flows. ROK Market Manager helps communities list accounts, resources, and kingdoms, manage deals with middlemen (MMs), create private deal tickets, and track the whole process (payments, verification, holds, and releases) — all without leaving Discord.

This README is written for server owners, sellers, buyers, and middlemen — non-technical and focused on how the bot is used.

---

## Quick overview
- Sellers create listings through a guided DM flow.
- Listings are posted to the server in the appropriate sell channels with a visible "Buy Now" button.
- Buyers click "Buy Now" → a private deal ticket is created with the seller, buyer, and assigned MM.
- Tickets include a checklist that updates as the deal progresses (payment received, account verified, buyer login confirmed, hold started, funds released).
- Background checks: listings expire after 30 days, and inactive deals auto-cancel after 48 hours to keep everything tidy.
- Admins can configure channels for price ranges, sold channels, and ticket categories.

---

## Who this is for
- Server owners who want a structured marketplace inside their Discord server.
- Sellers who want to post account, resources, or kingdom listings.
- Buyers who want to safely purchase via monitored deal tickets with MM support.
- Middlemen (MMs) who handle payments, verification, and release of funds.

---

## Main user flows (non-technical)

Seller
1. Run /start (or use the seller button) in the server and follow prompts.
2. The bot will DM you a step-by-step questionnaire (details depend on whether you sell an account, resources, or a kingdom).
3. Upload screenshots when prompted and provide a price and MM name.
4. The bot posts your listing to the correct channel with a "Buy Now" button.

Buyer
1. Run /start (or use the buyer button) in the server and choose what you want to buy.
2. The bot will DM you to gather budget/preferences and then show matching listings and links.
3. Click "Buy Now" on a listing to open a private deal ticket with seller + MM.
4. Follow the ticket checklist: pay, confirm login (if needed), wait through the hold, then funds are released.

Middleman (MM)
- MMs are assigned per listing. They join tickets to verify payment and manage the secure parts of the deal (holding funds, confirming login, releasing payment).
- MM fees are applied to listings (default 10% in the bot’s flow).

Server Admin
- Configure channels for price ranges, resource/kingdom sells, sold channels, and the ticket category.
- Maintain the MM list and subscription status for the server (if subscription gate is used).

---

## Key features (user-focused)
- Guided seller DM wizard for complete listing creation.
- Per-listing screenshots, price, MM selection, and automatic fee calculation.
- "Buy Now" button creates a private ticket channel for secure negotiation.
- Deal checklist that updates in real time inside the ticket.
- Auto-cancel for inactive deals after 48 hours to protect listings and participants.
- Listings auto-expire after 30 days to avoid stale posts.
- Transcript generation for tickets (HTML transcripts can be produced for records).
- Subscription reminders and expiry handling for server owners (if subscriptions are enabled).
- Simple, visible sold flow — sold listings moved/posted to sold channel and original listing removed.

---

## Rules & safety (recommended)
- Never complete deals in DMs — always use the ticket created by the bot.
- Always follow the checklist in the ticket: payment → verification → buyer login (if required) → 24h hold → release.
- Use an assigned MM for funds handling and verification.
- Keep screenshots and receipts handy when selling; they speed up verification.
- Respect server-specific rules and the MM guidelines set by server admins.

---

## Common questions
- Q: What types of items can be sold?
  A: Accounts, resources, and kingdoms — each has a tailored question flow and posting channel.

- Q: What happens if a buyer doesn’t pay?
  A: If a deal remains in "waiting_payment" or "account_check" and is inactive for 48 hours, the deal auto-cancels and the listing becomes available again.

- Q: How long do listings stay live?
  A: Listings are set to expire after 30 days automatically.

- Q: Is the MM fee configurable?
  A: MMs and their fees are managed by server config; the flow uses an MM fee (10% is used by default).

---

## Getting help
- If you have issues or want changes to the bot’s behavior, reach out to the server owner or the bot maintainer.
- For feature requests, bug reports, or to contribute translations/rules, open an issue on the repository.

---

## Want to customize or run your own?
This repo is intended for server hosts and bot maintainers. If you’d like a custom setup (different fee structure, custom MM list, new questions), contact the bot maintainer or open an issue so the developers can assist.

---

## Contact & contribution
- Maintainer: (add your contact or Discord handle here)
- To contribute: open an issue or submit a pull request with suggested improvements, wording changes, or additional non-technical documentation.

---

## License
Replace with the license of your choice (for example: MIT). If you need a recommendation, MIT is a common permissive license that works for most community bots.

---

Thank you for using ROK Market Manager — built to keep marketplace transactions clear, secure, and inside the server.
