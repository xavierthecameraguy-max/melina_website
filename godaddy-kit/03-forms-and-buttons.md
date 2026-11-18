# Onyx World Travel: forms, buttons and links

For Xavier. The rule is **no fake buttons**: every button, link and form on the GoDaddy site must really do something. This file has three parts:

1. **Forms**: the four forms, field by field, and where the messages go.
2. **Every button and link**: everything clickable on the Sunny Passport demo, and what it must be linked to in GoDaddy.
3. **No-fake-buttons test**: a tick list to run on the published site, on a phone and on a computer, before launch.

How the list in part 2 was made: a script read every page of the built Sunny Passport site and listed everything clickable. A browser then opened each page at computer size and at phone size and listed it again, after the site's own scripts had run, so nothing added on the page was missed. The demo has **87 clickable things** (the header and footer counted once, the thank-you and "page not found" pages included), plus the form fields. Every link on the demo leads to a real page and, where it points to a section, to a real section, so the places listed below are right.

Page names and section names match the text file, 01-text-to-paste.md (for example "Services & Trips page, Upcoming Trips section").


## Words used in this file

- **Page link**: goes to another page of the site.
- **Section link**: goes to one section lower down a page, such as the Upcoming Trips section of the Services & Trips page. The research couldn't confirm that GoDaddy can link to a section (check in the editor). If it can't, link to the whole page instead. If the button is already on that page, delete the button.
- **Phone link**: tapping it starts a call to (914) 559-8159. The full link is `tel:+19145598159`.
- **Email link**: opens a new email addressed to milena@onyxworldtravel.com. The full link is `mailto:milena@onyxworldtravel.com`.
- **[TO FILL: ...]**: nobody knows this yet. Paste it as it is, so it's easy to spot and fill in later. Don't guess.
- **(check in the editor)**: the research couldn't confirm that GoDaddy does this. Look in the editor before you rely on it.


## How to set each kind of link in GoDaddy

The research couldn't open GoDaddy's editor, so check each of these in the editor once, then use the way that works everywhere.

1. Select the button, or highlight the words, and open its link setting.
2. **Page**: choose the page from the list.
3. **Section**: if the link setting offers sections of a page, choose the section (check in the editor). If it doesn't, see "Section link" above.
4. **Phone**: if there is a phone choice, type 914-559-8159. If the box only takes a web address, type `tel:+19145598159` (check in the editor).
5. **Email**: if there is an email choice, type milena@onyxworldtravel.com. If the box only takes a web address, type `mailto:milena@onyxworldtravel.com` (check in the editor).
6. **If none of these works for a button or link: delete it.** The phone number or email address may stay on the page as plain text, as long as it isn't underlined or colored like a link. A link that goes nowhere is never OK.


---

# Part 1. Forms

The demo has four forms. In GoDaddy, each one is a **Contact Us section with "Contact Form" turned on**, placed on its own page.

| Form | Page | Form title |
|---|---|---|
| 1. Contact | Contact | Send me a message |
| 2. Custom trip | Services & Trips | Tell me about your dream trip |
| 3. Trip booking | each trip page (start on the hidden Trip template page) | Save my spot |
| 4. Waitlist | the same trip page, once the trip is sold out | Join the waitlist |


## Set-up that applies to all four forms

**Send Message To**
- Type milena@onyxworldtravel.com into "Send Message To" on every form, even if something already looks filled in.
- If it is left empty, messages go to the GoDaddy account's main email, which may be a different address.

**Where the messages go**
- Each message is emailed to milena@onyxworldtravel.com. It comes from an address ending in mail.conversations.godaddy.com.
- A copy is also kept in GoDaddy's **Conversations** inbox (My Products > the website > Conversations) (check in the editor).
- GoDaddy suggests answering with the **"Reply to Conversation"** button in that email. Part 3 tests which way of replying actually reaches the traveler.

**Fields**
- Edit Form Fields > Add > type the Field Name > pick the Input Type > Done.
- Drag fields to put them in the order below.
- Select a field to rename it, make it required, or remove it.
- Remove any field GoDaddy added that isn't in the tables below, except Email, which can't be removed.

**Required**
- Turn "Required" on only where the table says **Yes**.
- Don't type "(required)" into the field name. GoDaddy marks required fields itself (check in the editor).

**Field types**
GoDaddy doesn't publish its list of field types (Input Types). Open the list once and use the first type that exists:

| The table says | Pick this in GoDaddy |
|---|---|
| Short text | the one-line text type |
| Phone | a Phone type if there is one, otherwise short text (check in the editor) |
| Email | GoDaddy's own Email field, already in every form. It can't be deleted. |
| Long text | a multi-line or paragraph type if there is one, otherwise short text (check in the editor) |
| Choices | Radio buttons if the list has them, otherwise Dropdown (check in the editor) |

**Choices**
- Type each choice exactly as shown, in the same order, as its own choice.
- In the tables the choices are separated by " / ". Don't type the slash.
- If a dropdown shows its first choice already picked, with no empty "pick one" line on top (check in the editor), add a first choice: `Choose one`. Otherwise everyone who skips the question would seem to have picked the first answer. For example, "How many travelers?" would always say 1.

