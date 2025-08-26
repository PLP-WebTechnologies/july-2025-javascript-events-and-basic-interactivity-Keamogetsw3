// ==========================
// Change header color when user hovers
// ==========================

const header = document.querySelector("header");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#e64a19";
});
header.addEventListener("mouseout", () => {
  header.style.backgroundColor = "#d84315";
});

// ==========================
// Light/Dark Mode Toggle
// ==========================

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.style.marginTop = "15px";
document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// ==========================
//  Form Validation
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default submission

  let isValid = true;
  let messages = [];

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;

  // Name validation
  if (name.length < 3) {
    isValid = false;
    messages.push("Name must be at least 3 characters long.");
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    messages.push("Please enter a valid email address.");
  }

  // Date validation
  if (!date) {
    isValid = false;
    messages.push("Please select an event date.");
  }

  // People validation
  if (people < 5) {
    isValid = false;
    messages.push("Minimum number of people is 5.");
  }

  // Show feedback
  let feedback = document.getElementById("form-feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.id = "form-feedback";
    form.appendChild(feedback);
  }

  if (isValid) {
    feedback.style.color = "green";
    feedback.textContent = "🎉 Booking successful! We’ll contact you soon.";
    form.reset();
  } else {
    feedback.style.color = "red";
    feedback.innerHTML = messages.join("<br>");
  }
});
