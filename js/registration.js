var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n === x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n === 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";
  currentTab += n;

  if (currentTab >= x.length) {
    // Prevent default submission here and let the submit handler take over
    document
      .getElementById("registrationForm")
      .dispatchEvent(new Event("submit"));
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value === "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get button and loading elements
    const nextBtn = document.getElementById("nextBtn");
    const buttonText = document.getElementById("buttonText");
    const loadingSpinner = document.getElementById("loadingSpinner");

    // Show loading state
    buttonText.style.display = "none";
    loadingSpinner.style.display = "inline-block";
    nextBtn.disabled = true; // Disable the button to prevent multiple clicks

    const form = e.target;
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.result === "success") {
          showModal("successModal");
          console.log("Row:", result.row);
        } else if (result.result === "error") {
          showModal("failureModal");
          console.error("Error:", result.error);
        }
      })
      .catch((error) => {
        showModal("failureModal");
        console.error("Network error:", error.message);
      })
      .finally(() => {
        // Reset button state
        buttonText.style.display = "inline";
        loadingSpinner.style.display = "none";
        nextBtn.disabled = false; // Re-enable the button
      });
  });

// // Attach form submission logic once
// document
//   .getElementById("registrationForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const form = e.target;
//     const data = new FormData(form);
//     const action = form.action;

//     fetch(action, {
//       method: "POST",
//       body: data,
//     })
//       .then((response) => response.json()) // Parse the JSON response
//       .then((result) => {
//         if (result.result === "success") {
//           showModal("successModal");
//           console.log("Row:", result.row); // Log the returned row number
//         } else if (result.result === "error") {
//           showModal("failureModal");
//           console.error("Error:", result.error); // Log the error message
//         }
//       })
//       .catch((error) => {
//         showModal("failureModal");
//         console.error("Network error:", error.message);
//       });
//   });

// Show modal function
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(modalId, redirect = false) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }

  // Redirect if required
  if (redirect) {
    window.location.href = "darkedge.html";
  }
}
