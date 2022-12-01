import vacancies from '../../data/works.js';
import { CURRENCY_LIST, PAYMENTS_VARIANTS } from '../../utills/constants.js';

const vacancyTemplate = document.querySelector('#vacancy-card').content;
const vacancyResults = document.querySelector('.vacancy__results');

const createVacancyCard = ({
  title,
  link,
  payment: { type, value, currency }
}) => {
  const vacancyCard = vacancyTemplate.cloneNode(true);
  vacancyCard.querySelector('.vacancy__results-item-link').href = link;
  vacancyCard.querySelector('.vacancy__results-item-title').textContent = title;
  const paymentText = `[${PAYMENTS_VARIANTS[type]} ${value} ${CURRENCY_LIST[currency]} в месяц]`;
  vacancyCard.querySelector('.vacancy__results-item-description').textContent = paymentText;

  return vacancyCard;
};

const addCard = (vacancyCard, container) => {
  container.append(vacancyCard);
};

vacancies.forEach(vacancy => addCard(createVacancyCard(vacancy), vacancyResults));
