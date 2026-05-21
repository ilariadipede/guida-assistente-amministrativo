const copyButton = document.querySelector("[data-copy-template]");
const template = document.querySelector("#task-template");
const feedback = document.querySelector(".copy-feedback");

if (copyButton && template && feedback) {
  copyButton.addEventListener("click", async () => {
    const text = template.innerText.trim();

    try {
      await navigator.clipboard.writeText(text);
      feedback.textContent = "Modello copiato.";
    } catch {
      feedback.textContent = "Seleziona il testo del modello per copiarlo.";
    }

    window.setTimeout(() => {
      feedback.textContent = "";
    }, 2400);
  });
}
