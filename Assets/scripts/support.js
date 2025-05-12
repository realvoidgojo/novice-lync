document.addEventListener('DOMContentLoaded', function() {
  // Get all FAQ question buttons
  const faqButtons = document.querySelectorAll('.card.bg-white .border button');
  
  // Add click event listener to each button
  faqButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Find the content div that follows this button
      const content = this.nextElementSibling;
      
      // Toggle the hidden class
      content.classList.toggle('hidden');
      
      // Toggle the arrow icon
      const icon = this.querySelector('svg');
      if (content.classList.contains('hidden')) {
        // If content is hidden, point arrow down
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />';
      } else {
        // If content is visible, point arrow up
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />';
      }
    });
  });
});