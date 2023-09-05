// JavaScript for the timeline functionality
document.addEventListener("DOMContentLoaded", function () {
  const timelineDates = document.querySelectorAll(".timeline-date");
  timelineDates.forEach((date) => {
    date.addEventListener("click", function () {
      // Get the parent li element
      const parentLi = this.parentElement;
      // Toggle the 'show' class on the timeline-content div
      parentLi.querySelector(".timeline-content").classList.toggle("show");
    });
  });
});
