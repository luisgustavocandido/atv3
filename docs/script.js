const questions = [
    {
      question: 'Qual time brasileiro ganhou a Copa Libertadores?',
      options: ['Athletico-PR', 'Botafogo', 'Bahia', 'São Paulo'],
      correctAnswer: 'São Paulo'
    },
    {
      question: 'Qual é o clube que mais ganhou a Copa do Brasil?',
      options: ['Cruzeiro', 'Corinthians', 'Flamengo', 'Palmeiras'],
      correctAnswer: 'Cruzeiro'
    },
    {
      question: 'Em que ano o Londrina Esporte Clube foi fundado?',
      options: ['1945', '1950', '1953', '1971'],
      correctAnswer: '1953'
    },
    {
        question: 'Quantas Copa do Mundo a Seleção Brasileira Possui?',
        options: ['6', '4', '3', '5'],
        correctAnswer: '5'
    },
    {
        question: 'Qual é o maior campeão do Brasileirão?',
        options: ['Palmeiras', 'Santos', 'Flamengo', 'Corinthians'],
        correctAnswer: 'Palmeiras'
    },

  ];
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');
  const resultContainer = document.getElementById('result-container');
  const correctAnswersSpan = document.getElementById('correct-answers');
  const totalQuestionsSpan = document.getElementById('total-questions');
  const percentageSpan = document.getElementById('percentage');
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
  
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('btn', 'btn-secondary');
      button.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  
    if (isCorrect) {
      correctAnswers++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultContainer.style.display = 'block';
    nextButton.style.display = 'none';
    correctAnswersSpan.innerText = correctAnswers;
    totalQuestionsSpan.innerText = questions.length;
    const percentage = (correctAnswers / questions.length) * 100;
    percentageSpan.innerText = percentage.toFixed(2);
  }
  
  loadQuestion();
  