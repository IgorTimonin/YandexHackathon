const quizz = document.querySelector('.quizz-form'),
  quizForm = quizz.querySelector('.quizz-form__form'),
  firstQuizzScreen = quizz.querySelector('.quizz-form__screen_number_first'),
  secondQuizzScreen = quizz.querySelector('.quizz-form__screen_number_second'),
  nextSreenButton = firstQuizzScreen.querySelector('.quizz-form__button_type_next-screen'),
  screenVisibilityClass = 'quizz-form__screen_visible'

const changeQuizzScreen = () => {
  firstQuizzScreen.classList.remove(screenVisibilityClass);
  secondQuizzScreen.classList.add(screenVisibilityClass);
}

// считаем выбранные чекбоксы
const completeQuiz = (e) => {
  e.preventDefault();
  const number = [...quizForm.elements].reduce((
    res,
    { checked, dataset: { answer }}
  ) => {
    if (checked) {
      res[answer] += 1;
    }
    return res
  }, { mentor: 0, review: 0 });
  console.log(number);
}

nextSreenButton.addEventListener('click', changeQuizzScreen);
quizForm.addEventListener('submit', completeQuiz);