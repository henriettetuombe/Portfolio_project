document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.skills img, .experience img, .education img, .projects img');
    const textDivs = document.querySelectorAll('.text-box');
    const scaleFactor = 1.28; // Adjust this value to control the zoom level
    const isImageVisible = Array(images.length).fill(true);
  
    images.forEach((image, index) => {
      image.addEventListener('mouseenter', () => {
        if (isImageVisible[index]) {
          image.style.borderRadius = '50%'; // Make the image circular
          textDivs[index].style.display = 'none'; // Hide the text-box
          image.style.transform = `scale(${scaleFactor})`; // Zoom in the image
          image.style.transition = 'transform 0.3s'; // Add a smooth transition effect
        }
      });
  
      image.addEventListener('mouseleave', () => {
        if (isImageVisible[index]) {
          image.style.borderRadius = '50px'; // Revert to the original shape
          textDivs[index].style.display = 'none'; // Hide the text-box
          image.style.transform = 'scale(1)'; // Revert to the original size
        }
      });
  
      image.addEventListener('click', () => {
        isImageVisible[index] = !isImageVisible[index]; // Toggle image visibility
        image.style.display = isImageVisible[index] ? 'block' : 'none'; // Hide or show the image
        textDivs[index].style.display = isImageVisible[index] ? 'none' : 'block'; // Show or hide the text-box
      });
  
      textDivs[index].addEventListener('click', () => {
        isImageVisible[index] = !isImageVisible[index]; // Toggle image visibility when text is clicked
        image.style.display = isImageVisible[index] ? 'block' : 'none'; // Hide or show the image
        textDivs[index].style.display = isImageVisible[index] ? 'none' : 'block'; // Show or hide the text-box
      });
    });
  });
  
