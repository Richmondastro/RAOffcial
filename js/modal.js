// Wait until the page is fully loaded
window.onload = function () {
  // Get the modal
  var modal = document.getElementById("imageModal");

  // Get the close button
  var closeButton = document.getElementById("closeModal");

  // Show the modal when the page loads
  modal.style.display = "block";

  // Get the image element
  var modalImage = document.getElementById("popupModalImage");

  // Add click event to the image for redirection
  modalImage.addEventListener("click", function () {
    window.location.href = "https://darkedge.assarc.org/overview"; // Redirect to the overview page
  });

  // Add click event to the close button
  closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Close modal when close button is clicked
  });

  // Optional: Close modal if you click anywhere outside the image
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Close modal if clicked outside
    }
  };
};
