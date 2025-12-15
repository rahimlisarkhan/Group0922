
// JSON - Javascrion Object Notation


// let numbers = [1, 2 ,3, 4, 5]
// let personal1 = ["John", 30, "New York"]


// let personal2 = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   isMarried: false,
//   education: null,
//   skills: ["JavaScript", "React", "Node.js"],
//   address: {
//     street: "123 Main St",
//     zip: "10001"
//   }
// }

// let personal3 = {
//   name: "Jane",
//   age: 25,
//   city: "Los Angeles",
//   isMarried: true,
//   education: "Bachelor's Degree",
//   skills: ["Python", "Django", "Machine Learning"],
//   address: {
//     street: "456 Elm St",
//     zip: "90001"
//   }
// }


// let result = [personal2, personal3] // simulate from backend API
// console.log("result",result);


// for(let i=0; i<result.length; i++){
//   console.log("Student Name:", result[i].name);
//   console.log("Student Age:", result[i].age);
//   console.log("Student City:", result[i].city);
//   console.log("Student Skills:", result[i].skills.join(", "));
//   console.log("Student Address:", result[i].address.street + ", " + result[i].address.zip);
//   console.log("-----");
// }


// let studentPostcode = personal2.address.zip
// let studentSkills = personal2.skills
// let studentName = personal2.name

// console.log("studentName",studentName);
// console.log("studentPostcode",studentPostcode);
// console.log("studentSkills",studentSkills);


const countries = [{
  name: "United States",
  capital: "Washington, D.C.",
  population: 331002651,
  languages: ["English"],
  cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
  },
  {
  name: "Canada",
  capital: "Ottawa",
  population: 37742154,
  languages: ["English", "French"],
  cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"]
  },
  {
  name: "Mexico",
  capital: "Mexico City",
  population: 128932753,
  languages: ["Spanish"],
  cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"]
  },
  {
  name: "Brazil",
  capital: "Brasília",
  population: 212559417,
  languages: ["Portuguese"],
  cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"]
  },
  {
  name: "United Kingdom",
  capital: "London",
  population: 67886011,
  languages: ["English"],
  cities: ["London", "Birmingham", "Manchester", "Leeds", "Glasgow"]
  },
  {
  name: "France",
  capital: "Paris",
  population: 65273511,
  languages: ["French"],
  cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
  },
  {
  name: "Germany",
  capital: "Berlin",
  population: 83783942,
  languages: ["German"],
  cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"]
  },
  {
  name: "Italy",
  capital: "Rome",
  population: 60461826,
  languages: ["Italian"],
  cities: ["Rome", "Milan", "Naples", "Turin", "Palermo"]
  },
  {
  name: "Spain",
  capital: "Madrid",
  population: 46754778,
  languages: ["Spanish"],
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"]
  },
  {
  name: "Japan",
  capital: "Tokyo",
  population: 126476461,
  languages: ["Japanese"],
  cities: ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo"]
  },
  {
  name: "China",
  capital: "Beijing",
  population: 1439323776,
  languages: ["Mandarin"],
  cities: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu"]
  },
  {
  name: "India",
  capital: "New Delhi",
  population: 1380004385,
  languages: ["Hindi", "English"],
  cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"]
  },
  {
  name: "Australia",
  capital: "Canberra",
  population: 25499884,
  languages: ["English"],
  cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
  },
  {
  name: "Russia",
  capital: "Moscow",
  population: 145934462,
  languages: ["Russian"],
  cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"]
  },
  {
  name: "South Korea",
  capital: "Seoul",
  population: 51269185,
  languages: ["Korean"],
  cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"]
  }
]

for(let i=0; i<countries.length; i++){

  const population = countries[i].population;

  let result = population >= 100000000 ? "Large Population" : "Small Population";

  console.log("Country Name:", countries[i].name);
  console.log("Capital:", countries[i].capital);
  console.log("Population:", countries[i].population);
  console.log("Country:", countries[i].name, "-", result);
  console.log("Languages:", countries[i].languages.join(", "));
  console.log("Major Cities:", countries[i].cities.join(", "));


  console.log("-----");
}