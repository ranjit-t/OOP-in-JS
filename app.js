// 1) This is object literal notation to create a new Object
const obj = {
  title: "Earth",
  author: "Ran",
  year: 2023,
};

//  2) This is creating a class of Books ,then later used to create object instances

class Books {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  summary() {
    return `The book name is ${this.title} which is written by ${this.author} and it was released in ${this.year}`;
  }
}

const book2 = new Books("Venus", "Ran", 2022);
const book1 = new Books("Earth", "Ran", 2021);

console.log(book1.summary());
console.log(book2.summary());

// 2.1)Inheritance to create subclasses

class DetailedBooks extends Books {
  constructor(title, author, year, copies, rating) {
    super(title, author, year);
    this.copies = copies;
    this.rating = rating;
  }
  detailedsummary() {
    return `The book name is ${this.title} which is written by ${this.author} and it was released in ${this.year} and it sold ${this.copies} copies in total and it has an average rating of ${this.rating} `;
  }
}

const book3 = new DetailedBooks("Jupiter", "Ran", 2023, 10000, 4.5);

console.log(book3.summary()); //using method defined from parentclasse
console.log(book3.detailedsummary()); //using its own method

// 3) Now let us create another object using create Method
// this creates an object with no properties

const book4 = Object.create(null);
book4.title = "Saturn";
book4.author = "Ran";
book4.year = 2024;
console.log(book4);
