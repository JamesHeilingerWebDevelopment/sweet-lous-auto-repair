let boxElement;

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");

  createObserver();
}, false);


function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    entry.className = ' trigger';
  });
}