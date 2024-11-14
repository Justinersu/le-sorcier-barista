import React, { useEffect, useRef } from 'react';

function MarqueeComponent() {
  const marqueeRef = useRef([]);
  const animationID = useRef(null);

  const getObjectWidth = (obj) => obj.offsetWidth || obj.getBoundingClientRect().width || 0;

  const createMarqueeContainer = (container, reverse = false) => {
    const span = container.querySelector("span");

    if (!span) {
      console.error(`No <span> found inside the container.`);
      return;
    }

    const itemWidth = getObjectWidth(span) + 10;
    const containerWidth = getObjectWidth(container);
    const textContent = span.innerHTML;

    container.innerHTML = "";
    container.style.position = "relative";
    container.style.overflow = "hidden";

    container.items = [];
    container.reverse = reverse;
    const maxItems = Math.ceil(containerWidth / itemWidth) + 2;

    for (let i = 0; i < maxItems; i++) {
      const item = document.createElement("div");
      item.innerHTML = textContent;
      item.style.position = "absolute";
      item.style.top = "0";
      item.style.width = `${itemWidth}px`;
      item.style.height = container.style.height || 'auto';
      item.style.left = `${i * itemWidth}px`;

      container.appendChild(item);
      container.items.push(item);
    }

    container.addEventListener("mouseover", () => (container.isPaused = true));
    container.addEventListener("mouseout", () => (container.isPaused = false));

    marqueeRef.current.push(container);
  };

  const rotateMarquee = () => {
    marqueeRef.current.forEach((container) => {
      if (container.isPaused) return;

      const direction = container.reverse ? 1 : -1;
      const containerWidth = getObjectWidth(container);
      const itemWidth = getObjectWidth(container.items[0]);

      container.items.forEach((item) => {
        let left = parseFloat(item.style.left);
        left += direction;
        item.style.left = `${left}px`;
      });

      if (!container.reverse) {
        const firstItem = container.items[0];
        if (parseFloat(firstItem.style.left) + itemWidth < 0) {
          firstItem.style.left = `${parseFloat(container.items[container.items.length - 1].style.left) + itemWidth}px`;
          container.items.push(container.items.shift());
        }
      } else {
        const lastItem = container.items[container.items.length - 1];
        if (parseFloat(lastItem.style.left) > containerWidth) {
          lastItem.style.left = `${parseFloat(container.items[0].style.left) - itemWidth}px`;
          container.items.unshift(container.items.pop());
        }
      }
    });

    animationID.current = requestAnimationFrame(rotateMarquee);
  };

  useEffect(() => {
    const container1 = document.getElementById('beverages');
    const container2 = document.getElementById('reverseBeverages');

    if (container1) createMarqueeContainer(container1);
    if (container2) createMarqueeContainer(container2, true);

    rotateMarquee();

    return () => {
      cancelAnimationFrame(animationID.current);
    };
  }, []);
}

export default MarqueeComponent;
