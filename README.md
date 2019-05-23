# Deal Card React JS Take Home Question

Using [create-react-app]() and [Material-UI](https://material-ui.com/), create the UI for the below sample javascript object. This should use a Material UI Card element and present the javascript object dealCard presented below on the card. The card should include the ProductName as its title, and then list the Amount of the deal in $ and present the saleProbability as a percentage. The fields factorsPro and factorsAgainst can be arrays of length 0 to 10 items, where each contains a name and a description of a factor that goes into determining the probability of closing. These factors should be presented as `${name}}: ${description}`. Implement the UI in the attached file named DealCard.js. This file already receives as props the dealCard object.

This UI should display all of the information below and be executable using the normal create-react-app commands. While this project is created using yarn, feel free to use npm or yarn to manage the project. This should be implemented using only Material-UI components.

This should take a maximum of 2-3 hours of time. The goal is to show you can create a simple UI from data using a framework.


```javascript
let dealCard = {
  productName: "Football Season Ticket",
  amount: 100.0,
  saleProbability: 0.1234,
  factorsAgainstSale: [
    {
      name: "Distance",
      description: "> 20 miles from Stadium"
    },
    {
      name: "Expense",
      description: "Household income < $50,000"
    }
  ],
  factorsForSale: [
    {
      name: "Attendance",
      description: "Has previously attended 5 games"
    }
  ]
};
```

## Here is the finished project

![Finished Project](/img/screenshot.png)