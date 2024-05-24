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


//Exercise 1

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
const upperCaseProvinces = (provinces) => {
  const newProvinceArray = provinces.map(province => province.toUpperCase());
  console.log(newProvinceArray);
}

upperCaseProvinces(provinces);

//Exercise 3
const nameLenghts = (names) => {
  const newNamesArray =  names.map(name => name.length);
  console.log(newNamesArray);
};

nameLenghts(names);

//Exercise 4

//Exercise 5

//Exercise 6

//Exercise 7