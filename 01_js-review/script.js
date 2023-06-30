/// install Quokka extension before launching this code in VS Code.
// launch Quokka==>> open setting //cntl+shfit+ p
//select quokka start with current file

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// //////////////////////////////////////////////////////////

// // // const books = getBooks();
// // // books;

// // //////////////////////////////////////////////////////////////////

// /***************DESTRUCTURING********************** */

// // ////////basic long method///////////
// // //to get book name and author//

// // // const book= getBook(2);
// // // const title= book.title;
// // // title;// Dune

// // // const author=book.author;
// // // author;
// // // console.log(title,author)

// // /// METHOD 2 to get title and author at same time

// // const book = getBook(2);
// // const { title, author, id, pages, genres } = book;
// // // // console what ever you want
// // // name should be same

// // console.log(author, id, title, genres);

// // const primary = genres[0];
// // const secondary = genres[1];
// // //console.log(primary,secondary)

// // /// better method->

// // const [primaryGenres, secondaryGenres, thirdGenres] = genres;

// // console.log(primaryGenres, secondaryGenres,thirdGenres);

// ////////////////////////////////////////////////////////////////////

// /*******************REST/SPREAD OPERATOR*****************/

// const book = getBook(3);
// const {
//   title,
//   author,
//   id,
//   pages,
//   genres,
//   hasMovieAdaptation,
//   publicationDate,
// } = book;
// const [primaryGenres, secondaryGenres, ...othersGenres] = genres;

// /*... can be only use to define only the after after that ... */

// console.log(othersGenres);
// /**/ /*******spread operator******** */

// // const newGeners= [genres,"Romantic"];
// // console.log(newGeners)

// // above method is not used widely because it add seperately, added in the array;
// // thus we use spread operator;

// const newGeners = [...genres, "Romantic"];
// console.log(newGeners);

// const updatedBook = {
//   ...book,
//   //Adding a new proper only after spread will work..not after
//   moviePublicationDate: "2011-12-21",
//   //over writting existing property;
//   pages: 1221,
// };
// console.log(updatedBook);

// //////////////////////////////////////////////////////////////
// /*************templet literals method*****************/

// const summary = `The name of book is ${book.title} with total pages number as ${
//   book.pages
// } is ${hasMovieAdaptation ? "" : "not"} adopetd as a movie`;
// summary;

// ////////////////////////////////////////////////////////////////
// /************ternaries (instead of if/else)*****************/

// // 3 part needed
// // if need condotion(if pages is over 1000)
// // if true "over 1000"
// // else "less than 1000"

// console.log(book.pages > 1200 ? "over 1000 pages" : "less then 1000");
// /// read const summary also to see the usage

// //////////////////////////////////////////////////////
// /********************Arrow functions************** */
// // old ways

// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str, a, b) => {
//   str.split("-")[0];
// };

// console.log(getYear(publicationDate));

// /////////////////////////////////////////////////
// /*************short circutting and logical Operator*************/

// /************short Circuting************ */

// console.log(true && "some Stinrg");
// console.log(false && "some Stirng");
// console.log(hasMovieAdaptation && "this book has a movie");

// ///falsy value ==>> 0 ,'' ,null ,undefined,

// console.log(true || "some String");
// console.log(false || "Some value");

// console.log(book.translations.English);

// const englishTranslator = book.translations.English || "Not transrlation";
// englishTranslator;
// //// as  we know 0 is a falsy data so if you are short circuiting be sure with tha data that it not have the value zero or else it throws error as false.

// // const count= book.reviews.librarything.reviewsCount ?? "no data";
// // count;

// //////////////////////////////////////////////////////////
// /************Optional Chainig****************/

// // taking about getTotalRevieCount(book);

// /** We use below code when we not sure the we get a proper number output // to avoid undefiend and NaN
//  * with following codeif review count is true it return the number value and short Circuit else return 0 as output
//  * to avoid undefined or NaN error;
//  *
//  */

// function getTotalRevieCount(book) {
//   const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
//   const libCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + libCount;
// }

// console.log(getTotalRevieCount(book));

// /// go to line#193 and enter 3 as id.. after that you will get as undefined error
// /*
// so to over come that we use Optional chainig where we put ? in the last known element (element before the doubtful element) so that if the thing is undefined it will not thrown an error . and return NaN as output

// just put ? after librarythings in function getTotalReviewCount and error will be handled
// */

/* 2nd time commenting all code*/
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
/**
 * 3 Mthod should be master for React
 *
 * map
 * filter
 * reduce
 * do not mutate the original array but return new array based on the original one
 *
 */

/************** MAP***********************/
//
// const books = getBooks();

// // const x= [1,2,3,4,5,6,7,8,9,10].map((el)=> el*2)
// // console.log(x);
// function getTotalRevieCount(book) {
//   const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
//   const libCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + libCount;
// }

// const titles = books.map((book) => book.title);
// //console.log(titles);

// const essentialData = books.map((book) => ({
//   titles: book.title,
//   author: book.author,
//   reviewCount: getTotalRevieCount(book),
// }));

// /**mif we use ( ) breckets before {} in function then we dont have to use the syntex return as it return everything */

// //console.log(essentialData);

// //////////****************FILTER METHOD************** */

// const longBook = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBook);

// const adventureBook = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBook);

// ////////////////////////////////////////
// /***************Reduce Method**********************/

// const pagesOfAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesOfAllBooks;

// //////////////////////////////////////
// /***Sort method**************/

// const arr = [1, 5, 9, 8, 7, 3, 5, 7];
// const sorted = arr.slice().sort((a, b) => a - b);
// const reverseSort = arr.slice().sort((a, b) => b - a);
// arr;
// sorted;
// reverseSort;
// /****** it mutate the data.. so to over come that we have to date a copy of arr the update
//  *
//  * thus before sort() method we use slice() method.
//  */

// const sortByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortByPages);

// /////////////////////////////////////////////////////////

// //********Working with immutable Arrays**********/

// /////// Adding new object book in array'
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the chember of Sercreat",
//   author: "J.k.Rowling",
// };
// const AddBooks = [...books, newBook];
// AddBooks;

// /////////// del book from array

// const booksAfterDel = AddBooks.filter((book) => book.id !== 3);
// booksAfterDel;

// /////////// update a book object in array;

// const updatedBook= booksAfterDel.map((book)=>book.id===1 ? {/*detail of update object*/...book,pages:10 } : book);
// updatedBook;

// //updated sucessfull//

//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/**********fetch+ Asynchronous promis*********/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res)=> res.json())
//   .then((data)=> console.log(data));

//   console.log("hello")

/////////////////////////////////////////

// /*********Async/Await ***********************/

// async function getTodos() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`);
//   const data = await res.json();
//   console.log(data);
// }

// getTodos();
// console.log("hello");
