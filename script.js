// Resource object with solution content
const solutions = {
  community: {
      headingContent: "Community Solar Programs",
      bodyText: "Community solar allows multiple people to benefit from a single solar array, reducing costs for participants. Instead of installing panels on your own roof, you can subscribe to a portion of a larger solar project in your area. This model eliminates upfront installation costs while providing clean energy credits on your utility bill. Most programs require no long-term commitment and offer savings of 5-15% on your electricity costs.",
      imgUrl: "./img/solution1.jpg",
      imgAlt: "Community solar farm"
  },
  retrofit: {
      headingContent: "Energy Efficiency Retrofits",
      bodyText: "Improving your home's energy efficiency is often more cost-effective than installing renewable energy systems. Simple retrofits like adding insulation, sealing air leaks, and upgrading to ENERGY STAR appliances can reduce energy consumption by 20-30%. Many utilities offer rebates for these improvements, and some provide low-interest financing. The savings on your energy bills often pay for the upgrades within a few years.",
      imgUrl: "./img/solution2.jpg",
      imgAlt: "Home energy retrofit"
  },
  incentives: {
      headingContent: "Community Wind Projects",
      bodyText: "Shared wind farms allow neighborhoods to benefit from clean energy. Community wind projects bring clean, renewable energy to the places we call home. These projects are locally owned and operated, often by co-ops, non-profits, or municipal groups. The goal? To provide affordable electricity, reduce dependence on fossil fuels, and keep the economic benefits right where they belong—in the community.",
      imgUrl: "./img/solution3.jpg",
      imgAlt: "Wind farm"
  }
};

// Preload images
function preloader() {
  const imagesList = [
      "./img/solution1.jpg",
      "./img/solution2.jpg",
      "./img/solution3.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
  }
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

// DOM elements
const solutionContainer = document.getElementById("solution-container");
const buttons = document.querySelectorAll(".solution-btn");

// Load initial content
function loadInitialContent() {
  const initialSolution = solutions.community;
  solutionContainer.innerHTML = `
      <h1>${initialSolution.headingContent}</h1>
      <img src="${initialSolution.imgUrl}" alt="${initialSolution.imgAlt}">
      <p>${initialSolution.bodyText}</p>
  `;
}

// Handle button clicks
function handleSelection(event) {
  // Remove active-button id from all buttons
  buttons.forEach(button => {
      if (button.hasAttribute("id")) {
          button.removeAttribute("id");
      }
  });
  
  // Set active-button id to clicked button
  event.currentTarget.setAttribute("id", "active-button");
  
  // Get solution data
  const solutionKey = event.currentTarget.dataset.solution;
  const solution = solutions[solutionKey];
  
  // Update content
  solutionContainer.innerHTML = `
      <h1>${solution.headingContent}</h1>
      <img src="${solution.imgUrl}" alt="${solution.imgAlt}">
      <p>${solution.bodyText}</p>
  `;
}

// Event listeners
document.addEventListener("DOMContentLoaded", loadInitialContent);
buttons.forEach(button => {
  button.addEventListener("click", handleSelection);
});