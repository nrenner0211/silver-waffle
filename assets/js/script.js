const emojiBtn = document.getElementById("emoji-btn");
const stormY = ["🌩️", "⛈️", "☀️", "🌨️", "🌧️", "☁️", "🌤️", "🌦️"];





emojiBtn.addEventListener("mouseover", () => {
    emojiBtn.innerText = stormY[Math.floor(Math.random() * stormY.length)]
});



