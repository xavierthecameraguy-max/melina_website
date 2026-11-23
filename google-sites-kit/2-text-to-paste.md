# Onyx World Travel: text to paste into Google Sites

For Xavier, and afterwards Milena's spare copy of every word on the site.

This file has every word for the Google Sites build, page by page and section by section, from top to bottom. The words are the Sunny Passport demo's own words, taken from the checked text of the earlier kit. The only changes are the ones Google Sites forces, listed in "What changed from the demo" below.

The pictures are in the `images` folder. `images/INDEX.md` says where each one goes and gives its alt text. The three forms are set up in `3-forms-and-buttons.md`. The build guide explains how to make sections, columns and the theme.


## How to read this file

- A **BOLD CAPITALS** line says what kind of thing to make. Don't paste it. Paste the paragraph under it.
- The text labels are the five text styles of Google Sites. Click in a text box and choose the style from the drop-down at the left of the text toolbar:
  - **TITLE**
  - **HEADING**
  - **SUBHEADING**
  - **NORMAL TEXT**
  - **SMALL TEXT**
- Lines that follow each other in the same column go in **one text box**. Give each paragraph its own style.
- "(bold)" means select the words and press **B** in the toolbar. That's the only formatting allowed. Never change a text box's font, colour or size: the Sunny Passport theme takes care of that, and changing a box overrides the theme.
- **BUTTON, Filled / Outlined / Text**: Insert > Button. The Name is the words on the button. Then pick the style with the button's down arrow.
- **LINK** on some words: select the words, click Link in the toolbar (Ctrl+K), then do what the line after "->" says.
- "-> page: X" means **pick page X from the list**. Never paste the page's web address: a pasted address opens in a new tab.
- "-> email" means type `milena@onyxworldtravel.com` in the link box. Google Sites turns it into an email link by itself.
- "-> the Trip booking form's link" means paste the form's responder link (forms.gle/...). `3-forms-and-buttons.md` says where to copy it. It opens the form in a new tab.
- **Phone numbers are always plain text.** Google Sites most likely can't make a tap-to-call link, so (914) 559-8159 is never a link or a button, and never coloured. On iPhones the number may become tappable by itself (LIKELY, not yet tested on a real iPhone).
- **IMAGE**: Insert > Images > Upload, from the `images` folder. **ALT TEXT**: click the picture > More (three dots) > Add alt text, then paste.
- **FORM**: Insert > Forms (at the bottom of the Insert panel) > choose the form by name. Drag it tall enough to show the whole form. Set-up is in `3-forms-and-buttons.md`.
- Every section heading below gives the **section background**: point to the section > Background (at the left) >
  - **Cream** = Style 1
  - **Sunshine** = Style 2
  - **Dark** = Style 3
- **Page header:** delete it on every page (point to the header > Delete). Each page starts with a Cream section whose first line is a TITLE.
- **[TO FILL: ...]** means nobody knows this yet. Paste it exactly as it is. Don't guess. Before the site is public, open Preview on every page, press Ctrl+F and search for `TO FILL`. The one page allowed to keep them is the hidden **Trip template**: its blanks show Milena what to fill in on each copy, and nothing links to it at launch.
- **UNVERIFIED** means the research couldn't confirm Google Sites does this. Check it once in the editor.
- **No fake buttons.** Every button and link must go somewhere real. If one can't, delete it.


## What changed from the demo

1. Every phone link and "Call" button is gone. The number is shown as plain text with the same words, for example "Call (914) 559-8159".
2. GoDaddy-only lines are gone: "Send message to", Google title and description, tagline, footer-menu switches.
3. Services & Trips: the "See upcoming trips" button in "Upcoming Trips" is deleted. It pointed to the page it was on, and the trips are right below it.
4. "Custom Trip Planner" and "Tell me about your dream trip" moved to a new page, **Plan a custom trip** (a sub-page of Services & Trips). Every "Plan a custom trip" button goes there.
5. "See upcoming trips" and "All upcoming trips" go to the **Services & Trips** page. The trip list is its second part.
6. A trip page's "Save my spot" buttons open the **Trip booking and waitlist** form in a new tab.
7. On a trip page, one new line above the form: In the form, choose this trip under “Which trip?”.
8. Gallery: "Tap or click any photo to see it bigger." is deleted. Google Sites can't enlarge photos.
9. Home: "Read the full review" goes to the Reviews page, not to one review.
10. Trip rows: the trip name is plain text, and the "See the trip" button is the only link.
11. Contact form: "Phone" and "Email" are one required question, "Phone or email" (see `3-forms-and-buttons.md`).
12. The booking and waitlist confirmation messages are merged into one, because it's one form.


## Pages in this file

The page names appear in the menu exactly as written here. "Hidden" means More (three dots) next to the page in the Pages panel > Hide from navigation. A hidden page still works through its links. The web address ending is optional: Pages > More > Properties > Advanced > Custom path.

| # | Page name | In the menu? | Inside which page | Web address ending |
|---|---|---|---|---|
| 1 | Home | Yes | none | (home) |
| 2 | About | Yes | none | about |
| 3 | Services & Trips | Yes | none | services |
| 3a | Plan a custom trip | Yes, in the Services & Trips drop-down | Services & Trips | custom-trip |
| 3b | Trip template | **Hidden** | Services & Trips | trip-template |
| 3c | One page per real trip (a copy of Trip template) | **Hidden** | Services & Trips | for example greece-2027 |
| 4 | Gallery | Yes | none | gallery |
| 5 | Reviews | Yes | none | reviews |
| 6 | Contact | Yes | none | contact |
| 7 | Terms & conditions | **Hidden** (footer link only) | none | terms |
| 8 | Privacy | **Hidden** (footer link only) | none | privacy |

