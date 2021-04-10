const GITHUB_URL = "https://github.com/sabrina-tech";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

 
/*const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {});

nextBtn.addEventListener('click', function() {


});*/








