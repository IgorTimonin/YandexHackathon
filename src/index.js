import './index.css'
import './app.scss'

const numbers = [2, 3, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('what-give__show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.what-give__animation');
for (let elm of elements) {
  observer.observe(elm);
}