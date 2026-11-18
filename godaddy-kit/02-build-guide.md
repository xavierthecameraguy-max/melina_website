# Onyx World Travel: build guide for GoDaddy

For Xavier. This guide covers rebuilding the Sunny Passport site by hand in GoDaddy's classic builder ("Websites + Marketing"), inside Milena's own account. Set it up so that afterwards she can keep it up to date by clicking and typing.

**The kit**
- `01-text-to-paste.md` has every word, page by page. In this guide, "01 › Home 3" means the block headed "Home 3" in that file, and "01, part 11" means its numbered part 11.
- `images/` (also `onyx-images.zip`) has every picture. `images/INDEX.md` says where each one goes and gives its alt text.
- `03-forms-and-buttons.md` covers the forms field by field (part 1), every button and link (part 2), and the no-fake-buttons test (part 3).
- `research-godaddy-plan.md` is the research behind this guide.

**Marks**
- **(check in the editor)** means the research couldn't confirm it, because GoDaddy's help pages couldn't be opened directly. Look in GoDaddy before you rely on it. Where it isn't there, use the fallback given.
- **[TO FILL: ...]** means nobody knows it yet. Leave it marked and never guess.

**The one rule:** no fake buttons. Every button, link and form must really work. If you can't make one go to the right place, delete it.

---

## Step 0. Check which builder she has (do this before anything else)

1. In her GoDaddy account (Step 1, or sitting with her), open **My Products**.
2. Compare what you see with GoDaddy's help page "Which GoDaddy website builder do I have?": https://www.godaddy.com/help/which-godaddy-website-builder-do-i-have-42917
3. Decide:

| What you find | What to do |
|---|---|
| **Websites + Marketing** (Basic, Premium or Commerce). Edit Website opens the page with a panel on the right (Theme, Settings), and you edit by clicking sections. | Go ahead. Basic is enough. |
| A site made with the old "GoDaddy AI Website Builder" | Go ahead. GoDaddy moved these sites into the classic builder on July 31, 2026. |
| Only the domain and email, an Airo "coming soon" page, or an **Airo AI Builder** project (a chat box, AI credits, the address airo-builder.godaddy.com) | **Stop. Don't build anything and don't buy Airo.** Ask GoDaddy (1-480-366-3549, 24/7, or chat) whether Websites + Marketing Basic can still be bought. If it can, Milena decides on the cost and buys it in her own account. Reported prices are about $9.99/month billed yearly at first and about $16.99 at renewal; these weren't checked on GoDaddy's own pricing page. If it can't be bought, tell Claude before doing anything else. The fallback is Google Sites, and this kit would have to be redone for it. |

Why Airo is ruled out: in Airo AI Builder, adding a page or changing a form goes through the AI chat and uses credits. Milena has to be able to edit with no AI.

## Step 1. Get access (delegate access, never her password)

1. Create your own free GoDaddy account.
2. Milena opens **Account Settings > Delegate Access > "People who can access my account" > Invite to Access**, types your name and email, picks **Products & Domains**, and selects **Invite**. That level opens the website editor and the domain's DNS but can't buy anything.
   - Only if you have to buy the plan for her: she picks "Products, Domains & Purchase" instead, then lowers it back to "Products & Domains" afterwards.
3. Accept the invitation the same day. One guide says it expires after 48 hours (check in the editor).
4. Build inside her account, never yours. No way was found to move a Websites + Marketing site between accounts.

Alternative: in the site's Users settings she can give you the **Manager** role, which opens only the website and lets you edit and publish (check in the editor for the exact menu).

## Step 2. Safety first

1. Screenshot her domain's DNS records (in My Products, open onyxworldtravel.com and find its DNS page; the exact menu wasn't in the research, so check in the editor). The email records matter most: **MX**, the **TXT record starting "v=spf1"** (SPF) and the **DKIM** record(s). You'll compare against this in Step 15.
2. Check that the domain and the website plan are in the **same** GoDaddy account. If they aren't, stop and ask: moving a domain between accounts is a separate job, and her email depends on that domain.
3. If a site already exists: Edit Website > Settings > Site History > **Create Backup**.

## Step 3. Theme and style (Edit Website > Theme)

Do this before adding any content. Once content is in, never use "Try a new look" again, because it redoes the whole design.

