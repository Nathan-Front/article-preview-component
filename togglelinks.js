function toggleShare() {
    const links = document.getElementById('toggle-links');
    const button = document.getElementById('clickButton');

    const toggleLinks = links.style.display;

    if (toggleLinks == 'flex') {
      // use to hide the hidden links
      links.style.display = 'none';
      button.classList.remove('active');
    }
    else {
      // use to display the hidden links
      links.style.display = 'flex';
      button.classList.add('active');
    }
  }