1. Every page: logo, menu, footer
2. Home
3. About
4. Services & Trips
5. Plan a custom trip
6. Trip template
7. Gallery
8. Reviews
9. Contact
10. Terms & conditions
11. Privacy
12. Form confirmation messages
13. Later: when a trip sells out or is over, or none are left
14. Left out on purpose


---

# 1. Every page: logo, menu, footer

## Site name

Top left of the editor, "Enter site name". Leave it **empty**, because the logo already says "Onyx World Travel". Whether it may stay empty is UNVERIFIED. If it can't, type:

Onyx World Travel


## Logo and tab icon

Settings (gear) > Brand images.

**LOGO**: logo-onyx-world-travel.png

**LOGO ALT TEXT**

Onyx World Travel

**FAVICON**: favicon-512.png (no alt text). It only shows on the published site.


## Menu

Settings > Navigation > Mode: **Top**. The menu shows the visible pages in the order of the Pages panel:

Home

About

Services & Trips (drop-down: Plan a custom trip)

Gallery

Reviews

Contact

Google adds a search icon at the right by itself. There is no Call button in the menu bar.


## Footer (one footer for every page) · Dark

Point to the bottom of any page > Add footer. Background: Dark. Three columns, then a bottom line. Never delete footer text to fix one page: it disappears from every page.

**COLUMN 1**

**IMAGE** (only if the footer accepts a picture; UNVERIFIED): logo-onyx-world-travel-light-for-dark-backgrounds.png

**ALT TEXT**

Onyx World Travel

**SUBHEADING**

Just bring your passport.

**NORMAL TEXT**

Based in Kentucky. Planning trips online, and in person if you're local.

**COLUMN 2**

**SUBHEADING**

Get in touch

**NORMAL TEXT** (plain, not a link)

Call (914) 559-8159

**NORMAL TEXT, LINK**

milena@onyxworldtravel.com

-> email

**NORMAL TEXT, LINK**

Send me a message

-> page: Contact

**COLUMN 3**

**SUBHEADING**

Explore

**NORMAL TEXT, one link per line**

Home

-> page: Home

About

-> page: About

Services & Trips

-> page: Services & Trips

Gallery

-> page: Gallery

Reviews

-> page: Reviews

Contact

-> page: Contact

**BOTTOM LINE** (under the three columns)

**SMALL TEXT**

© 2026 Onyx World Travel.

(Typed by hand. Change the year each January.)

**SMALL TEXT, two links on one line**

Terms & conditions · Privacy

**LINK** on "Terms & conditions"

-> page: Terms & conditions

**LINK** on "Privacy"

-> page: Privacy

**SMALL TEXT**

[TO FILL: Legal business name and any seller-of-travel registration numbers]


---

# 2. Home

## Home 1. Hero · Cream

Two columns. The left column is one group: the text box, then the two buttons under it. The postcard goes in the right column.

**LEFT COLUMN**

**SMALL TEXT**

Onyx World Travel · Based in Kentucky

**TITLE**

You bring the passport. I'll bring everything else.

**NORMAL TEXT**

Hi, I'm Milena! I design fun, budget-friendly trips for groups and individuals. On my upcoming trips, I come along and take care of every little thing, before the trip and during it.

**BUTTON, Filled**

See upcoming trips

-> page: Services & Trips

**BUTTON, Outlined**

Plan a custom trip

-> page: Plan a custom trip

**RIGHT COLUMN**

**IMAGE**: home-1-postcard.png. The words on the postcard ("Wish you were here? You could be.") and on the stamp are already in the picture. Keep this section Cream: the postcard's pale sun fades on Sunshine.

**ALT TEXT**

A postcard of a palm-lined beach cove below a cliffside garden on a sunny day, with the words "Wish you were here? You could be."


## Home 2. How it works · Sunshine

**HEADING**

How it works

Then three columns. In each column: the picture (shown small, about 80 to 100 pixels wide), then one text box.

**COLUMN 1**

**IMAGE**: home-how-it-works-step-1.png. **ALT TEXT**: Step 1

**SUBHEADING**

Pick a trip

**NORMAL TEXT**

Join one of my upcoming trips, or tell me about the trip you've been dreaming of.

**COLUMN 2**

**IMAGE**: home-how-it-works-step-2.png. **ALT TEXT**: Step 2

**SUBHEADING**

I handle the details

**NORMAL TEXT**

I plan every detail, so you don't have to. No spreadsheets, no stress.

**COLUMN 3**

**IMAGE**: home-how-it-works-step-3.png. **ALT TEXT**: Step 3

**SUBHEADING**

Show up with your passport

**NORMAL TEXT**

That's it. Really. (Okay, maybe pack comfy shoes too.)


## Home 3a. Where are we going next? · Cream

**HEADING**

Where are we going next?

**NORMAL TEXT**

I get asked this a lot. Here's the answer.

(When there's no trip row under this section, at launch or after the last trip is over, use the demo's own no-trip words instead: "I get asked this a lot. The next one is in the works." See part 13.)


## Home 3b. Trip row · Cream (one section per upcoming trip)

**Launch rule:** while you build, this row's button may point to the hidden Trip template. Before launch it must point to a real trip's page. If no real trip is ready, **delete this whole section**, keep 3c, and switch 3a to its no-trip words (part 13). Never launch with a button that leads to the unfinished Trip template.

Two columns: the trip photo on the left, one group on the right.

**LEFT COLUMN**

**IMAGE**: sample-trip-1-ancient-theater.jpg (each real trip gets its own photo)

**ALT TEXT**

