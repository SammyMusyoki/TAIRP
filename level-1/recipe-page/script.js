
var slideContent = [
  {
    title: "Pepparoni Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, eius consequuntur ea vero sit.",
  },
  {
    title: "French Toast",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, eius consequuntur ea vero sit.",
  },
  {
    title: "Sandwich with Boiled Eggs",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, eius consequuntur ea vero sit.",
  },
  {
    title: "Vegetable Salads",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, eius consequuntur ea vero sit.",
  },
  {
    title: "Raspberry Tarlet",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi, eius consequuntur ea vero sit.",
  },
];


const Slider = () => {
  var carouselImage = document.querySelector(".carousel__image > img");
  var recipeTitle = document.querySelector(".recipe__title");
  var recipeContent = document.querySelector(".recipe__content");

  let Start = 0; // Initialize Start

  const updateSlide = () => {
    if (Start < slideContent.length) {
      // Update content with the current Start index
      carouselImage.src = slideContent[Start].image;
      recipeTitle.innerHTML = `<h2>${slideContent[Start].title}</h2>`;
      recipeContent.innerHTML = `<p>${slideContent[Start].desc}</p>`;

      // Increment Start for the next iteration
      Start = (Start + 1) % slideContent.length;
    }
  };

  // Initialize interval for automatic sliding
  let sliderInterval = setInterval(updateSlide, 5000);

  return {
    nextSlide: () => {
      Start = (Start + 1) % slideContent.length;
      updateSlide();
    },
    prevSlide: () => {
      Start = (Start - 1 + slideContent.length) % slideContent.length;
      updateSlide();
    },
  };
};

const slide = Slider();

// Event listeners for next and previous buttons
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", () => {
  slide.nextSlide();
});

prevButton.addEventListener("click", () => {
  slide.prevSlide();
});
