const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(tutorials){
// let bookTitle = tutorials.map((book) => {
//   let upperCaseBook = book.map((words)=>{
//   return words.charAt(0).toUppercase();
//   }); 
//   return upperCaseBook 
// });
//   return bookTitle
// }

function titleCased(tutorials){
  let bookTitle = tutorials.map(book => {
    let words = book.split(' ');
    for (let i; i < book.length; i++){  
      words[i].charAt(0).toUppercase();
    }
      return words.join(' ');
  })
  return bookTitle
}


