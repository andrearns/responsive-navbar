function OpenNavbar() {
    document.getElementById("dropdown-mobile").classList.add('show');
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hamburguer-menu')) {
      document.getElementById('dropdown-mobile').classList.remove('show');
    }
  }