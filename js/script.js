//--- Swiper activites ---
const swiper = new Swiper('.swiper.activities', {
  direction: 'horizontal',
  loop: true,
  initialSlide: 0,
  spaceBetween: 18,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      centeredSlides: false,
      autoplay: false,
    },
    600: {
      slidesPerView: 2,
    }
  }
});

//--- Barre de recherche ---
let searchInput = document.getElementById('searchInput');
let products = document.querySelectorAll(".products-name");

function searchProduct() {
  let filter = searchInput.value.toUpperCase().replaceAll(' ','');
  products.forEach((product) => {
    let productValue = product.innerHTML.toUpperCase().replaceAll(' ','');
    console.log(productValue);
    console.log(filter);

      if (productValue.indexOf(filter) > -1) {
        product.parentElement.style.display = "flex";
      } else {
        product.parentElement.style.display = "none";
      }
  });
}

//-- Animation bande 404--
//trouvé sur https://getbutterfly.com/javascript-marquee-a-collection-of-scrolling-text-snippets/
function initializeMarquee() {
  if (document.body.classList.contains("accueil")) {
    createMarqueeContainer("beverages");
    createMarqueeContainer("reverseBeverages", true); // Create the reverse marquee
    rotateMarquee();
  }
}

window.onload = initializeMarquee;

/**
 * Gets the width of a DOM element.
 * @param {HTMLElement} obj - The DOM element.
 * @returns {number} - The width of the element in pixels.
 */
function getObjectWidth(obj) {
  return obj.offsetWidth || obj.getBoundingClientRect().width || 0;
}

const marqueeContainers = [];

/**
 * Creates a marquee container with scrolling items.
 * @param {string} id - The ID of the container element.
 * @param {boolean} reverse - If true, the marquee scrolls to the right.
 */
function createMarqueeContainer(id, reverse = false) {
  const container = document.getElementById(id);
  const span = container.getElementsByTagName("span")[0];
  
  // Ensure the span exists
  if (!span) {
    console.error(`No <span> found inside the container with id "${id}".`);
    return;
  }

  const itemWidth = getObjectWidth(span) + 10; // Adding 10px as per original code
  const containerWidth = getObjectWidth(container);
  const textContent = span.innerHTML;
  
  // Clear the container and set necessary styles
  container.innerHTML = "";
  container.style.position = "relative"; // Ensure container has relative positioning
  container.style.overflow = "hidden";   // Hide overflowing items

  // Initialize container properties
  container.items = [];
  container.reverse = reverse; // Set the scroll direction
  const maxItems = Math.ceil(containerWidth / itemWidth) + 2; // +2 to ensure full coverage

  // Initialize marquee items
  for (let i = 0; i < maxItems; i++) {
    const item = document.createElement("div");
    item.innerHTML = textContent;
    item.style.position = "absolute";
    item.style.top = "0";
    item.style.width = `${itemWidth}px`;
    item.style.height = container.style.height || 'auto'; // Preserve height if set

    item.style.left = `${i * itemWidth}px`;

    container.appendChild(item);
    container.items.push(item);
  }

  // Event listeners to pause and resume animation on hover
  container.addEventListener("mouseover", () => {
    container.isPaused = true;
  });

  container.addEventListener("mouseout", () => {
    container.isPaused = false;
  });

  marqueeContainers.push(container);
}

let animationID;

/**
 * Rotates all marquees by updating the position of each item.
 */
function rotateMarquee() {
  for (let j = 0; j < marqueeContainers.length; j++) {
    const container = marqueeContainers[j];

    // Skip animation if paused
    if (container.isPaused) continue;

    const direction = container.reverse ? 1 : -1; // 1 for right, -1 for left
    const containerWidth = getObjectWidth(container);
    const itemWidth = getObjectWidth(container.items[0]);

    for (let i = 0; i < container.items.length; i++) {
      const item = container.items[i];
      let left = parseFloat(item.style.left);
      left += direction; // Move by 1px per frame
      item.style.left = `${left}px`;
    }

    if (!container.reverse) {
      // Scrolling left
      const firstItem = container.items[0];
      if (parseFloat(firstItem.style.left) + itemWidth < 0) {
        // Move the first item to the end
        firstItem.style.left = `${parseFloat(container.items[container.items.length - 1].style.left) + itemWidth}px`;
        container.items.push(container.items.shift());
      }
    } else {
      // Scrolling right
      const lastItem = container.items[container.items.length - 1];
      if (parseFloat(lastItem.style.left) > containerWidth) {
        // Move the last item to the beginning
        lastItem.style.left = `${parseFloat(container.items[0].style.left) - itemWidth}px`;
        container.items.unshift(container.items.pop());
      }
    }
  }

  animationID = requestAnimationFrame(rotateMarquee);
}
