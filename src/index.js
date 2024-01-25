document.addEventListener('DOMContentLoaded', function () {
  const baseURL = 'http://localhost:3000';

  
  getData('http://localhost:3000/pasta');
  
  
  
  function getData(endpoint) {
    fetch(`${baseURL}${endpoint}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        allPastas = data;
        updatePastaMenu(allPastas);
      })
      .catch(error => {
        
      });
  }
        


  // Call getData with one parameter whose value is 'http://localhost:3000/pasta'
  getData('http://localhost:3000/pasta')

  function updatePastaMenu(pastas) {
    const pastaMenu = document.getElementById('pasta-menu');
    pastas.forEach(pasta => {
      const img = document.createElement('img');
      img.src = pasta.image;
      img.alt = pasta.name;
      img.addEventListener('click', () => showPastaDetails(pasta));
      pastaMenu.appendChild(img);
    });
  }

  function showPastaDetails(pasta) {
    const detailImage = document.querySelector('.detail-image');
    const name = document.querySelector('.name');
   const ratingDisplay = document.getElementById('rating-display');
    const commentDisplay = document.getElementById('comment-display');

    detailImage.src = pasta.image;
    detailImage.alt = pasta.name;
    name.textContent = pasta.name;
    
    ratingDisplay.textContent = pasta.rating;
    commentDisplay.textContent = pasta.comment;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("The form was submitted!");

    const newName = document.getElementById('new-name').value;
    const newImage = document.getElementById('new-image').value;
    const newRating = document.getElementById('new-rating').value;
    const newComment = document.getElementById('new-comment').value;

    const newPasta = {
      name: newName,
     image: newImage,
      rating: newRating,
      comment: newComment,
    };

    showPastaDetails(newPasta);

    document.getElementById('new-pasta').reset();
  }

  function init() {
    const newPastaForm = document.getElementById('new-pasta');
    newPastaForm.addEventListener('submit', handleFormSubmit);
  }
  
  init();


  
});