1. **Try a new look:** pick a light, simple theme. If you can, choose one whose Home header shows a picture beside the words (Step 7) (check in the editor).
2. **Color:** type **#f2603f**. Then drag **"Paint your site"** to the lightest end. The page turns pale but not exactly the demo's cream (#fff7ec), because there seems to be no background color setting (check in the editor). That's expected.
3. **Readability check** (many of her travelers are older):
   - Look at a main button. If its text is **dark on coral**, keep #f2603f (5.35:1 contrast). If it's **white on coral**, change the color to **#b8432a**, the demo's dark coral. White on #f2603f is only 3.2:1; on #b8432a it's 5.4:1.
   - Add a test section, set its Accent to the coral-filled swatch, and look at its text the same way. Write down whether it reads well, because it decides where "Coral" can be used (Step 8). Then delete the test section.
4. **Fonts > Advanced:**
   - **Headings (Primary): Fraunces.** If it isn't listed (check in the editor), use the softest, warmest serif offered, in this order: Lora, Merriweather, Libre Baskerville. Avoid thin, high-contrast display serifs.
   - **Body (Secondary): Atkinson Hyperlegible.** If it isn't listed (check in the editor), use Source Sans Pro (or Source Sans 3), then Lato, then Open Sans. Avoid Montserrat and any condensed, thin or script font.
   - If you do use Atkinson Hyperlegible: its zero has a slash through it. The demo swapped that one digit out, and GoDaddy can't. Look at "2026" and the prices in Preview. If the slashed zero reads oddly, switch to Source Sans Pro.
   - **Size:** there's no exact size, only steps in the text toolbar on the page (check in the editor). Use the larger body step. The demo used 18 to 20 px.
5. **Buttons:** pick the roundest Primary and Secondary styles offered. A full pill shape may not exist (check in the editor). Keep "use theme color" on.

**What can't be copied, and what stands in for it**
- The tilted postcard with its stamp, coral shadow and sun is one ready-made picture: `home-1-postcard.png`.
- The yellow 1-2-3 badges and the three icons are pictures too: `home-how-it-works-step-*.png` and `home-why-icon-*.png`.
- There's no equivalent for the outlined cards with yellow shadows, the teal buttons or the yellow bands. Columns on alternating backgrounds take their place.
- Extra colors exist only as text colors, set with the font color in the text toolbar (check in the editor). Use just one: **dark coral #b8432a, for the review quotes**. Everything else keeps the theme's colors, so Milena never has to pick a color by hand.

## Step 4. Site settings (Edit Website > Settings)

- **Business name:** Onyx World Travel. If it asks for a tagline: Just bring your passport.
- **Logo:** choose an image instead of text and upload `logo-onyx-world-travel.png`. Clicking the logo must go to Home (check in the editor).
- **Favicon:** `favicon-512.png` (check in the editor for where to set it).
- **Social accounts:** leave them empty. [TO FILL: any social media pages Milena wants linked]. A social icon that goes nowhere is a fake button.
- **"Powered by GoDaddy"** in the footer: remove it if her plan allows.
- **Turn off what nobody will use:** Online Appointments, the Online Store and Subscribe sections, and the website chat bubble unless Milena wants to answer chats (check in the editor where each one is switched off). 03 lists everything GoDaddy may add by itself under "Things GoDaddy may add by itself".

## Step 5. Clear out the template

Themes come with sample pages and sections: stock photos, "Learn more" buttons that go nowhere, sample forms. Delete every page and section that isn't in Step 9. Leftovers like these are exactly the fake buttons we promised to avoid.

## Step 6. Make all the pages and the menu

Create every page first, empty, so that every link has somewhere to go. Use Edit Website > Site Navigation > add a page, then open each page's settings (the gear) and set:

| Page name (exactly) | Header menu | Footer menu |
|---|---|---|
| Home | on | on |
| About | on | on |
| Services & Trips | on | on |
| Gallery | on | on |
| Reviews | on | on |
| Contact | on | on |
| Terms & conditions | off | on |
| Privacy | off | on |
| Trip template | off | off |

