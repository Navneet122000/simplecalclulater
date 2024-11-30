// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Reveal Text Animation
// function revealToSpan(){
// document.querySelectorAll(".reveal").forEach(function (elem) {
//     var parent = document.createElement("span");
//     var child = document.createElement("span");

//     parent.classList.add("parent");
//     child.classList.add("child");

//     child.textContent = elem.textContent; // Changed from spanChild to child
//     parent.appendChild(child); // Append child to parent

//     elem.innerHTML = ""; // Clear the original element
//     elem.appendChild(parent); // Append parent to the original element
// });

// }

// revealToSpan();

// gsap.to(".parent .child",{
//     y: "0%",
//     duration: 1.3,
//     delay:0.3,
//     ease: Circ.easeInOut
// })

document.querySelectorAll(".reveal").forEach(function (elem) {
  var parent = document.createElement("span");
  var child = document.createElement("span");

  parent.classList.add("parent");
  child.classList.add("child");

  child.textContent = elem.textContent; 
  parent.appendChild(child); 

  elem.innerHTML = ""; 
  elem.appendChild(parent); 

  // Trigger the blue animation
  child.classList.add("animate-blue");

  // Wait for the blue animation to finish, then trigger the text animation
  setTimeout(function () {
      child.classList.remove("animate-blue");
      child.classList.add("animate-text");
  }, 1000); // Adjust this time to match the duration of your blue animation
});