**Email: required or not**
On the demo, Email is optional on every form. Whether GoDaddy lets Email be optional is not known (check in the editor). Each form below says what to do in both cases.

**Hints**
- On the demo, some fields have a short hint under the label.
- If GoDaddy's field has a place for hint or placeholder text (check in the editor), paste the hint there. If not, skip it.

**Turn these off**
- **Attachments**: off. People don't need to send files.
- **Show Email Opt-In**: off. Milena has no mailing list, so a "sign me up" box would lead nowhere.

**Send button text**
- Change it to the words in the table if GoDaddy lets you (check in the editor).
- If not, GoDaddy's own word (for example "Send") is fine. It still sends.

**Confirmation message**
- This is what people see after they press Send.
- Paste the one given for each form if GoDaddy lets you edit it (check in the editor).
- If not, GoDaddy's own message is fine.
- The demo's separate thank-you pages are not rebuilt, because GoDaddy has no documented way to send a form to its own page (check in the editor).

**Spam**
- GoDaddy appears to add Google's spam check (reCAPTCHA) to forms by itself (check in the editor). There's nothing to set up.

**Left out on purpose**
These are things the demo did that GoDaddy can't. They are dropped, not faked:
- The "phone or email, either is fine" check on the Contact form.
- The demo's own error messages. GoDaddy shows its own when a required field is empty.
- The separate thank-you pages, and their buttons.
- A different email subject line for each form. The field names show which form a message came from.
- The line "This opens your email app with your answers, addressed to Milena and ready to send." It was only true on the demo. Don't copy it.


## Form 1. Contact: "Send me a message"

| | |
|---|---|
| **Page** | Contact page, section "Contact 3. Send me a message" in the text file |
| **Form title** | Send me a message |
| **Text above the form** | none |
| **Send Message To** | milena@onyxworldtravel.com |
| **Send button** | Send message |
| **Text under the form** | Rather talk? Call me at (914) 559-8159 |
| **Link in that text** | "Call me at (914) 559-8159" is a phone link. If the section has no room under the form (check in the editor), put this line just above the form, or in a short text section right below it. |
| **Confirmation message** | Thank you! Your message is on its way to me. I'll get back to you [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159. |
| **Where it goes** | Email to milena@onyxworldtravel.com, plus a copy in GoDaddy's Conversations inbox |

