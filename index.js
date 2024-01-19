async function searchAnime(searchQuery) {  const apiUrl = `https://api.jikan.moe/v4/anime/{id}/full${searchQuery}`;
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


function displaySearchResults(data) {
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = '';

  data.results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.textContent = result.title;
    searchResultsContainer.appendChild(resultItem);
  });
}

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


document.addEventListener('DOMContentLoaded', async function () {
  await loadRecommendations();
});


async function loadRecommendations() {
  console.log('Loading recommendations.....')
  try {
    const recommendations = await fetchRecommendations();
    console.log('Recommendations Loaded:', recommendations);
    displayRecommendations(recommendations);
  } catch (error) {
    console.error('Error loading recommendations:', error.message);
  }
}


async function fetchRecommendations() {
 console.log('Fetching the recommendations')
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


async function submitRecommendation(recommendation) {
  try {
    await fetch('http://localhost:5700/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recommendation),
    });

  }
  catch (error) {
    console.error('Error submitting recommendation:', error.message);
    throw error; 
  }
}


function displayRecommendations(recommendations) {
  const recommendationsContainer = document.getElementById('recommendation');

  if(!recommendationsContainer){
    console.error('Recommendation container not found');
    return;
  }
  recommendationsContainer.innerHTML = '';

  recommendations.forEach(recommendation => {
    const recommendationElement = document.createElement('div')
    recommendationElement.innerHTML = `<ul>
    <li><h3>${recommendation.title}</h5> <br>
     <h4><strong>Rating: ${recommendation.rating}<strong><h4></li>
     </ul>`;
    recommendationsContainer.appendChild(recommendationElement);
  });
}


function clearRecommendationForm() {
  document.getElementById('animeTitle').value = '';
  document.getElementById('rating').value = '';
}


function addComment() {
  const usernameInput = document.getElementById('username');
  const commentInput = document.getElementById('comment');
  const commentsContainer = document.getElementById('comments-container');

  const username = usernameInput.value;
  const commentText = commentInput.value;

  if (!username || !commentText) {
      alert('Please enter both username and comment.');
      return;
  }

  const commentElement = document.createElement('div');
  commentElement.className = 'comment';
  commentElement.innerHTML = `
      <strong>${username}:</strong>
      <p>${commentText}</p>
  `;
  commentsContainer.appendChild(commentElement);

  usernameInput.value = '';
  commentInput.value = '';

}
// SignUp Form
function submitUserInfo(){
  const firstName= document.getElementById('fname').value
  const lastName = document.getElementById('lname').value
  const username = document.getElementById('username').value
  const email =document.getElementById('email').value
  const password =document.getElementById('pwd').value

  const user ={
    firstname:firstName,
    lastname :lastName,
    username:username,
    email:email,
    password:password
  }

  fetch('http://localhost:5700/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(data =>{
    console.log('Finder Signed Up Successfully:', data);
  })
  .catch(error =>{
    console.error('Error Posting The Error Message:,error');

  });
}


// document.addEventListener("DOMContentLoaded", function () {
//   let signupBtn = document.getElementById("signupbtn");
//   let signupForm = document.getElementById("signupForm");
//   let loginBtn = document.getElementById("loginbtn");
//   let loginForm = document.getElementById("loginForm");

//   signupBtn.addEventListener("click", function () {
//       signupForm.style.display = "block";
//       loginForm.style.display = "none"; 
//   });

//   loginBtn.addEventListener("click", function () {
//       loginForm.style.display = "block";
//       signupForm.style.display = "none"; 
//   });
// });























































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



