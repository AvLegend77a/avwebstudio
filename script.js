const text = "The future starts here.";

const typing = document.getElementById("typing");

let i = 0;

function type(){
  if(i < text.length){
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();

function showSection(sectionId){

  const sections =
  document.querySelectorAll(".section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  document
  .getElementById(sectionId)
  .classList.add("active");

  const nav =
  document.querySelector("nav");

  if(sectionId === "hub"){
    nav.style.display = "none";
  }
  else{
    nav.style.display = "flex";
  }
}

function openHub(){

  showSection("hub");

  const loadingText =
  document.querySelector(".loading-text");

  const hubLinks =
  document.querySelector(".hub-links");

  loadingText.style.display = "block"; // ADD THIS
  hubLinks.style.display = "none";

  setTimeout(() => {
    loadingText.style.display = "none";
    hubLinks.style.display = "flex";
  }, 3000);
}

/* =========================
   🖱️ CUSTOM CURSOR (ADDED)
   ========================= */

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

// hover effect on interactive elements
const hoverElements = document.querySelectorAll(
  "button, a, .hub-card, li"
);

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    ring.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    ring.classList.remove("hover");
  });
});

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock(){

  if(!hour) return;

  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hourDeg = (h % 12) * 30 + m * 0.5;
  const minuteDeg = m * 6;
  const secondDeg = s * 6;

  hour.style.transform =
    `translateX(-50%) rotate(${hourDeg}deg)`;

  minute.style.transform =
    `translateX(-50%) rotate(${minuteDeg}deg)`;

  second.style.transform =
    `translateX(-50%) rotate(${secondDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);