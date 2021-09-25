function toggleShare() {
    const links = document.getElementById('toggle-links');

    const toggleLinks = links.style.display;

    if (toggleLinks == 'flex') {
      // use to hide the hidden links
      links.style.display = 'none';
    }
    else {
      // use to display the hidden links
      links.style.display = 'flex';
    }
  }