- **Order:** drag the pages in Site Navigation so they match the table.
- **No "Trips" dropdown.** Trip pages are reached only from the trip cards, which leaves Milena less to update.
- **The page name becomes the web address.** Check in Preview what "Services & Trips" turns into (check in the editor). If the "&" makes the address look messy, that's only cosmetic, so leave it.
- **Limits:** 50 pages per site and 20 sections per page. The longest pages here have about 9.

## Step 7. Header and footer

**Header (every page)**
- Logo and menu.
- Action button: **Plan a custom trip**. Link it to Services & Trips, at the Custom Trip Planner section if links to a section exist (check in the editor), otherwise to the page. If the Action button can dial a phone number instead (check in the editor), "Call (914) 559-8159" is the other option (01 › Header).

**Home header (01 › Home 1)**
- Try layouts until `home-1-postcard.png` sits **beside** the headline, not behind it. Try Flex Fill and the others (check in the editor). Turn off Rounded Corners or Full Width if they crop the postcard.
- **Plan B**, if every layout puts the picture behind the words or crops it: give the header a solid light color and put only the small line, the headline and the "See upcoming trips" button in it. Then build Home 2 as an "About / text + image" section, with the postcard on the right, the TEXT from 01 › Home 1 ("Hi, I'm Milena! ...") and the "Plan a custom trip" button.
- If the Action button turns out to be the same on every page (check in the editor), keep it as "Plan a custom trip" and put "See upcoming trips" (-> Services & Trips page, Upcoming Trips section) in the Home 2 button row.

**Other pages**
- Services & Trips, the Trip template, Gallery and Reviews start with a "Header" block in 01. Put that title and intro in the page's header if inner-page headers can hold text (check in the editor). If they can't, keep the header to the logo and menu, and make the first section a Text section with the title and intro.
- About and Contact start with a photo-and-text section, so their header is just the logo and menu.

**Footer (01 › Footer)**
- **Layout:** pick one that shows the phone number. **Accent: Black**, like the demo. Exception: if Home's last band ends up Dark (Step 8), use White so the two don't run together.
- **Footer note:** "Just bring your passport." plus the Kentucky line.
- **Links:** phone, email, and "Send me a message", which goes to Contact. Footer text can carry links. Where the footer takes its phone and email from: check in the editor. Don't fill in a street address; the demo only says "Based in Kentucky".
- **Footer menu:** it comes from each page's settings (Step 6).
- **Copyright:** © 2026 Onyx World Travel. If the year doesn't update by itself (check in the editor), it needs changing every January.
- **Legal line:** [TO FILL: Legal business name and any seller-of-travel registration numbers]
- Footers can't hold images.

## Step 8. Section recipes

01 labels every section with one of the types below. To add one, hover between two sections, select **Add section**, search for the type and pick a layout. GoDaddy's section names may be worded a little differently (check in the editor).

| Type in 01 | GoDaddy section | How to set it up |
|---|---|---|
| Header | The page's header | Step 7. |
| Button row | Content, 1 group | Only the button or buttons, centered. |
| 3 columns | Content, 3 groups side by side ("section groups") | Each group has a small picture on top, a heading and text. |
| 2 columns | Content, 2 groups | Each group has a heading, text or a list, and a button if 01 shows one. |
| Trip cards | Content, 1 group per trip plus 1 last group | Each trip group holds the photo, trip name, "Spots open", place and dates, price, and "See the trip". The last group is "More trips are on the way" on Home, or "Don't see what you want?" on Services & Trips. The button under the cards is the section's own button if it has one, otherwise a Button row right after (check in the editor). |
| About / text + image | About (image beside text) | Put the photo on the side given in Step 9. |
| Text | Content, 1 group, no picture | Use headings, paragraphs and bulleted lists from the text toolbar. In lists, make the word before the colon bold. |
| Dark band | Content, 1 group, centered | Accent **Coral** if the Step 3 check showed readable text on coral, otherwise **Dark**. |
| Photo gallery | Photo Gallery, grid layout | Step 9, Gallery. |
| Contact form | Contact Us, with Contact Form switched on | `03-forms-and-buttons.md`. |

**Backgrounds.** Set them with each section's **Accent** setting in the right-hand panel. The swatches are all made from the main color, and GoDaddy doesn't publish their names (check in the editor). In the tables below:
- **L** is the lightest swatch.
- **T** is a second, pale tinted swatch, if there is one. If there isn't, use L. Don't fill long text sections with Coral or Dark instead.
- **C** is filled with coral. Use it only where Step 3 says it reads well.
- **D** is the darkest swatch.
- The drawings (.png) need L or T behind them, never D.

