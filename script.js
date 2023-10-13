document.addEventListener('DOMContentLoaded', () => {
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
    const articlesRegex = /\b(?:a|an|the)\b\s*/i;

    // Sort the names without articles
    const sortedNames = names.sort((a, b) => {
      const trimmedA = a.replace(articlesRegex, '').toLowerCase();
      const trimmedB = b.replace(articlesRegex, '').toLowerCase();
      return trimmedA.localeCompare(trimmedB);
    });

    return sortedNames;
  }

  // Call the sortBandNames function to sort the band names
  const sortedBandNames = sortBandNames(bandNames);

  // Get the ul element with id 'bands'
  const bandsList = document.querySelector('#bands');

  if (bandsList) {
    // Clear any existing content inside the ul
    bandsList.innerHTML = '';

    // Iterate through the sorted band names and add them to the ul as list items
    sortedBandNames.forEach(band => {
      const listItem = document.createElement('li');
      listItem.textContent = band;
      bandsList.appendChild(listItem);
    });
  } else {
    console.error("Element with id 'bands' not found.");
  }
});
