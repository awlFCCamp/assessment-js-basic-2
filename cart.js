///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((accu, item) => (accu += item.price), 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) =>
  (cartTotal * (1 + tax) - couponValue).toFixed(2);
console.log(calcFinalPrice(110, 15, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    - customerId: Number, this will be an unique identifier for each customer, customerId will be the primary key in our db, we use customerId to track each customer object. We want to auto increment customerId, so it will be a number,
    - FirstName: String, person's first name is string so we store it in string. We need customer's firstname and lastname so we can contact them
    - LastName: String, person's last name is string so we store it in string. We need customer's full name for our record and also for mailling promotion
    - emailAddress:String, entire email address is string so we store it in string. We need customer's email address to send emails about promotions 
    and reward information
    - phoneNumber:String, in us phone numbers are 10 digits numbers, store in string is best choice. We need customer's phone number to call them for no show etc.
    - rewardNumber: will be a uuid number that is a string. It is always good idea for buisness to have a reward program to attact customers.
  

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const Customer = {
  id: 1,
  firstName: "Mary",
  lastName: "Dole",
  emailAddress: "mary@gmail.com",
  phoneNumber: "123-456-7890",
  rewardNumber: "550e8400-e29b-41d4-a716-446655440000",
};