An ancient stone theater with tiers of marble seats under a blue sky

**RIGHT COLUMN**

**SUBHEADING** (plain text, not a link)

[TO FILL: Trip name]

**SMALL TEXT** (bold)

Spots open

**NORMAL TEXT**

[TO FILL: Destination] · [TO FILL: Dates, e.g. June 1 to 10, 2027]

**NORMAL TEXT**

[TO FILL: $X,XXX] per person

**BUTTON, Outlined**

See the trip

-> page: this trip's own page (while building: Trip template)


## Home 3c. More trips · Cream

**SUBHEADING**

More trips are on the way

**NORMAL TEXT**

I'm always planning the next one. Want to hear about it first? Get in touch and I'll let you know.

**LINK** on the words "Get in touch"

-> page: Contact

**BUTTON, Filled**

See all trips and services

-> page: Services & Trips


## Home 4. Why travel with me · Sunshine

**HEADING**

Why travel with me

Then three columns: the icon (small), then one text box. The icons are decoration, so their alt text stays empty. If Google Sites won't accept an empty alt text (UNVERIFIED), use the subheading's words.

**COLUMN 1**

**IMAGE**: home-why-icon-1-i-come-with-you.png. **ALT TEXT**: (empty)

**SUBHEADING**

I come with you

**NORMAL TEXT**

On my upcoming trips, I'm right there with you the whole way. You're never figuring it out alone, especially somewhere you've never been.

**COLUMN 2**

**IMAGE**: home-why-icon-2-fun-not-overwhelming.png. **ALT TEXT**: (empty)

**SUBHEADING**

Fun, not overwhelming

**NORMAL TEXT**

Plenty to see and do, with time to breathe. You'll come home with great stories, not needing a vacation from your vacation.

**COLUMN 3**

**IMAGE**: home-why-icon-3-budget-friendly.png. **ALT TEXT**: (empty)

**SUBHEADING**

Budget friendly

**NORMAL TEXT**

Great trips shouldn't cost a fortune. Every trip shows the price per person and what's included, right up front.


## Home 5. Ten-plus years · Cream

Two columns: the photo on the left, the text on the right.

**LEFT COLUMN**

**IMAGE**: home-2-friends.jpg

**ALT TEXT**

Four friends smiling at the rim of a huge red-rock canyon

**RIGHT COLUMN**

**HEADING**

Ten-plus years of planning trips for my friends

**NORMAL TEXT**

My friends keep coming back year after year for the next adventure. So many people told me to open a small travel agency that I finally listened.

**NORMAL TEXT, LINK**

Read my story

-> page: About


## Home 6. What my travelers say · Sunshine

**HEADING**

What my travelers say

Then three columns, one text box each.

**COLUMN 1**

**SUBHEADING**

“What I appreciate most is her ability to put together wonderful travel experiences while keeping affordability in mind.”

**SMALL TEXT** (bold)

Father Peter

**SMALL TEXT, LINK**

Read the full review

-> page: Reviews

**COLUMN 2**

**SUBHEADING**

“Everything went so smoothly from the airport to the hotels to all the excursions.”

**SMALL TEXT** (bold)

Kellie G., Greece

**SMALL TEXT, LINK**

Read the full review

-> page: Reviews

**COLUMN 3**

**SUBHEADING**

“She doesn't just plan trips; she creates experiences you and your loved ones will cherish for a lifetime.”

**SMALL TEXT** (bold)

Haley E., Kraków and Rome

**SMALL TEXT, LINK**

Read the full review

-> page: Reviews

**BUTTON, Filled** (under the three columns)

Read more reviews

-> page: Reviews


## Home 7. Got a place in mind? · Dark

Two columns: text on the left, the button on the right.

**LEFT COLUMN**

**HEADING**

Got a place in mind?

**NORMAL TEXT**

Tell me where you've always wanted to go and who's coming. I'll design the trip and send you a quote.

**RIGHT COLUMN**

**BUTTON, Filled**

Plan a custom trip

-> page: Plan a custom trip


---

# 3. About

## About 1. Hi, I'm Milena! · Cream

Two columns: the photo on the left, the text on the right. It's a tall photo: check in Preview that her face is fully in view.

**LEFT COLUMN**

**IMAGE**: about-1-milena.jpg

**ALT TEXT**

Milena, smiling, in a gray cardigan

**RIGHT COLUMN**

**TITLE**

Hi, I'm Milena!

**NORMAL TEXT**

I'm the friend who plans the trips. Now it's my job.


## About 2. Her story · Cream

One text box for everything down to the two [TO FILL] lines, then the two buttons under it.

**HEADING**

How this started

**NORMAL TEXT**

For more than 10 years, I've been designing trips for my friends. Year after year, they keep coming back to join me on the next adventure.

People kept telling me I should open a small travel agency. I finally listened, and that's how Onyx World Travel started.

**HEADING**

Why I come along

**NORMAL TEXT**

Planning a trip is one thing. Being there is another. On my upcoming trips, I take care of everything before we leave and while we're away, so nobody has to worry about a thing.

My travelers tell me they love that they can just show up with their passports in their hands. They also feel safer knowing someone is with them, especially somewhere they've never been before, like Europe.

**HEADING**

Who I travel with

**NORMAL TEXT**

Mostly folks who'd rather not spend their time planning, and would love to have everything done for them. If that sounds like you, you're in the right place.

**HEADING**

Where I'm based

**NORMAL TEXT**

I'm based in Kentucky. Most of my planning happens online, and if you're local and would rather meet in person, I'm happy to.

**HEADING**

A little more about me

**NORMAL TEXT**

[TO FILL: A few personal details Milena is happy to share]

[TO FILL: The story behind the name Onyx, if there is one]

