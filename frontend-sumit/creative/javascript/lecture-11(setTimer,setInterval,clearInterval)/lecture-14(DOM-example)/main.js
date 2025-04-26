const overview = document.getElementById("overview");
const courseCover = document.getElementById("course-cover");
const careerOpportunities = document.getElementById("career-opportunities");
const rating = document.getElementById("rating");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");

menu1.onclick = function () {
  overview.style.display = "block";
  courseCover.style.display = "none";
  careerOpportunities.style.display = "none";
  rating.style.display = "none";

  overview.scrollIntoView({ behavior: "smooth" });
  overview.style.opacity = 1;
  overview.style.transition = "opacity 0.5s ease-in-out";
};

menu2.onclick = function () {
  courseCover.style.display = "block";
  overview.style.display = "none";
  careerOpportunities.style.display = "none";
  rating.style.display = "none";

  courseCover.scrollIntoView({ behavior: "smooth" });
  courseCover.style.opacity = 1;
  courseCover.style.transition = "opacity 0.5s ease-in-out";
};

menu3.onclick = function () {
  careerOpportunities.style.display = "block";
  courseCover.style.display = "none";
  overview.style.display = "none";
  rating.style.display = "none";

  careerOpportunities.scrollIntoView({ behavior: "smooth" });
  careerOpportunities.style.opacity = 1;
  careerOpportunities.style.transition = "opacity 0.5s ease-in-out";
};

menu4.onclick = function () {
  rating.style.display = "block";
  overview.style.display = "none";
  careerOpportunities.style.display = "none";
  courseCover.style.display = "none";
  
  rating.scrollIntoView({ behavior: "smooth" });
  rating.style.opacity = 1;
  rating.style.transition = "opacity 0.5s ease-in-out";
};
overview.style.display = "block";
