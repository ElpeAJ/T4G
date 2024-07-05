let source = document.getElementById('eachHelper').innerHTML;
let template = Handlebars.compile(source);

let context = {
  newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

let compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;

source = document.getElementById('languagesTemp').innerHTML;
template = Handlebars.compile(source);

// context = {
//   languages: [
//     {name: "HTML"},
//     {name: "CSS"},
//     {name: "JavaScript"},
//   ]
// };
context = {
    languages: [
      {
        name: 'HTML',
        modern: true
      },
      {
        name:'CSS',
        modern: true
      }, 
      {
        name: 'JavaScript',
        modern: true
      },
      {
        name: "COBOL",
        modern: false
      }
    ]
  };

compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
