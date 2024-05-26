### DJS06 Project Brief: Higher Order Functions

#### Project Objective
This project is designed to challenge and deepen our understanding of JavaScript's powerful array methods. We will manipulate data using `forEach`, `map`, `filter`, `reduce`, and more, to perform a variety of tasks. This exercise will test our ability to apply these methods in combination to solve complex problems and achieve the desired outcomes.

The essence of using these higher-order functions is to encourage a declarative approach to programming: you define what you want to achieve (e.g., filter a list, transform data) without having to specify how to perform the operations step-by-step (as you would with imperative loops like for or while). This leads to more readable, concise, and often more maintainable code. Additionally, these functions can help avoid side effects and create pure functions, both key aspects of functional programming.

#### Data Sets
You will work with two primary datasets:

1. A list of provinces:
```javascript
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
```
2. A list of names:
```javascript
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
```
3. A list of products with prices:
```javascript
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
```

#### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)
For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.
2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

# Project Process
* After getting the starter repository from the provided folder from codespace and after evaluating the requirements for the project I decided to have every exercise inside a function which contains the console.log so that I can just call the function, this is only for the normal exercises and not the advanced.
* For the first exercise I have a function which takes the names and province array as arguments and inside it I use the forEach method to console log each name inside the names array and console log each province inside the provinces array and then console log each name with its corresponding province based on it's index.
* For the second exercise I have a function which takes the provinces array as an argument and inside the function I create a new array using the map method and inside the callback function I convert each province to upper case using toUpperCase and then console log the new array.
* For the third exercise I have a function which takes the names array as an argument and inside the function I created a new array using a map method which inside the callback function I created the length of each string inside the array and then console logged the new array.
* For the forth exercise I have a function which takes the provinces array as an argument and inside it I sorted the provinces using the sort method and console logged the result.
* For the firth exercise I have a function which takes provinces array as an argument, which inside the funciton I filtered the provinces array using the filter method which the call back function returns the array which doesn't include Cape in it's string. I then console logged the filtered array.
* For the sixth exercise I have a function which takes in the names array as an argument which inside the function I created a new array which returns boolean values, by checking if each string contains the character "s" whether uppercase or lowercase by using the map method to create a new array, using the split method to split each name inside the names array and using some to check if the split character in the sub-array  include the "s" character. I then console logged the new array.
* For the seventh exercise I have a function which takes the names array as an argument which inside the function I use the reduce method to create an object which has names as keys and the corresponding provinces as values. I then console logged the result.
* For the advanced exercises I had a single function which takes the products array as an argument and inside it I had all six exercise. The first exercise simply logs the names of all products as a comma separated string using the map method and the join method to have everything returned as a string. The second exercise filtered the products which their names are five characters or less using the filter method. The third exercise calculated the total price of all products with valid prices by first filtering the product to ensure the product prices are not "" or " ", which means they are either an empty string or a string with a space, then used the reduce method to return the outcome of the calculation. The fourth exercise concatenates all the product names into a single string, which basically means combining the names using the reduce method and just adding previous name with the current name. The firth exercise finds the highest and lowest price and returns a string pointing out the extremes of high and low, using the filter method to get the prices which don't contain empty strings and then using the map method to get an array of the prices properties being converted into numbers for those that are strings and then use the reduce method to get the highest price and the lowest price using simple logic by iterating throug the priced products array and find the highest price by comparing with the initial value which is max and updating the max whenever the it finds the product with a higher price and vica-versa for the lowest price. The last exercise just transforms the products array into a new format by replacing the key for product and price to be name and cost using the reduce method to return an array of objects and using the object.entries to get the key and value pairs of the products objects inside the array.

  
# Challenges
One of the challenges I had came with dealing with the advanced challenges as the requirements firstly required us to have only one console log which dealt with all the logic for the exercises. I firstly tried returning all the results as an object, which I didn't like how it returned the results. I then managed to find an example which showed how to return multiple results using string literals and chaining them using the + sign. The other challenging aspects was dealing with the logic for some of the challenges which were a bit complex.

# Feedback
This was a good refresher of using array methods. It was both challenging and rewarding when you solve each exercise more specifically the advanced exercises as they were not straight forward. 

