# Onyx World Travel: forms, buttons and links (Google Sites)

For Xavier. The rule is **no fake buttons**: every button, link and form on the Google Sites site must really do something. If Google Sites can't make one work, it's removed. This file has three parts:

1. **The three Google Forms**, question by question, with their settings, where the answers go, and how Milena reads and answers them.
2. **Every button and link**: everything clickable on the Sunny Passport demo, and what it becomes in Google Sites (a page link, an email link, a form, plain text, or REMOVE).
3. **The no-fake-buttons test**: a tick list for the published site, on a phone and on a computer.

The build guide (`1-build-guide.md`, Steps 8 and 13) points here. The words to paste are in `2-text-to-paste.md`. Section names such as "Contact 3" or "Trip 6" are the same in all three files.

**Marks**

- **UNVERIFIED**: the research couldn't confirm it. Check it once in the real editor, or on a real phone, before relying on it. This is the same as "(check in the editor)" in the build guide.
- **[TO FILL: ...]**: nobody knows this yet. Paste it exactly as written. Never guess it. Nothing marked [TO FILL] may be public at launch, except on the hidden Trip template, which keeps its blanks on purpose (build guide Step 10).
- **Milena at the keyboard**: only works signed in as Milena ([her Gmail address]). She does it, with you beside her or on a screen share. Never ask for her password.


## What Google Sites can link to (the research, in short)

