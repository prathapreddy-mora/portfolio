Script .js
function toggleProject(button) {
  const details = button.closest('.project').querySelector('.project-details');

  if (details.style.display === "block") {
    details.style.display = "none";
    button.innerText = "Show";
  } else {
    details.style.display = "block";
    button.innerText = "Hide";
  }
}

img
