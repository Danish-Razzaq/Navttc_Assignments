document.addEventListener("DOMContentLoaded", function() {
  fetchImage();

  setInterval(fetchImage, 60000); // Fetch a new image every 60 seconds
});

function fetchImage() {
  fetch("https://api.example.com/car-on-road") // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
          const bgImg = document.getElementById("bg-img");
          bgImg.src = data.imageUrl; // Assuming the API response contains the URL of the image
      })
      .catch(error => {
          console.error("Failed to fetch image:", error);
      });
}
