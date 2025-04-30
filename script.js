const timeEl = document.getElementById("time");
const greetingEl = document.getElementById("greeting");

function updateTime() {
  const now = new Date();
  const hrs = now.getHours();
  const mins = now.getMinutes().toString().padStart(2, "0");
  const greeting = hrs < 12 ? "Good Morning!" : hrs < 18 ? "Good Afternoon!" : "Good Evening!";
  greetingEl.innerText = greeting;
  timeEl.innerText = "Time: " + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
let fontSize = 1;
function zoomIn() {
  fontSize += 0.1;
  document.body.style.fontSize = fontSize + "em";
}
function zoomOut() {
  fontSize = Math.max(0.8, fontSize - 0.1);
  document.body.style.fontSize = fontSize + "em";
}
function switchLanguage(lang) {
  const textMap = {
    en: {
      intro: "Explore blogs on health, travel, and global issues with Indian roots."
    },
    hi: {
      intro: "स्वास्थ्य, यात्रा और वैश्विक मुद्दों पर आधारित ब्लॉग्स पढ़ें भारतीय दृष्टिकोण से।"
    }
  };
  document.getElementById("intro").innerText = textMap[lang].intro;
}
