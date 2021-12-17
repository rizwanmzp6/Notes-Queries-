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
  const book1 = new Book('The Deathly Hollows', 'John', '1996')
  
  console.log(book1)