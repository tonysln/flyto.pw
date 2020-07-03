# FlyTo.pw

Plan your trips and keep track of your plan easily.

## Main features

- View your trip (aka journey) chronologically by steps, such as taking a taxi, a bus, getting on a flight, arriving, getting coffee/food, meeting up with someone, arriving at a hotel, sleeping, checking out of a hotel, shopping, etc.
- By adding timestamps to every step, get a quick overview of how far are you in your journey and what important info you need for the next steps, for example money, QR codes/tickets, walking up to some place, etc.
- Customize timestamps and activities, add custom info and images, upload tickets (_how?_), images, details, etc.
- Quickly access the trip from any device by sharing it (_how exactly?_).
- No registration needed, but only one trip at a time can be created.

## Splash page

Main page with info and big cool words. Will detect any saved journies and offer to view them immediately or create a new one.

## Journey creation page

If no journies are detected in local storage, will offer to create a new one (will need a name, destination, dates etc before adding more stuff) or load one (will save the loaded JSON into localstorage and forward to the journey page).

## Journey page

Main page with the journey info and everything else. Some possible views: Journey, Tickets, Food, Expenses, Other, Settings.

### Journey

The main page, consisting of panes with journey steps. Possible types of steps:

- Wake up
- Taxi
- Bus/Train/Tram/Trolley/Metro
- Flight start
- Flight end
- Coffee/snack
- Food
- Meeting up
- Shopping
- Hotel check-in
- Sleep
- Hotel check-out

Every pane/card will have an emoji, bold text (Inter font), bright colors, short info. Links to other pages (like tickets), options to view QR codes or images etc.

Quick ways to edit or add more panes. Every pane will ask for its type (aka a template) and extra stuff like tickets (that you'll have to insert from the other tab).

### Tickets

Ticket information page, will have larger panes for individual tickets.

_How to add them besides just inserting text?_

### Food

Panes for type of food, where, at what time. Favorite coffee place? Prices, too.

### Expenses

A list of all the expenses with ability to sum, sort, etc.

Items will be just objects from other pages (will ask for tickets and food).

### Settings

Ability to save/share the JSON object stuff.

Change the view - dark/light modes etc.

## Technology

Frontend - Vue.js possibly? First version - pure JS and Bootstrap. Fonts - Inter.

Localstorage for saving. JS/Vue for pretty much everything.

All data stored in a JSON object, maybe something like this:

```js
const journey = {
  created: "datestamp here",
  from: "Tallinn",
  to: "Berlin",
  start: "date, probably first day will be asked",
  end: "date, probably last day will be asked",
  tickets: [
    {
      id: 1,
      type: "flight",
      from_airport: "TLL",
      to_airport: "TXL",
      from_city: "Tallinn",
      to_city: "Berlin",
      start_time: "...",
      end_time: "...",
      price: 35.5,
    },
  ],
  food: [
    {
      id: 1,
      name: "coffee",
      place: "Berlin Schönefeld Airport",
      price: 4.99,
    },
  ],
  journey_panes: [
    {
      id: 1,
      type: "wakeup",
      time: "timestamp here",
      extra: "",
    },
    {
      id: 2,
      type: "flight",
      ticket_id: 1, // at this point find the ticket and show info from there?
    },
  ],
};
```
