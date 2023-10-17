// Function to remove articles from a string
function getArticleLessString(input) {
  let words = input.split(' ');
  let nonArticleWords = words.filter((word) => {
    let smallCaseWord = word.toLowerCase();
    return !(smallCaseWord === 'the' || smallCaseWord === 'an' || smallCaseWord === 'a');
  });
  return nonArticleWords.join(' ');
}

// Array of band names
let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];

// Create a hash map to store article-less strings as keys and original strings as values
let hashMap = {};

for (let i = 0; i < arr.length; i++) {
  let articleLessString = getArticleLessString(arr[i]);
  hashMap[articleLessString] = arr[i];
}

// Get article-less strings and sort them
let articleLessStrings = Object.keys(hashMap);
articleLessStrings.sort();

// Create a list of sorted band names without articles
let outputList = [];

articleLessStrings.forEach((newString) => {
  outputList.push(hashMap[newString]);
});

// Get the ul element with id 'bands'
const bandsList = document.querySelector('#bands');

if (bandsList) {
  // Clear any existing content inside the ul
  bandsList.innerHTML = '';

  // Iterate through the sorted band names and add them to the ul as list items
  outputList.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandsList.appendChild(listItem);
  });
} else {
  console.error("Element with id 'bands' not found.");
}