**BUTTON, Filled**

See upcoming trips

-> page: Services & Trips

**BUTTON, Outlined**

Plan a custom trip

-> page: Plan a custom trip


## About 3. Milena at a glance · Sunshine

**SUBHEADING**

Milena at a glance

**NORMAL TEXT**, one line each, the words before the colon in bold

Based in: Kentucky

Planning trips: For more than 10 years

Trips for: Groups and individuals

On upcoming trips: I come along

Call or text: (914) 559-8159

Email: milena@onyxworldtravel.com

The phone number stays plain text.

**LINK** on "milena@onyxworldtravel.com"

-> email


---

# 4. Services & Trips

The trip list comes right after the two short sections at the top, because every "See upcoming trips" button lands on this page. (The demo showed "What everything includes" before the trips. Here it moves to the end.)

## Services 1. Top of the page · Cream

**TITLE**

Services & Upcoming Trips

**NORMAL TEXT**

Two ways to plan a trip with me: join one of my upcoming trips, or have one designed just for you.


## Services 2. Two ways · Sunshine

Two columns.

**LEFT COLUMN**

**SUBHEADING**

Upcoming Trips

**NORMAL TEXT**

Trips I've designed, and I come along on every one. Pick one, save your spot, and I'll take care of the rest.

(No button here. The trips are right below.)

**RIGHT COLUMN**

**SUBHEADING**

Custom Trip Planner

**NORMAL TEXT**

Have somewhere in mind? Tell me where and who's coming, and I'll design the trip and send you a quote.

[TO FILL: Is the quote free, or is there a planning fee?]

**BUTTON, Outlined**

Plan a custom trip

-> page: Plan a custom trip


## Services 3a. Upcoming Trips · Cream

**HEADING**

Upcoming Trips

**NORMAL TEXT**

Where are we going next? Here's what's coming up.

(When there's no trip row under this section, use the demo's own no-trip words instead: "Where are we going next? The next trip is in the works." See part 13.)


## Services 3b. Trip row · Cream (one section per upcoming trip)

The same row as Home 3b, with the same words, photo and button. Build it once, then copy it with Duplicate section. The same launch rule applies: before launch the button must go to a real trip's page, or this section is deleted, 3c stays, and 3a switches to its no-trip words (part 13).

**LEFT COLUMN**

**IMAGE**: sample-trip-1-ancient-theater.jpg

**ALT TEXT**

An ancient stone theater with tiers of marble seats under a blue sky

**RIGHT COLUMN**

**SUBHEADING** (plain text, not a link)

[TO FILL: Trip name]

**SMALL TEXT** (bold)

Spots open

**NORMAL TEXT**

[TO FILL: Destination] · [TO FILL: Dates, e.g. June 1 to 10, 2027]

**NORMAL TEXT**

[TO FILL: $X,XXX] per person

**BUTTON, Outlined**

See the trip

-> page: this trip's own page (while building: Trip template)


## Services 3c. Don't see what you want? · Cream

**SUBHEADING**

Don't see what you want?

**NORMAL TEXT**

I'll design a trip just for you.

**BUTTON, Text**

Plan a custom trip

-> page: Plan a custom trip


## Services 4. What "everything" includes · Sunshine

**HEADING**

What “everything” includes

**NORMAL TEXT**

When I say I take care of everything, here's what that usually means:

**BULLETED LIST** (the text toolbar's bulleted list button)

[TO FILL: What's usually included: flights? hotels? transfers? tickets? meals?]


---

# 5. Plan a custom trip

A new page inside Services & Trips, shown in its menu drop-down. It holds the demo's "Custom Trip Planner" part of the Services page, so every "Plan a custom trip" button can open it.

## Custom 1. Top of the page · Cream

**TITLE**

Custom Trip Planner

**NORMAL TEXT**

Tell me about the trip you've been dreaming of. I'll design it around your pace and budget, then send you a quote.


## Custom 2. The three steps · Sunshine

Three columns: the number picture (small), then one text box.

**COLUMN 1**

**IMAGE**: home-how-it-works-step-1.png. **ALT TEXT**: Step 1

**SUBHEADING**

Tell me your idea

**NORMAL TEXT**

Where you'd like to go, when, and who's coming. "Not sure yet" is a fine answer.

**COLUMN 2**

**IMAGE**: home-how-it-works-step-2.png. **ALT TEXT**: Step 2

**SUBHEADING**

I design it and send a quote

**NORMAL TEXT**

I'll put together a trip that fits you, and send you a quote with all the details.

**COLUMN 3**

**IMAGE**: home-how-it-works-step-3.png. **ALT TEXT**: Step 3

**SUBHEADING**

Get ready to go

**NORMAL TEXT**

Then just bring your passport. [TO FILL: Does Milena come along on custom trips too?]


## Custom 3. The form · Cream

**HEADING**

Tell me about your dream trip

**FORM**

Insert > Forms > **Custom trip idea**. Its questions are in `3-forms-and-buttons.md`.

**NORMAL TEXT** (plain, not a link)

Rather talk? Call me at (914) 559-8159


---

# 6. Trip template

The "Sample trip" page: one finished trip page with blanks. Keep it **hidden**, inside Services & Trips. For each real trip, copy it (Pages > More next to Trip template > Duplicate page), rename the copy after the trip, for example "Greece 2027", keep the copy hidden, and fill in every [TO FILL].

## Trip 1. Top of the page · Cream

Two columns. The left column is one group: the small link, the text box, then the button. The trip photo goes in the right column.

**LEFT COLUMN**

**SMALL TEXT, LINK**

All upcoming trips

-> page: Services & Trips

**TITLE**

[TO FILL: Trip name]

**SMALL TEXT** (bold), one line

Spots open · Milena is coming on this trip · Sample trip

(Delete "Sample trip" on every real trip.)

**NORMAL TEXT**

[TO FILL: One-line teaser for the top of this page and the trip card.]

**BUTTON, Filled**

Save my spot

-> the Trip booking form's link (opens in a new tab)

**RIGHT COLUMN**

**IMAGE**: sample-trip-1-ancient-theater.jpg. Change it for each real trip.

**ALT TEXT**

An ancient stone theater with tiers of marble seats under a blue sky


## Trip 2. Quick facts · Sunshine

**HEADING**

Quick facts

**NORMAL TEXT**, one line each, the words before the colon in bold

Where: [TO FILL: Destination]

When: [TO FILL: Dates, e.g. June 1 to 10, 2027]

How long: [TO FILL: X days]

Price: [TO FILL: $X,XXX] per person, sharing a room

Room to yourself: [TO FILL: $X,XXX] per person

Deposit: [TO FILL: $XXX], with the rest due [TO FILL: Month day, year]

Group size: [TO FILL: X to X travelers]

Spots left: [TO FILL: X]

Activity level: [TO FILL: Easy, Moderate or Active]. [TO FILL: About how much walking there is each day]

Book by: [TO FILL: Month day, year]

**BUTTON, Filled**

Save my spot

-> the Trip booking form's link (opens in a new tab)


## Trip 3. Why I picked this trip, and day by day · Cream

All in **one text box**, so adding a day is just typing two more lines.

**HEADING**

Why I picked this trip

**NORMAL TEXT**

[TO FILL: Two or three lines in Milena's voice about why she picked this trip.]

**HEADING**

Day by day

**SUBHEADING**

Day 1: [TO FILL: Arrival day]

**NORMAL TEXT**

[TO FILL: What happens today]

**SUBHEADING**

Day 2: [TO FILL: Day title]

**NORMAL TEXT**

[TO FILL: What happens today]

**SUBHEADING**

Day 3: [TO FILL: Day title]

**NORMAL TEXT**

[TO FILL: What happens today]

**SUBHEADING**

Day 4: [TO FILL: Heading home]

**NORMAL TEXT**

[TO FILL: What happens today]

(Add or remove days to match the trip.)


## Trip 4. What's included / Not included · Sunshine

Two columns, plain bullets.

**LEFT COLUMN**

**HEADING**

What's included

**BULLETED LIST**

[TO FILL: For example: hotels]

[TO FILL: For example: transfers from the airport]

[TO FILL: For example: daily breakfast]

Milena, along for the whole trip

(Always keep "Milena, along for the whole trip".)

**RIGHT COLUMN**

**HEADING**

Not included

**BULLETED LIST**

[TO FILL: For example: flights]

[TO FILL: For example: travel insurance]

[TO FILL: For example: tips]


## Trip 5. Before you go, and questions · Cream

**HEADING**

Before you go

**NORMAL TEXT**

[TO FILL: Passport, visa and travel insurance notes for this destination]

**HEADING**

Questions about this trip

Then one **COLLAPSIBLE TEXT** per question (Insert > Collapsible text). The question goes in its top box, the answer in the box under it. Visitors click the question to open the answer.

**COLLAPSIBLE TEXT 1**

Question:

[TO FILL: A question people ask about this trip]

Answer:

[TO FILL: Milena's answer]

**COLLAPSIBLE TEXT 2**

Question:

[TO FILL: Another question]

Answer:

[TO FILL: Milena's answer]


## Trip 6. Save my spot · Sunshine

**HEADING**

Save my spot

**NORMAL TEXT** (plain, not a link)

Booking for Mom or Dad? Call me at (914) 559-8159, I'm happy to talk it through.

**NORMAL TEXT** (bold)

Trip: [TO FILL: Trip name] · [TO FILL: Dates, e.g. June 1 to 10, 2027]

**NORMAL TEXT**

In the form, choose this trip under “Which trip?”.

**FORM**

Insert > Forms > **Trip booking and waitlist**. Every trip page shows this same form. Its questions, including the "Which trip?" list, are in `3-forms-and-buttons.md`.

**NORMAL TEXT** (plain, not a link)

Rather talk? Call me at (914) 559-8159

**NORMAL TEXT**

No payment yet. I'll be in touch to confirm your spot and explain payment.


---

# 7. Gallery

## Gallery 1. Top of the page · Cream

**TITLE**

Gallery

**NORMAL TEXT**

Snapshots from our trips together.


## Gallery 2 to 7. The photos · Cream

18 photos, newest first: **six sections, one per row of three**. In each column: the photo, then its caption under it as **SMALL TEXT**. The photos have no links.

Use the photos in `images/gallery-grid-4x3/`. They are already cut to the same 4:3 shape as on the demo (1200 x 900 pixels each), so each row lines up. The uncut originals are in `images` too, for safekeeping.

Where a caption says "maybe", the place is a guess. Milena confirms or corrects each one, then types it without the brackets, for example "The Leaning Tower · Pisa, Italy, 2025".

### Gallery 2. Row 1

**COLUMN 1**

**IMAGE**: gallery-01-painted-steps-4x3.jpg

**ALT TEXT**

Six travelers smiling on flower-painted steps in a whitewashed island village

**SMALL TEXT**

Painted steps in an island village · [TO FILL: place, maybe Paros, Greece?], 2026

**COLUMN 2**

**IMAGE**: gallery-02-marble-gateway-4x3.jpg

**ALT TEXT**

A giant ancient marble doorway silhouetted against an orange sunset over the sea

**SMALL TEXT**

The marble gateway at sunset · [TO FILL: place, maybe Naxos, Greece?], 2026

**COLUMN 3**

**IMAGE**: gallery-03-rooftop-evening-4x3.jpg

**ALT TEXT**

Evening view from a rooftop with roses over a busy square and a floodlit hilltop temple

**SMALL TEXT**

Evening view from the rooftop · [TO FILL: place, maybe Athens, Greece?], 2026

### Gallery 3. Row 2

**COLUMN 1**

**IMAGE**: gallery-04-river-bend-4x3.jpg

**ALT TEXT**

A green river looping around a red rock butte in a deep canyon

**SMALL TEXT**

The river bend overlook · [TO FILL: place, maybe Horseshoe Bend, Arizona?], 2026

**COLUMN 2**

**IMAGE**: gallery-05-salt-chapel-4x3.jpg

**ALT TEXT**

An underground chapel carved from rock salt, with crystal chandeliers

**SMALL TEXT**

A chapel carved from salt · [TO FILL: place, maybe Wieliczka Salt Mine, Poland?], 2025

**COLUMN 3**

**IMAGE**: gallery-06-leaning-tower-4x3.jpg

**ALT TEXT**

A leaning white marble bell tower beside a cathedral under big clouds

**SMALL TEXT**

The Leaning Tower · [TO FILL: place, maybe Pisa, Italy?], 2025

### Gallery 4. Row 3

**COLUMN 1**

**IMAGE**: gallery-07-market-square-4x3.jpg

**ALT TEXT**

A long arcaded Renaissance hall across a wide old-town square

**SMALL TEXT**

Old-town market square · [TO FILL: place, maybe Kraków, Poland?], 2024

**COLUMN 2**

**IMAGE**: gallery-08-hot-springs-4x3.jpg

**ALT TEXT**

Steaming hot springs in a snowy valley below a mountain

**SMALL TEXT**

Hot springs in the snow · [TO FILL: place], 2023

**COLUMN 3**

**IMAGE**: gallery-09-snowy-coast-4x3.jpg

**ALT TEXT**

The sun setting over the sea beside dark cliffs and a snowy, rocky shore

**SMALL TEXT**

A snowy coast at sunset · [TO FILL: place], 2023

### Gallery 5. Row 4

**COLUMN 1**

**IMAGE**: gallery-10-lemon-shop-4x3.jpg

**ALT TEXT**

A bright yellow lemon and limoncello shop with a tasting stand on a cobbled street

**SMALL TEXT**

A lemon shop on a cobbled street · [TO FILL: place, maybe Rome, Italy?], 2023

**COLUMN 2**

**IMAGE**: gallery-11-truffle-pasta-4x3.jpg

**ALT TEXT**

A forkful of tagliatelle over a bowl of pasta with shaved truffle

**SMALL TEXT**

Fresh pasta with truffle · [TO FILL: place], 2023

**COLUMN 3**

**IMAGE**: gallery-12-farmhouse-sunrise-4x3.jpg

**ALT TEXT**

Sunrise over rolling hills seen through an open farmhouse window

**SMALL TEXT**

Sunrise from the farmhouse window · [TO FILL: place], 2023

### Gallery 6. Row 5

**COLUMN 1**

**IMAGE**: gallery-13-canyon-lake-4x3.jpg

**ALT TEXT**

Five friends on a bench looking out over a blue lake winding through red canyons

**SMALL TEXT**

Taking in the canyon lake · [TO FILL: place, maybe Lake Powell?], 2022

**COLUMN 2**

**IMAGE**: gallery-14-slot-canyon-4x3.jpg

**ALT TEXT**

Three smiling travelers inside a glowing orange slot canyon

**SMALL TEXT**

Inside a slot canyon · [TO FILL: place], 2022

**COLUMN 3**

**IMAGE**: gallery-15-red-buttes-4x3.jpg

**ALT TEXT**

A rider on horseback heading toward tall red buttes in the desert

**SMALL TEXT**

Riding among the buttes · [TO FILL: place, maybe Monument Valley?], 2021

### Gallery 7. Row 6

**COLUMN 1**

**IMAGE**: gallery-16-beach-cove-4x3.jpg

**ALT TEXT**

A palm-lined beach cove below a cliffside garden on a sunny day

**SMALL TEXT**

A palm-lined beach cove · [TO FILL: place], 2019

**COLUMN 2**

**IMAGE**: gallery-17-sea-cliffs-4x3.jpg

**ALT TEXT**

Green fields divided by stone walls running down to sea cliffs

**SMALL TEXT**

Stone walls and sea cliffs · [TO FILL: place], 2018

**COLUMN 3**

**IMAGE**: gallery-18-glacier-lake-4x3.jpg

**ALT TEXT**

The bow of a canoe on a still turquoise lake below a glacier peak

**SMALL TEXT**

A canoe on a glacier lake · [TO FILL: place, maybe Lake Louise, Canada?], 2009


---

# 8. Reviews

Each review is its own section, shown in full. A new review is added later by copying a review section (Duplicate section) and typing over it.

## Reviews 1. Top of the page · Cream

**TITLE**

What my travelers say

**NORMAL TEXT**

The best review is a friend who comes back for the next trip. Here's what a few of them have to say.


## Reviews 2. Father Peter · Sunshine

**SUBHEADING**

“What I appreciate most is her ability to put together wonderful travel experiences while keeping affordability in mind.”

**NORMAL TEXT**

If you are dreaming of visiting Europe but want to enjoy a wonderful vacation without spending a fortune, I wholeheartedly recommend Milena!

I have had the pleasure of having two trips planned by Milena, and both experiences were outstanding. From the planning to the overall travel arrangements, she did a wonderful job making everything smooth, enjoyable, and stress-free. She is thoughtful, knowledgeable, dependable, and truly cares about making sure her clients have a memorable experience.

What I appreciate most is her ability to put together wonderful travel experiences while keeping affordability in mind. She goes the extra mile to make sure everything is well organized and that you get the best value for your money.

I am genuinely grateful for her excellent service and dedication. If you are planning a trip to Europe or anywhere else, I encourage you to give Milena a call. You will be in good hands!

Milena, thank you for making travel such a wonderful experience. You truly deserve five stars!

**SMALL TEXT** (bold)

Father Peter


## Reviews 3. Kellie G. · Cream

**SUBHEADING**

“Everything went so smoothly from the airport to the hotels to all the excursions.”

**NORMAL TEXT**

I can't thank you enough for setting up my trip to Greece. Everything went so smoothly from the airport to the hotels to all the excursions. And all the hotels and places to go including the recommendations to the restaurants were outstanding. I look forward to using you again.

**SMALL TEXT** (bold)

Kellie G., Greece


## Reviews 4. Haley E. · Sunshine

**SUBHEADING**

“She doesn't just plan trips; she creates experiences you and your loved ones will cherish for a lifetime.”

**NORMAL TEXT**

My family and I had such an amazing experience traveling with Milena! She puts so much thought and care into planning every detail and really takes the time to understand what you want out of your trip. She made sure all of our needs were met, from coordinating air travel with the most affordable pricing, to choosing locations where we could easily walk to nearby attractions in Kraków, Poland, and Rome, Italy!

One of my favorite memories was partaking in a private dinner she organized with an Italian family who welcomed us into their home and prepared us the most delicious, authentic Italian meal I've ever had! It was a wonderful three course meal and an experience my family would never have been able to find on our own. The warmth and hospitality made that experience so special!

What I appreciate most about Milena is how well traveled she is, which shows in her attention to detail in her trip planning. She goes above and beyond to make sure everyone has a wonderful time and their travel needs are met! She doesn't just plan trips; she creates experiences you and your loved ones will cherish for a lifetime.

I would absolutely recommend Milena to anyone looking for a thoughtful, personalized, and memorable travel experience. She truly puts her heart into what she does and I look forward to my next trip with Onyx World Travel!

**SMALL TEXT** (bold)

Haley E., Kraków and Rome


## Reviews 5. Traveled with me before? · Cream

**SUBHEADING**

Traveled with me before?

**NORMAL TEXT**

I'd love to hear how it went. Send me a note

**LINK** on the words "Send me a note"

-> page: Contact


---

# 9. Contact

## Contact 1. Get in touch · Cream

Two columns: the photo on the left, the text on the right. It's a tall photo: check in Preview that her face is fully in view.

**LEFT COLUMN**

**IMAGE**: contact-1-milena.jpg

**ALT TEXT**

Milena smiling, her arms folded over the back of a white chair

**RIGHT COLUMN**

**TITLE**

Get in touch

**NORMAL TEXT**

Questions about a trip, or an idea for one? I'd love to hear from you.


## Contact 2. Call me / Email me · Sunshine

Two columns.

**LEFT COLUMN**

**SUBHEADING**

Call me

**HEADING** (plain text, not a link)

(914) 559-8159

**NORMAL TEXT**

I usually get back to people [TO FILL: how fast Milena replies, e.g. within a day].

**RIGHT COLUMN**

**SUBHEADING**

Email me

**HEADING, LINK**

milena@onyxworldtravel.com

-> email

**NORMAL TEXT**

Based in Kentucky. Happy to meet in person if you're local.

(The email address in Heading size may wrap on a small phone. Check it in Preview > phone.)


## Contact 3. Send me a message · Cream

**HEADING**

Send me a message

**FORM**

Insert > Forms > **Message for Milena**. Its questions are in `3-forms-and-buttons.md`.

**NORMAL TEXT** (plain, not a link)

Rather talk? Call me at (914) 559-8159


---

# 10. Terms & conditions

Hidden from the menu. The footer links to it.

## Terms 1. The page · Cream

**TITLE**

Terms & conditions

**NORMAL TEXT**

[TO FILL: Full terms to come before launch, from Milena's host agency or a professional]

This page will cover, in plain English:

**BULLETED LIST**

Deposits and when the rest is due

Cancellations and refunds

Changes to a trip's plans

How much walking and activity each trip involves

The smallest group size for a trip to go ahead

Passports and visas

Travel insurance


---

# 11. Privacy

Hidden from the menu. The footer links to it.

## Privacy 1. The page · Cream

**TITLE**

Privacy

**NORMAL TEXT**

[TO FILL: Full privacy policy to come before launch]

This page will explain, in plain English:

**BULLETED LIST**

What information the forms on this site collect

Who it's shared with, and why

How to see, change or delete your information

How the site responds to "Do Not Track"

When this policy took effect

(Not to paste: when the real policy is written, by Milena or a professional, it must say that the forms are Google Forms and that the answers are kept in Milena's Google account.)


---

# 12. Form confirmation messages

These show inside the form box after someone presses Submit. They replace the demo's thank-you pages, because Google Forms can't send people to another page. Paste each one in Google Forms: open the form > Settings > Presentation > Confirmation message > Edit. `3-forms-and-buttons.md` walks through it.

**MESSAGE FOR MILENA** (Contact page)

Thank you! Your message is on its way to me. I'll get back to you [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159.

**CUSTOM TRIP IDEA** (Plan a custom trip page)

Got it! I'll start dreaming up ideas and get back to you with a quote [TO FILL: how fast Milena replies, e.g. within a day]. If it's urgent, call me at (914) 559-8159.

**TRIP BOOKING AND WAITLIST** (every trip page; one message for booking and waitlist)

Got it! Your request is on its way to me. There's nothing to pay yet. I'll be in touch [TO FILL: how fast Milena replies, e.g. within a day] to confirm your spot and explain payment. If you picked a sold-out trip, you're on the waitlist, and I'll let you know as soon as a spot opens up. If it's urgent, call me at (914) 559-8159.


---

# 13. Later: when a trip sells out or is over, or none are left

The demo did this by itself. In Google Sites, each switch is a few text edits, then Publish. The words come from the demo.

## When a trip sells out

**On the trip page**

**SMALL TEXT** (bold), the labels line: replace "Spots open" with

Sold out: join the waitlist

**QUICK FACTS**: replace the "Spots left" line with

Spots left: Sold out (waitlist open)

**BOTH BUTTONS**: click each "Save my spot" button > Edit, and change only the Name to

Join the waitlist

(Leave the link as it is. It's the same booking form.)

**HEADING** of the last section: replace "Save my spot" with

Join the waitlist

**NORMAL TEXT** under the form: replace "No payment yet. I'll be in touch to confirm your spot and explain payment." with

No payment. I'll let you know as soon as a spot opens up.

**On the trip rows** (Home and Services & Trips)

**SMALL TEXT** (bold): replace "Spots open" with

Sold out: join the waitlist

**In the Trip booking and waitlist form**

Rename the trip's choice under "Which trip?" so it ends with

(sold out: join the waitlist)

The confirmation message doesn't change: it already covers the waitlist.


## When a trip is over

**On the trip page**

**SMALL TEXT** (bold), the labels line: replace "Spots open" with

This trip has wrapped up

**BUTTON** at the top: click it > Edit. Change the Name to

See my upcoming trips

-> page: Services & Trips (pick it from the list instead of the form's link)

**QUICK FACTS**: delete the "Spots left" and "Book by" lines, and delete the "Save my spot" button under them.

**LAST SECTION**: change the heading "Save my spot" to

This one has wrapped up

and replace the line "Booking for Mom or Dad? Call me at (914) 559-8159, I'm happy to talk it through." with

But I'm always planning the next adventure. Come see where we're going next.

Then delete:

- the "Trip:" line
- the "In the form…" line
- the form box
- the two lines that were under the form

Add one button:

**BUTTON, Filled**

See upcoming trips

-> page: Services & Trips

Optional: change that section's background to Dark.

**On Home and Services & Trips**: delete the trip's row section (Delete section). If no trips are left, make sure "More trips are on the way" (Home) and "Don't see what you want?" (Services & Trips) are still there, and switch to the no-trip words below.

**In the Trip booking and waitlist form**: delete the trip's choice under "Which trip?".

The page stays hidden, so anyone with the old link still sees it.


## When there are no upcoming trips (at launch, or after the last one is over)

These are the demo's own words for a site with no upcoming trip. Without them, the page says "Here's the answer." with nothing under it.

**Home, section 3a (Where are we going next?)**, NORMAL TEXT: replace "I get asked this a lot. Here's the answer." with

I get asked this a lot. The next one is in the works.

**Services & Trips, section 3a (Upcoming Trips)**, NORMAL TEXT: replace "Where are we going next? Here's what's coming up." with

Where are we going next? The next trip is in the works.

**Optional, as on the demo:** on Services & Trips, above "Don't see what you want?", the demo also showed "More trips are on the way" when there were no trips. If you want it, copy the Home 3c words (SUBHEADING "More trips are on the way", NORMAL TEXT with "Get in touch" linked -> page: Contact) into section 3c. Delete them again when a trip is added.

**In the Trip booking and waitlist form**, "Which trip?" then holds only:

A different trip, or I'm not sure yet

**When the next trip is added**, change both sentences back ("Here's the answer." and "Here's what's coming up.").


---

# 14. Left out on purpose

These parts of the demo aren't built in Google Sites, so the page never promises something that doesn't work.

- **Tap-to-call.** There's no "Call" button in the menu bar, and the 38 phone links of the demo are plain text. Google Sites most likely doesn't accept `tel:` links. The build guide has one optional test on real phones.
- **Google title and description for each page.** Google Sites has no documented place for them (UNVERIFIED). The words stay in the earlier kit if they're ever needed.
- **The tagline field.** "Just bring your passport." still shows in the footer.
- **"Tap or click any photo to see it bigger."** Google Sites can't enlarge a photo on click.
- **Jumps to a spot lower on a page** (the demo's "Upcoming Trips section", "Custom Trip Planner section", "Save my spot section" and "Father Peter's review"). In Google Sites those links open a second tab, so the buttons now go to whole pages or to the form instead.
- **The "See upcoming trips" button in Services 2.** It pointed to the page it was on.
- **The draft banner** ("Draft website. Anything in [brackets] is waiting on real content."). Search for `TO FILL` before publishing instead.
- **"Skip to main content".** Google Sites handles this itself.
- **The line under each demo form** ("This opens your email app with your answers, addressed to Milena and ready to send."). It was only true on the demo. Google Forms sends the answers to Milena's Google account.
- **The demo's own form error messages.** Google Forms shows its own.
- **The send-button words** ("Send my trip idea", "Save my spot", "Send message"). Google Forms shows its own Submit button. Whether its words can be changed is UNVERIFIED.
- **The thank-you pages** and their buttons ("See upcoming trips", "Back to home"). Their words are now the confirmation messages in section 12.
- **The "page not found" page** ("Oops, wrong turn."). Google shows its own, and it can't be edited (UNVERIFIED).