**Pictures.** All of them are in `images/`. The alt text for each is in `images/INDEX.md`; paste it wherever GoDaddy offers a description box (check in the editor).
- The 1-2-3 badges and the three icons are 240 x 240 pixels and should look about coin-sized. If a group stretches them to the full column width (check in the editor), pick a smaller image size or shape if one is offered. If not, ask Claude for padded versions: the same drawing on a wider see-through canvas, so it stays small when stretched. Last resort: remove the pictures and start the headings with "1.", "2." and "3.".
- The tall portraits on About and Contact: check in Preview that her face isn't cropped.

**Links** (every link is listed in `03-forms-and-buttons.md`)
- Where 01 says "section", use a link to that section if GoDaddy has them (check in the editor). If not, link to the page. If that page is the one the button is already on, delete the button.
- Phone links go to (914) 559-8159 and email links to milena@onyxworldtravel.com. Whether text links accept a phone number or an email address is unconfirmed (check in the editor); the fallbacks are in 03, "How to set each kind of link in GoDaddy".
- If a heading can't be a link (for example the trip name), leave it as plain text so it doesn't look clickable. The "See the trip" link does the job.

## Step 9. Page by page

Build the pages in this order: Home, Trip template, Services & Trips, About, Gallery, Reviews, Contact, Terms & conditions, Privacy. "Bg" is the background from Step 8, and every file is in `images/`.

### Home

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › Home 1 | Header | L | home-1-postcard.png |
| 2 | 01 › Home 2 | Button row (or Plan B, Step 7) | L | none |
| 3 | 01 › Home 3 How it works | 3 columns | T | the three home-how-it-works-step-*.png |
| 4 | 01 › Home 4 Where are we going next? | Trip cards | L | sample-trip-1-ancient-theater.jpg |
| 5 | 01 › Home 5 Why travel with me | 3 columns | T | the three home-why-icon-*.png |
| 6 | 01 › Home 6 Ten-plus years | About / text + image, photo on the left | L | home-2-friends.jpg |
| 7 | 01 › Home 7 What my travelers say | 3 columns | T | none |
| 8 | 01 › Home 8 Got a place in mind? | Dark band | C or D | none |

- **Home 7:** each quote goes in as large heading text in dark coral #b8432a (font color: check in the editor). The name is small and bold, and "Read the full review" links to the Reviews page. The "Read more reviews" button goes underneath.
- Leave out the demo's dark "Draft website" strip.

### Trip template (hidden: header and footer menus both off)

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › Trip 1 | Header, with the trip photo as cover | L | sample-trip-1-ancient-theater.jpg |
| 2 | 01 › Trip 2 Quick facts | Text, bulleted list | T | none |
| 3 | 01 › Trip 3 Why I picked this trip | Text | L | none |
| 4 | 01 › Trip 4 Day by day | Text, with "Day 1: ..." as small headings | L | none |
| 5 | 01 › Trip 5 Included / Not included | 2 columns, bulleted lists | T | none |
| 6 | 01 › Trip 6 Before you go | Text | L | none |
| 7 | 01 › Trip 7 Questions about this trip | Text: each question in bold with the answer under it. No FAQ section was found (check in the editor) | L | none |
| 8 | 01 › Trip 8 Save my spot | Contact form (booking) | T | none |

- Keep every [TO FILL: ...] exactly as written. They show Milena what to change on each copy.
- If a real trip is already set, don't fill in the template itself. Duplicate it (Step 12) and fill in the copy.

### Services & Trips

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › Services 1 | Header | L | none |
| 2 | 01 › Services 2 Two ways | 2 columns | L | none |
| 3 | 01 › Services 3 What "everything" includes | Text | T | none |
| 4 | 01 › Services 4 Upcoming Trips | Trip cards, built exactly like Home 4 | L | sample-trip-1-ancient-theater.jpg |
| 5 | 01 › Services 5 Custom Trip Planner | 3 columns | T | the three home-how-it-works-step-*.png |
| 6 | 01 › Services 6 Tell me about your dream trip | Contact form (custom trip) | T | none |

