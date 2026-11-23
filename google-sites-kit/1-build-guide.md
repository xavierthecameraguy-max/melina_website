# Onyx World Travel: build guide for Google Sites

For Xavier. This guide rebuilds the Sunny Passport site by hand in new Google Sites, inside **Milena's own free Google account** (her existing Gmail, [her Gmail address]), on onyxworldtravel.com, for $0. Afterwards she keeps it up to date herself by clicking and typing, with no code and no AI.

**The kit**

| File | What it is |
|---|---|
| `1-build-guide.md` | This guide. Work through it from top to bottom. |
| `2-text-to-paste.md` | Every word, page by page. In the tables below, the **Text** column names a block in that file. "Home 3b" is the block for Home, section 3b. It uses the same page names and section numbers as this guide. |
| `3-forms-and-buttons.md` | Part 1: the three Google Forms, question by question. Part 2: every button and link and where it goes. Part 3: the launch test. |
| `4-milena-guide.md` | Milena's own guide. You give it to her at hand-over (Step 14). |
| `images/` and `images/INDEX.md` (also `onyx-images.zip`) | Every picture, renamed. INDEX gives each one's section and alt text, using the same section names. |

**Marks**

- **(check in the editor)**: the research couldn't confirm this. Look before you rely on it, and use the fallback given. For the domain steps, "the editor" means GoDaddy or Search Console. For the forwarding step (8.3a), it means Gmail's settings. For phone items, it means a real phone. The full list is in Appendix A.
- **[TO FILL: ...]**: nobody knows this yet. Paste it exactly as written and never guess it. Before launch, each one is either answered by Milena or its line is deleted (Step 10).
- **S1 / S2 / S3**: the three section colour styles of the custom theme (Step 3). S1 = **Cream**, S2 = **Sunshine**, S3 = **Dark**. Milena's guide uses those names.
- **Milena at the keyboard**: a step that only works signed in as Milena ([her Gmail address]). She does it, with you beside her or on a screen share. Never ask for her password.

**The rules**

1. **No fake buttons.** Every button, link and form must really work. If Google Sites can't make one work, delete it.
2. **Phone numbers are plain text.** Google Sites very likely doesn't accept `tel:` links, so there are no Call buttons. "(914) 559-8159" is written out wherever the design had a call link. One optional test is in Step 13.
3. **Email addresses are text links** to `mailto:milena@onyxworldtravel.com` (this works in Sites). The link text is always the address itself. The site and the forms only ever show milena@onyxworldtravel.com. Her Google sign-in, [her Gmail address], never goes on a page, in the footer, or in a form's title, description, questions or confirmation message.
4. **Links to pages are always picked from the page list**, never pasted. A picked page opens in the same tab. A pasted address, even the site's own, opens in a new tab.
5. **Never change a text box's font, colour or size.** The theme does that. Bold (**B**) is fine. A box's own formatting overrides the theme, and Milena couldn't undo it.
6. **No code.** Never use Insert > Embed > "Embed code". It's the only code door in Sites, and Milena can't maintain it.
7. **$0.** Ignore every "Try Google Workspace", "Get a domain", buy-more-storage or add-on offer.
8. **No AI.** Ignore Gemini, sparkle icons and "Help me create". Build everything by hand so Milena can change everything by hand.

**Two sittings with Milena** (in person, or a screen share with her at the keyboard)

| Sitting | Steps | About |
|---|---|---|
| 1. Start | 0, 1, 12.0 (and 12.3 if you can) | Her Google account ([her Gmail address]): check she can sign in, protect it, check her storage. The empty site and forms shared with you, your GoDaddy access, Search Console |
| 2. Launch | 8.3 (and optional 8.3a), 12.3 (if not done), 12.5, 12.6, 14 | Form notifications and their tests (and, if she wants them in her business inbox, Gmail forwarding), going public, the custom domain, hand-over |

Everything else you do alone, signed in as yourself.

---

## Step 0. Milena's Google account: [her Gmail address] (Sitting 1, Milena at the keyboard)

Everything (the site, the three forms, their answers, Search Console) lives in **one personal Google account: hers, [her Gmail address]** (her existing Gmail). Nothing is ever transferred.

| Who | Owns / can do |
|---|---|
| **Milena** ([her Gmail address]) | Owns the site, the forms and the Search Console property. Only she can connect the domain, and only her own click turns on form notifications to her Gmail inbox. |
| **You (Xavier)** | **Editor** on the site and on each form (Step 1), with your own Google account. GoDaddy **delegate** with your own GoDaddy account (Step 12.0). Never her password. |

Why: only the site's owner can connect a domain (editors don't even see the setting), and Google says transferring a site can break a custom domain (support.google.com/sites/answer/9068867). Form notifications and Search Console ownership are tied to one account too.

**0.1 The account: her existing Gmail**

- **Decided:** her existing personal Gmail, **[her Gmail address]**. She already has it, so there's nothing to create. It's only her sign-in: the site and the forms show **milena@onyxworldtravel.com** everywhere, and [her Gmail address] never appears on them. Form notifications go to this Gmail (8.3). If she'd rather see them in her business inbox, see 8.3a.
- **Check she can sign in:** at accounts.google.com, Milena signs in as [her Gmail address] with her own password. You never see it. If she can't get in, she recovers the account before anything else is built.
- Changing her business email or phone later doesn't change this sign-in. It stays [her Gmail address].
- No Google Workspace. Her free Gmail account is enough for everything in this guide.

**0.2 Protect the account (do it now, not later)**

Signed in as [her Gmail address]: Google Account > **Security & sign-in** > **How you sign in to Google** (support.google.com/accounts/answer/183723). It's an account she already uses, so some of these may already be set. Check each one and correct it:

1. **Recovery phone:** her mobile, one that gets text messages and belongs only to her. Not a Google Voice number. An old account often holds an outdated number: check that the number shown is her current mobile.
2. **Recovery email:** **milena@onyxworldtravel.com**, her business address. It must be different from the account's own address ([her Gmail address]).
3. **Recovery contact:** someone she trusts. Security & sign-in > **Recovery contacts** > Add recovery contact. The person has 7 days to accept (support.google.com/accounts/answer/16590793).
4. **2-Step Verification:** on, with the phone prompt as the method (it may already be on; check it).

If she loses this account, she loses her Gmail, the site, the forms and the domain verification. Her personal email and her business website now share one login, so a hacked or locked Gmail takes the website with it. Google can delete accounts that are unused for 2 years (support.google.com/accounts/answer/12418290). Normal use keeps it active: reading or sending email in this Gmail counts.

**0.3 If you already started a copy in your own account**

Rebuild it in hers. Don't publish test copies from your account under the address she'll use: Google ties a used address to its owner (support.google.com/sites/answer/6372880).

If rebuilding is impossible, transfer it **before any domain step**: Share > [her Gmail address] > Make owner (wording: check in the editor). She has to accept the transfer. Then she publishes and does the domain herself.

**0.4 Her storage, and what's already in her account (Sitting 1)**

- **Storage:** her Gmail, Drive and Photos share one free 15 GB (support.google.com/googleone/answer/9312312). The forms count toward it. The site probably does too (LIKELY), but its pictures are small.
  - Check it: Google Drive > **Storage** (left menu), or google.com/settings/storage.
  - If it's near 15 GB, clean up **before** building: empty Gmail's Trash and Spam, and delete big old attachments. The figure can take 48-72 hours to update.
  - Why it matters: a full account can't send or receive email (messages to her bounce back), so the form alerts bounce, and nobody can edit the forms until she frees space (support.google.com/drive/answer/6374270 and googleone/answer/9312312). Whether the forms still take answers then is UNVERIFIED.
  - **$0:** never buy storage. Clearing space is the fix.
- **Existing files:** open **sites.google.com** and **forms.google.com** in her account and note any sites or forms she already has. They're harmless, but she could open the wrong one. The website's files are the ones named in Step 1: **Onyx World Travel** and the three form titles.

