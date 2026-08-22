# WEB102 Prework - *Nautilus Analytics*

Submitted by: **Josh Park**

**Nautilus Analytics** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **6-7** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] Navigation bar with links to sections, e.g., Stats, Our Games and logo-link to top of the page
* [x] Search bar features:
  * [x] Matches a search result (including substrings) to any of the game's names
  * [x] Search can be submitted by clicking the search icon or pressing Enter
  * [x] Clicking the **X** clears previous search results and restores the default view (11 games displayed)

## Video Walkthrough

Here's a walkthrough of implemented features:

[▶️ Watch the Video Walkthrough](https://www.loom.com/share/001817d122f448048dadd835b8be1f01)

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
