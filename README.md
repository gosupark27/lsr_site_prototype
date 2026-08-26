# Lee's Shoe & Luggage Repair Website Prototype

A responsive single-page website prototype for **Lee's Shoe & Luggage Repair**, a family-owned repair business serving Peoria and the West Valley since 1994.

The purpose of this prototype is to modernize the business's online presence and provide customers with a simple way to learn about repair services, view examples of completed work, read customer reviews, and contact the shop for a quote.

This version was built using **vanilla HTML, CSS, and JavaScript** as the first implementation of the website. A future iteration will rebuild the application using React.

---

## Features

The following functionality is included in the prototype:

- [x] Responsive navigation bar with links to each major page section
- [x] Hero section with business branding, value proposition, and calls to action
- [x] Repair-services section organized into expandable accordion categories
- [x] Repair categories based on historical customer ticket data
- [x] Gallery displaying real examples of completed repair work
- [x] Gallery filtering by repair category
- [x] Customer review cards based on real Google and Yelp reviews
- [x] About section describing the history and values of the business
- [x] Contact section containing:
  - Phone number
  - Email address
  - Physical address
  - Business hours
- [x] Embedded Google Map showing the shop location
- [x] Quote-request form
- [x] `mailto:` integration that prepares a quote-request email using submitted form data
- [x] Responsive layouts for desktop, tablet, and mobile displays
- [x] Footer containing navigation and business contact information

---

## Repair Categories

Repair services are organized into five primary customer-facing categories:

1. **Men's Footwear**
2. **Women's Footwear**
3. **Handbags, Purses & Bags**
4. **Luggage**
5. **Other & Specialty Repairs**

The ordering and selection of commonly requested repair services were informed by historical repair-ticket data from the business.

Examples include:

- Heel repair and replacement
- Half and full sole replacement
- Protective soles
- Cleaning and conditioning
- Stitching and seam repair
- Shoe and boot stretching
- Purse strap repair and replacement
- Zipper and slider repair
- Hardware replacement
- Luggage handle and strap repair
- Specialty leather repairs

The ticket sample is used as a directional guide for the website's information architecture rather than as a complete representation of every service offered by the business.

---

## Gallery

The gallery uses photographs of actual customer items repaired or restored by Lee's Shoe & Luggage Repair.

Gallery items are stored as JavaScript objects containing information such as:

- Image path
- Alternative text
- Display title
- Repair category

JavaScript dynamically renders the gallery cards and allows users to filter the gallery by category.

Current categories include:

- All
- Footwear
- Handbags & Purses
- Luggage
- Specialty Repairs

---

## Customer Reviews

Customer reviews are stored as structured JavaScript data and dynamically rendered into reusable review cards.

Each review contains:

- Customer name
- Rating
- Review text
- Review source

The prototype currently uses selected real customer feedback from platforms such as **Google Reviews** and **Yelp**.

A future version may retrieve reviews dynamically through an external API.

---

## Quote Request

The Contact section contains a simple quote-request form where customers can provide:

- Name
- Phone number
- Email address
- Item category
- Description of the requested repair

For the prototype, submitting the form uses JavaScript to create a prefilled `mailto:` message addressed to Lee's Shoe & Luggage Repair.

A future production version may replace this workflow with a backend service, database, CRM integration, or dedicated form-processing service.

---

## Technologies Used

### Front End

- HTML5
- CSS3
- Vanilla JavaScript

### HTML Concepts

- Semantic HTML
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<figure>` / `<figcaption>`
- `<details>` / `<summary>`
- `<form>`
- `<address>`
- `<footer>`

### CSS Concepts

- CSS custom properties
- Flexbox
- CSS Grid
- Responsive design
- Media queries
- Pseudo-elements
- Hover and focus states
- CSS transitions
- Responsive images
- Reusable component classes

### JavaScript Concepts

- Arrays
- Objects
- DOM selection
- DOM manipulation
- Event listeners
- Array `.map()`
- Array `.filter()`
- Template literals
- `FormData`
- Dynamic rendering
- Custom `data-*` attributes
- Basic client-side form handling

---

## Project Structure

```text
lsr-site-prototype/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── index.js
│   │
│   └── assets/
│       ├── hero/
│       ├── gallery/
│       └── logo/
│
├── README.md
├── package.json
├── wrangler.jsonc
└── .gitignore
* [x] Navigation bar with links to sections, e.g., Stats, Our Games and logo-link to top of the page
* [x] Search bar features:
  * [x] Matches a search result (including substrings) to any of the game's names
  * [x] Search can be submitted by clicking the search icon or pressing Enter
  * [x] Clicking the **X** clears previous search results and restores the default view (11 games displayed)

## Video Walkthrough

Here's a walkthrough of implemented features:

[▶️ Watch the Video Walkthrough](https://www.loom.com/share/e6dac0587d434606a31f1785cf033e23)

Video created with [Loom](https://www.loom.com/) for macOS

## Notes

* CSS styling for the navigation bar, such as learning that `text-decoration: none` needs to be applied to the nested links rather than the `<ul>` itself.
* Using pseudo-selectors correctly to add extra styling touches, such as `:hover`.
* While testing the `filterUnfundedOnly` function after writing the code to filter `GAMES_JSON` and display only seven games, all eleven games continued to appear. This happened because an event listener had not been added to the "Show Unfunded Only" button to invoke `filterUnfundedOnly()`.
* Changing an `id` to a `class` name and understanding the repercussions not only for styling, but also for JavaScript. For example, code using `getElementById` needs to be adapted to use a selector such as `querySelector` instead.

## License

    Copyright [2026] [Josh Park]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
