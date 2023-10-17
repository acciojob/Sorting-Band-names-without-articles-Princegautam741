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

// Get the ul element with id 'bands'
const bandsList = document.querySelector('#bands');

if (bandsList) {
  // Clear any existing content inside the ul
  bandsList.innerHTML = '';

  // Iterate through the sorted band names and add them to the ul as list items
  articleLessStrings.forEach(newString => {
    const band = hashMap[newString];

    // Create a new li element
    const listItem = document.createElement('li');

    // Set the text content of the li element to the band name
    listItem.textContent = band;

    // Append the li element to the ul
    bandsList.appendChild(listItem);
  });
} else {
  console.error("Element with id 'bands' not found.");
}
