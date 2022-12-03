import vacancies from '../../data/works.js';
import {
  CURRENCY_LIST,
  PAYMENTS_VARIANTS,
  TYPE_FILTER_VALUES
} from '../../utills/constants.js';

// карточка с вакансией
const vacancyTemplate = document.querySelector('#vacancy-card').content;
const vacancyResults = document.querySelector('.vacancy__results');
const noResultsCard = document.querySelector('.vacancy__no-results');
const noResultsVisibilityClass = 'vacancy__no-results_visible';

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

const showNoResults = () => noResultsCard.classList.add(noResultsVisibilityClass);
const hideNoResults = () => noResultsCard.classList.remove(noResultsVisibilityClass);

// форма с фильтрами вакансий
const vacancyForm = document.forms.vacancies;
const vacancyTypeFilterBtn = vacancyForm.querySelector('.vacancy__filter-select-button');
const vacancyFilterItems = vacancyForm.querySelector('.vacancy__filter-job');
const filterVisibilityClass = 'vacancy__filter-job_visible';
const openedButtonClass = 'vacancy__filter-select-button_opened';

const filterVacancies = ({ type, area }) => {
  return vacancies.filter(vacancy => {
    return vacancy.type === type & vacancy.area === area;
  });
};

const getFilterState = () => {
  const type = vacancyForm.elements.type.value;
  const area = vacancyForm.elements.area.value;
  return { type, area }
}

const handleChangeFilter = (filterValue) => {
  vacancyFilterItems.classList.remove(filterVisibilityClass);
  vacancyTypeFilterBtn.classList.remove(openedButtonClass);
  vacancyTypeFilterBtn.textContent = TYPE_FILTER_VALUES[filterValue];
}

const toggleShowFilterMenu = () => {
  vacancyFilterItems.classList.toggle(filterVisibilityClass);
  vacancyTypeFilterBtn.classList.toggle(openedButtonClass);
}

const showFilteredCards = () => {
  const filterState = getFilterState();
  const filteredVacancies = filterVacancies(filterState);
  handleChangeFilter(filterState.type)
  vacancyResults.innerHTML = '';
  hideNoResults();
  if (filteredVacancies.length) {
    filteredVacancies
    .forEach(vacancy => addCard(createVacancyCard(vacancy), vacancyResults));
  } else {
    showNoResults();
  }
}

vacancyForm.addEventListener('change', showFilteredCards);
vacancyTypeFilterBtn.addEventListener('click', toggleShowFilterMenu)

// инициализация при загрузке по начальному положению фильтров
showFilteredCards();
