alert("Welcome to Swanky Foundation!");
// Show button when scrolling down
window.onscroll = function() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top when button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


//CONTACT US /////.
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  alert("Thank you! Your message has been sent.");
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting Swanky Foundation.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        form.reset(); // Clear the form
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    })
    .catch(error => {
      Swal.fire({
        title: 'Error',
        text: 'Unable to submit your message. Check your connection.',
        icon: 'warning',
        confirmButtonText: 'Close'
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the default form action

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // ✅ Show SweetAlert and Reset Form
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting Swanky Foundation.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          form.reset(); // ✅ This clears the form fields
        });
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    })
    .catch(error => {
      Swal.fire({
        title: 'Network Error',
        text: 'Please check your connection and try again.',
        icon: 'warning',
        confirmButtonText: 'Close'
      });
    });
  });
});


////HEADER/////
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
  document.getElementById("menuOverlay").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("navLinks").classList.remove("show");
  document.getElementById("menuOverlay").classList.remove("show");
}

// Close when any link is clicked (optional)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
form.reset();
