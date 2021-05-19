const GITHUB_URL = "https://github.com/sabrina-tech";

/*fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });
*/

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
 

  let i=0;
  var locations = [
    ['Rio de Janeiro', -22.985240025605123, -43.22425774174553, 1],
    ['Cape Town', -34.050917437859376, 18.499328945159554, 2],
    ['Tel Aviv', 32.05183665784207, 34.76085076921471, 3],
    ['Mavkiim', 31.621220030377486, 34.57638263893466, 4]
  ];


  prevBtn.addEventListener('click', function() {
   
   if (i === 0){
    prevBtn.disabled=true
    
 }
 let baseUrl = 'http://maps.google.com/maps';
 i--; 
 nextBtn.disabled=false
 if (i === 0){
   prevBtn.disabled=true;
 }


 var location = locations[i];
 var locationSuffix = '?q=' + location[1].toString() + ',' + location[2].toString() + '&z=10' +'&output=embed';
 document.getElementById('myIframe').src = baseUrl + locationSuffix;  
}
)


nextBtn.addEventListener('click', function() {
    
  if (i >= locations.length -2){
       nextBtn.disabled=true
       
    }
    let baseUrl = 'http://maps.google.com/maps';
    prevBtn.disabled=false
    i++;
    
       
    var location = locations[i];
    var locationSuffix = '?q=' + location[1].toString() + ',' + location[2].toString() + '&z=10' +'&output=embed';
    document.getElementById('myIframe').src = baseUrl + locationSuffix;  
}
  )


  










let codes = ["HTML", "CSS", "JavaScript"];
let lastcode = codes.pop();
  
let codesString = "This page was built using: " + codes.join(", ") + " and " + lastcode + ".";
  
document.getElementById("built-using").innerHTML = codesString;
  


