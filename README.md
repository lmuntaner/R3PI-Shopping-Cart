# R3PI Home coding exercise

This is the Coding Exercise for R3PI Application Process.

### Requirements:

- Items are presented one at a time, in a list, identified by name - for example "Apple" or
“Banana".
- The basket can contain any item multiple times. Items are priced as follows:
- Apples are 25 ct each
- Oranges are 30 ct each
- Bananas are 15 ct each
- Papayas are 50 ct each, but are available as ‘three for the price of two’
- Given a shopping list with items, calculate the total cost of those items taking in mind any discounts.
- The output shall be displayed similar to what you would expect to see on a receipt.

### How to run

**You’ll need to have Node >= 6 on your machine**

1. Clone the repo
2. Install dependencies by running: `npm install`
3. Start the app: `npm start`
4. Visit: `localhost:3000`

There are 2 pages:
- `/`: List of T-Shirts
- `/cart`: Shopping Cart

### Simplifications

To stick with only requirements many simplifications have been made:
- No currencies
- No editing the Shopping Cart
- Simple Notifications Feature
- No backend. Products are hardcoded in the initial state of Redux.
- No persistence of shopping card
- No sizes
- ...