- Sections 5 and 6 share a background so they read as one block.
- Section 2's buttons point to sections 4 and 5 on this same page. Delete them if links to a section don't exist.

### About

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › About 1 Hi, I'm Milena! | About / text + image, photo on the left | L | about-1-milena.jpg |
| 2 | 01 › About 2 Her story | Text (five small headings), then the two buttons | L | none |
| 3 | 01 › About 3 Milena at a glance | Text, bulleted list | T | none |

01 also allows "Milena at a glance" as a second group beside the story instead. Use whichever looks tidier.

### Gallery

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › Gallery 1 | Header | L | none |
| 2 | 01 › Gallery 2 The photos | Photo gallery | L | gallery-01 to gallery-18 |

- Upload the photos in order, 01 to 18, and drag to reorder if needed. Each caption goes in the photo's description; the alt text goes wherever GoDaddy offers a box for it (check in the editor).
- Captions marked "maybe" are guesses. They stay as [TO FILL] until Milena confirms them.
- Click a photo in Preview. If it doesn't get bigger (check in the editor), delete the sentence "Tap or click any photo to see it bigger."

### Reviews

| # | Paste from | Type | Bg |
|---|---|---|---|
| 1 | 01 › Reviews 1 | Header | L |
| 2 | 01 › Reviews 2 Father Peter | Text | T |
| 3 | 01 › Reviews 3 Kellie G. | Text | L |
| 4 | 01 › Reviews 4 Haley E. | Text | T |
| 5 | 01 › Reviews 5 Traveled with me before? | Text | L |

- Build Father Peter's section completely first: the highlight as large heading text in dark coral, the review as paragraphs, and the name small and bold. Then **duplicate** that section (section menu > Duplicate) for Kellie and Haley, change the background, and replace the words. Milena will add reviews the same way.
- Don't use GoDaddy's built-in Reviews section. It shows at most 9 reviews, and how it lays out long reviews isn't documented.

### Contact

| # | Paste from | Type | Bg | Picture |
|---|---|---|---|---|
| 1 | 01 › Contact 1 Get in touch | About / text + image, photo on the left | L | contact-1-milena.jpg |
| 2 | 01 › Contact 2 Call me / Email me | 2 columns | T | none |
| 3 | 01 › Contact 3 Send me a message | Contact form | L | none |

### Terms & conditions, Privacy

One Text section each, background L, pasted from 01 › Terms 1 and 01 › Privacy 1. Header menu off, footer menu on.

### Not built

- **Thank-you pages.** No way to send a form to its own page was found, so each form shows its own message after sending (check in the editor). The words are in 01, part 11.
- **"Page not found" page.** GoDaddy's own is used. If it can be edited (check in the editor), use the words in 01, part 13.

## Step 10. Forms (the full setup is in `03-forms-and-buttons.md`)

03 has four forms, built as three Contact Us sections: on the Contact page, on Services & Trips, and on the Trip template (each trip copy carries its own). The fourth, the waitlist, is the same booking form with new words once a trip sells out. The short version:
- **Send Message To: milena@onyxworldtravel.com** on every form. If it's left blank, messages go to the account's main email instead.
- Attachments off. Email opt-in off.
- Hide any map, address or opening hours the Contact Us section shows (check in the editor).
- If the message shown after sending can be edited (check in the editor), paste the one from 01, part 11.
- Send one test from every form (Step 16).

## Step 11. Google titles and descriptions

For each page, open its settings, find the SEO or "Get found on Google" part (check in the editor), and paste the GOOGLE TITLE and GOOGLE DESCRIPTION from that page's "Page settings" in 01. Home's description is exactly 160 characters, GoDaddy's limit. If GoDaddy suggests its own keywords or wording, skip them and paste 01's words.

## Step 12. Set it up so Milena's edits are easy

