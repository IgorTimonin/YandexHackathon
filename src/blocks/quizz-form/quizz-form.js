const quizz = document.querySelector('.quizz-form'),
  quizForm = quizz.querySelector('.quizz-form__form'),
  firstQuizzScreen = quizz.querySelector('.quizz-form__screen_number_first'),
  secondQuizzScreen = quizz.querySelector('.quizz-form__screen_number_second'),
  nextSreenButton = firstQuizzScreen.querySelector('.quizz-form__button_type_next-screen'),
  screenVisibilityClass = 'quizz-form__screen_visible',
  formVisibilityClass = 'quizz-form_visible',
  resultVisibilityClass = 'quizz-result_visible',
  mentorScreenSelector = '.quizz-result_type_mentor',
  reviewScreenSelector = '.quizz-result_type_review',
  duoScreenSelector = '.quizz-result_type_duo'

const changeQuizzScreen = () => {
  firstQuizzScreen.classList.remove(screenVisibilityClass);
  secondQuizzScreen.classList.add(screenVisibilityClass);
}

const showQuizzResultScreen = (selector) => {
  quizz.classList.remove(formVisibilityClass);
  document.querySelector(selector).classList.add(resultVisibilityClass);
}

// считаем выбранные чекбоксы
const getQuizResult = () => {
  const number = [...quizForm.elements].reduce((
    res,
    { checked, dataset: { answer }}
  ) => {
    if (checked) {
      res[answer] += 1;
    }
    return res
  }, { mentor: 0, review: 0 });
  return number;
}

const completeQuiz = (e) => {
  e.preventDefault();
  const { mentor, review } = getQuizResult();
  if (mentor > review) {
    showQuizzResultScreen(mentorScreenSelector)
    return;
  }
  if (mentor < review) {
    showQuizzResultScreen(reviewScreenSelector)
    return;
  }
  showQuizzResultScreen(duoScreenSelector);
};

nextSreenButton.addEventListener('click', changeQuizzScreen);
quizForm.addEventListener('submit', completeQuiz);