---

## Step 1. Create the site, the forms and the sharing (Sitting 1, Milena at the keyboard)

Before you start, check that the account picture at the top right is [her Gmail address]. If it isn't, switch to it. Otherwise the site and forms are created in the wrong account. Check again at step 6 (forms.google.com).

1. **sites.google.com** > **Blank site**.
2. Top left, the file name ("Untitled site"): type **Onyx World Travel**.
   - This is the Drive file name. The **site name** in the menu bar is separate. It stays empty (Step 4).
3. **Share** (person icon at the top) > add **your** Google account as **Editor** > Done (support.google.com/sites/answer/97934).
4. Share > **Settings** (gear): leave "**Editors can publish, change permissions, and add new people**" **ticked** during the build.
5. Share > Links:
   - **Draft:** Restricted.
   - **Published site:** **Restricted**. It stays that way until launch (Step 12).
6. **forms.google.com** > **Blank form**, three times. Titles:
   - **Message for Milena**
   - **Custom trip idea**
   - **Trip booking and waitlist**
7. In each form: More (three dots) > **Add collaborators** > your account as **Editor**. You fill them in later (Step 8).
8. Optional now, needed by Step 12: **GoDaddy access for you** (Step 12.0).

---

## Step 2. Before you build: what Sites can and can't do

Read this once, so nothing surprises you.

