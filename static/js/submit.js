function redirectToIndex() {
  // Redirect to the main page route
  window.location.href = "/";
}

document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  let countdown = 3; // Initial countdown value in seconds

  // Function to update the countdown element
  function updateCountdown() {
    countdownElement.textContent = countdown;
    countdown--;

    if (countdown < 0) {
      // Redirect to the main page route after 3 seconds
      redirectToIndex();
    }
  }
  setInterval(updateCountdown, 800);
});
