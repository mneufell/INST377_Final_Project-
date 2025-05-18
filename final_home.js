async function loadDogImage() {
      const container = document.getElementById('dogContainer');
      const container1 = document.getElementById('dogContainer1');
      const container2 = document.getElementById('dogContainer2');
      const container3 = document.getElementById('dogContainer3');
      const container4 = document.getElementById('dogContainer4');
      const container5 = document.getElementById('dogContainer5');
      const container6 = document.getElementById('dogContainer6');
      container.innerHTML = 'Loading...';

      try {
        const res = await fetch('https://api.thedogapi.com/v1/images/search?limit=1');
        const data = await res.json();
        const imageUrl = data[0].url;

        container.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container1.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container2.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container3.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container4.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container5.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
        container6.innerHTML = `<img src="${imageUrl}" alt="Random Dog" />`;
      } catch (error) {
        console.error('Fetch error:', error);
        container.innerHTML = 'Failed to load image.';
      }
    }

    // Load one image on page load
    window.addEventListener('DOMContentLoaded', loadDogImage);
