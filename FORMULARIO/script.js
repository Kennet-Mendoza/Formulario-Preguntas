const questions = [
  "¿En que pais esta el rio Nilo?",
  "¿Cual es la capital de Irlanda?",
  "¿Quien fue el primer hombre en pisar la luna?",
  "¿Cual es el gentilicio de los habitantes de Hungría?",
  "¿Cual es el nombre de nuestra galaxia?",
];

let countdown;
const countdownElement = document.getElementById('countdownElement');
const questionForm = document.getElementById('questionForm');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');

function startCountdown() {
  let seconds = 30;
  countdownElement.style.display = 'block';
  countdownElement.textContent = `Tiempo restante: ${seconds} segundos`;

  countdown = setInterval(() => {
    seconds--;
    countdownElement.textContent = `Tiempo restante: ${seconds} segundos`;

    if (seconds === 0) {
      clearInterval(countdown);
      countdownElement.style.display = 'none';
      alert('¡Tiempo terminado!');
      submitButton.disabled = true;
    }
  }, 1000);
}

function resetForm() {
  clearInterval(countdown);
  countdownElement.style.display = 'none';
  questionForm.reset();
  submitButton.disabled = true;
  resetButton.disabled = true;
}

document.getElementById('startButton').addEventListener('click', () => {
  startCountdown();
  submitButton.disabled = false;
  resetButton.disabled = false;
});

questionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearInterval(countdown);
  countdownElement.style.display = 'none';
  const formData = new FormData(questionForm);
  let answers = [];

  formData.forEach((value, key) => {
    answers.push(`${key}: ${value}`);
  });

  alert("Respuestas:\n" + answers.join("\n"));
  resetForm();
});

resetButton.addEventListener('click', () => {
  resetForm();
});

// Función para agregar las preguntas al formulario
function addQuestionsToForm() {
  const form = document.getElementById('questionForm');
  const questionLabels = form.getElementsByTagName('p');
  
  for (let i = 0; i < questions.length; i++) {
    questionLabels[i].textContent = questions[i];
  }
}

addQuestionsToForm();

