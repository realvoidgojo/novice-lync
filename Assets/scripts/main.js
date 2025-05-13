// Toggle edit functionality for user profile
function toggleEdit(id) {
  const input = document.getElementById(id);
  input.disabled = !input.disabled; // Toggle disabled state
  if (!input.disabled) {
    input.focus(); // Focus on the input when editing is enabled
  }
}

// Form submission handlers
document.addEventListener("DOMContentLoaded", function () {
  // Signup form handler
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "verify.html";
    });
  }

  // Login form handler
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const sidebar = document.querySelector(".sidebar");

  if (mobileMenuButton && sidebar) {
    mobileMenuButton.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  // Close sidebar when clicking outside of it on mobile
  document.addEventListener("click", function (event) {
    const isClickInsideSidebar = sidebar && sidebar.contains(event.target);
    const isClickOnMenuButton =
      mobileMenuButton && mobileMenuButton.contains(event.target);

    if (
      sidebar &&
      sidebar.classList.contains("open") &&
      !isClickInsideSidebar &&
      !isClickOnMenuButton
    ) {
      sidebar.classList.remove("open");
    }
  });

  // Highlight active page in sidebar
  const currentPage = window.location.pathname.split("/").pop();
  const sidebarLinks = document.querySelectorAll(".sidebar a");

  sidebarLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPage)) {
      link.closest("li").classList.add("active");
    }
  });
});
