async function searchAnime(searchQuery) {
  const apiUrl = `https://docs.api.jikan.moe//anime/{id}(/request)${searchQuery}`;
  console.log('API URL:', apiUrl);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching search results:', error.message);
    throw error; 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('animeSearchForm');

  if (searchForm) {
    searchForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      const searchInput = document.getElementById('searchInput');
      const searchQuery = searchInput.value.trim();

      try {
        const searchResults = await searchAnime(searchQuery);
        displaySearchResults(searchResults);
      } catch (error) {
        console.error('Error handling search query:', error.message);
      }
    });
  } else {
    console.error('Element with ID "animeSearchForm" not found.');
  }
});
// Event listener for anime search form
document.getElementById('animeSearchForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchQuery = document.getElementById('searchInput').value;

  try {
    const searchResults = await searchAnime(searchQuery);
    displaySearchResults(searchResults);
  } catch (error) {
    console.error('Error fetching search results:', error.message);
  }
});
// Display search results
function displaySearchResults(data) {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  data.results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.textContent = result.title;
    searchResultsContainer.appendChild(resultItem);
  });
}

// Event listener for recommendation form
document.getElementById('recommendation-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const title = document.getElementById('animeTitle').value;
  const rating = document.getElementById('rating').value;

  try {
    await submitRecommendation({ title, rating });
    clearRecommendationForm();
    await loadRecommendations();
  } catch (error) {
    console.error('Error handling recommendation:', error.message);
  }
});

// Event listener for anime search form
document.getElementById('animeSearchForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchQuery = document.getElementById('searchInput').value;

  try {
    const searchResults = await searchAnime(searchQuery);
    displaySearchResults(searchResults);
  } catch (error) {
    console.error('Error fetching search results:', error.message);
  }
});

// Load recommendations on page load
// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', async function () {
  await loadRecommendations();
});

// Load recommendations from server
async function loadRecommendations() {
  try {
    const recommendations = await fetchRecommendations();
    displayRecommendations(recommendations);
  } catch (error) {
    console.error('Error loading recommendations:', error.message);
  }
}

// Fetch recommendations from server
async function fetchRecommendations() {
  try {
    const response = await fetch('http://localhost:5700/recommendations');

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    throw error;
  }
}

// Submit recommendation to server
async function submitRecommendation(recommendation) {
  try {
    await fetch('http://localhost:5700/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recommendation),
    });
  } catch (error) {
    console.error('Error submitting recommendation:', error.message);
    throw error;
  }
}

// Display recommendations on the page
function displayRecommendations(recommendations) {
  const recommendationsList = document.getElementById('recommendations');
  recommendationsList.innerHTML = '';

  recommendations.forEach(recommendation => {
    const listItem = document.createElement('li');
    listItem.textContent = `${recommendation.title}: ${recommendation.recommendation} (Rating: ${recommendation.rating})`;
    recommendationsList.appendChild(listItem);
  });
}

// Clear recommendation form fields
function clearRecommendationForm() {
  document.getElementById('animeTitle').value = '';
  document.getElementById('recommendation').value = '';
  document.getElementById('rating').value = '';
}




























































// DOasync function searchAnime(searchQuery) {
//   const apiUrl = `http://discord.jikan.moe/api/v1/search/anime?q=${searchQuery}`;
//   console.log('API URL:', apiUrl);

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error('Failed to fetch search results');
//     }

//     return response.json();
//   } catch (error) {
//     console.error('Error fetching search results:', error.message);
//     throw error; // Re-throw the error to propagate it
//   }
// }

// // Event listener for anime search form
// document.addEventListener('MContentLoaded', function () {
//   const searchForm = document.getElementById('animeSearchForm');

//   if (searchForm) {
//     searchForm.addEventListener('submit', async function (event) {
//       event.preventDefault();

//       const searchInput = document.getElementById('searchInput');
//       const searchQuery = searchInput.value.trim();

