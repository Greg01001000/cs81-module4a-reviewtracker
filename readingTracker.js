// Weekly reading log
// readingLog is an arry of objects, each of which is a log entry with three
// property:value pairs. It stores the amount of time spent reading each book
// on each day. Because arrays are objects, const here does not mean that the
// values inside, or the number of values, are unchangeable; it only means that
// readingLog cannot be unbound from this array or bound to a different object.
// This assignment statement puts five objects in the array, but that number
// can be changed later, e.g., by addReadBook() (see below).
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  // This line creates a new object of three property:value pairs in the same
  // format as the objects in readingLog. It sets the values of the pairs equal
  // to the parameters' values.
  const newEntry = { day, book, minutes };
  // This line adds the newly created object to readingLog, putting it after
  // all existing objects (log entries).
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0;
  // This loop iterates through each object (entry) in the parameter (the log).
  // At each object, it reads the number of minutes in that entry and adds that
  // number to the accumulator variable (total).
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
function mostReadBook(log) {
  // This line creates an empty object which will accumulate counts of the
  // number of times each book was read.
  const bookCounts = {};
  // This loop iterates through each object (entry) in the parameter (the log).
  // If at least one book has more than one log entry (which is likely and the
  // whole point of this function), bookCounts will have a smaller number of
  // entries than the log. The only way to find out how many entries bookCounts
  // should have is to go through all the log entries and make an entry for
  // each book, which is what this loop does, while adding 1 to the value for
  // each book each time that it was read. So at each log entry, the 'if'
  // condition checks whether that book already exists in bookCounts--if it
  // doesn't, the assignment statement after the 'if' condition creates a
  // property in bookCounts for that book and assigns it the value 1. If the
  // book does exist, the increment expression in the 'else' block increases
  // the value of that book by 1, thus keeping track of how many times each
  // book was read (entered in the log).
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // To find the book which was read the most times, we need to find the
  // highest number of times a book was read (the numeric variable maxCount
  // will keep track of that) and the book title with the highest count (the
  // variable maxBook will keep track of that). The 'for' loop below iterates
  // through each property:value pair in bookCounts. The 'if' condition checks
  // whether the number of times that book was read is greater than the highest
  // number seen so far, and if so, assigns the current book to maxBook and its
  // number of times read to maxCount. When the loop has gone through all the 
  // books in bookCounts, maxBook holds the book that was read the most times,
  // and maxCount holds the number of times that book was read. (If there is a
  // tie, maxBook holds the first book listed in bookCounts that was read that
  // number of times.)
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  // Note that this function only returns the book title, not the number of
  // times it was read. Apparently that's a secret.
  return maxBook;
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  // This 'for' loop iterates through each object (entry) in the parameter (the
  // log) and displays a nicely formatted list of the entries, explaining how
  // many minutes were spent reading each book each day. It displays the
  // property:value pairs in a different order than they are stored in the
  // readingLog objects.
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// Add an entry to the log (day, book, minutes)
addReadBook("Saturday", "Dune", 50);
// Display a nicely formatted list of all entries in the log
printDailySummary(readingLog);
// Display the number of minutes spent reading as shown in the entire log
console.log("Total minutes read:", totalReadingMinutes(readingLog));
// Display the title of the book that was read the most times (or if there is a
// tie, the tied book that appears first in the log)
console.log("Most read book:", mostReadBook(readingLog));
