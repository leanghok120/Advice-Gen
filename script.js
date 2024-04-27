const adviceIdEl = document.getElementById("advice-id");
const adviceEl = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
  try {
    const timestamp = Date.now();
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${timestamp}"`,
    );

    if (!response.ok) {
      throw new Error("Could not fetch response");
    }

    const data = await response.json();
    const advice = data.slip.advice;
    const adviceId = data.slip.id;

    adviceEl.textContent = advice;
    adviceIdEl.textContent = "Advice #" + adviceId;
  } catch (error) {
    console.error(error);
  }
}

getAdvice();

diceBtn.addEventListener("click", function () {
  getAdvice();
});
