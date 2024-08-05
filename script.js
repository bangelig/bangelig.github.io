let clickCount = 0;
const maxClicks = 10;
const winningNumber = 9;
const clickButton = document.getElementById('clickButton');
const message = document.getElementById('message');
const note = document.getElementById('note');

clickButton.addEventListener('click', () => {
    if (clickCount >= maxClicks) {
        return;
    }

    clickCount++;
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber === winningNumber) {
        message.textContent = "Selamat! Anda menang 1 USDT! kirim ke bang elig";
        note.style.display = 'block';
        clickButton.disabled = true;
    } else if (clickCount === maxClicks) {
        message.textContent = "Kuota klik telah habis ya bro. Silakan coba lagi nanti.";
        clickButton.disabled = true;
    }
});