| Kind of link | Works in Google Sites? | What this kit does |
|---|---|---|
| **Page of the site, picked from the list** (button or text link) | Yes. It opens in the **same tab** (verified in published Sites pages). | Every link to a page is picked from the list. |
| **Any pasted web address**, even the site's own | Yes, but it opens in a **new tab**, through Google's redirect `google.com/url?q=...` (verified). | Only used for the booking form's link. Never paste a page's address. |
| **Email link** (`mailto:`) as a **text link** | **Yes** (verified in published Sites pages). Select the address > Link > type `milena@onyxworldtravel.com` or `mailto:milena@onyxworldtravel.com`. It opens with `target=_blank`, so a desktop browser may leave a blank tab open. | Every email address is a text link, and the link text is always the address itself. |
| Email link on a **button** | UNVERIFIED. Google's help only says "paste a URL". | No email buttons. |
| Email in **Insert > Social links** | Yes (verified: Sites makes `mailto:` icons). | Not used. The text link is enough. |
| **Phone link** (`tel:`) on a button or text | **Very likely not.** No Google page mentions it. A Sites Product Expert's test site says it "doesn't work with the Google Sites built-in buttons", a tutorial says the link box "does not accept something like tel:", and the published viewer's list of allowed link types has no `tel` (LIKELY, not verified first-hand). | **No phone links anywhere.** The number is plain text: (914) 559-8159. One optional test is in Part 3, Step 2. |
| **Jump to a spot lower on a page** (#upcoming-trips, #custom-trip, #book) | Only as a pasted heading link, which opens a **new tab**. | Not used. The jumps go to whole pages, or to the booking form's link. |
| **Google Form** | Insert > Forms puts the whole form on the page. The form's own link (responder link) opens it full screen in a new tab. | Three forms embedded; one form link on the "Save my spot" buttons. |
| Click a photo to see it bigger | No lightbox in Google Sites. | Removed, with the sentence that promised it. |

Sources: support.google.com/sites/answer/90538 (buttons, links, social links), sites.google.com/view/new-sites-testing (mailto-link, click-to-call, external-links), rahmanzeb.com/how-to-add-click-to-call-button-in-google-sites, and the published-page evidence in `gs/research/dl/`.


---

# Part 1. The three Google Forms

All three forms live in **Milena's own Google account, [her Gmail address]** (her existing Gmail), so the answers and the "new response" emails are hers. You are added as Editor (build guide Step 1). That address never goes in a form's title, description, questions or confirmation message: visitors only ever see milena@onyxworldtravel.com.

| Form | Title (exactly) | Shown on (Insert > Forms) | Also linked from | Replaces on the demo |
|---|---|---|---|---|
| **A** | Message for Milena | Contact page, section Contact 3 | nothing | the contact form and the page `thanks/` |
| **B** | Custom trip idea | Plan a custom trip page, section Custom 3 | nothing | the custom trip form on Services and the page `thanks/trip-idea/` |
| **C** | Trip booking and waitlist | Trip template and every trip page, section Trip 6 | both "Save my spot" buttons on every trip page (its responder link) | the booking form, its waitlist version, and the pages `thanks/booking/` and `thanks/waitlist/` |

The questions come from the demo's forms (`src/_includes/partials/contact-form.njk`, `custom-trip-form.njk`, `booking-form.njk`): the same labels, help lines and choices, in the same order. The only changes are the ones Google Forms forces. Each form lists them.


## 1.1 Create the forms (Sitting 1, Milena at the keyboard)

1. Signed in as [her Gmail address] (check the account picture at the top right), go to **forms.google.com** > **Blank form**. Do it three times. If she already has other forms in this account, that's fine: the three titles below keep them apart.
2. Click "Untitled form" at the top of each one and type its title from the table above.
3. In each form: More (three dots, top right) > **Add collaborators** > your Google account > **Editor**.

Then you fill them in, signed in as yourself.

- Never start from a template.
- Never use anything that says Gemini, has a sparkle icon, or says "Help me create". Everything is typed by hand, so Milena can change it by hand.


## 1.2 How to make a question (do it the same way every time)

| Job | How |
|---|---|
| Add a question | The **+** (Add question) on the floating toolbar at the right. |
| Question words | Type them in the question box exactly as in the tables below. Never add "(required)": Google shows its own red asterisk. |
| Type | The drop-down to the right of the question: **Short answer**, **Paragraph**, **Multiple choice** or **Dropdown** (support.google.com/docs/answer/7322334). Forms sometimes guesses a type or suggests answers while you type, so check the type every time. |
| Choices | Multiple choice and Dropdown: type each choice on its own line ("Add option"). **Never** click "Add 'Other'". |
| Required | The **Required** switch at the bottom of the question (answer/7322334). |
| Help text (the grey line under the question) | More (three dots, bottom right of the question) > **Description** (answer/7322334). Paste the help text from the table. |
| Email check | Only on the questions called "Email": More (three dots) > **Response validation** > **Text** > the email choice (Google's help says "Make sure the response is in email format"; the exact label is UNVERIFIED). In **Custom error text** paste: `That email doesn't look quite right. It should look like name@example.com.` (the demo's own message; support.google.com/docs/answer/3378864). Leave **Required off**. |
| Never use | File upload (it forces visitors to sign in to Google), Checkboxes (every choice on the demo is pick-one), sections, "Go to section based on answer", images, videos. |

Phone questions get **no check**. A check would need a "regular expression", which is code-like and hard for Milena to change. If a number is wrong, Milena still has the visitor's email, when they gave one.


## 1.3 Settings for all three forms (nothing may force a Google sign-in)

Visitors must never be asked to sign in to Google. These are the settings that matter. The first column says where to find each one.

| Where | Setting | Value | Why |
|---|---|---|---|
| Settings > **Responses** (down arrow) | **Collect email addresses** | **Do not collect** (the "off" choice; Google's help names only the other two, "Verified" and "Responder input", so the exact label is UNVERIFIED). **Never "Verified"**. | "Verified" makes visitors sign in. Each form asks for the visitor's phone and email with its own questions instead, so email stays optional, as on the demo (support.google.com/docs/answer/139706). |
| Settings > Responses | **Send responders a copy of their response** | Off | It only works when email collection is on, and Google warns the copies may go to spam (answer/139706). |
| Settings > Responses | **Allow response editing** | Off | It forces sign-in (Product Expert guide, support.google.com/docs/community-guide/395355672). |
| Settings > Responses | **Limit to 1 response** | **Off** | It forces sign-in. |
| Settings | **Make this a quiz** | Off | A quiz forces sign-in. |
| Settings > **Presentation** (down arrow) | **Confirmation message** | Click **Edit** > paste that form's message (below) > **Save** (support.google.com/docs/answer/2839588). | It replaces the demo's thank-you pages. Google Forms can't send people to another page. |
| Settings > Presentation | **View results summary** | **Off** (the default) | **Privacy:** if it's on, every visitor can see a summary of everyone's answers, names and phone numbers included (answer/2839588). |
| Settings > Presentation | **Show link to submit another response** | Off (label UNVERIFIED) | Tidier. |
| Settings > Presentation | **Disable auto-save for all respondents** | On | The Product Expert guide lists auto-save as a sign-in trigger (UNVERIFIED). Turning it on does no harm. |
| **Published** (top right, once published) | Close date, response limit, "Accepting responses" (labels UNVERIFIED) | **No close date and no response limit. Accepting responses: on.** | A limit or close date would silently stop new messages. |
| Theme (palette icon, top) | Colour | Optional: #f2603f, or the nearest colour offered. No header image. Font: leave the default. | Looks only. |
| More (three dots) > Add-ons | Add-ons | **None** | No paid "form notification" tools. The $0 rule. |
| **Publish** (top right) | Who can respond | **Publish** > **Manage** > General access: **Anyone with the link** > Publish (answer/2839588). | An unpublished form takes no answers, even when it's on a page. A restricted one asks visitors to sign in. |

Publish each form **after** its questions and settings are done. Later changes to a published form go live by themselves (UNVERIFIED whether Forms asks you to publish again; if a "Publish" or "Update" button shows, press it).


## Form A. "Message for Milena" (Contact page)

**Title:** Message for Milena

**Form description:** leave empty.

**On the page:** Contact 3, under the Heading "Send me a message". Under the form: the plain line "Rather talk? Call me at (914) 559-8159".

| # | Question (type exactly) | Type | Required | Help text (Description) | Choices / check |
|---|---|---|---|---|---|
| 1 | Name | Short answer | **Yes** | none | none |
| 2 | Phone or email | Short answer | **Yes** | Phone, email or both, whichever you prefer. | none (it may be either, so no email check) |
| 3 | Best way to reach you | Multiple choice | No | none | Call · Text · Email |
| 4 | Message | Paragraph | **Yes** | none | none |

**How the visitor's phone or email is collected:** question 2, typed by the visitor. No Google sign-in. "Collect email addresses" stays at Do not collect.

**Different from the demo, and why:**

- The demo had two boxes, Phone and Email, and refused the form unless at least one was filled ("Please give me a phone number or an email so I can reply."). Google Forms can't require "one of two". With two optional boxes, Milena could get a message she can't answer, so they're **one required question, "Phone or email"**, with the demo's own help line.
- The demo's rule "you picked Email, so please add your email address" can't be made. It's dropped.
- The demo's own error messages become Google's ("This is a required question"; wording UNVERIFIED).
- The demo's "Send message" button becomes Google's **Submit** button. Whether its words can be changed is UNVERIFIED, so leave it.

**Confirmation message** (word for word from the demo's `thanks/` page; same as `2-text-to-paste.md` part 12):

> Thank you! Your message is on its way to me. I'll get back to you [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159.

The thank-you page's two buttons ("See upcoming trips", "Back to home") aren't rebuilt. The visitor is still on the Contact page, with the menu right above.


## Form B. "Custom trip idea" (Plan a custom trip page)

**Title:** Custom trip idea

**Form description:** leave empty.

**On the page:** Custom 3, under the Heading "Tell me about your dream trip". Under the form: the plain line "Rather talk? Call me at (914) 559-8159".

| # | Question (type exactly) | Type | Required | Help text (Description) | Choices / check |
|---|---|---|---|---|---|
| 1 | Name | Short answer | **Yes** | none | none |
| 2 | Phone | Short answer | **Yes** | none | none |
| 3 | Email | Short answer | No | If you leave this blank, I'll get back to you by phone. | Email check (1.2) |
| 4 | Where would you like to go? | Short answer | **Yes** | Not sure yet? Just tell me what sounds fun. | none |
| 5 | When are you thinking? | Short answer | No | A month, a season or exact dates. | none (not a Date question: "a season" must be allowed) |
| 6 | How many travelers? | Multiple choice | **Yes** | none | 1 · 2 · 3 to 4 · 5 to 8 · 9 or more |
| 7 | Who's coming? | Multiple choice | No | none | Just me · A couple · Family · A group of friends |
| 8 | What pace do you like? | Multiple choice | No | none | Easy and relaxed · A good mix · Pack it in |
| 9 | Rough budget per person | Short answer | No | A ballpark is fine, or "not sure yet". | none |
| 10 | Anything else? | Paragraph | No | Must-sees, mobility needs, special occasions. | none |

**How the visitor's phone and email are collected:** questions 2 (required) and 3 (optional), typed by the visitor. No Google sign-in.

**Different from the demo:** Google's own error messages and Submit button (the demo's button said "Send my trip idea"). The demo's message for a blank Where ("Please tell me where you'd like to go. "Not sure yet" is fine!") can't be shown, because Google Forms has no custom message for a required question. The help line already says it.

**Confirmation message** (word for word from the demo's `thanks/trip-idea/` page):

> Got it! I'll start dreaming up ideas and get back to you with a quote [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159.


## Form C. "Trip booking and waitlist" (every trip page)

**Title:** Trip booking and waitlist

**Form description** (the box under the title):

> No payment yet. If the trip you choose is sold out, this puts you on its waitlist.

**On the page:** Trip 6 on the Trip template and on every trip page. Above the form: the Heading "Save my spot", the plain line "Booking for Mom or Dad? Call me at (914) 559-8159, I'm happy to talk it through.", the bold Trip line, and the line "In the form, choose this trip under “Which trip?”." Under the form: "Rather talk? Call me at (914) 559-8159" and "No payment yet. I'll be in touch to confirm your spot and explain payment."

**Also linked from:** both **"Save my spot"** buttons on every trip page (Trip 1 and Trip 2). They open this form full screen in a new tab (1.8).

| # | Question (type exactly) | Type | Required | Help text (Description) | Choices / check |
|---|---|---|---|---|---|
| 1 | Which trip? | **Dropdown** | **Yes** | none | One choice per bookable trip, written "Trip name, Dates". While building: `[TO FILL: Trip name], [TO FILL: Dates, e.g. June 1 to 10, 2027]`. **Last choice, always:** A different trip, or I'm not sure yet |
| 2 | Full name | Short answer | **Yes** | none | none |
| 3 | Phone | Short answer | **Yes** | none | none |
| 4 | Email | Short answer | No | If you leave this blank, I'll confirm by phone. | Email check (1.2) |
| 5 | How many people are traveling? | Multiple choice | **Yes** | Count yourself if you're coming. | 1 · 2 · 3 · 4 · 5 · 6 or more |
| 6 | Room | Multiple choice | No | none | A room to myself · Sharing with someone I know · Not sure yet |
| 7 | Anything I should know? | Paragraph | No | Walking or mobility needs, food needs, questions. Anything at all. | none |
| 8 | State you live in | Short answer | No | none | none |

**How the visitor's phone and email are collected:** questions 3 (required) and 4 (optional). No Google sign-in.

**Question 1 replaces the demo's fixed "Trip" line.** On the demo, each trip page's form already knew its trip. One Google Form can't know which page it sits on, so the visitor picks the trip, and the line above the form tells them to.

**The waitlist is this same form.** There's no second form to swap in.

| When | What Milena does to question 1 |
|---|---|
| A trip is added | Add its choice, "Trip name, Dates", above "A different trip, or I'm not sure yet". |
| A trip sells out | Rename its choice so it ends with " (sold out: join the waitlist)". The response then tells her it's a waitlist request. |
| A trip is over | Delete its choice. Old responses keep the old words. That's fine. |

**At launch:** the `[TO FILL]` choice is replaced by the real trip, or deleted. With no real trip, the list holds only "A different trip, or I'm not sure yet", and the trip rows on Home and Services & Trips are deleted (build guide Step 10). Nothing [TO FILL] may show in the public form.

**Different from the demo:** Google's own error messages and Submit button (the demo's button said "Save my spot", or "Join the waitlist" when sold out). The demo's two thank-you pages become one message, because it's one form.

**Confirmation message** (from the demo's `thanks/booking/` and `thanks/waitlist/` pages, merged; same as `2-text-to-paste.md` part 12):

> Got it! Your request is on its way to me. There's nothing to pay yet. I'll be in touch [TO FILL: how fast Milena replies, e.g. within a day] to confirm your spot and explain payment. If you picked a sold-out trip, you're on the waitlist, and I'll let you know as soon as a spot opens up. If it's urgent, call me at (914) 559-8159.

The demo's two pages said "Your request to save a spot is on its way to me…" and "You're on the list! I'll let you know as soon as a spot opens up. There's nothing to pay." The merged message keeps both promises.


## 1.4 The [TO FILL] in the confirmation messages

All three messages contain **[TO FILL: how fast Milena replies, e.g. within a day]**. Visitors see it after pressing Submit. Before launch, Milena answers it (the same words go on the Contact page, Contact 2), or the words "[TO FILL: …]" and the space before them are deleted, so the sentence reads "I'll get back to you." Never guess a reply time.


## 1.5 Email notifications to Milena (Sitting 2, Milena at the keyboard)

Signed in as [her Gmail address], in **each** of the three forms:

1. Click **Responses** at the top.
2. Click **More** (three dots) > **Get email notifications for new responses**. A tick shows it's on (support.google.com/docs/answer/139706).

- **Only the account that clicks it gets the emails.** You can't switch it on for her, and there's no box to type another address. If you switch it on in your own account too, you get your own copy (optional). To get them in her business inbox as well, use the optional Gmail forwarding (1.5a / build guide 8.3a).
- The emails go to her Google account's own address: **[her Gmail address]**, her Gmail inbox, not her GoDaddy business inbox. If she checks milena@onyxworldtravel.com every day instead, forward them there (1.5a, optional). (LIKELY: Google's help doesn't name the recipient, but several guides agree it's the account that switched it on.)
- What the email says: probably only that there's a new response, with a link to it, **not** the answers themselves (LIKELY, from several 2025-2026 guides; Google's help doesn't say). Its sender (LIKELY "Google Forms" `forms-receipts-noreply@google.com`, from three non-Google guides), subject line, and whether several responses close together come as one email are UNVERIFIED. Part 3 checks them, and the answers go into Milena's guide. The sender is also what the forwarding filter (1.5a) matches on, so write it down from the first test.
- It may land in a Gmail tab (Updates or Promotions) or in Spam instead of her main inbox (UNVERIFIED). Part 3 notes where it lands, so you can tell her where to look.
- **Replying to that email does not reach the visitor.** It comes from Google, not from them.
- Her Google storage must not be full. Gmail, Drive and Photos share the free 15 GB, and a full account can't receive emails, so the alerts would bounce, and nobody could edit the forms (support.google.com/googleone/answer/9312312 and drive/answer/6374270; build guide Step 0.4). Whether a full account also stops the forms taking answers is UNVERIFIED.
- No add-on is needed, and none is used.


## 1.5a Optional: forward the alerts to her business inbox (Sitting 2, Milena at the keyboard)

Ask Milena which inbox she checks every day. If it's her Gmail, skip this. If it's milena@onyxworldtravel.com, Gmail can send a copy of each alert there. It's free and needs no add-on. The build guide's Step 8.3a covers the same step. Do it **on a computer**: Google gives no steps for the phone app (support.google.com/mail/answer/10957).

**Order in Sitting 2:** turn on notifications (1.5) > send one test (Part 3, Step 3, point 4) so a real alert reaches her Gmail > set up forwarding from that alert (A and B below) > send a second test and check the copy reaches milena@onyxworldtravel.com. A new filter only acts on **new** emails, so alerts that came before it are never forwarded (answer/10957).

**A. Add the forwarding address** (in Gmail, signed in as [her Gmail address]):

1. Settings (gear, top right) > **See all settings** > **Forwarding and POP/IMAP** tab (sometimes just "Forwarding").
2. **Add a forwarding address** > type `milena@onyxworldtravel.com` > **Next** > **Proceed** > **OK**.
3. Google sends a confirmation email to milena@onyxworldtravel.com. Milena opens her business inbox (look in Junk too) and clicks the confirmation link in it. If Gmail shows a box asking for a confirmation code instead, she types the code from that same email (UNVERIFIED).
4. Back in Gmail, refresh the page.
5. **Leave "Disable forwarding" selected.** Never choose "Forward a copy of incoming mail to": that would send **all** her personal Gmail to her business inbox. The filter below forwards only the alerts.

**B. The filter.** Build it from the real test alert, so it doesn't rely on a sender address the research couldn't confirm.

1. In Gmail, tick the box next to the test alert > **More** (three dots) > **Filter messages like these** (support.google.com/mail/answer/6579).
2. The **From** box should show the alert's sender (LIKELY `forms-receipts-noreply@google.com`; UNVERIFIED). Write down the real sender and subject line.
   - No real alert yet? Search box > **Show search options** > From: the sender above > **Search**, and check it finds only Google Forms alerts.
3. **Create filter** > tick **Forward it** > choose milena@onyxworldtravel.com (the label may read "Forward it to"; UNVERIFIED).
4. In the same filter, also tick **Never send it to Spam**, and optionally **Categorize as: Primary** (labels UNVERIFIED), so the alert also stays easy to find in her Gmail.
5. **Create filter**.
6. Send the second test. The copy must arrive at milena@onyxworldtravel.com. The first time, look in its **Junk** folder too and mark it **Not junk**.

- The alert still arrives in her Gmail. The copy is extra. She still reads the answers in Google Forms, signed in as [her Gmail address] (1.6).
- Gmail doesn't forward spam (answer/10957), so an alert that lands in her Gmail Spam is probably not passed on (LIKELY for filters too). That's what "Never send it to Spam" is for.
- For the first week, Gmail shows a note saying she's forwarding some of her email. That's expected. If she ever sees a forwarding note she didn't ask for, she changes her Google password right away and calls you, and that forwarding is turned off (answer/10957).
- Each extra address needs its own filter. One is enough here.
- If her business email ever changes, her Google sign-in and the alerts stay at [her Gmail address]. Only this forwarding needs the new address added and confirmed, and the filter pointed at it (build guide 8.3a).
- Whether the filter also catches "Contact form owner" messages (X3) is UNVERIFIED. The "Contact form owner" test in Part 3, Step 3 checks it.


## 1.6 How Milena reads and answers a message

Written for Milena, in her words. Copy this into `4-milena-guide.md`.

> **When someone fills in a form on your website**
>
> You get an email from Google in your Gmail ([her Gmail address]) saying there's a new response. If Xavier set up forwarding, a copy also comes to milena@onyxworldtravel.com. It may not show their message. Here's how to read it and answer:
>
> 1. Go to **forms.google.com**. If Google asks you to sign in, use [her Gmail address]. (The picture or letter at the top right shows which account you're in.) You'll see your three forms: Message for Milena, Custom trip idea, and Trip booking and waitlist.
> 2. Click the form the email was about.
> 3. At the top, click **Responses**, then **Individual**. You'll see one message at a time. The arrows move to the next or previous one.
> 4. Read it. Their phone number and, if they gave one, their email address are in the answers.
> 5. **To answer by email:** copy their email address. Open your business email (milena@onyxworldtravel.com), not your Gmail, start a **new** email, paste their address, write to them and send it. That way travelers always see your business address.
> 6. **To answer by phone:** call or text the number they gave.
>
> **Please don't press Reply on Google's email.** It goes to Google, not to the traveler.
>
> **Sometimes a visitor writes to you through Google's own "Contact form owner" link** at the bottom of a form. That email arrives in your Gmail. Answer from your business email (milena@onyxworldtravel.com) by typing the traveler's address into a new message. Don't press Reply in Gmail: the traveler would see your personal Gmail address.
>
> **Junk messages:** in Responses > Individual, the bin (trash) icon deletes the one you're looking at.
>
> **If an email to a traveler bounces back,** they may have typed their address wrong. Call them instead.

Notes for you:

- The trash icon's place in Individual view is UNVERIFIED. Check it, and correct her guide.
- The "Contact form owner" paragraph is LIKELY. Google's help says the visitor's name and email are shared with the message (support.google.com/docs/answer/15473134), and speaks of "the email with their feedback" that the owner receives (answer/139706). Its sender, subject and Reply-To are UNVERIFIED until the "Contact form owner" test in Part 3, Step 3 checks them. If the test shows something different, correct her guide.
- Optional, free: Responses > **Link to Sheets** puts every answer in a Google Sheet. Not needed. Google warns that form collaborators may also see a linked sheet (answer/139706).
- **Privacy:** everyone who is an Editor on a form can read every response. At hand-over, Milena decides whether you stay an Editor on the forms (build guide Step 14).
- Google Forms has no captcha or spam filter. How much junk arrives is unknown (UNVERIFIED). Deleting it is the only remedy that costs $0.


## 1.7 Putting each form on its page (embedding)

| Form | Page | Section | The box goes between |
|---|---|---|---|
| A. Message for Milena | Contact | Contact 3 | the Heading "Send me a message" and the line "Rather talk? Call me at (914) 559-8159" |
| B. Custom trip idea | Plan a custom trip | Custom 3 | the Heading "Tell me about your dream trip" and the line "Rather talk? Call me at (914) 559-8159" |
| C. Trip booking and waitlist | Trip template (and every copy of it) | Trip 6 | the line "In the form, choose this trip under “Which trip?”." and the line "Rather talk? Call me at (914) 559-8159" |

**Steps** (support.google.com/sites/answer/90569):

1. In the Sites editor, on the page: **Insert** (right panel) > scroll to the bottom > **Forms**.
2. Choose the form by its title > **Insert**.
3. Drag the box's blue handles until the **whole form, including Submit,** shows without a scroll bar inside the box, on a computer.
4. **Preview** (eye icon) > the phone button at the bottom right. If the form is cut off on a phone, make the box taller and check again. The box can't resize itself.

- **If Insert > Forms doesn't list Milena's forms** while you're signed in as yourself (UNVERIFIED): use Insert > **Embed** > **By URL** and paste the form's responder link (1.8). That's a web address, not code.
- **Never** use Insert > Embed > "Embed code".
- After Submit, the confirmation message shows **inside the box**. On a tall box, a visitor at the bottom may need to scroll up a little to see it (LIKELY). Check it in Part 3.
- Form C on new trip pages: duplicating the Trip template copies the form box with it (LIKELY; check the first time).


## 1.8 The booking form's link (for the "Save my spot" buttons)

1. Open Form C > **Published** (top right) > **Copy responder link**. Tick **Shorten URL** if it's offered, then **Copy** (answer/2839588). It looks like `https://forms.gle/...`.
2. On the Trip template: click the "Save my spot" button in Trip 1 > Edit (pencil) > paste the link into the link box > Done. Do the same for the button in Trip 2.

- It opens the form full screen in a **new tab**. That's expected, and it works well on phones.
- Every trip page uses the **same** link, so duplicating the template keeps it right.
- Keep the link in the kit folder as well: `[TO FILL: Form C responder link]`.


---

# Part 2. Every button and link

**How this list was made:** a script read every page of the built Sunny Passport demo (`gs/site`) and listed everything clickable. A browser (Playwright) then opened every page at computer width (1280 px) and phone width (390 px) **after** the demo's own scripts had run, so nothing they add was missed: the gallery's "Close" button, the phone menu button, and the trip cards, which are clickable as a whole. Every link on the demo leads to a real page or a real spot on a page (checked; none broken).

The demo has **87 clickable things plus 3 forms**: the header and footer counted once (22), Home 11, About 4, Services & Trips 6, the trip page 6, Gallery 19, Reviews 1, Contact 4, Terms and Privacy 0, the four thank-you pages 12, and "page not found" 2. Among them are **38 phone (`tel:`) links** and **16 email (`mailto:`) links**, counting every page.

**What the last column means:**

- **Page link → X**: a button or text link to page X, **picked from the list**. It opens in the same tab.
- **Email link**: a text link to `mailto:milena@onyxworldtravel.com`. The link text is the address itself.
- **Form X, embedded**: Insert > Forms (1.7).
- **Form C link**: the booking form's responder link (1.8). It opens in a new tab.
- **Plain number**: the words stay, "(914) 559-8159", as ordinary text. **REMOVE the phone link** (Sites doesn't accept `tel:`). Not underlined, not in the link colour.
- **REMOVE**: not built. Nothing is left that looks clickable.
- **NEW**: not on the demo; added because of how Sites works.

The IDs (E1, H1, …) are the same in the Part 3 tick sheet.


## Every page: menu bar and footer (demo: 22)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| E1 | "Skip to main content" (shows only when using the keyboard) | the page content | **REMOVE** | Google Sites handles this itself. |
| E2 | Logo, menu bar | Home | **Logo → Home** | Settings > Brand images > Logo (build guide Step 4). Clicking it goes to Home (LIKELY; test). |
| E3 | "Call (914) 559-8159" button, menu bar | `tel:+19145598159` | **REMOVE** | No call buttons (Sites doesn't accept `tel:`). The number is in the footer and on Contact. |
| E4 | Menu button (phones) | opens the menu | **Google's own menu button** | Automatic on phones (verified live on published Sites). |
| E5 | Home (menu) | Home | Page link → Home | Automatic, from the Pages list. |
| E6 | About (menu) | About | Page link → About | Automatic |
| E7 | Services & Trips (menu) | Services & Trips | Page link → Services & Trips | Automatic. Whether clicking the word itself opens the page (and the arrow opens the drop-down) is UNVERIFIED. |
| E8 | Gallery (menu) | Gallery | Page link → Gallery | Automatic |
| E9 | Reviews (menu) | Reviews | Page link → Reviews | Automatic |
| E10 | Contact (menu) | Contact | Page link → Contact | Automatic |
| E11 | **NEW:** Plan a custom trip (in the Services & Trips drop-down) | none | Page link → Plan a custom trip | Automatic, because it's a sub-page of Services & Trips. |
| E12 | Logo, footer | Home | **REMOVE the link.** The light logo is a picture only, and only if the footer takes pictures (UNVERIFIED). | Don't add a link to it. |
| E13 | Footer "Call (914) 559-8159" | `tel:+19145598159` | **Plain number** "Call (914) 559-8159" | |
| E14 | Footer "milena@onyxworldtravel.com" | `mailto:` | **Email link** | Select the address > Link > `mailto:milena@onyxworldtravel.com` |
| E15 | Footer "Send me a message" | Contact | Page link → Contact | |
| E16 to E21 | Footer Explore: Home, About, Services & Trips, Gallery, Reviews, Contact | each page | Page links → each page | Each one picked from the list. |
| E22 | Footer "Terms & conditions" | Terms & conditions | Page link → Terms & conditions | The page is hidden from the menu, so this link is its only way in. |
| E23 | Footer "Privacy" | Privacy | Page link → Privacy | Hidden page, same. |


## Home (demo: 11)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| H1 | "See upcoming trips" (hero) | Services, Upcoming Trips spot | Page link → **Services & Trips** | Filled button. The trip list is that page's second section. |
| H2 | "Plan a custom trip" (hero) | Services, Custom Trip Planner spot | Page link → **Plan a custom trip** | Outlined button |
| H3 | The trip card: the trip name and the whole card (photo included) | the trip page | **REMOVE the link.** The trip name is plain Subheading text. | One link per trip row, H4, so Milena has one thing to update. |
| H4 | **NEW:** "See the trip" (on the demo, only a label inside the clickable card) | none | Page link → **that trip's page** | Outlined button. While building: the Trip template. **At launch: a real trip page, or the whole trip row is deleted.** |
| H5 | "Get in touch" (More trips are on the way) | Contact | Page link → Contact | Text link on the words |
| H6 | "See all trips and services" | Services & Trips | Page link → Services & Trips | Filled button |
| H7 | "Read my story" | About | Page link → About | Text link |
| H8 | "Read the full review" (Father Peter) | Reviews, his review | Page link → **Reviews** (the top of the page) | Small text link. Sites can't jump to one review in the same tab. |
| H9 | "Read the full review" (Kellie G.) | Reviews, her review | Page link → Reviews | Same |
| H10 | "Read the full review" (Haley E.) | Reviews, her review | Page link → Reviews | Same |
| H11 | "Read more reviews" | Reviews | Page link → Reviews | Filled button |
| H12 | "Plan a custom trip" (Got a place in mind?, dark band) | Services, Custom Trip Planner spot | Page link → Plan a custom trip | Filled button |


## About (demo: 4)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| A1 | "See upcoming trips" | Services, Upcoming Trips spot | Page link → Services & Trips | Filled button |
| A2 | "Plan a custom trip" | Services, Custom Trip Planner spot | Page link → Plan a custom trip | Outlined button |
| A3 | "(914) 559-8159" (Milena at a glance) | `tel:` | **Plain number** | "Call or text: (914) 559-8159" |
| A4 | "milena@onyxworldtravel.com" (Milena at a glance) | `mailto:` | **Email link** | |


## Services & Trips (demo: 6, plus the custom trip form)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| S1 | "See upcoming trips" (Two ways) | the Upcoming Trips spot on the same page | **REMOVE** | It pointed to the page it was on, and the trips are right below. |
| S2 | "Plan a custom trip" (Two ways) | the Custom Trip Planner spot, same page | Page link → Plan a custom trip | Outlined button |
| S3 | The trip card: the trip name and the whole card | the trip page | **REMOVE the link.** The name is plain text. | As H3. |
| S4 | **NEW:** "See the trip" | none | Page link → that trip's page | Outlined button. Same launch rule as H4. |
| S5 | "Plan a custom trip" (Don't see what you want?, a text link) | the Custom Trip Planner spot, same page | Page link → Plan a custom trip | Text-style button |
| S6 | The custom trip form and its "Send my trip idea" button | Milena's email (demo) | **Moves** to the Plan a custom trip page: **Form B, embedded** (P1) | |
| S7 | "Call me at (914) 559-8159" under the form | `tel:` | **Moves** to Plan a custom trip as a **plain number** (P2) | |


## Plan a custom trip (new page)

| # | What | Google Sites | How |
|---|---|---|---|
| P1 | The form | **Form B, embedded** | Custom 3. Google's own Submit button. |
| P2 | "Rather talk? Call me at (914) 559-8159" | **Plain number** | Under the form |


## Trip template and every trip page (demo: 6, plus the booking form)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| T1 | "All upcoming trips" (top) | Services, Upcoming Trips spot | Page link → Services & Trips | Small text link |
| T2 | "Save my spot" (top) | the form lower on the page (#book) | **Form C link** (new tab) | Filled button (1.8) |
| T3 | "Save my spot" (under Quick facts) | the form lower on the page | **Form C link** (new tab) | Filled button |
| T4 | "(914) 559-8159" in "Booking for Mom or Dad? Call me at…" | `tel:` | **Plain number** | |
| T5 | The booking form and its "Save my spot" button | Milena's email (demo) | **Form C, embedded** | Trip 6. Google's own Submit button. |
| T6 | "Call me at (914) 559-8159" under the form | `tel:` | **Plain number** | |

When a trip sells out, the two buttons are renamed "Join the waitlist" and keep the same link. When it's over, the top button becomes "See my upcoming trips" → Services & Trips, the Quick facts button and the form are deleted, and a "See upcoming trips" button → Services & Trips is added (`2-text-to-paste.md` part 13). Those buttons get the same test.


## Gallery (demo: 19)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| G1 to G18 | Each of the 18 photos | a bigger view of the photo | **REMOVE** | Photos have no links (Sites has no lightbox). The sentence "Tap or click any photo to see it bigger." is deleted. |
| G19 | "Close" on the bigger view | closes it | **REMOVE** | No bigger view. |


## Reviews (demo: 1)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| R1 | "Send me a note" (Traveled with me before?) | Contact | Page link → Contact | Text link on the words |


## Contact (demo: 4, plus the contact form)

| # | Demo: what you tap | Demo goes to | Google Sites | How |
|---|---|---|---|---|
| C1 | Big "(914) 559-8159" (Call me) | `tel:` | **Plain number**, Heading style | |
| C2 | Big "milena@onyxworldtravel.com" (Email me) | `mailto:` | **Email link**, Heading style | Check in Preview > phone that it doesn't break badly. |
| C3 | The contact form and its "Send message" button | Milena's email (demo) | **Form A, embedded** | Contact 3. Google's own Submit button. |
| C4 | "Call me at (914) 559-8159" under the form | `tel:` | **Plain number** | |


## Terms & conditions, Privacy (demo: 0)

Nothing clickable besides the menu bar and footer.


## Not built (demo: 14)

| # | Demo | Google Sites |
|---|---|---|
| K1 | "call me at (914) 559-8159" on the four thank-you pages (4 links) | **REMOVE.** The thank-you pages aren't built. The number is plain text inside each confirmation message. |
| K2 | "See upcoming trips" on the four thank-you pages (4) | **REMOVE** (not built) |
| K3 | "Back to home" on the four thank-you pages (4) | **REMOVE** (not built) |
| N1 | "See upcoming trips" on "Oops, wrong turn." (404) | **REMOVE.** Google shows its own "not found" page, which can't be edited (UNVERIFIED). |
| N2 | "Back to home" on the 404 page | **REMOVE** (not built) |

The demo's form error summaries (links that jump to a field with a problem) are replaced by Google Forms' own error messages.


## Added by Google (nothing to build; each must still work)

| # | What | Where | Note |
|---|---|---|---|
| X1 | Search (magnifier) | top right of every published page | Searches the site. It can't be removed (UNVERIFIED). Hidden pages may show in its results (UNVERIFIED); the Trip template is labelled "Sample trip", which is acceptable. |
| X2 | The round **(i)** badge | bottom left of every published page | Google's site information: "Google Sites", "Report abuse" and "Page details" / "Page updated" (labels LIKELY, from two live personal-account sites). It can't be removed. Normal. It shows no owner email or name (LIKELY); Part 3, Step 4 checks it. |
| X3 | Inside each form: **Submit**, **Clear form**, and Google's small print at the bottom: "Never submit passwords through Google Forms.", "This content is neither created nor endorsed by Google.", **Terms of Service**, **Privacy Policy**, "Does this form look suspicious? **Report**", and a **Help and feedback** menu with **Contact form owner**, **Help Forms improve** and **Report** | every embedded form, and Form C's full-screen link | Google's own (seen on a live personal-account form; exact labels can vary, UNVERIFIED). A signed-in visitor also sees their own Google account at the top of the form. That's normal and harmless. No owner email or name shows (LIKELY; Part 3, Step 3 checks it). **"Contact form owner"** is harmless, but it lets a visitor send Milena a message, with their name and email, that arrives in her Gmail, [her Gmail address] (support.google.com/docs/answer/15473134; LIKELY). The research found no setting that turns it off. Her guide (1.6) says how to answer it. "Report" goes to Google, not to her (LIKELY). |
| X4 | Anything else clickable: an Announcement banner, Social links icons, an image with a link, an empty "+" placeholder | anywhere | **None should exist.** If one turns up, it's removed (Part 3, Step 4). |


## What's left to keep working

With one real trip, the finished site has **43 things to click**:

- every page: the logo, 7 menu items, the email link, "Send me a message", 6 Explore links, Terms, Privacy (18)
- Home: 11 (10 with no trip)
- About: 3
- Services & Trips: 3 (2 with no trip)
- Plan a custom trip: Form B
- each trip page: 3 buttons and links, plus Form C
- Reviews: 1
- Contact: the email link and Form A

The phone number is plain text in **7 places on the site** (the footer, which shows on every page; About; Contact twice; Plan a custom trip; and twice on every trip page, the Trip template included) and in **all 3 confirmation messages**. That's the list Milena needs if the number ever changes. The email link is in **3 places**: the footer, About and Contact.


---

# Part 3. No-fake-buttons test

Run it on the **published** site: not in the editor, and not only in Preview. Use a computer **and** a phone. Tick a box only when the tap lands in the right place. Anything that fails is fixed or removed, then tested again.

## What you need

- The published site.
- A computer with a **private (incognito) window**, so you see exactly what visitors see, signed out.
- A phone. Ideally one iPhone **and** one Android (borrow one), because phone numbers behave differently on each.
- **Your own** email address and phone number for the test answers. **Not** Milena's, so you can check that her reply reaches the sender.
- **Milena**, for her Gmail inbox, [her Gmail address], which receives the "new response" emails (Spam too). Also her business inbox, milena@onyxworldtravel.com, for the reply test and for any forwarded alerts (Junk too).
- Optional: a second person on a different phone or network.

## When to run it

| Round | When | Who | What |
|---|---|---|---|
| **1. Before launch** | After build guide Step 11 (published, still **Restricted**) | You, signed in to your own Google account | **Steps 1 and 4** on the restricted site. **Step 3, points 1 to 7**, on each form's **responder link** in a private window. (A signed-out window can't open a restricted site, but it can open the forms.) No notification check yet: Milena turns notifications on in Sitting 2. |
| **2. Sitting 2** | Right after Milena turns on notifications (1.5) and, if wanted, forwarding (1.5a). Forwarding is built from the first test's alert, so send one more test after it (1.5a, "Order in Sitting 2"). | You and Milena | **Step 3 in full**, one test per form, including the notification, the forwarded copy if 1.5a was done, and the reply. Also the "Contact form owner" test (Step 3) and **Step 2**. |
| **3. After the domain is live** | Build guide Step 12, within 48 hours | You, then Milena on her phone | **Step 5** (the domain), then **Steps 1, 3 and 4 again** on www.onyxworldtravel.com, signed out, on a computer and a phone. |
| **Later** | After every new trip, and after any change to a form | Milena | "Milena's three-line check" at the end of this part. |

**Launch only when every box is ticked, or its item is removed.**


## Step 1. Tap every button and link

Go through the tick sheet (Step 7) page by page, once on the computer and once on the phone.

| Kind | Ticked only when |
|---|---|
| **Page link** | The right page opens **in the same tab**. If a page opens in a **new tab**, its address was pasted instead of picked: click it in the editor > Edit > pick the page from the list > Publish. On a computer, pointing at a link shows its address at the bottom of the window. `google.com/url?q=` on a page link also means it was pasted. |
| **Email link, computer** | A new email opens, addressed to milena@onyxworldtravel.com, or the computer asks which app to use. A blank extra tab left behind is fine. An error page is a fail. |
| **Email link, phone** | The phone's email app (Mail, Gmail or Outlook) opens a new email to milena@onyxworldtravel.com. |
| **Form C link** ("Save my spot") | The booking form opens full screen in a new tab, **with no sign-in**, and "Which trip?" lists the right trips. |
| **Plain phone number** | It is **not** underlined and **not** in the link colour on any page. On an iPhone, note whether tapping it offers to call. That's a bonus, not a requirement. |
| **Phone menu** | The menu button opens the menu. Every item works, including "Plan a custom trip" under Services & Trips. |
| **Menu bar and footer** | Test them all on Home. On every other page, tap the logo, one menu item and one footer link. |


## Step 2. Check the phone number really reaches Milena

There are no call links (Part 2, "What Google Sites can link to"), so this checks the number itself:

1. On the phone, open the Contact page. On an **iPhone**, tap the big number: it may offer "Call (914) 559-8159". On **Android**, press and hold it: it may offer Call (LIKELY). Write down what each phone does.
2. Call **(914) 559-8159** once (by tapping, or by typing it) and check that it rings Milena.
3. Send one text message to it, because the site says "Call or text". Check that she gets it.
4. Check the number reads **(914) 559-8159** in every place listed at the end of Part 2, and in all three confirmation messages.

**Optional Call button** (build guide Step 13). Keep it only if **every** point passes:

1. In the editor, click the button > Edit. The link must still read exactly `tel:+19145598159`, not `http://tel:…` or a `google.com/url` address.
2. On a real **iPhone**: tapping it opens the phone's dialer with (914) 559-8159.
3. On a real **Android**: the same.
4. On a computer: it offers an app or does nothing harmful. An error page is a fail.

If any point fails, **delete the button**. The plain number stays. Test an email **button** the same way if you want one (Sites must keep `mailto:` and the phone must open a new email).


## Step 3. Send each form

Do this for **Form A** (Contact), **Form B** (Plan a custom trip) and **Form C** (the Trip template, or the first real trip page). Use a private window, signed out. In Round 1, use each form's responder link. Afterwards, use the live pages.

1. **No sign-in.** The form shows without asking you to sign in to Google. If it says "Sign in to Google to save your progress", that's fine **only if** the form can still be sent without signing in.
2. **Submit with everything empty.** Google refuses, and marks **exactly** the questions marked Required in Part 1: A: Name, Phone or email, Message. B: Name, Phone, Where, How many travelers. C: Which trip, Full name, Phone, How many people.
3. **Bad email** (B and C): type `test@` in Email and press Submit. It's refused with "That email doesn't look quite right. It should look like name@example.com."
4. **Send a test:**
   - Name: `TEST from Xavier, please ignore`
   - Phone: your own number
   - Email (or "Phone or email" on A): your own test address
   - Pick an answer for every choice question. On C, pick the trip.
   - In the last box: `Test of the [form name] form, [today's date]`

   Press Submit.
5. **The confirmation message shows** inside the box, with that form's words from Part 1. If you have to scroll up inside the box to see it, note that for Milena's guide. **Her Gmail address shows nowhere:** on the form, and again on its confirmation, press **Ctrl+F** and search `[her Gmail username]`. Nothing may be found (LIKELY that Google shows no owner address; this checks it).
6. **Blank email is accepted** (B and C): send a second test with Email left empty. It goes through.
7. **The answers are in the form:** Responses > Individual shows every answer, next to its question. On C, the trip choice is right.
8. **The notification reaches Milena** (from Round 2):
   - Within about 10 minutes (timing UNVERIFIED), an email from Google arrives in her Gmail inbox, **[her Gmail address]**. If forwarding was set up (1.5a), a copy also arrives at milena@onyxworldtravel.com.
   - Not in the inbox? In Gmail, look in **Spam** and in the **Updates** and **Promotions** tabs. If it's in Spam, mark it **Not spam** and add the sender to her contacts. With forwarding on, also look in the business inbox's **Junk** folder and mark it **Not junk**. Write down where it landed, and tell Milena where to look.
   - Not there at all? Check that 1.5 was done in **that** form, signed in as [her Gmail address]. In Gmail but not at milena@onyxworldtravel.com? Check the forwarding address is confirmed and the filter's sender matches (1.5a). Alerts that came before the filter are never forwarded, so send a new test.
   - Write down the sender, the subject line, and whether the answers are in the email. Put them in her guide (Appendix A, item 12 of the build guide), and use the sender for the forwarding filter (1.5a).
9. **Milena can reply to the sender** (from Round 2, Milena at the keyboard):
   1. She opens the response (1.6), copies **your** test address, and writes a **new** email from milena@onyxworldtravel.com: "Test reply".
   2. It must arrive in your inbox. Check your spam folder too.
   3. Reply to her from your test address. It must arrive in her business inbox, milena@onyxworldtravel.com.
   4. Also press **Reply** on Google's notification email and look at the "To" line. Expected: it isn't your address. That's why her guide says never to use it. Write down what it shows.
10. **On a phone:** send one more test (Form A is enough). Check that the form fits the screen, every question can be answered, and the confirmation shows.
11. **Clean up:** delete the test responses (Responses > Individual > trash icon; UNVERIFIED place) and the test emails.

**Form C: the waitlist (once, in Round 2).** In Form C, add a choice `TEST trip, (sold out: join the waitlist)`. Send a test choosing it, and check that the response shows those words. Then delete the choice and the response. This also checks the sold-out step in Milena's guide.

**"Contact form owner" (once, in Round 2, after 1.5a if it was done).** Open Form A's responder link in the private window > at the bottom, **Help and feedback** > **Contact form owner** (X3), and note whether it asks you to sign in (UNVERIFIED). Then, signed in to **your own** Google account, send one message: `TEST from Xavier, please ignore`. Then, with Milena, write down:

- where it lands in her Gmail (inbox, a tab, or Spam), its sender and subject line;
- whether you, the sender, see `[her Gmail username]` anywhere, on screen or in any copy emailed to you (UNVERIFIED);
- what **Reply** in Gmail would show in the "To" line (the Reply-To), then discard the reply without sending;
- whether the forwarding filter (1.5a), if set up, also sent it to milena@onyxworldtravel.com;
- whether it has a "Block the sender" link at the bottom (Google's help says it does).

If anything differs from the "Contact form owner" paragraph in 1.6, correct her guide. Then delete the test message.


## Step 4. Look for anything clickable that isn't on the list

On every page, on both devices, look for buttons, icons, underlined words or clickable pictures that aren't on the tick sheet. Expected: only Google's search magnifier, the (i) badge and the parts of the forms (X1 to X3). Anything else, such as an empty "+" box, a social icon, an announcement banner or a linked picture, must work or be removed.

Also press **Ctrl+F** and search for `TO FILL` on every live page, in the three confirmation messages and in Form C's trip list. Nothing may be found at launch, except on the hidden Trip template (build guide Step 10). With no trip at launch, also check that Home and Services & Trips use the no-trip words ("The next one is in the works." / "The next trip is in the works.", `2-text-to-paste.md` part 13).

**Her Gmail address stays private.** Search `[her Gmail username]` the same way on every live page: nothing may be found. The site's own address (sites.google.com/view/...) mustn't contain it either. In Round 3, in a signed-out private window on www.onyxworldtravel.com, also open the **(i)** badge (X2) and each thing it offers: nothing in it may show `[her Gmail username]` or her Google account name (LIKELY that it doesn't; check in the editor).


## Step 5. The domain: both addresses, with the padlock

After build guide Step 12, allow up to 48 hours. Test in a **private window** on the computer, and on the phone using **mobile data** (switch Wi-Fi off), so neither uses an old saved copy.

| # | Type this address | Ticked only when |
|---|---|---|
| D1 | `https://www.onyxworldtravel.com` | The Home page loads, and the address stays **www.onyxworldtravel.com**. |
| D2 | `http://www.onyxworldtravel.com` | It ends on the site, on `https://` (LIKELY that Google switches it; check). |
| D3 | `https://onyxworldtravel.com` | It forwards to `https://www.onyxworldtravel.com` **with no warning page**. GoDaddy's HTTPS forwarding is UNVERIFIED in practice. If you see a warning, delete the forward in GoDaddy and add it again (build guide 12.7). |
| D4 | `http://onyxworldtravel.com` | It forwards to `https://www.onyxworldtravel.com`. |
| D5 | `onyxworldtravel.com/contact` | It lands on the site, probably on Home. That's expected with GoDaddy forwarding. It must not show an error. |

For **each** of D1 to D4:

- **The padlock:**
  - **Safari:** a padlock by the address.
  - **Chrome:** Chrome shows a small "settings" icon instead of a padlock. Click it: it must say **Connection is secure**.
  - "**Not secure**", or a page saying "Your connection is not private", is a fail.
- **The address bar doesn't end on `sites.google.com/view/...`.** If it does, Share > Published site isn't set to Public yet (build guide 12.5).

Then:

- Every page works on www.onyxworldtravel.com: run Step 1 again there.
- The tab icon (favicon) shows. It can take a while to appear. That's not a reason to delay the launch.
- **Email still works both ways:** build guide 12.8, the email check.

If something fails, use the error table in build guide 12.8 ("Invalid DNS", "Missing certificate", "Already in use").


## Step 6. Anything that fails

1. Write it in the "Fixed or removed" column.
2. Fix it. If it can't be fixed, **delete it**, or make the words plain text that doesn't look like a link.
3. Test it again, then **Publish**.


## Step 7. Tick sheet

**Every page** (test all of them on Home; on every other page, the logo, one menu item and one footer link)

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| E2 | Logo | Home | [ ] | [ ] | |
| E4 | Phone menu button | opens and closes the menu | n/a | [ ] | |
| E5 | Home (menu) | Home | [ ] | [ ] | |
| E6 | About (menu) | About | [ ] | [ ] | |
| E7 | Services & Trips (menu) | Services & Trips | [ ] | [ ] | |
| E11 | Plan a custom trip (drop-down) | Plan a custom trip | [ ] | [ ] | |
| E8 | Gallery (menu) | Gallery | [ ] | [ ] | |
| E9 | Reviews (menu) | Reviews | [ ] | [ ] | |
| E10 | Contact (menu) | Contact | [ ] | [ ] | |
| E13 | Footer "Call (914) 559-8159" | plain text, not a link | [ ] | [ ] | |
| E14 | Footer milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |
| E15 | Footer "Send me a message" | Contact | [ ] | [ ] | |
| E16-E21 | Footer Explore: Home, About, Services & Trips, Gallery, Reviews, Contact | each page | [ ] | [ ] | |
| E22 | Footer "Terms & conditions" | Terms & conditions | [ ] | [ ] | |
| E23 | Footer "Privacy" | Privacy | [ ] | [ ] | |
| E3 | No Call button in the menu bar | nothing there | [ ] | [ ] | |
| X1 | Search magnifier | search box opens | [ ] | [ ] | |
| X2 | (i) badge, and Ctrl+F `[her Gmail username]` (Step 4) | Google's info only; `[her Gmail username]` and her Google account name nowhere | [ ] | [ ] | |
| X4 | Nothing else clickable (Step 4) | nothing fake left | [ ] | [ ] | |

**Home**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| H1 | See upcoming trips | Services & Trips | [ ] | [ ] | |
| H2 | Plan a custom trip (hero) | Plan a custom trip | [ ] | [ ] | |
| H3 | Trip name | plain text, not a link | [ ] | [ ] | |
| H4 | See the trip (each trip row; or no row at all) | that trip's page (never the Trip template at launch) | [ ] | [ ] | |
| H5 | Get in touch | Contact | [ ] | [ ] | |
| H6 | See all trips and services | Services & Trips | [ ] | [ ] | |
| H7 | Read my story | About | [ ] | [ ] | |
| H8 | Read the full review (Father Peter) | Reviews | [ ] | [ ] | |
| H9 | Read the full review (Kellie G.) | Reviews | [ ] | [ ] | |
| H10 | Read the full review (Haley E.) | Reviews | [ ] | [ ] | |
| H11 | Read more reviews | Reviews | [ ] | [ ] | |
| H12 | Plan a custom trip (dark band) | Plan a custom trip | [ ] | [ ] | |

**About**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| A1 | See upcoming trips | Services & Trips | [ ] | [ ] | |
| A2 | Plan a custom trip | Plan a custom trip | [ ] | [ ] | |
| A3 | (914) 559-8159 | plain text, not a link | [ ] | [ ] | |
| A4 | milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |

**Services & Trips**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| S1 | No "See upcoming trips" button in Two ways | nothing there | [ ] | [ ] | |
| S2 | Plan a custom trip (Two ways) | Plan a custom trip | [ ] | [ ] | |
| S3 | Trip name | plain text, not a link | [ ] | [ ] | |
| S4 | See the trip (each trip row; or no row at all) | that trip's page | [ ] | [ ] | |
| S5 | Plan a custom trip (Don't see what you want?) | Plan a custom trip | [ ] | [ ] | |

**Plan a custom trip**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| P1 | Form B: Step 3, points 1 to 11 | no sign-in; required ones refused; bad email refused; confirmation; notification; reply reaches the sender | [ ] | [ ] | |
| P2 | Rather talk? Call me at (914) 559-8159 | plain text, not a link | [ ] | [ ] | |

**Trip template now; each real trip page when it's added**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| T1 | All upcoming trips | Services & Trips | [ ] | [ ] | |
| T2 | Save my spot (top) | Form C, full screen, new tab, no sign-in | [ ] | [ ] | |
| T3 | Save my spot (Quick facts) | Form C, full screen, new tab, no sign-in | [ ] | [ ] | |
| T4 | (914) 559-8159 in "Booking for Mom or Dad?" | plain text, not a link | [ ] | [ ] | |
| T5 | Form C on the page: Step 3, points 1 to 11, plus the waitlist test | the trip is right in the response; confirmation; notification; reply reaches the sender | [ ] | [ ] | |
| T6 | Rather talk? Call me at (914) 559-8159 | plain text, not a link | [ ] | [ ] | |

**Gallery**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| G1-G18 | Each photo | nothing happens, and the "Tap or click" sentence is gone | [ ] | [ ] | |

**Reviews**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| R1 | Send me a note | Contact | [ ] | [ ] | |

**Contact**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| C1 | Big (914) 559-8159 | plain text. iPhone: note if tapping offers a call | [ ] | [ ] | |
| C2 | Big milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |
| C3 | Form A: Step 3, points 1 to 11 | no sign-in; required ones refused; confirmation; notification; reply reaches the sender | [ ] | [ ] | |
| C4 | Rather talk? Call me at (914) 559-8159 | plain text, not a link | [ ] | [ ] | |

**Phone number and domain**

| # | Check | Should be | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| PH1 | Call (914) 559-8159 (Step 2) | rings Milena | n/a | [ ] | |
| PH2 | Text (914) 559-8159 | Milena gets it | n/a | [ ] | |
| PH3 | Optional Call button (only if kept) | dialer with (914) 559-8159 on iPhone **and** Android | [ ] | [ ] | |
| D1 | https://www.onyxworldtravel.com | site, padlock | [ ] | [ ] | |
| D2 | http://www.onyxworldtravel.com | site on https, padlock | [ ] | [ ] | |
| D3 | https://onyxworldtravel.com | forwards to https://www…, padlock, no warning | [ ] | [ ] | |
| D4 | http://onyxworldtravel.com | forwards to https://www…, padlock | [ ] | [ ] | |
| D5 | onyxworldtravel.com/contact | the site (Home is fine), no error | [ ] | [ ] | |
| D6 | Email to and from milena@onyxworldtravel.com (build guide 12.8) | both arrive | [ ] | n/a | |


## For later: Milena's three-line check

Put this in her guide. After she adds a trip, or changes a form, and presses Publish:

1. Open the new trip page on your phone. Tap "See the trip" on Home, then both "Save my spot" buttons. Each one should open the booking form, with the new trip in the list.
2. Fill in the form with your own name and the word TEST, choose the new trip, and press Submit.
3. Check that Google's email arrives in your Gmail, and in your business inbox if forwarding is set up (look in Spam and Junk too). Then open the form > Responses > Individual and delete the TEST answer.


---

# Questions only you or Milena can answer

1. **Which inbox she checks every day.** Her Google account is decided: [her Gmail address], so every "new response" email lands in her Gmail. If she checks milena@onyxworldtravel.com more, set up the optional forwarding in Sitting 2 (1.5a).
2. **Reply time.** How fast does Milena usually reply? It fills [TO FILL: how fast Milena replies, e.g. within a day] in all three confirmation messages and on the Contact page. If there's no answer by launch, the words are cut (1.4).
3. **Contact form: "Phone or email".** Is one required question OK (recommended, so every message can be answered)? The alternatives are two optional boxes, as on the demo, with the risk of a message she can't answer, or a required Email.
4. **First trip.** Will a real trip be ready at launch? If not, the trip rows on Home and Services & Trips are deleted, and "Which trip?" holds only "A different trip, or I'm not sure yet".
5. **Phones for the test.** Do you have an iPhone **and** an Android for Step 2? Without both, there's no Call button: the plain number stays everywhere.
6. **Who can read the answers after hand-over.** Every Editor on a form sees every response, with names and phone numbers. Does Milena keep you as an Editor on the forms?
7. **Optional: pre-selected trip.** Google Forms can make a link that opens the booking form with one trip already chosen ("Get pre-filled link"; not researched here, UNVERIFIED). It would save visitors one click, but Milena would have to make a new link for every trip and paste it into two buttons. Recommendation: leave it out unless she's comfortable with it.
8. **Being there for Sitting 2.** The notification and reply tests (Step 3, points 8 and 9) need Milena, her Gmail, and her business inbox (for the reply test and any forwarding). Will she be at the keyboard, in person or on a screen share?


---

## Sources

Google:

- Forms:
  - support.google.com/docs/answer/139706 (responses, Individual view, email notifications, collecting email addresses, copies to responders, Link to Sheets; responders can contact the owner, with "Block the sender" at the bottom of "the email with their feedback")
  - support.google.com/docs/answer/2839588 (Publish, Manage, who can respond, confirmation message, Copy responder link, Shorten URL, View results summary)
  - support.google.com/docs/answer/7322334 (question types, Description, Required, File upload needs sign-in)
  - support.google.com/docs/answer/3378864 (Response validation, Custom error text)
  - support.google.com/docs/community-guide/395355672 (Product Expert guide: what forces respondents to sign in)
  - support.google.com/docs/answer/15473134 (Report a problem, Contact form owner: the visitor's name and email are shared with the message)
- Sites:
  - support.google.com/sites/answer/90569 (Insert > Forms, embedding)
  - support.google.com/sites/answer/90538 (buttons, links, social links)
  - support.google.com/sites/answer/98216 (pages, navigation, footer)
  - support.google.com/sites/answer/6372880 (publishing, Preview)
  - support.google.com/sites/answer/9068867 (custom domains)
- Gmail:
  - support.google.com/mail/answer/10957 (forwarding: add and confirm a forwarding address, forward only some messages with a filter, the first-week notice, spam isn't forwarded)
  - support.google.com/mail/answer/6579 (filters: Filter messages like these, Forward it)
- Storage:
  - support.google.com/googleone/answer/9312312 (15 GB shared by Gmail, Drive and Photos; over quota, Gmail can be affected and nobody can edit the forms)
  - support.google.com/drive/answer/6374270 (a full account can't send or receive email; messages to it go back to the sender)

Third-party, used to fill gaps:

- sites.google.com/view/new-sites-testing (Product Expert test site: mailto-link, click-to-call, external-links, links in navigation)
- k8oms.net/links/click-to-call
- rahmanzeb.com/how-to-add-click-to-call-button-in-google-sites ("does not accept something like tel:")
- formswrite.com/blog/google-forms-email-notifications (what the notification email contains; it goes to the account that switched it on)
- nerdy-form.com/blog/google-forms-notifications, qualtir.com/blog/google-forms-email-notification (the likely sender, forms-receipts-noreply@google.com)
- steegle.com/google-sites/how-to/add-buttons (button behaviour)

Local evidence:

- The demo's forms: `/home/user/melina_website/src/_includes/partials/contact-form.njk`, `custom-trip-form.njk`, `booking-form.njk`, and the error messages in `src/assets/js/site.js`
- The thank-you pages: `gs/site/thanks/`
- Published-Sites HTML and viewer code: `gs/research/dl/`
- A live personal-account Google Form and two personal-account Sites, saved signed out (2026-11-23): `gs/work/gmail/live/` (the form's footer links in X3; no owner email in any of them)
- The clickable inventory script and its output: `gs/work/forms3/` (`links.py`, `links.txt`, `clickables.mjs`, `clickables.json`)
