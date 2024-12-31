window.addEventListener('load', () => {
    const modal = document.getElementById('popup-modal');
    const container = document.getElementById('firework-container');
  
    // Display the popup modal and start fireworks simultaneously
    modal.style.display = 'flex'; // Show the modal
    modal.style.animation = 'fadeIn 1s ease-in-out'; // Modal fade-in effect
    container.style.animation = 'fireworksAnimation 5s ease-in-out'; // Fireworks animation
  
    // Trigger fireworks animation
    for (let i = 0; i < 10; i++) {
      createFirework(container);
    }
  
    // Hide the modal and fireworks after 5 seconds
    setTimeout(() => {
      modal.style.animation = 'fadeOut 1s ease-in-out'; // Modal fade-out effect
      container.style.animation = 'fireworksFadeOut 1s ease-in-out'; // Fireworks fade-out effect
      setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after fade-out
        container.innerHTML = ''; // Clear the firework container
      }, 1000); // Wait for the fade-out to finish
    }, 5000); // Keep the modal visible and fireworks going for 5 seconds
  });
  
  function createFirework(container) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    container.appendChild(firework);
  
    // Randomize size and position
    const size = Math.random() * 50 + 20;
    const left = Math.random() * 100 + "%";
    const top = Math.random() * 100 + "%";
  
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.left = left;
    firework.style.top = top;
  
    // Random colors for fireworks
    const colors = ["#ff5733", "#33ff57", "#3375ff", "#f5b300", "#9d33ff"];
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
  