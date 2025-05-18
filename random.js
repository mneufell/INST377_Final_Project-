async function getDogFact() {
      const factContainer = document.getElementById('fact');
      factContainer.textContent = "Loading...";

      try {
        const res = await fetch('https://dog-api.kinduff.com/api/facts?number=1');
        const data = await res.json();
        factContainer.textContent = data[0].fact;
      } catch (error) {
        console.error('Error fetching dog fact:', error);
        factContainer.textContent = "Dogs have an extraordinary sense of smell — up to 100,000 times better than humans. They can even detect diseases like cancer and diabetes through scent!";
      }
    }

    
    window.addEventListener('DOMContentLoaded', getDogFact);