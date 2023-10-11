// Array of band names
let bandNames = [
  'The Rolling Stones',
  'Aerosmith',
  'The Beatles',
  'Guns N\' Roses',
  'Red Hot Chili Peppers',
  'AC/DC'
];

// Function to sort band names without articles
function sortBandNames(names) {
  // Define a regular expression to match articles at the beginning of a string
  const articlesRegex = /^(a |an |the )/i;

  // Sort the names lexicographically without articles
  names.sort((a, b) => {
    const trimmedA = a.replace(articlesRegex, '').toLowerCase();
    const trimmedB = b.replace(articlesRegex, '').toLowerCase();
    return trimmedA.localeCompare(trimmedB);
  });

  return names;
}

// Call the sortBandNames function to sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Get the ul element with id 'bands'
const bandsList = document.getElementById('bands');

// Iterate through the sorted band names and add them to the ul as list items
sortedBandNames.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandsList.appendChild(listItem);
});
