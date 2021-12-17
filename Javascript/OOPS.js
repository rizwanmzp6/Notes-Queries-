//1. OOPs Javascript:

//1.1 earlier:

//constructor
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}
const book1 = new Book('The Earthly Hallows', 'John', '1986');

//prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

// prototype inheritence
Magazine.prototype = Object.create(Book.prototype);

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

const mag1 = new Magazine('Mag one', 'John Doe', '2018');

//1.2 Now

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //adding prototypes
  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }
}

//Instantiate object
const book1 = new Book('The Deathly Hollows', 'John', '1996');

console.log(book1);

//Inheritence in class using extend keyword
class ReactDeveloper extends Developer {
  installReact() {
    return 'installing React .. Done.';
  }
}
var nathan = new ReactDeveloper('Nathan');
nathan.hello(); // Hello World! I am Nathan and I am a web developer
nathan.installReact(); // installing React .. Done.
