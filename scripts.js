// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Exercise 1
/**
 * A function which console logs each name from the names array and logs each province from the provinces array and then logs the name with it's corresponding province
 * @param {Array} names 
 * @param {Array} provinces 
 */
const namesAndProvinces =(names, provinces) => {

  names.forEach(name =>
    console.log(name)
  );

  provinces.forEach(province =>
    console.log(province)
  );

  names.forEach((name, index) => {
    console.log( `${name} (${provinces[index]})`)
  });
};

namesAndProvinces(names, provinces);

//Exercise 2
/**
 * A function which returns a new array of provinces in uppercase
 * @function
 * @param {Array} provinces 
 */
const upperCaseProvinces = (provinces) => {
  const newProvinceArray = provinces.map(province => province.toUpperCase());
  console.log(newProvinceArray);
}

upperCaseProvinces(provinces);

//Exercise 3
/**
 * A function which logs a new array of each name length
 * @function
 * @param {Array} names 
 */
const nameLenghts = (names) => {
  const newNamesArray =  names.map(name => name.length);
  console.log(newNamesArray);
};

nameLenghts(names);

//Exercise 4
/**
 * A function which returns an array with the provinces sorted in order
 * @function
 * @param {Array} provinces 
 */
const sortProvinces = (provinces) => {
  const newSortedProvinces = provinces.sort();

  console.log(newSortedProvinces);
};

sortProvinces(provinces);

//Exercise 5
/**
 * A function which returns a filtered array which excludes provinces which include Cape in their string and logs the number of provinces in the array
 * @function
 * @param {Array} provinces 
 */
const filteringCape = (provinces) => {
  const newFilteredProvinces = provinces.filter(province => !province.includes("Cape"));
  console.log(newFilteredProvinces.length)
}
filteringCape(provinces);

//Exercise 6
/**
 * A function which returns a new array  with boolean values for whether a string contains s whether uppercase or lowercase.
 * @function
 * @param {Array} names 
 */
const findLetterInNames = (names) => {
  const containsLetterS = names.map(name => name.split('').some(character => character.includes('s') || character.includes('S')));
  console.log(containsLetterS)
}

findLetterInNames(names);

//Exercise 7
/**
 * A function which returns a new object with the names as key and province as value.
 * @function
 * @param {Array} names 
 */
const createObjectfromArrays = (names) => {
  const newObjectFromArrays = names.reduce((accumulator, currentValue, index) => {
    accumulator[currentValue] = provinces[index];
    return accumulator
  },{});

  console.log(newObjectFromArrays);
};

createObjectfromArrays(names);


///Advanced Exercises
/**
 * A function which executes all the exercises and returns them as string literals.
 * @param {Array} products 
 * @returns {String}
 */
const advancedExercises = (products) => {
  //exercise 1:
  const logProducts = products.map(singleProduct => singleProduct.product).join(", ");

  //exercise 2: 
  const filteredNameByLength = products.filter(productName => productName.product.length <= 5);

  //exercise 3:
  const totalPrice = products.filter(individualProduct => individualProduct.price !== '' && individualProduct.price !== ' ').reduce((total, individualProduct) => total + Number(individualProduct.price), 0);

  //exercise 4:
  const concatenatedProductNames = products.reduce((accumulator, individualProduct) => accumulator + individualProduct.product,'');

  //exercise 5:
  const findExtremesInPrice = () => {
    const pricedProducts = products.filter(individualProduct => individualProduct.price !== '' && individualProduct.price !== ' ').map(individualProduct => ({...individualProduct, price: Number(individualProduct.price)}));
    const highestPrice = pricedProducts.reduce((max, individualProduct) => individualProduct.price > max.price ? individualProduct : max, pricedProducts[0]);
    const lowestPrice = pricedProducts.reduce((min, individualProduct) => individualProduct.price < min.price ? individualProduct : min, pricedProducts[0]);
    return `Highest Price is: ${highestPrice.product}. Lowest Price is: ${lowestPrice.product}.`
  }

  const highestAndLowestPrice = findExtremesInPrice();

  //exercise 6:
  const objectTransformation = products.reduce((accumulator, product) => {
    Object.entries(product).forEach(([key, value]) => {
      if (key === 'product') {
        accumulator.push({ name: value });
      } else if (key === 'price') {
        accumulator[accumulator.length -1].cost = value;
      }
    });
    return accumulator
  }, []);

  return `Log Products: ${logProducts}\n` +
         `Filtered by Name Length: ${JSON.stringify(filteredNameByLength, null, 2)}\n` +
         `Total price: ${totalPrice}\n` +
         `Concatenated Product Names: ${concatenatedProductNames}\n` +
         `Price Extremes: ${highestAndLowestPrice}\n` +
         `Object Transformation: ${JSON.stringify(objectTransformation, null, 2)}`;

}

console.log(advancedExercises(products))