- **Can't:**
  - borders, shadows or rounded corners on anything
  - rotation, overlap or free positioning (everything snaps to a grid)
  - pill-shaped buttons (buttons are rectangles with 4 px corners and no shadow)
  - choosing button or menu text colour (Sites always picks black or white)
  - hover effects, a lightbox, or click-to-enlarge photos
  - per-page Google titles or descriptions (skip 01's "GOOGLE TITLE" blocks)
  - an editable 404 page
- **Pictures instead:** the postcard, the 1-2-3 step badges and the "Why" icons are ready-made PNGs in `images/`.
- **Automatic on phones:** columns stack left to right, and the menu becomes a hamburger. There are no per-device settings.
- **Added by Google:** a search icon at the top right and a round **(i)** badge at the bottom left of every published page. The (i) badge can't be removed. No setting to hide the search icon was found (check in the editor). Tell Milena they're normal.

---

## Step 3. The custom theme "Sunny Passport"

Right panel > **Themes** > under **Custom**, **Create theme** > Name: `Sunny Passport` > **Next**.

- Skip the header image. Headers are deleted (Step 5).
- Set the colours and fonts below > **Create theme**.
- Later changes: Themes > Custom > More (three dots) > **Edit**.
- The editor's sections are **Colors, Text, Images, Navigation, Components, Spacing**.
- Custom themes work on personal accounts (workspaceupdates.googleblog.com/2021/09/design-custom-themes-in-new-google-sites.html).
- Don't use a "Created by Google" theme. They can't take exact colours or named fonts.

**3.1 Colors.** Choose **Customize colors**, then pick Style 1, 2 or 3 and type each hex. Values come from `src/assets/css/site.css`.

| Field | S1 Cream (most sections) | S2 Sunshine (highlight sections) | S3 Dark (closing band, footer) |
|---|---|---|---|
| Background | #fff7ec | #ffe9b3 | #1f1a17 |
| Title, Heading, Subheading | #1f1a17 | #1f1a17 | #fff7ec |
| Normal text | #1f1a17 | #1f1a17 | #fff7ec |
| Small text | #5c534c | #5c534c | #fff7ec |

- **Default** (the theme accent): **#f2603f**.
- Don't use #ffc23c or #f2603f as text or link colours on S1 or S2. They fail contrast.

**3.2 Components** (per style):

| Component | S1 | S2 | S3 |
|---|---|---|---|
| Button: Filled | #f2603f | #f2603f | #f2603f |
| Button: Outlined | #0e7c7b | #0e7c7b | #ffc23c |
| Button: Text | #0b6564 | #0b6564 | #ffc23c |
| Link | #0b6564 | #0b6564 | #ffc23c |
| Divider | #1f1a17, thickest weight | #1f1a17 | #fff7ec |

**Check every colour in the editor.** Sites swaps colours it thinks don't contrast enough for black or white, and the threshold isn't published.

- **Coral buttons:** Sites should put **black** text on #f2603f (5.35:1, as in the design). If it refuses #f2603f, or puts **white** text on it, use **#b8432a** instead (white text, 5.4:1) (check in the editor).
- **#ffc23c links on S3:** check they stay yellow (check in the editor).

**3.3 Navigation**

- **Background:** #ffffff. Not "Transparent at top".
- **Selected page:** #b8432a. If Sites uses this as a background highlight rather than a text colour, use #ffc23c, the design's yellow current-page mark (check in the editor).
- Menu text colour and font are automatic. The font follows Normal text.

**3.4 Text.** Google Fonts only: Docs-only fonts break on a custom domain (support.google.com/sites/answer/9068867).

| Style | Font | Weight | Size | Line spacing |
|---|---|---|---|---|
| Title | Fraunces | SemiBold | 40 pt | 1.15 |
| Heading | Fraunces | SemiBold | 28 pt | 1.15 |
| Subheading | Fraunces | SemiBold | 18 pt | 1.15 |
| Normal text | Atkinson Hyperlegible | Regular | 14 pt | 1.5 |
| Small text | Atkinson Hyperlegible | Regular | 12 pt | 1.4 |

- Everything is left-aligned.
- **Are both fonts in the Sites list?** (check in the editor)
  - If Fraunces is missing: **Lora**, then **Merriweather**.
  - If Atkinson Hyperlegible is missing: "Atkinson Hyperlegible Next" if listed, otherwise **Open Sans** or **Lexend** (check in the editor).
  - Never Georgia or Verdana. They aren't Google Fonts and fail on the custom domain.
  - After the domain is live, check the fonts on www.onyxworldtravel.com itself.
- Fraunces' soft shape and its 650 weight can't be set. SemiBold is the nearest.

**3.5 Spacing**

- Site width: **Default** (closest to the design's 74rem).
- Density: **Comfortable**.
- Frame: off.

**3.6 Images** (optional here, Step 4 does the same): logo and favicon.

---

## Step 4. Logo, favicon, site name

Settings (gear, top right) > **Brand images** (support.google.com/sites/answer/98081, /90538):

| What | File in `images/` | Notes |
|---|---|---|
| Logo | `logo-onyx-world-travel.png` (832x186) | Alt text: **Onyx World Travel**. Shows about 40 px tall. |
| Favicon | `favicon-512.png` | Only shows on the live site, and can take a while to appear. |

- **Site name:** top left of the menu bar, "Enter site name". Leave it **empty**, because the logo already says "Onyx World Travel".
  - Whether it may be empty: (check in the editor).
  - If it can't be empty, type **Onyx World Travel** and look at the menu bar. Keep the logo either way.
- Clicking the logo should go to Home (check in the editor).
- **No Social links block.** No accounts are known. [TO FILL: any social media pages Milena wants linked]. An icon that goes nowhere is a fake button.
- No Announcement banner.

---

## Step 5. Pages and navigation

Create every page first, empty, so that every link has somewhere to go.

- **New page:** right panel > **Pages** > **+** (bottom) > **New page** > name > Done.
- **Sub-page:** More (three dots) on the parent > **Add subpage**, or drag one page onto another.
- **Hide from the menu:** More > **Hide from navigation**.
- **Custom path:** More > **Properties** > Advanced > Custom path. Optional. It's unconfirmed whether it sets only the last part of the address (check in the editor).

| # | Page name (exactly) | Menu | Parent | Path |
|---|---|---|---|---|
| 1 | Home | yes | none | (home) |
| 2 | About | yes | none | about |
| 3 | Services & Trips | yes | none | services |
| 3a | Plan a custom trip | yes (in the Services & Trips drop-down) | Services & Trips | custom-trip |
| 3b | Trip template | **hidden** | Services & Trips | trip-template |
| 4 | Gallery | yes | none | gallery |
| 5 | Reviews | yes | none | reviews |
| 6 | Contact | yes | none | contact |
| 7 | Terms & conditions | **hidden** (footer link only) | none | terms |
| 8 | Privacy | **hidden** (footer link only) | none | privacy |

- **Order:** drag in Pages until the menu reads Home · About · Services & Trips · Gallery · Reviews · Contact.
- **Not built:** the thank-you pages (each form's confirmation message replaces them) and the 404 page (Google shows its own).
- **Navigation:** Settings > **Navigation** > Mode: **Top** (support.google.com/sites/answer/6372865).
- **Check:** does clicking "Services & Trips" open its page, or only the drop-down? (check in the editor) Either way is fine, because buttons reach both pages.
- **Hidden isn't private.** The Trip template is published and reachable by its address, and possibly through the site search (check in the editor). That's acceptable: it's labelled "Sample trip" and its buttons go to the real booking form.

**Delete the page header on every page:** point to the header > **Delete** (trash icon) (support.google.com/sites/answer/98216).

- Each page starts with a normal S1 section whose first text box is in **Title** style.
- Why: the design has no banner photos, a "Title only" header is always white, and buttons can't sit in a header (check in the editor).
- New pages may copy the previous page's header. Delete it on each page (check in the editor).
- Check there's no leftover gap at the top (check in the editor).

---

## Step 6. How to build any section (recipes)

| Job | How |
|---|---|
| **Section colour** | Point to the section > **Background** (left edge) > Style 1 (Cream), 2 (Sunshine) or 3 (Dark). **No image backgrounds**: "adjust for readability" changes the photo and text by itself. |
| **Text box** | Insert > Text box. Choose its style from the toolbar drop-down: Title, Heading, Subheading, Normal text or Small text. Bold with **B** where noted. Nothing else. |
| **Columns** | Drag items side by side. Drop an item on the **top or bottom half** of another to stack them into one column (a vertical group). That's how photo + heading + text + button become one column. |
| **Layouts** | Insert > **Layouts** (content blocks) gives ready-made picture-and-text or 3-column sections. Fill each "+" box. **Delete any empty "+" box before publishing.** It's unconfirmed whether empty ones show on the live site (check in the editor), and the no-fake rule applies anyway. |
| **Image** | Insert > **Images** > Upload. Only .png, .jpg and .gif are accepted, and you can pick several at once. Drag a corner dot to resize, or use **Crop**. |
| **Alt text** | Click the image > More (three dots) > **Add alt text**. Paste it from `images/INDEX.md`. Decorative icons get empty alt text if Sites allows it (check in the editor); otherwise use the heading beside them. |
| **Button** | Insert > **Button** > Name > in the link box, **choose a page from the list** (or paste the form link, Step 8.4) > Insert. Then click it > the down arrow > **Filled** (main action), **Outlined** (second action) or **Text** (minor). |
| **Text link to a page** | Select the words > Link (Ctrl+K) > choose the page under "This site". |
| **Email link** | Select **milena@onyxworldtravel.com** > Link > type `mailto:milena@onyxworldtravel.com` > Apply. On the live site it opens a new email, sometimes in a new tab. That's fine. |
| **Phone number** | Plain text: "(914) 559-8159". Not underlined, not in the link colour, never a link. |
| **FAQ item** | Insert > **Collapsible text**. Type the question in the heading box and the answer in the body. One group per question. Groups can't be stacked into a column, so place them one under the other. |
| **Repeat an item** | Point to the section > left edge > **Duplicate section**, then type over the copy. Each trip row, review and gallery row is **its own section** for this reason. Milena adds things exactly this way. Where the copy lands (right below the original, or at the bottom of the page) and whether a section can be dragged: check in the editor, and correct Milena's guide (sections 6, 10, 11) to match. |

**Picture sizes**

- The step badges and "Why" icons are 240x240. Shrink them to about **80-100 px** wide. Check in Preview > phone that they stay small (check in the editor).
- Tall portraits (About, Contact): check in Preview that Milena's face isn't cropped.
- Sites stores images at up to about 1600 px (LIKELY, from a Sites community answer). Every kit photo already fits.

---

## Step 7. The footer (one footer for every page)

Point to the bottom of any page > **Add footer** (support.google.com/sites/answer/98216). Then point to it > **Background** > **S3 Dark**.

Text: **Footer** block.

| Column | Content |
|---|---|
| 1 | The light logo `logo-onyx-world-travel-light-for-dark-backgrounds.png` (alt: Onyx World Travel), only if the footer takes images (check in the editor). Subheading "Just bring your passport." Normal: the Kentucky line. |
| 2 | Subheading "Get in touch". Plain text "Call (914) 559-8159". Email link "milena@onyxworldtravel.com". Text link "Send me a message" → Contact. |
| 3 | Subheading "Explore". Text links, each picked from the list: Home, About, Services & Trips, Gallery, Reviews, Contact. |
| Bottom line | Small "© 2026 Onyx World Travel." Text links "Terms & conditions" → Terms & conditions, "Privacy" → Privacy. Small "[TO FILL: Legal business name and any seller-of-travel registration numbers]". |

- The year is typed by hand. Milena changes it each January (it's in her guide).
- Deleting footer content deletes it from every page. To hide the footer on one page, use **Hide** (bottom left of the footer).

---

## Step 8. The three Google Forms (in Milena's account, [her Gmail address])

Build them **before** the pages that embed them. The questions, word for word, are in `3-forms-and-buttons.md`, part 1. Summary:

| Form | Embedded on | Text |
|---|---|---|
| **A. Message for Milena** | Contact | 3-forms part 1, Form A |
| **B. Custom trip idea** | Plan a custom trip | 3-forms part 1, Form B |
| **C. Trip booking and waitlist** | Trip template and every trip page; its link also goes on the "Save my spot" buttons | 3-forms part 1, Form C |

**8.1 Settings for all three.** Anything that forces visitors to sign in to Google must be off.

| Setting | Value |
|---|---|
| Quiz | Off |
| Question types | Short answer, Paragraph, Multiple choice and Dropdown only. **Never File upload** (it forces sign-in). |
| Settings > Responses > Collect email addresses | **Do not collect.** The form has its own optional "Email" question. **Never "Verified"** (it forces sign-in). |
| Settings > Responses > Send responders a copy of their response | Off (it only works with email collection on) |
| Allow response editing | Off |
| Limit to 1 response | Off |
| Settings > Presentation > Disable auto-save for all respondents | On. It may matter for sign-in (check in the editor), and it does no harm. |
| Settings > Presentation > **View results summary** | **Off.** If it's on, every visitor can see a summary of everyone's answers, names and phone numbers included (support.google.com/docs/answer/2839588). |
| Show link to submit another response | Off (label: check in the editor) |
| Confirmation message | Settings > Presentation > Confirmation message > Edit. Paste that form's message (3-forms part 1; the same words are in 2-text-to-paste.md, part 12). It replaces the thank-you pages. Each message contains **[TO FILL: how fast Milena replies, e.g. within a day]**: before launch Milena answers it, or the placeholder is cut (3-forms 1.4). |
| Email question | Short answer > More > Response validation > Text > **Email address**. **Not** required. Check that a blank answer is accepted (check in the editor). |
| Look | Optional: Theme (palette icon) colour #f2603f, or the nearest offered. No header image. |
| Add-ons | None |
| Close date, response limit | None. "Accepting responses" stays on. A limit or close date would silently stop new messages. |
| **Publish** | Click **Publish** (top right) > who can respond: **Anyone with the link** (exact screens in 3-forms 1.3). An unpublished form takes no answers, even when embedded, and a restricted one asks visitors to sign in (support.google.com/docs/answer/2839588). |

**8.2 Form C's trip list.** "Which trip?" is a **Dropdown**.

- Add one choice per real trip: "[Trip name], [Dates]".
- The last choice is always **"A different trip, or I'm not sure yet"**.
- With no real trip at launch, that last choice is the only one.
- When a trip sells out, Milena renames its choice to add "(sold out: join the waitlist)". The waitlist is this same form.

**8.3 Notifications: Milena at the keyboard (Sitting 2), signed in as [her Gmail address].** In each form:

1. **Responses** tab > More (three dots).
2. **Get email notifications for new responses**. A tick shows it's on.

- Only the account that clicks it gets the emails, so you can't do this for her (support.google.com/docs/answer/139706). The alerts go to her Gmail, **[her Gmail address]**, not to milena@onyxworldtravel.com (LIKELY: Google's help doesn't name the recipient, but several guides agree). If she wants them in her business inbox too, do 8.3a. If you switch it on in your own account as well, you get your own copy (optional).
- The email probably doesn't contain the answers (check in the editor). It links to them. Replying to it doesn't reach the visitor. She reads the answers in Google Forms (signed in as [her Gmail address]) and writes to the traveler from milena@onyxworldtravel.com, never from her Gmail, so travelers only ever see her business address.
- **Google's "Contact form owner" link.** Every form has Google's own **Help and feedback > Contact form owner** at the bottom, and no setting to turn it off was found. A visitor's message sent that way probably arrives by email in her Gmail, with the visitor's name and email (LIKELY). Its sender and Reply-To are UNVERIFIED. If she pressed Reply in Gmail, the traveler would see [her Gmail address], so she answers these from milena@onyxworldtravel.com too, in a new email. At Sitting 2, signed in as yourself, send one such message and note where it lands, its sender and Reply-To, and whether the 8.3a filter forwards it (3-forms part 3, Step 3).

**8.3a Optional: forward the alerts to her business inbox (Sitting 2, Milena at the keyboard)**

Ask her which inbox she checks every day. If it's her Gmail, skip this. If it's milena@onyxworldtravel.com, Gmail can send a copy of each alert there, for free. Do it **on a computer**: Google gives no steps for the phone app (support.google.com/mail/answer/10957). The same steps are in 3-forms 1.5a.

**Order:** 8.3 first > one test (3-forms part 3, Step 3), so a real alert is in her Gmail > A and B below > a second test. A new filter only acts on **new** emails, so alerts that came before it are never forwarded.

**A. Add the forwarding address** (in Gmail, signed in as [her Gmail address]):

1. Settings (gear, top right) > **See all settings** > **Forwarding and POP/IMAP** tab (sometimes just "Forwarding").
2. **Add a forwarding address** > `milena@onyxworldtravel.com` > **Next** > **Proceed** > **OK**.
3. Google sends a confirmation email to milena@onyxworldtravel.com. Milena opens her business inbox (Junk too) and clicks the confirmation link in it. If Gmail shows a box asking for a confirmation code instead, she types the code from that same email (check in the editor).
4. Back in Gmail, refresh the page.
5. **Leave "Disable forwarding" selected.** Never choose "Forward a copy of incoming mail to": that sends **all** her personal Gmail to her business inbox. Only the filter below forwards, and only the alerts.

**B. The filter.** Build it from the real test alert, so it doesn't rely on a sender address the research couldn't confirm.

1. In Gmail, tick the box next to the test alert > **More** (three dots) > **Filter messages like these** (support.google.com/mail/answer/6579).
2. The **From** box shows the alert's sender (probably `forms-receipts-noreply@google.com`; UNVERIFIED). Write down the real sender and subject line (Appendix A item 12).
   - No real alert yet? Search box > **Show search options** > From: that sender > **Search**, and check it finds only Google Forms alerts.
3. **Create filter** > tick **Forward it** > choose milena@onyxworldtravel.com (the label may read "Forward it to"; check in the editor).
4. In the same filter, also tick **Never send it to Spam**, and optionally **Categorize as: Primary**, so the alert stays easy to find in her Gmail (check in the editor).
5. **Create filter**.
6. Send the second test. The alert must arrive in **both** inboxes. At GoDaddy, look in **Junk** the first time and mark it not junk.

- Gmail keeps its own copy. She still reads the answers in Google Forms, signed in as [her Gmail address].
- Gmail doesn't forward what lands in its Spam (LIKELY also true for filters). That's what "Never send it to Spam" is for.
- For the first week, Gmail shows a note saying she's forwarding some of her email. That's expected; tell her. If she ever sees a forwarding note nobody set up, she changes her Google password right away and calls you, and that forwarding is turned off (answer/10957). Her guide says the same.
- If her business email ever changes, the new address has to be added and confirmed again, and the filter pointed at it.

**8.4 The booking form's link** (for the "Save my spot" buttons)

1. In Form C, once it's published: **Published** (top right) > **Copy responder link**. Tick **Shorten URL** if it's offered, for the short `forms.gle/...` version (support.google.com/docs/answer/2839588; 3-forms 1.8).
2. Paste it into the button's link box.

It opens the form full screen in a new tab. Every trip page uses the same link, so duplicating the template keeps it right.

**8.5 Embedding a form on a page**

1. In the Sites editor: Insert > **Forms** (bottom of the Insert panel) > choose the form > Insert (support.google.com/sites/answer/90569).
2. Drag the box's handles until the **whole form** shows without an inner scroll bar on a computer.
3. Then Preview > phone, and make it taller if needed. The box can't resize itself.

- If Insert > Forms doesn't list Milena's forms while you're signed in as yourself (check in the editor): Insert > **Embed** > **By URL** > paste the form's responder link. That's a web address, not code.
- After Submit, the confirmation message shows **inside** the box.

---

## Step 9. Page by page

Build in this order. Columns in the tables:

- **#**: the section number, top to bottom.
- **Style**: S1, S2 or S3 (Step 3).
- **Build**: Step 6 recipes.
- **Text**: the block name in `2-text-to-paste.md`.
- **Image**: the file in `images/`, with alt text from `images/INDEX.md`.

Buttons say **→ page** for a page picked from the list.

### 9.1 Home

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Hero | S1 | 2 columns. **Left**, one group: Small text eyebrow; **Title** headline; Normal lead; then two buttons: **Filled "See upcoming trips" → Services & Trips** and **Outlined "Plan a custom trip" → Plan a custom trip**. **Right**: the postcard, sized to the column. | Home 1 | home-1-postcard.png |
| 2 | How it works | S2 | Heading, then 3 columns. Each column: step badge (small), Subheading, Normal. | Home 2 | home-how-it-works-step-1/2/3.png |
| 3a | Where are we going next? | S1 | Heading + Normal. | Home 3a | none |
| 3b | Trip row (**one section per trip**) | S1 | 2 columns. Left: trip photo. Right group: **Subheading** trip name (plain, not a link); **bold Small** "Spots open"; Normal destination · dates; Normal price; **Outlined button "See the trip" → that trip's page**. | Home 3b | sample-trip-1-ancient-theater.jpg |
| 3c | More trips | S1 | Subheading "More trips are on the way" + Normal, with "Get in touch" linked → Contact. Under it: **Filled "See all trips and services" → Services & Trips**. | Home 3c | none |
| 4 | Why travel with me | S2 | Heading, then 3 columns: icon (small), Subheading, Normal. | Home 4 | home-why-icon-1/2/3-*.png |
| 5 | Ten-plus years | S1 | 2 columns. Photo left. Right: Heading, Normal, text link "Read my story" → About. | Home 5 | home-2-friends.jpg |
| 6 | What my travelers say | S2 | Heading, then 3 columns. Each: Subheading quote in curly quotes “…”; **bold Small** name; Small text link "Read the full review" → Reviews. Under them: **Filled "Read more reviews" → Reviews**. | Home 6 | none |
| 7 | Got a place in mind? | S3 | 2 columns. Left: Heading + Normal. Right: **Filled "Plan a custom trip" → Plan a custom trip** (coral on dark). | Home 7 | none |

- The postcard goes on **S1 Cream only**. Its pale sun fades on Sunshine.
- Check the postcard's see-through background shows cream, not white or grey (check in the editor). The same check applies to the badges and icons.
- **Launch rule for 3b:**
  - During the build, "See the trip" may point to the hidden Trip template.
  - **Before launch it must point to a real trip page.**
  - With no real trip, **delete section 3b** and keep 3c. The same rule applies on Services & Trips.
  - With no trip row left, also switch section 3a to the demo's own no-trip words: "I get asked this a lot. **The next one is in the works.**" instead of "Here's the answer." On Services & Trips, 3a becomes "Where are we going next? **The next trip is in the works.**" (2-text-to-paste.md, part 13, "When there are no upcoming trips"). Otherwise the page promises trips that aren't there.
- Home's review links go to the Reviews page itself. Sites can't jump to one review.

### 9.2 Services & Trips

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Top | S1 | **Title** "Services & Upcoming Trips" + Normal intro. | Services 1 | none |
| 2 | Two ways | S2 | 2 columns. Left: Subheading "Upcoming Trips" + Normal. **No button**: the trips are right below. Right: Subheading "Custom Trip Planner" + Normal + the [TO FILL] fee line + **Outlined "Plan a custom trip" → Plan a custom trip**. | Services 2 | none |
| 3a | Upcoming Trips | S1 | Heading + Normal. | Services 3a | none |
| 3b | Trip row (one per trip) | S1 | Build it like Home 3b: copy and paste Home's row, or build it again. | Services 3b | trip photo |
| 3c | Don't see what you want? | S1 | Subheading + Normal + **Text-style button "Plan a custom trip" → Plan a custom trip**. | Services 3c | none |
| 4 | What "everything" includes | S2 | Heading + Normal + bulleted list. | Services 4 | none |

- The trip list comes straight after the intro, because every "See upcoming trips" button lands here.
- Copying a section between pages: select its items, Ctrl+C, then Ctrl+V on the other page (check in the editor). Otherwise rebuild it.

### 9.3 Plan a custom trip (sub-page, in the menu drop-down)

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Top | S1 | **Title** "Custom Trip Planner" + Normal intro. | Custom 1 | none |
| 2 | Steps | S2 | 3 columns: step badge, Subheading, Normal. Step 3 keeps its [TO FILL]. | Custom 2 | home-how-it-works-step-1/2/3.png |
| 3 | The form | S1 | Heading "Tell me about your dream trip". **Insert > Forms > Custom trip idea**, tall. Normal "Rather talk? Call me at (914) 559-8159" (plain text). | Custom 3 | none |

### 9.4 Trip template (hidden sub-page)

Milena duplicates this page for every new trip. Keep every [TO FILL] exactly as written: on each copy, they show her what to change.

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Top | S1 | 2 columns. **Left** group: Small text link "All upcoming trips" → Services & Trips; **Title** "[TO FILL: Trip name]"; **bold Small** "Spots open · Milena is coming on this trip · Sample trip"; Normal teaser; **Filled "Save my spot" → Form C link** (Step 8.4). **Right**: trip photo. | Trip 1 | sample-trip-1-ancient-theater.jpg |
| 2 | Quick facts | S2 | Heading + **one** text box, one fact per line with the label in bold (Where … Book by). Then **Filled "Save my spot" → Form C link**. | Trip 2 | none |
| 3 | Why and days | S1 | **One text box:** Heading "Why I picked this trip", Normal; Heading "Day by day"; then for each day a **Subheading** "Day 1: …" and a Normal line. A new day is just new lines in the same box. | Trip 3 | none |
| 4 | Included / not | S2 | 2 columns, each a Heading + bulleted list. Plain bullets: the design's tick and cross icons can't be made. Always keep "Milena, along for the whole trip". | Trip 4 | none |
| 5 | Before you go + FAQ | S1 | Heading "Before you go" + Normal. Heading "Questions about this trip", then **one Collapsible text group per question**. | Trip 5 | none |
| 6 | Save my spot | S2 | Heading "Save my spot". Normal "Booking for Mom or Dad? Call me at (914) 559-8159, …" (plain number). Bold Normal "Trip: [TO FILL: Trip name] · [TO FILL: Dates…]". Normal: In the form, choose this trip under "Which trip?". **Insert > Forms > Trip booking and waitlist**, tall. Normal "Rather talk? Call me at (914) 559-8159". Normal "No payment yet. …". | Trip 6 | none |

- Collapsible groups should start closed on the live page (check in the editor, in Preview).
- **A real trip at launch?** Don't fill in the template.
  1. Pages > Trip template > More > **Duplicate page**. The copy's name, position and hidden state: check in the editor.
  2. On the copy: More > Properties: name (e.g. "Greece 2027") and path (e.g. `greece-2027`).
  3. Make sure the copy is hidden.
  4. Fill it in, swap the photo, and delete "Sample trip" from the labels line.
  5. Add the trip to Form C's drop-down (Step 8.2).
  6. Point the trip rows on Home and Services & Trips at the copy.
- The sold-out and finished-trip versions are only text edits. They're in `4-milena-guide.md`, and the words are in 2-text-to-paste.md, part 13.

### 9.5 About

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Hi, I'm Milena! | S1 | 2 columns. Photo left. Right: **Title** + Normal. | About 1 | about-1-milena.jpg |
| 2 | Her story | S1 | One text box: Headings ("How this started", "Why I come along", "Who I travel with", "Where I'm based", "A little more about me") and Normal paragraphs, with the two [TO FILL] lines. Then **Filled "See upcoming trips" → Services & Trips** and **Outlined "Plan a custom trip" → Plan a custom trip**. | About 2 | none |
| 3 | Milena at a glance | S2 | Subheading + one text box, one fact per line with the label in bold. "Call or text: (914) 559-8159" is plain text. "milena@onyxworldtravel.com" is an email link. | About 3 | none |

### 9.6 Gallery

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Top | S1 | **Title** "Gallery" + Normal "Snapshots from our trips together." Don't add "Tap or click any photo to see it bigger": Sites can't enlarge photos. | Gallery 1 | none |
| 2-7 | Photo rows | S1 | **Six sections, one per row of 3 photos.** Each column: photo (no link) + **Small** caption under it. Build row 1 (Insert > Layouts with 3 picture + text columns, or by hand), then **Duplicate section** for rows 2-6 and replace the photos and captions. | Gallery 2 to 7 (one block per row; captions word for word, including the "[TO FILL: place, maybe …?]" guesses) | `images/gallery-grid-4x3/`, rows 01-03, 04-06, 07-09, 10-12, 13-15, 16-18 (`gallery-01-painted-steps-4x3.jpg` … `gallery-18-glacier-lake-4x3.jpg`) |

- Newest first, in file-number order.
- **Use the 4:3 copies:** `images/gallery-grid-4x3/` holds the 18 photos already cut to 4:3 (1200x900), so every row lines up without cropping in Sites. The uncut originals stay in `images/` as spares. Alt text and captions: `images/INDEX.md`.
- No image carousel. It shows one photo at a time and crops mixed shapes unpredictably.

### 9.7 Reviews

| # | Section | Style | Build | Text |
|---|---|---|---|---|
| 1 | Top | S1 | **Title** "What my travelers say" + Normal intro. | Reviews 1 |
| 2 | Father Peter | S2 | **Subheading** highlight in curly quotes “…”, the full review as Normal paragraphs, **bold Small** "Father Peter". | Reviews 2 |
| 3 | Kellie G. | S1 | Duplicate section 2, set it to S1, and replace the words. | Reviews 3 |
| 4 | Haley E. | S2 | Duplicate again and replace the words. | Reviews 4 |
| 5 | Traveled with me before? | S1 | Subheading + Normal, with "Send me a note" linked → Contact. | Reviews 5 |

- Reviews show in full, with no "read more".

### 9.8 Contact

| # | Section | Style | Build | Text | Image |
|---|---|---|---|---|---|
| 1 | Get in touch | S1 | 2 columns. Photo left. Right: **Title** + Normal. | Contact 1 | contact-1-milena.jpg |
| 2 | Call / Email | S2 | 2 columns. Left: Subheading "Call me"; **Heading-style plain text** "(914) 559-8159"; Normal reply-time line with its [TO FILL]. Right: Subheading "Email me"; **Heading-style email link** "milena@onyxworldtravel.com"; Normal "Based in Kentucky. …". | Contact 2 | none |
| 3 | Form | S1 | Heading "Send me a message". **Insert > Forms > Message for Milena**, tall. Normal "Rather talk? Call me at (914) 559-8159". | Contact 3 | none |

- In Preview > phone, check the Heading-size email address doesn't overflow. If it does, set that one box to Subheading.

### 9.9 Terms & conditions, Privacy (hidden; footer links only)

| Page | Style | Build | Text |
|---|---|---|---|
| Terms & conditions | S1 | **Title**, Normal [TO FILL] paragraph, Normal "This page will cover, in plain English:", bulleted list. | Terms 1 |
| Privacy | S1 | Same build. | Privacy 1 |

- Don't draft legal text. When the privacy text is written, it must say that the forms are Google Forms and that answers are stored in Milena's Google account.

---

## Step 10. Preview and the [TO FILL] sweep

1. **Preview** (eye icon, top) > the phone, tablet and computer buttons at the bottom right > Exit (support.google.com/sites/answer/6372880). The large-screen view needs a wide window.
2. On every page, press **Ctrl+F** and search for `TO FILL`. Sites has no yellow highlight like the demo, so this is the only way to find them.
3. **Nothing [TO FILL] goes public.** Before launch, each one is answered by Milena or its line is deleted. The one exception is the hidden **Trip template**: its [TO FILL] lines stay on purpose, because they show Milena what to fill in on each copy. It's labelled "Sample trip", and at launch nothing links to it (plan 3.1 accepts this). The decisions:
   - **No real trip yet:** delete trip rows 3b on Home and on Services & Trips, and switch both 3a sentences to the no-trip words (Step 9.1, launch rule).
   - **Terms and Privacy:** need the real text from Milena, or a professional. Don't draft it. If it isn't ready at launch, Xavier and Milena decide: wait, or delete both pages **and** their two footer links until the text exists (a footer link to a page of blanks is a fake link).
   - **The reply-time line:** appears on Contact and in all three confirmation messages. Without an answer, cut the placeholder so the sentence still reads (3-forms 1.4). On Contact, the line "I usually get back to people [TO FILL: …]." is then deleted.
   - **Gallery place guesses:** Milena confirms each place, or the place is cut from that caption ("What it is · Year").
   - **Everything else** (her two "A little more about me" lines, the planning-fee line, the "What everything includes" list, "Does Milena come along on custom trips too?", the legal name in the footer): her answer, or the line is deleted. A heading left with nothing under it goes too ("A little more about me" on About). If the "What everything includes" list ends up empty, delete that whole section (Services 4).
4. No empty "+" boxes are left. Every photo and the postcard have alt text.

---

## Step 11. Publish (still restricted)

1. **Publish** (top right) > Web address: `sites.google.com/view/` + **[TO FILL: site address name, e.g. onyxworldtravel if free]** > Publish. Never use her Gmail username ([her Gmail username]) in this address.
2. Open the address on a computer and a phone.
3. Share > Published site stays **Restricted** while any [TO FILL] text is visible on a page visitors can reach (the hidden Trip template excepted, Step 10). Only you and Milena can open it.
4. Every later change goes live only after **Publish** again.
5. **Form tests while restricted:** a signed-out window can't open a restricted site. So test each form now by opening its **responder link** in a private window (3-forms part 3). Repeat on the live pages after Step 12.

---

## Step 12. Launch: connect onyxworldtravel.com (Sitting 2)

The domain and email stay at GoDaddy. Google Sites can only use an address **with a subdomain**, so the site lives at **www.onyxworldtravel.com**. GoDaddy forwards the bare onyxworldtravel.com there (support.google.com/sites/answer/9068867).

**Sitting 2 checklist (Milena at the keyboard):**

- [ ] Notifications on in all three forms, signed in as [her Gmail address] (8.3)
- [ ] Ask which inbox she checks daily. If it's milena@onyxworldtravel.com: Gmail forwarding and filter, then a test (8.3a, optional)
- [ ] Form tests with her (3-forms part 3, Round 2): one per form, her reply from milena@onyxworldtravel.com, and one "Contact form owner" message (8.3)
- [ ] Search Console verified (12.3), if not done in Sitting 1
- [ ] Published site Public, search engines allowed, Publish (12.5)
- [ ] Custom domain connected, Publish (12.6)
- [ ] Hand-over (Step 14)

**Only three DNS changes, ever:**

1. **Edit** the `www` CNAME.
2. **Add** one TXT.
3. **Add** forwarding for the bare domain (it rewrites the `@` A record).

Nothing else on the DNS page is touched.

### 12.0 Your GoDaddy access (Sitting 1; no password sharing)

1. Make your own free GoDaddy account.
2. Milena: GoDaddy > **Delegate Access** > "People who can access my account" > **Invite to Access** > your name and email.
   - Level: **Products & Domains**, needed if the Coming Soon site has to be unpublished. Otherwise **Domains Only**.
3. Accept within **48-72 hours**, or the invite expires.
4. Milena: Domain Portfolio > Edit Folder: **Management Access on**, **Transfer Access off** (godaddy.com/help/invite-a-delegate-to-access-my-godaddy-account-12376, /delegate-access-levels-of-permission-12374, /grant-delegate-access-to-domains-32180).

**Domain Protection** may ask for a one-time code when DNS is edited. It goes to the account's email or 2-step app. Who gets it when a delegate edits is unconfirmed (check in the editor), so keep Milena reachable during the DNS session.

### 12.1 Before touching anything

GoDaddy > Domain Portfolio > onyxworldtravel.com > **DNS**:

1. **Actions > Export Zone File** (godaddy.com/help/export-my-domains-zone-file-records-4166). Also take a full screenshot of the record list.
2. **Nameservers** must be GoDaddy's. If they aren't, **stop and ask**: the forwarding step would move them and could wipe her email records.
3. **CAA record:**
   - None is fine.
   - If one exists, it must allow `letsencrypt.org`, and probably `pki.goog` too (check in the editor). Otherwise the HTTPS certificate fails.
4. **Leave these alone for good.** They run her email:
   - all **MX** records
   - the **SPF** TXT (`v=spf1 …`; there can be only one)
   - any `_dmarc` TXT
   - DKIM records (e.g. `selector1/selector2._domainkey`)
   - email CNAMEs (`autodiscover`, `email`, `msoid`, `lyncdiscover`, `sip`)
   - SRV records
   - NS/SOA
   - `_domainconnect`

   Her mail product decides the exact list (Microsoft 365 from GoDaddy or Professional Email: check in the editor). GoDaddy's Email & Office dashboard shows the records it needs (godaddy.com/help/what-are-my-dns-settings-for-microsoft-365-42241).
5. **Domain auto-renew:** on. If the domain lapses, the site and the email both stop.

### 12.2 The Coming Soon page (GoDaddy Airo)

- GoDaddy has no help article on detaching its free Coming Soon page (check in the editor). It most likely sits on the `@` A record (labelled with a product name) and/or the `www` CNAME.
- **12.4 and 12.7 replace both records**, which should displace it without deleting anything (check in the editor).
- If GoDaddy refuses an edit, or warns that a record belongs to a website:
  - My Products > that Coming Soon website > **unpublish or delete that website only** (godaddy.com/help/delete-a-website-from-my-godaddy-account-41294).
  - Or call GoDaddy: 1-480-366-3549.
- **Never** click anything that offers "Cancel Domain". Never touch the email product (godaddy.com/help/delete-products-in-my-godaddy-account-7468).

### 12.3 Verify the domain in Search Console (Sitting 1 or 2, Milena at the keyboard)

You can do this days ahead: it changes nothing visible, and verification can take a while.

1. Signed in as **Milena ([her Gmail address])**: **search.google.com/search-console** > Add property > **Domain** (not URL prefix) > `onyxworldtravel.com` > Continue. If she already sees other properties from past use, that's harmless: add this one as a new Domain property.
2. Use the "Any DNS provider" instructions and copy the TXT value `google-site-verification=…`. If a GoDaddy "Start verification" button appears instead, it's optional (check in the editor). The manual TXT always works.
3. GoDaddy > DNS > **Add New Record**:
   - Type: **TXT**
   - Name: **@**
   - Value: the string from step 2
   - TTL: default
   - **Save** (godaddy.com/help/add-a-txt-record-19232)

   This is a **new** record. The SPF TXT stays as it is.
4. Back in Search Console > **Verify**. If it fails, wait a day and retry. It can take 2-3 days (support.google.com/webmasters/answer/9008080).
5. **Never delete this TXT.** Without it, the domain loses verification.

- The token belongs to Milena's account ([her Gmail address]). Your own verification wouldn't count. Whether a delegated Search Console owner would satisfy Sites is unconfirmed (check in the editor), so she stays the verified owner.

### 12.4 Point www at Google (GoDaddy)

DNS > the existing **CNAME `www`** (GoDaddy's default value is `@`) > **Edit** > Value: **`ghs.googlehosted.com`** > Save. Leave the TTL at the default (godaddy.com/help/edit-a-cname-record-19237).

- **Edit** the record. Don't add a second one: GoDaddy refuses a duplicate name.
- If `www` is an **A** record instead: delete it, then Add New Record > CNAME > Name `www` > Value `ghs.googlehosted.com`.
- Type the value without a trailing dot and check that it saves (check in the editor).
- The value comes from Google's page "Map a new URL to a site in Google Sites" (knowledge.workspace.google.com/admin/getting-started/map-a-new-url-to-a-site-in-google-sites).

### 12.5 Go public (Milena at the keyboard, once nothing [TO FILL] is visible outside the hidden Trip template)

1. Share > **Published site: Public** > Done. The custom domain requires it: otherwise visitors are redirected to the sites.google.com address.
2. Publish (drop-down arrow) > **Publish settings** > **untick** "Request public search engines to not display my site".
3. **Publish**.

### 12.6 Connect the domain in Sites (Milena at the keyboard)

Only the owner ([her Gmail address]) sees this setting.

1. Open the site > Settings (gear) > **Custom domains** > **Start setup**.
2. Type **`www.onyxworldtravel.com`**.
3. If asked to verify ownership: 12.3 already did. Type the domain again and look for the check mark.
4. **Next** > **Done** > **Publish** again.

- It takes up to 48 hours, usually less.
- HTTPS on www is automatic and free (check in the editor for personal accounts).

### 12.7 Forward the bare domain (GoDaddy, last, once www works)

DNS > **Forwarding** > **Add Forwarding** > **Domain** > `https://` > `www.onyxworldtravel.com` > **Permanent (301)** > Save (godaddy.com/help/forward-my-godaddy-domain-12123).

- **Not** "Forward with masking". It can show a blank white page.
- Forwarding locks the `@` A record. To change it later, delete the forwarding first.
- **Ignore** GoDaddy's "related step" about pointing the www CNAME back to `@`. It would undo 12.4.
- GoDaddy says HTTPS forwarding is now automatic. Test https://onyxworldtravel.com (check in the editor). If it fails, delete the forward and add it again.
- Every path probably lands on the home page (onyxworldtravel.com/contact too). That's minor.

### 12.8 Check it (allow up to 48 hours)

In a private window **and** on a phone, all of these must end on the site with the padlock:

- https://www.onyxworldtravel.com
- http://www.onyxworldtravel.com
- https://onyxworldtravel.com
- http://onyxworldtravel.com

| Error in Sites | What to do |
|---|---|
| Invalid DNS | The CNAME isn't live yet. Wait 24-48 h. |
| Missing certificate | Sites > Custom domains > trash icon > Delete, then add it again. |
| Already in use by another Google service | Remove that other mapping first. |

**Email check:**

1. Compare the DNS page with the 12.1 export. Only the three changes should differ.
2. Send a message from an outside address to milena@onyxworldtravel.com.
3. Have her reply. Both must arrive.

**Optional:** Search Console > URL Inspection > `https://www.onyxworldtravel.com/` > **Request indexing**.

---

## Step 13. Test everything

Run **part 3 of `3-forms-and-buttons.md`** on a computer **and** a phone. Tick only what lands in the right place. Anything that doesn't is fixed or deleted. In short:

1. **Menu and footer:** every menu item, the drop-down item "Plan a custom trip", and the logo. The footer email link, "Send me a message", the Explore links, Terms and Privacy.
2. **Every button and text link, page by page**, as listed in 3-forms part 2.
3. **Every form,** in a **private window, signed out**, on the live pages:
   - no sign-in is asked for
   - it submits with only the required answers and Email left blank
   - a bad email is refused
   - the confirmation message shows
   - the notification reaches her Gmail, [her Gmail address] (check Spam the first time and mark it "Not spam"). Note which Gmail tab or folder it lands in (Primary, Updates, Promotions or Spam; UNVERIFIED) and tell her where to look. If 8.3a was done, a copy also reaches milena@onyxworldtravel.com (check Junk there too)
   - neither the form nor its confirmation page shows "[her Gmail username]" anywhere (LIKELY; check in the editor)
   - the answer shows under Responses > Individual

   Delete the test responses afterwards.
4. **Trip pages:** both "Save my spot" buttons open Form C.
5. **Phone numbers:** plain text everywhere. On an iPhone, note whether tapping offers to call. That's a bonus, not a requirement.
6. **Ctrl+F `TO FILL`** on every live page finds nothing, except on the hidden Trip template (Step 10). Also check the three confirmation messages and Form C's trip list.
7. **Domain:** the four addresses in 12.8.
8. **Her Gmail stays private:** signed out, in a private window on www.onyxworldtravel.com, open the round **(i)** badge (and Page details, if shown). Nothing in it shows "[her Gmail username]" or her Google account name. **Ctrl+F `[her Gmail username]`** on every live page finds nothing (LIKELY; check in the editor). If it shows up anywhere, set Published site back to **Restricted** (Share) and decide with Milena what to do.

**Optional Call-button test** (keep it only if every point passes):

1. Insert > Button > link `tel:+19145598159` > Publish.
2. The link must stay exactly `tel:…`, not `http://tel:…`.
3. A real iPhone **and** a real Android must both offer to call (914) 559-8159.

If it passes, one "Call (914) 559-8159" button may go on the Contact page beside the plain number, and nowhere else. Then add it to the phone list in `4-milena-guide.md` section 12 (click the button > Edit > change the number in the link too), and to the tick sheet in 3-forms part 3. If anything fails, delete it. Test an email **button** the same way if you want one. Text links are the default.

---

## Step 14. Hand-over

1. **Name the safe point:** More (three dots, top right) > **Version history** > the current version > More > **Rename** > "Launched" (support.google.com/sites/answer/9622187).
2. **Spare copy (optional):** More > **Make a copy** > Entire site. Name it "Onyx World Travel SPARE, do not edit" so Milena never opens the wrong one.
3. **Her guide:**
   - Fix any button or menu name in `4-milena-guide.md` that differed in the real editor.
   - Add screenshots of a finished trip row and a review section.
   - If you didn't set up forwarding (8.3a), delete the "if Xavier set up forwarding" sentences in her guide (Keep this handy, sections 12 and 13; search it for "forwarding" to find them all). Keep the warning about a forwarding note nobody set up (section 13, Part A).
   - Give it to her with a copy of the `kit` folder, her spare copy of all the words and photos.
4. **15 minutes together, at her computer, signed in as herself ([her Gmail address]):**
   - Show her how to check the account picture at the top right before she edits: it must be [her Gmail address].
   - Change one word, Preview, Publish, change it back and Publish again.
   - Duplicate a review section, then delete it.
   - Open Version history and press **Back**.
   - Open one form's Responses > Individual.
   - Show her where the alerts arrive: her Gmail (the tab or folder you noted in Step 13), plus her business inbox if 8.3a was done. Remind her that she answers travelers from milena@onyxworldtravel.com, never from her Gmail, and never by replying to Google's alert or to a "Contact form owner" email.
   - Remind her what to ignore: Gemini and sparkle icons, Themes, Insert > Embed, Workspace offers, offers to buy storage, the search icon and the (i) badge. A "storage almost full" warning is different: she clears Gmail's Trash and Spam or calls you (Step 0.4).
5. **Access, her choice:**
   - **Sites:** Share > Settings > untick "Editors can publish, change permissions, and add new people". Keep you as Editor for emergencies, or remove you.
   - **Forms:** same choice for each form.
   - **Search Console:** she stays the verified owner. Settings > Users and permissions > add you as **Full user** only if you want reports.
   - **GoDaddy:** Delegate Access > Edit next to your name > **Delete**.
6. **Backups she already has:** Version history; the spare copy; Google Takeout, which includes Sites and Forms (an archive only, with no re-import; support.google.com/sites/answer/9759608); and the kit folder.
7. **Cost reminder:** $0 at Google. Only the domain and email renewals she already pays at GoDaddy continue.
8. If the old demo is still online somewhere, take it down so there's only one site.

---

## Appendix A. Check in the editor (unconfirmed by research)

| # | What to check | Where it's met | If it's not so |
|---|---|---|---|
| 1 | Fraunces and Atkinson Hyperlegible are in the theme's font list | Step 3.4 | Lora/Merriweather; Atkinson Hyperlegible Next/Open Sans/Lexend |
| 2 | #f2603f is kept as Filled button colour with black text; #ffc23c is kept as S3 link; the selected-page colour behaves as text | Step 3.2, 3.3 | #b8432a buttons; #ffc23c selected page |
| 3 | PNG transparency shows over Cream and Sunshine | Step 9.1 | Ask for versions on a solid #fff7ec or #ffe9b3 background |
| 4 | Site name can be empty; the logo links to Home | Step 4 | Type "Onyx World Travel" |
| 5 | A parent menu item with a drop-down still opens its own page | Step 5 | Fine either way |
| 6 | Deleting the header leaves no gap; new pages don't bring a header back | Step 5 | Delete it on each page |
| 7 | Empty "+" placeholders don't show live | Step 6 | Delete them anyway |
| 8 | Empty alt text is allowed for icons | Step 6 | Use the heading beside the icon |
| 9 | The footer takes an image | Step 7 | Leave out the light logo |
| 10 | Duplicate page: the copy's name, position, hidden state and path | Step 9.4 | Fix them in Properties and Pages |
| 11 | Insert > Forms lists Milena's forms while you edit | Step 8.5 | Insert > Embed > By URL |
| 12 | Blank optional Email with validation is accepted; the "submit another response" label; auto-save as a sign-in trigger; the notification's sender (also needed for the 8.3a filter), subject and content | Step 8 | Adjust 3-forms, Milena's guide and the 8.3a filter |
| 13 | Collapsible groups start closed | Step 9.4 | Acceptable either way |
| 14 | Hidden pages in the site search | Step 5 | Acceptable ("Sample trip" label) |
| 15 | `tel:` and `mailto:` in buttons | Step 13 | Plain number; email text links |
| 16 | Coming Soon page displaced by the DNS edits | Step 12.2 | Unpublish that website only, or call GoDaddy |
| 17 | CNAME trailing dot; HTTPS on the forwarded bare domain; who gets the Domain Protection code; Search Console auto-verify; delegated owner enough for Sites | Step 12 | Fallbacks given in each step |
| 18 | Gemini prompts in the Sites and Forms editors for a free account | Step 14 | Only matters for Milena's ignore list |
| 19 | No Google ads on Sites (no official statement) | none | Nothing to do |
| 20 | Where Duplicate section puts the copy, and whether sections can be dragged | Step 6 | Rewrite Milena's guide sections 6, 10, 11 to match |
| 21 | The search icon has no hide setting | Step 2 | Nothing to do; it's in Milena's ignore list |
| 22 | Edits to a published Google Form reach the embedded form with no new Publish in Forms | Step 8 | If Forms shows a Publish/Update button after edits, add "press it" to Milena's guide sections 5-9 and 12 |
| 23 | Hidden Trip template (with its [TO FILL] lines) stays out of Google search results and the site search | Steps 5, 10 | Acceptable (labelled "Sample trip"); nothing links to it at launch |
| 24 | Gmail forwarding: whether a code box appears instead of the confirmation link, the filter's "Forward it" label, "Never send it to Spam" and "Categorize as: Primary"; which Gmail tab the alert lands in | Step 8.3a, Step 13 | Skip forwarding; she checks her Gmail for alerts |
| 25 | Nothing visitors see shows [her Gmail address] or her Google account name: the (i) badge, Page details, each form and its confirmation page | Steps 11, 13 | Set the published site back to Restricted and decide with Milena |
| 26 | Google's "Contact form owner" messages: where they land, their sender and Reply-To, whether the 8.3a filter forwards them | Step 8.3 | She answers them from milena@onyxworldtravel.com in a new email, as with every message |
| 27 | Whether the forms still take answers when her Google storage is full | Step 0.4 | Keep her storage well under 15 GB |

## Appendix B. Help pages used

- **Google Sites** (support.google.com/sites/answer/…):
  - 90538: insert content, buttons, images, collapsible text, duplicate section
  - 98216: pages, headers, footer
  - 6372865: themes, navigation
  - 6372880: publish, preview
  - 9068867: custom domains, fonts on custom URLs
  - 97934: sharing
  - 98081: logo, make a copy
  - 90569: embedding Forms
  - 9622187: version history
  - 9759608: Takeout
- **Google Forms** (support.google.com/docs/answer/…):
  - 2839588: publish, confirmation message
  - 139706: responses, notifications
  - 15473134: "Contact form owner" and feedback
  - 7322334: question types
  - 3378864: validation
  - Product Expert guide 395355672: sign-in triggers
- **Google Accounts:** support.google.com/accounts/answer/183723 (recovery phone and email), 16590793 (recovery contacts), 12418290 (inactivity policy).
- **Gmail:** support.google.com/mail/answer/10957 (forwarding, and forwarding only some messages with a filter), 6579 (filters).
- **Google storage:** support.google.com/googleone/answer/9312312 (the shared 15 GB), support.google.com/drive/answer/6374270 (when the account is full).
- **Search Console:** support.google.com/webmasters/answer/9008080, 7687615.
- **Workspace mapping page:** knowledge.workspace.google.com/admin/getting-started/map-a-new-url-to-a-site-in-google-sites.
- **GoDaddy:** godaddy.com/help/ 19237 (edit CNAME), 19232 (add TXT), 12123 (forwarding), 4166 (export zone file), 42241 (Microsoft 365 DNS), 12376 / 12374 / 32180 (delegate access), 32311 (Domain Protection), 7468 and 41294 (deleting products and websites).
- **Gap fillers:** steegle.com/google-sites/how-to/ (custom themes, buttons, headers, sections, layouts); sites.google.com/view/new-sites-testing (mailto and tel tests); kb.porkbun.com/article/113 (the custom-domain screens).
- **The full reasoning and evidence:** `gs/plan.md` and the research notes.