| Her routine job | How to set it up |
|---|---|
| Add a new trip | Keep the hidden **Trip template** page, with its [TO FILL] blanks and a booking form already sending to her. She makes each new trip from it: Site Navigation > hover "Trip template" > gear > **Duplicate Page**. She renames the copy (for example "Italy 2027"), leaves both menu switches off, and fills it in. |
| Show the trip on the site | Have exactly **one Trip cards section on Home** and **one on Services & Trips**, built the same way: trip columns first, and "More trips are on the way" or "Don't see what you want?" always last. To add a trip she copies a trip column on both pages, or uses Add group if there's no copy option (check in the editor), then points the trip name and "See the trip" at the new page. It's always two places. |
| Sold out, or a trip is over | Text changes only. The words are ready in 01, part 12. |
| Add a review | On the Reviews page she duplicates the last review section and replaces the words. Home's three quotes are plain text she can swap. |
| Add gallery photos | There's one gallery: she adds an image, types its caption in the description and drags it into place. |
| Undo a mistake | Site History backups (Step 17). |

Also:
- **No hand-made styling to repeat.** The only hand-set color is the dark coral on review quotes, and Duplicate copies it. Don't add one-off colors or font sizes anywhere else.
- **Nothing extra in the editor.** No leftover sections, test pages or old drafts, apart from Trip template.
- **Old trips:** trip pages stay out of the menu, and pages more than about a year old get deleted, to stay under the 50-page limit.
- **AI (Airo):** no switch was found that turns GoDaddy's AI off for the whole account. Look in the account and site settings while you're there (check in the editor). If you find one, turn it off and note where it is for her. If not, she just ignores the Airo tiles and offers on her dashboard, any "Airo", "AI" or "Generate" buttons in the editor, "Try a new look", and anything that starts a new site. None of them are needed for anything she does.

## Step 13. Preview, and the [TO FILL] check

1. **Preview** every page in desktop view and in phone view. If Preview has no phone view (check in the editor), look at the published site on your phone after Step 14.
2. Look for **[TO FILL** on every page. Before the real address goes live, each one is either filled in with Milena's answer or its line is deleted. Two of them need a decision:
   - **No real trip yet?** Delete the trip column on Home and on Services & Trips, and keep only "More trips are on the way" and "Don't see what you want?". Then nothing links to the Trip template, and that's fine.
   - **Terms & conditions and Privacy** still need their real text. Ask Milena.

## Step 14. Publish

Select **Publish**. Every later change needs Publish again too. Until the domain is connected, the site lives at a free GoDaddy address, usually ending in godaddysites.com (check in the editor). That's a good place for Milena to look it over before Step 15.

## Step 15. Connect onyxworldtravel.com

She already owns the domain and her email at GoDaddy, so for a domain in the same account this is usually automatic.

1. Edit Website > Settings > **Manage** (next to the domain) > **"On a domain I already own"** > onyxworldtravel.com > **Save & Publish**.
2. It takes anywhere from minutes to 72 hours. The padlock (HTTPS) turns on by itself, usually within 30 minutes.
3. **Her email must keep working.** Connecting should change only the web records: the A record for @ and the CNAME for www. GoDaddy doesn't say this outright, so compare the MX, SPF and DKIM records with your Step 2 screenshot. They must be unchanged.
4. Send an email to milena@onyxworldtravel.com from an outside address and have her reply. Both must arrive.
5. Open onyxworldtravel.com and www.onyxworldtravel.com. Both must show the site, with the padlock.

## Step 16. Test everything

Run part 3 of `03-forms-and-buttons.md` (the no-fake-buttons test; 01, part 14 is the short version) on a computer **and** on a phone. Any button or link that doesn't land in the right place gets fixed or deleted.
- Send one test from every form, from your own email address. Each must arrive at milena@onyxworldtravel.com. Check the spam folder too: the messages come from mail.conversations.godaddy.com, so mark that sender as safe in her mailbox.
- Have Milena reply to one test, so you can see that her answer reaches the sender (03, part 3 says how). Every message is also kept in the site's Conversations inbox.
- Once the domain is connected, run the short repeat in 03, part 3, "After the domain is connected".

## Step 17. Hand-over

1. Settings > Site History > **Create Backup**, and name it "Launch". How long backups are kept is unknown (check in the editor).
2. Put a copy of this kit (the text and the images) somewhere outside GoDaddy that she keeps. The site can't be exported.
3. Spend 15 minutes with Milena at her own computer, signed in as herself. She opens Edit Website, changes one word, previews, publishes, then changes it back and publishes again. Then together you duplicate the Trip template once and delete the copy.
4. She removes your delegate access (Account Settings > Delegate Access), or lowers it and keeps you for emergencies.
5. Take the GitHub Pages demo down.
