const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}
const DELAY = 1000;
const min = 0;
const max = colors.length;
let timerId = 0;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

refs.stopBtn.setAttribute('disabled', 'true');

function onStartClick() {
  console.log('pressed on start');
  refs.startBtn.setAttribute('disabled', 'true');
  refs.stopBtn.removeAttribute('disabled');
  timerId = setInterval(changeBodyBgrcolor, DELAY);
}

function onStopClick() {
  console.log('pressed on stop');
  refs.stopBtn.setAttribute('disabled', 'true');
  refs.startBtn.removeAttribute('disabled');
  clearInterval(timerId);
}


function changeBodyBgrcolor() {
  console.log('setInterval запущен')
  const ramdomNumber = randomIntegerFromInterval(min, max);
  refs.body.style.backgroundColor = colors[ramdomNumber];
}