| # | Field name (type exactly) | Type | Required | Hint | Choices, in order |
|---|---|---|---|---|---|
| 1 | Name | Short text | Yes | none | |
| 2 | Phone | Phone | No | Phone, email or both, whichever you prefer. | |
| 3 | Email | Email (GoDaddy's own) | see below | none | |
| 4 | Best way to reach you | Choices | No | none | Call / Text / Email |
| 5 | Message | Long text | Yes | none | |

**Email on this form.** GoDaddy can't check "phone or email, at least one". So a message could arrive with no way to answer it.
- **Recommended:** make Email required, or leave it required if GoDaddy forces it. Delete the Phone hint, because it would no longer be true. Milena answers these messages by email, and people who'd rather not email have the phone number right under the form.
- **Closer to the demo:** if Email can be optional, keep it optional and keep the Phone hint. Then accept that an occasional message may have no phone and no email. See the open questions.


## Form 2. Custom trip: "Tell me about your dream trip"

| | |
|---|---|
| **Page** | Services & Trips page, inside the Custom Trip Planner section, after the three steps ("Services 6" in the text file) |
| **Form title** | Tell me about your dream trip |
| **Text above the form** | none |
| **Send Message To** | milena@onyxworldtravel.com |
| **Send button** | Send my trip idea |
| **Text under the form** | Rather talk? Call me at (914) 559-8159 |
| **Link in that text** | "Call me at (914) 559-8159" is a phone link (same placement note as Form 1) |
| **Confirmation message** | Got it! I'll start dreaming up ideas and get back to you with a quote [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159. |
| **Where it goes** | Email to milena@onyxworldtravel.com, plus a copy in GoDaddy's Conversations inbox |

| # | Field name (type exactly) | Type | Required | Hint | Choices, in order |
|---|---|---|---|---|---|
| 1 | Name | Short text | Yes | none | |
| 2 | Phone | Phone | Yes | none | |
| 3 | Email | Email (GoDaddy's own) | No, if GoDaddy allows | If you leave this blank, I'll get back to you by phone. | |
| 4 | Where would you like to go? | Short text | Yes | Not sure yet? Just tell me what sounds fun. | |
| 5 | When are you thinking? | Short text | No | A month, a season or exact dates. | |
| 6 | How many travelers? | Choices | Yes | none | 1 / 2 / 3 to 4 / 5 to 8 / 9 or more |
| 7 | Who's coming? | Choices | No | none | Just me / A couple / Family / A group of friends |
| 8 | What pace do you like? | Choices | No | none | Easy and relaxed / A good mix / Pack it in |
| 9 | Rough budget per person | Short text | No | A ballpark is fine, or "not sure yet". | |
| 10 | Anything else? | Long text | No | Must-sees, mobility needs, special occasions. | |

If GoDaddy forces Email to be filled in, delete the Email hint, because it would no longer be true.


## Form 3. Trip booking: "Save my spot"

Build it once, on the hidden **Trip template** page. Every real trip page is a copy of that page, so each copy has its own form. On each copy, check "Send Message To" and the Trip field again.

| | |
|---|---|
| **Page** | Each trip page, the Save my spot section at the bottom ("Trip 8" in the text file) |
| **Form title** | Save my spot |
| **Text above the form, line 1** | Booking for Mom or Dad? Call me at (914) 559-8159, I'm happy to talk it through. |
| **Link in line 1** | "(914) 559-8159" is a phone link |
| **Text above the form, line 2** | Trip: [TO FILL: Trip name] · [TO FILL: Dates, e.g. June 1 to 10, 2027] |
| **Send Message To** | milena@onyxworldtravel.com |
| **Send button** | Save my spot |
| **Text under the form** | Rather talk? Call me at (914) 559-8159 |
| **Link in that text** | "Call me at (914) 559-8159" is a phone link |
| **Second line under the form** | No payment yet. I'll be in touch to confirm your spot and explain payment. |
| **Confirmation message** | Got it! Your request to save a spot is on its way to me. There's nothing to pay yet. I'll be in touch [TO FILL: how fast Milena replies, e.g. within a day] to confirm your spot and explain payment. If it's urgent, call me at (914) 559-8159. |
| **Where it goes** | Email to milena@onyxworldtravel.com, plus a copy in GoDaddy's Conversations inbox |

| # | Field name (type exactly) | Type | Required | Hint | Choices, in order |
|---|---|---|---|---|---|
| 1 | Trip | Choices, as a Dropdown with one choice | Yes | none | [TO FILL: Trip name], [TO FILL: Dates, e.g. June 1 to 10, 2027] |
| 2 | Full name | Short text | Yes | none | |
| 3 | Phone | Phone | Yes | none | |
| 4 | Email | Email (GoDaddy's own) | No, if GoDaddy allows | If you leave this blank, I'll confirm by phone. | |
| 5 | How many people are traveling? | Choices | Yes | Count yourself if you're coming. | 1 / 2 / 3 / 4 / 5 / 6 or more |
| 6 | Room | Choices | No | none | A room to myself / Sharing with someone I know / Not sure yet |
| 7 | Anything I should know? | Long text | No | Walking or mobility needs, food needs, questions. Anything at all. | |
| 8 | State you live in | Short text | No | none | |

- **The Trip field.** On the demo, the trip was filled in by itself and hidden. GoDaddy can't do that, and without it Milena can't tell which trip a request is for.
  - A dropdown with just the one trip works like a filled-in answer.
  - If a one-choice dropdown doesn't work (check in the editor), use a required short text field named `Which trip?` instead.
  - For this field, don't add the "Choose one" line from the set-up notes.
- If GoDaddy forces Email to be filled in, delete the Email hint.
- The research plan lists this form slightly differently: "State" before "Anything I should know?", and the choices "1-5 / 6 or more". The table above is what the real site has. Use the table.


## Form 4. Waitlist: "Join the waitlist" (a trip that is sold out)

This is **the same form as Form 3, on the same trip page**. GoDaddy can't hide a section or switch between two forms (check in the editor), so when a trip sells out the booking form's words are changed. The fields stay the same.

| | |
|---|---|
| **Page** | The sold-out trip's page, the same section as Form 3 |
| **Form title** | Join the waitlist (replaces "Save my spot") |
| **Text above the form, line 1** | Stays: Booking for Mom or Dad? Call me at (914) 559-8159, I'm happy to talk it through. (phone link stays) |
| **Text above the form, line 2** | Stays: the "Trip: ..." line with the trip's name and dates, as in Form 3 |
| **Send Message To** | milena@onyxworldtravel.com (check that it's still there) |
| **Send button** | Join the waitlist |
| **Text under the form** | Stays: Rather talk? Call me at (914) 559-8159 (phone link stays) |
| **Second line under the form** | No payment. I'll let you know as soon as a spot opens up. (replaces "No payment yet. I'll be in touch...") |
| **Confirmation message** | You're on the list! I'll let you know as soon as a spot opens up. There's nothing to pay. If it's urgent, call me at (914) 559-8159. |
| **Where it goes** | Email to milena@onyxworldtravel.com, plus a copy in GoDaddy's Conversations inbox |

**Fields:** exactly as in Form 3, with one change. In the Trip dropdown, add ` (waitlist)` to the end of the one choice, for example: `[TO FILL: Trip name], [TO FILL: Dates, e.g. June 1 to 10, 2027] (waitlist)`.
- The demo told the two apart by the email's subject line ("Waitlist request" or "Trip booking request"). GoDaddy probably can't set a subject per form (check in the editor). This word in the message does the same job.
- This is new wording, not on the demo. Drop it if you'd rather not.

**Elsewhere on the same page:**
- The two "Save my spot" buttons become "Join the waitlist". They still link to this section.
- The "Spots open" label becomes "Sold out: join the waitlist".

**On the trip's cards on Home and Services & Trips:** "Spots open" becomes "Sold out: join the waitlist".

All of these words are in the text file, section 12.


---

# Part 2. Every button and link

Each row is one clickable thing on the demo. The columns:
- **#**: the number used in the test in part 3.
- **Demo link**: where it goes on the demo.
- **In GoDaddy, link it to**: what to set it to.
- **If GoDaddy can't**: what to do instead. Nothing is ever left pointing nowhere.

Rows marked **REMOVE** have no real place to go in GoDaddy, so they are dropped rather than faked.

## Every page: header and footer (22 on the demo, plus 1 new)

GoDaddy builds the header and footer once for the whole site, so they're listed once.

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| E1 | Skip to main content | hidden; shows only when using the keyboard | the page's main section | not rebuilt | **REMOVE.** It's a keyboard shortcut GoDaddy handles its own way. Nothing to build. |
| E2 | Logo "Onyx World Travel" | header | Home | Home page | GoDaddy's logo usually goes to Home by itself (check in the editor) |
| E3 | Call (914) 559-8159 | header button, every page | phone | phone link | The header has a single Action button. Use it for this if it can be set to call a phone (check in the editor). If it can't, or if you use it for E23 instead, **REMOVE** this one. The phone number stays reachable from the footer (E12) and the Contact page. Never point it at a page instead. See the open questions. |
| E4 | Menu (phones only) | header | opens the menu | GoDaddy's own phone menu | GoDaddy makes this by itself. Test that it opens and that all 6 pages work. |
| E5 | Home | header menu | Home | Home page | |
| E6 | About | header menu | About | About page | |
| E7 | Services & Trips | header menu | Services & Trips | Services & Trips page | |
| E8 | Gallery | header menu | Gallery | Gallery page | |
| E9 | Reviews | header menu | Reviews | Reviews page | |
| E10 | Contact | header menu | Contact | Contact page | |
| E11 | Logo "Onyx World Travel" | footer | Home | not rebuilt | **REMOVE.** GoDaddy footers can't hold pictures. If the business name shows as text in the footer, it doesn't need to be a link. |
| E12 | Call (914) 559-8159 | footer, "Get in touch" | phone | phone link | Put it in the footer's text, which can hold links (check in the editor that a phone link works there). If the footer layout shows the phone number by itself, check whether tapping it calls. If it doesn't, it must look like plain text. |
| E13 | milena@onyxworldtravel.com | footer, "Get in touch" | email | email link | same as E12 |
| E14 | Send me a message | footer, "Get in touch" | Contact | Contact page | If the footer text can't hold this link, drop the words. The Contact menu item does the same job. |
| E15 | Home | footer menu ("Explore") | Home | Home page | The footer menu comes from each page's settings: turn "show in footer" on |
| E16 | About | footer menu | About | About page | same |
| E17 | Services & Trips | footer menu | Services & Trips | Services & Trips page | same |
| E18 | Gallery | footer menu | Gallery | Gallery page | same |
| E19 | Reviews | footer menu | Reviews | Reviews page | same |
| E20 | Contact | footer menu | Contact | Contact page | same |
| E21 | Terms & conditions | footer, copyright line | Terms | Terms & conditions page | footer menu (page set to footer only), or a link in the copyright text |
| E22 | Privacy | footer, copyright line | Privacy | Privacy page | same as E21 |
| E23 | Plan a custom trip | header Action button (new in GoDaddy; the demo's header had only the call button) | none | section link: Services & Trips page, Custom Trip Planner section | The build plan and the text file use the Action button for this. If GoDaddy can't link to the section, link to the Services & Trips page. Only one of E3 and E23 can be the Action button. |

## Home (11 on the demo)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| H1 | See upcoming trips | top of the page, first button | Services & Trips, Upcoming Trips section | section link: Services & Trips page, Upcoming Trips section | If GoDaddy can't link to a section, link to the Services & Trips page |
| H2 | Plan a custom trip | top of the page, second button (button row in GoDaddy) | Services & Trips, Custom Trip Planner section | section link: Services & Trips page, Custom Trip Planner section | same |
| H3 | [TO FILL: Trip name] | trip card, "Where are we going next?" | the trip page | that trip's own page | On the demo the whole card was one link. In GoDaddy, the trip name and "See the trip" (H4) are the links. If the card's photo can be linked (check in the editor), link it to the trip page too; if not, it's just a picture. **If no real trip is ready at launch, delete the trip card. Don't link to the unfinished Trip template.** The "More trips are on the way" card stays. |
| H4 | See the trip | trip card | the trip page (part of the card link) | that trip's own page | same as H3 |
| H5 | Get in touch | "More trips are on the way" card | Contact | Contact page | |
| H6 | See all trips and services | button under the trip cards | Services & Trips | Services & Trips page | |
| H7 | Read my story | "Ten-plus years" section | About | About page | |
| H8 | Read the full review | Father Peter's quote | Reviews, Father Peter's review | section link: Reviews page, Father Peter's review | If GoDaddy can't link to a section, link to the Reviews page |
| H9 | Read the full review | Kellie G.'s quote | Reviews, Kellie G.'s review | section link: Reviews page, Kellie G.'s review | same |
| H10 | Read the full review | Haley E.'s quote | Reviews, Haley E.'s review | section link: Reviews page, Haley E.'s review | same |
| H11 | Read more reviews | button under the quotes | Reviews | Reviews page | |
| H12 | Plan a custom trip | dark band, "Got a place in mind?" | Services & Trips, Custom Trip Planner section | section link: Services & Trips page, Custom Trip Planner section | If GoDaddy can't link to a section, link to the Services & Trips page |

(H3 and H4 count as one link on the demo, so the Home page has 11.)

## About (4)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| A1 | See upcoming trips | button under "A little more about me" | Services & Trips, Upcoming Trips section | section link: Services & Trips page, Upcoming Trips section | If GoDaddy can't link to a section, link to the Services & Trips page |
| A2 | Plan a custom trip | button next to A1 | Services & Trips, Custom Trip Planner section | section link: Services & Trips page, Custom Trip Planner section | same |
| A3 | (914) 559-8159 | "Milena at a glance", Call or text | phone | phone link | If text can't hold a phone link, leave the number as plain text that doesn't look like a link |
| A4 | milena@onyxworldtravel.com | "Milena at a glance", Email | email | email link | same, for email |

## Services & Trips (6)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| S1 | See upcoming trips | "Upcoming Trips" box at the top | this page, Upcoming Trips section | section link: this page, Upcoming Trips section | **REMOVE if GoDaddy can't link to a section.** A link to the page it's already on does nothing. |
| S2 | Plan a custom trip | "Custom Trip Planner" box at the top | this page, Custom Trip Planner section | section link: this page, Custom Trip Planner section | **REMOVE if GoDaddy can't link to a section** |
| S3 | [TO FILL: Trip name] + See the trip | trip card, Upcoming Trips | the trip page | that trip's own page | Same as H3 and H4, including: no real trip yet means no trip card |
| S4 | Plan a custom trip (words at the end of "I'll design a trip just for you.") | "Don't see what you want?" card | this page, Custom Trip Planner section | section link: this page, Custom Trip Planner section | If GoDaddy can't link to a section, **leave the words as plain text** (no link, not underlined) |
| S5 | Send my trip idea | Form 2's send button | sends the form | GoDaddy's form send button, set up as in Form 2 | Must deliver to milena@onyxworldtravel.com (part 3 test) |
| S6 | Call me at (914) 559-8159 | under Form 2 | phone | phone link | |

## Trip page (6; each trip page has the same ones)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| T1 | All upcoming trips | small link at the very top | Services & Trips, Upcoming Trips section | section link: Services & Trips page, Upcoming Trips section | If GoDaddy can't link to a section, link to the Services & Trips page |
| T2 | Save my spot | button under the trip name | this page, Save my spot section (the form) | section link: this page, Save my spot section | **REMOVE if GoDaddy can't link to a section.** The form is still there at the bottom of the page. |
| T3 | Save my spot | button under Quick facts | this page, Save my spot section | section link: this page, Save my spot section | **REMOVE if GoDaddy can't link to a section** |
| T4 | (914) 559-8159 | "Booking for Mom or Dad?" line above the form | phone | phone link | |
| T5 | Save my spot | Form 3's send button | sends the form | GoDaddy's form send button, set up as in Form 3 | Must deliver to milena@onyxworldtravel.com (part 3 test) |
| T6 | Call me at (914) 559-8159 | under Form 3 | phone | phone link | |

**Only after a trip sells out** (text file, section 12):

| # | Words on it | Where | In GoDaddy, link it to | Notes |
|---|---|---|---|---|
| T7 | Join the waitlist | replaces T2 and T3 | section link: this page, Save my spot section (now "Join the waitlist") | Same rule as T2: remove if GoDaddy can't link to a section |
| T8 | Join the waitlist | Form 4's send button | GoDaddy's form send button | Must deliver to milena@onyxworldtravel.com |

**Only after a trip is over** (text file, section 12):

| # | Words on it | Where | In GoDaddy, link it to | Notes |
|---|---|---|---|---|
| T9 | See my upcoming trips | replaces T2 | section link: Services & Trips page, Upcoming Trips section | Or the Services & Trips page |
| T10 | See upcoming trips | dark band "This one has wrapped up", replaces the form | section link: Services & Trips page, Upcoming Trips section | Or the Services & Trips page |
| - | T3, T4, T5, T6 | | **REMOVE** along with the form section and the Quick facts button | |

## Gallery (18 photos, plus the Close button)

| # | Words on it | Where | Demo link | In GoDaddy | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| G1 | each of the 18 photos | photo gallery | opens the photo bigger, with its caption | GoDaddy's Photo Gallery section. Whether clicking a photo shows it bigger is not confirmed (check in the editor). | If photos get bigger in Preview: keep them, and test all 18. If they don't: the photos are just pictures, and **delete the sentence "Tap or click any photo to see it bigger."** from the top of the page, so the page doesn't promise something that doesn't happen. Don't add links to the captions (GoDaddy allows it; there's nowhere for them to go). |
| G2 | Close | on the big photo | closes it | GoDaddy's own, if the big view exists | If the big view exists, check that it closes on a phone and a computer |

## Reviews (1)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| R1 | Send me a note | "Traveled with me before?" at the bottom | Contact | Contact page | |

The three reviews have no links in them. If you use GoDaddy's built-in Reviews section anywhere, make sure it shows no "read more", star or "write a review" button that goes nowhere. The text file uses plain text sections for the reviews, so this shouldn't come up.

## Contact (4)

| # | Words on it | Where | Demo link | In GoDaddy, link it to | If GoDaddy can't / notes |
|---|---|---|---|---|---|
| C1 | (914) 559-8159 | "Call me", big text | phone | phone link | If text can't hold a phone link, use a button set to call (check in the editor). As a last resort, plain text that doesn't look like a link. |
| C2 | milena@onyxworldtravel.com | "Email me", big text | email | email link | same, for email |
| C3 | Send message | Form 1's send button | sends the form | GoDaddy's form send button, set up as in Form 1 | Must deliver to milena@onyxworldtravel.com (part 3 test) |
| C4 | Call me at (914) 559-8159 | under Form 1 | phone | phone link | |

## Terms & conditions, Privacy (0)

Only the header and footer. The page text has no links.

## Not rebuilt on purpose (nothing to test except what's noted)

| # | What | Where on the demo | What happens in GoDaddy |
|---|---|---|---|
| N1 | "call me at (914) 559-8159" (phone link) | the 4 thank-you pages | **REMOVE** the pages. The words become part of each form's confirmation message, where the number is plain text. That's fine, because it doesn't look like a link. |
| N2 | See upcoming trips | the 4 thank-you pages | **REMOVE** (the thank-you pages aren't built) |
| N3 | Back to home | the 4 thank-you pages | **REMOVE** |
| N4 | See upcoming trips, Back to home | the "page not found" page | GoDaddy's own "page not found" page is used. Only if GoDaddy lets you edit it (check in the editor), add these two buttons: See upcoming trips links to the Services & Trips page, Upcoming Trips section; Back to home links to the Home page. |
| N5 | Error list with links to each empty field | demo forms, after pressing Send with blanks | GoDaddy shows its own messages for empty required fields. Part 3 tests that they appear. |
| N6 | Radio buttons on the forms | demo forms | Radio buttons or dropdowns, as in part 1 |

## Things GoDaddy may add by itself: each must work, or be turned off

Some themes and sections add clickable things that weren't on the demo. Look for each of these in the editor and in Preview.

| # | What | What to do |
|---|---|---|
| X1 | Social media icons (Facebook, Instagram...) in the header or footer | Milena has no social accounts on the demo. **Turn them all off.** An icon that goes to a blank or wrong page is a fake button. Add one later only when she has a real account. |
| X2 | "Sign me up" or email opt-in box on forms | Off (part 1) |
| X3 | Attachments button on forms | Off (part 1) |
| X4 | Address, map or opening hours shown next to a form (the Contact Us section may show contact details beside the form) (check in the editor) | Turn off address, map and hours. She has no public address on the site, only "Based in Kentucky". Phone and email may stay if they're working links, or plain text that doesn't look like a link. |
| X5 | A chat bubble or "message us" button (check in the editor) | Off, unless Milena wants to answer chats. If she does, test it like a form. |
| X6 | Pay button, shopping cart, sign-in or account icon, online appointments "Book" button, subscribe pop-up | None of these is used. **Turn them off.** |
| X7 | "Powered by GoDaddy" link in the footer | A real link, so it's fine. Paid plans can remove it. |
| X8 | Cookie notice | If GoDaddy shows one, it's a real working button. Fine. |


---

# Part 3. No-fake-buttons test, before launch

Run this on the **published** site, not in the editor, and not only in Preview: Preview may not send forms (check in the editor).

## What you need

- The published site. If onyxworldtravel.com isn't connected yet, use GoDaddy's own address for the site now, and repeat the short round in step 6 once the domain is connected.
- A computer.
- A phone (iPhone or Android). Ideally test on both kinds.
- Your own email address for test entries. **Not milena@onyxworldtravel.com**, so you can check that replies reach the sender.
- Milena, or her permission, to look in the milena@onyxworldtravel.com inbox, including Spam or Junk.
- A private (incognito) window on the computer, so you see what visitors see.

## Step 1. Tap every button and link

Go through the tick sheet below, page by page, once on the computer and once on the phone. A box is ticked only when it lands in the right place:

- **Page link:** the right page opens.
- **Section link:** the right page opens at the right section.
- **Phone link, on the phone:** the phone's dialer opens with (914) 559-8159 filled in. Call once to make sure it rings Milena.
- **Phone link, on the computer:** it's fine if the computer offers to call with an app, or asks which app to use. It must not open an error page.
- **Email link:** a new email opens addressed to milena@onyxworldtravel.com. On a computer with no email app set up, it may ask which app to use. That's fine. If it opens an error page, it fails.
- **Header and footer:** test all of them on the Home page. On every other page, tap the logo, the header button and one menu item.

## Step 2. Send each form once

Do this for each form: Contact (Form 1), Custom trip (Form 2), Booking (Form 3, on the Trip template page or the first real trip page), and Waitlist (Form 4).

**To test the waitlist before launch:**
1. On the hidden Trip template page, make the Form 4 changes from part 1.
2. Send the test.
3. Change the words back.

The page is hidden from the menu, so visitors won't see it. This also checks that the sold-out steps in Milena's guide work.

**For each form:**

1. **Press Send with everything empty.** GoDaddy must refuse and point to the required fields. Check that exactly the fields marked "Yes" in part 1 are required.
2. **Fill in a test entry:**
   - Name: `TEST from Xavier, please ignore`
   - Phone: your own number
   - Email: your own test address
   - Pick an answer for every choice question
   - In the last box, write: `Test of the Contact form, Nov 20` (with that form's name and today's date)

   Press Send.
3. **The confirmation message appears on the page**, with the words for that form from part 1, or GoDaddy's own message if it can't be edited. No error.
4. **The email arrives at milena@onyxworldtravel.com** within about 10 minutes.
   - Not in the inbox? Look in Spam or Junk.
   - If it's there, mark it "Not spam" and add the sender (the address ending in mail.conversations.godaddy.com) to her contacts.
   - Not there at all? Check "Send Message To" on that form.
5. **The email shows every answer** next to its field name. For the booking form it must show the trip name. For the waitlist it must show "(waitlist)". Also note what the subject line says.
6. **Reply goes back to the sender.**
   - Press Reply in that email, write `Test reply`, and send it.
   - Check your own test inbox: the reply must arrive.
   - If a plain Reply doesn't reach you, try the "Reply to Conversation" button in the email.
   - Write down which one works. That goes in Milena's guide as the one way she answers.
   - If neither reaches you, Milena's guide must tell her to write a new email to the address in the message. Also tell me, because that's worth a call to GoDaddy support.
7. **The message is also in GoDaddy's Conversations inbox** (check in the editor).
8. Send one more test from **the phone** (the Contact form is enough), to check that the form works on a small screen.
9. Afterwards, delete the test messages from her inbox and from Conversations.

## Step 3. Look for anything clickable that isn't on the list

On every page, on both devices, look for buttons, icons or underlined words that aren't on the tick sheet. They're usually GoDaddy additions (X1 to X8). Each one must work, or be turned off.

## Step 4. Anything that fails

1. Write it in the "Fixed or removed" column.
2. Fix it. If it can't be fixed, delete it (or turn the words into plain text that doesn't look like a link).
3. Test it again.

**Launch only when every box is ticked or the item is removed.**

## Step 5. Tick sheet

Rows marked "if kept" only apply if the item wasn't removed because GoDaddy can't link to a section.

**Every page (test all on Home; on the other pages: logo, header button, one menu item)**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| E2 | Logo | Home | [ ] | [ ] | |
| E3 or E23 | Header button | Call: dialer with (914) 559-8159 / Plan a custom trip: Services & Trips, Custom Trip Planner | [ ] | [ ] | |
| E4 | Phone menu: opens, closes | the menu opens and closes | n/a | [ ] | |
| E5 | Home (menu) | Home | [ ] | [ ] | |
| E6 | About (menu) | About | [ ] | [ ] | |
| E7 | Services & Trips (menu) | Services & Trips | [ ] | [ ] | |
| E8 | Gallery (menu) | Gallery | [ ] | [ ] | |
| E9 | Reviews (menu) | Reviews | [ ] | [ ] | |
| E10 | Contact (menu) | Contact | [ ] | [ ] | |
| E12 | Footer: Call (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |
| E13 | Footer: milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |
| E14 | Footer: Send me a message | Contact | [ ] | [ ] | |
| E15-E20 | Footer menu: Home, About, Services & Trips, Gallery, Reviews, Contact | each page | [ ] | [ ] | |
| E21 | Footer: Terms & conditions | Terms & conditions | [ ] | [ ] | |
| E22 | Footer: Privacy | Privacy | [ ] | [ ] | |
| X1-X8 | No social icons, chat bubble, map, cart, sign-in or pop-up that goes nowhere | nothing fake left | [ ] | [ ] | |

**Home**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| H1 | See upcoming trips | Services & Trips, Upcoming Trips | [ ] | [ ] | |
| H2 | Plan a custom trip | Services & Trips, Custom Trip Planner | [ ] | [ ] | |
| H3 | Trip name (and the photo, if linked) | that trip's page | [ ] | [ ] | |
| H4 | See the trip | that trip's page | [ ] | [ ] | |
| H5 | Get in touch | Contact | [ ] | [ ] | |
| H6 | See all trips and services | Services & Trips | [ ] | [ ] | |
| H7 | Read my story | About | [ ] | [ ] | |
| H8 | Read the full review (Father Peter) | Reviews (his review, if section links work) | [ ] | [ ] | |
| H9 | Read the full review (Kellie G.) | Reviews (her review, if section links work) | [ ] | [ ] | |
| H10 | Read the full review (Haley E.) | Reviews (her review, if section links work) | [ ] | [ ] | |
| H11 | Read more reviews | Reviews | [ ] | [ ] | |
| H12 | Plan a custom trip (dark band) | Services & Trips, Custom Trip Planner | [ ] | [ ] | |

**About**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| A1 | See upcoming trips | Services & Trips, Upcoming Trips | [ ] | [ ] | |
| A2 | Plan a custom trip | Services & Trips, Custom Trip Planner | [ ] | [ ] | |
| A3 | (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |
| A4 | milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |

**Services & Trips**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| S1 | See upcoming trips (if kept) | Upcoming Trips section, same page | [ ] | [ ] | |
| S2 | Plan a custom trip (if kept) | Custom Trip Planner section, same page | [ ] | [ ] | |
| S3 | Trip name / See the trip | that trip's page | [ ] | [ ] | |
| S4 | Plan a custom trip, in "Don't see what you want?" (if a link) | Custom Trip Planner section, same page | [ ] | [ ] | |
| S5 | Form 2: empty Send is refused; test entry sent | confirmation shows; email arrives; Reply reaches the sender | [ ] | | |
| S6 | Call me at (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |

**Trip page (Trip template now; each real trip page when it's added)**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| T1 | All upcoming trips | Services & Trips, Upcoming Trips | [ ] | [ ] | |
| T2 | Save my spot, top (if kept) | the form, same page | [ ] | [ ] | |
| T3 | Save my spot, under Quick facts (if kept) | the form, same page | [ ] | [ ] | |
| T4 | (914) 559-8159 in "Booking for Mom or Dad?" | dialer with (914) 559-8159 | [ ] | [ ] | |
| T5 | Form 3: empty Send is refused; test entry sent | confirmation shows; email arrives with the trip name; Reply reaches the sender | [ ] | | |
| T6 | Call me at (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |
| T7-T8 | Waitlist test (Form 4 words on the Trip template, then back) | confirmation shows; email arrives with "(waitlist)" | [ ] | | |

**Gallery**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| G1 | Each of the 18 photos | gets bigger, or (if not) the "Tap or click" sentence is gone | [ ] | [ ] | |
| G2 | Close on the big photo (if it exists) | closes | [ ] | [ ] | |

**Reviews**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| R1 | Send me a note | Contact | [ ] | [ ] | |

**Contact**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| C1 | (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |
| C2 | milena@onyxworldtravel.com | new email to milena@onyxworldtravel.com | [ ] | [ ] | |
| C3 | Form 1: empty Send is refused; test entry sent | confirmation shows; email arrives; Reply reaches the sender | [ ] | [ ] | |
| C4 | Call me at (914) 559-8159 | dialer with (914) 559-8159 | [ ] | [ ] | |

**Not found page**

| # | Tap | Should go to | Computer | Phone | Fixed or removed |
|---|---|---|---|---|---|
| N4 | Type the site address plus /test-nothing-here | a "not found" page that has a working way back (menu or buttons) | [ ] | [ ] | |

## Step 6. After the domain is connected

Once onyxworldtravel.com shows the new site, run a short round again on that address, on the phone and the computer:
- the menu
- the header button
- one phone link
- one email link
- one Contact form test that you check arrives

## For later: Milena's three-line check for each new trip

Put this in her guide. After she adds a trip and presses Publish:
1. Open the new trip page on your phone. Tap "Save my spot" and the phone number.
2. Fill in the form with your own name and the word TEST, and press Send.
3. Check that the email arrives at milena@onyxworldtravel.com. If it doesn't, open the form and type your email address into "Send Message To" again.


---

# Questions only you or Milena can answer

1. **Header button.** GoDaddy's header has room for one Action button. The demo had "Call (914) 559-8159" there on every page; the build plan and text file use "Plan a custom trip". Which one? Whichever it is, it must work. For her callers, a call button at the top is the most useful thing on a phone.
2. **Contact form email.** GoDaddy can't check "phone or email, at least one". Should Email be required on the Contact form (recommended, so every message can be answered), or optional as on the demo?
3. **First trip.** Will a real trip be ready at launch? If not, the trip cards on Home and Services & Trips should be deleted until it is, rather than linking to the unfinished Trip template page.
4. **Milena's inbox.** Can you see the milena@onyxworldtravel.com inbox, or must she be there for the form tests? Someone has to check that each test arrives and that Reply works.
5. **"(waitlist)" in the Trip choice.** OK to add this word, so Milena can tell waitlist requests from bookings? It's not on the demo.
6. **Chat.** Does Milena want website chat, if GoDaddy offers it? If not, it stays off.
7. **Reply time.** How fast does Milena usually reply? This fills [TO FILL: how fast Milena replies, e.g. within a day] in three of the four confirmation messages and on the Contact page.