//       try {
//         const searchResults = await searchAnime(searchQuery);
//         displaySearchResults(searchResults);
//       } catch (error) {
//         console.error('Error handling search query:', error.message);
//       }
//     });
//   } else {
//     console.error('Element with ID "animeSearchForm" not found.');
//   }
// });

// // Display search results
// function displaySearchResults(data) {
//   const searchResultsContainer = document.getElementById('searchResults');
//   searchResultsContainer.innerHTML = '';

//   data.results.forEach(result => {
//     const resultItem = document.createElement('div');
//     resultItem.textContent = result.title;
//     searchResultsContainer.appendChild(resultItem);
//   });
// }

// // Event listener for recommendation form
// document.getElementById('recommendationForm').addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const title = document.getElementById('animeTitle').value;
//   const recommendation = document.getElementById('recommendation').value;
//   const rating = document.getElementById('rating').value;

//   try {
//     await submitRecommendation({ title, recommendation, rating });
//     clearRecommendationForm();
//     await loadRecommendations();
//   } catch (error) {
//     console.error('Error handling recommendation:', error.message);
//   }
// });

// // Event listener for anime search form
// document.getElementById('animeSearchForm').addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const searchQuery = document.getElementById('searchInput').value;

//   try {
//     const searchResults = await searchAnime(searchQuery);
//     displaySearchResults(searchResults);
//   } catch (error) {
//     console.error('Error fetching search results:', error.message);
//   }
// });

// // Load recommendations on page load
// document.addEventListener('DOMContentLoaded', async function () {
//   await loadRecommendations();
// });

// // Load recommendations from server
// async function loadRecommendations() {
//   try {
//     const recommendations = await fetchRecommendations();
//     displayRecommendations(recommendations);
//   } catch (error) {
//     console.error('Error fetching recommendations:', error.message);
//   }
// }

// // Fetch recommendations from server
// async function fetchRecommendations() {
//   try {
//     const response = await fetch('http://localhost:5700/recommendations');

//     if (!response.ok) {
//       throw new Error('Failed to fetch recommendations');
//     }

//     return response.json();
//   } catch (error) {
//     console.error('Error fetching recommendations:', error.message);
//     throw error; // Re-throw the error to propagate it
//   }
// }

// // Submit recommendation to server
// async function submitRecommendation(recommendation) {
//   try {
//     await fetch('./db.json', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(recommendation),
//     });

//   }
  
//   catch (error) {
//     console.error('Error submitting recommendation:', error.message);
//     throw error; // Re-throw the error to propagate it
//   }
// }

// // Display recommendations on the page
// function displayRecommendations(recommendations) {
//   const recommendationsList = document.getElementById('recommendations');
//   recommendationsList.innerHTML = '';

//   recommendations.forEach(recommendation => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${recommendation.title}: ${recommendation.recommendation} (Rating: ${recommendation.rating})`;
//     recommendationsList.appendChild(listItem);
//   });
// }

// // Clear recommendation form fields
// function clearRecommendationForm() {
//   document.getElementById('animeTitle').value = '';
//   document.getElementById('recommendation').value = '';
// //   document.getElementById('rating').value = '';
// }
// // The Search Form

// document.getElementById('animeSearchForm').addEventListener('submit', async function (event) {
//   event.preventDefault();

//   const searchInput = document.getElementById('searchInput').value;
//   const apiUrl = 'https://api.jikan.moe/v4/anime?q=all' + encodeURIComponent(searchInput);

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('API Response:', data);
//     // Handle the data as needed
//   } catch (error) {
//     console.error('Fetch error:', error);
//   }
// });



















// // Making a POST request
// fetch('http://localhost:3000/postData', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'John Doe', age: 25 }),
// });

// // Making a GET request
// fetch('http://localhost:3000/getData')
//   .then(response => response.json())
//   .then(data => console.log('Retrieved data:', data))
//   .catch(error => console.error('Error retrieving data:', error));



