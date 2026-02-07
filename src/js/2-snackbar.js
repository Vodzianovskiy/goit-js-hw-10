import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(delayValue => {
    iziToast.success({
      message: `✅ Fulfilled проміс in ${delay}ms`, // delay из формы!
      position: 'topRight',
    });
  });

  promise.catch(delayValue => {
    iziToast.error({
      message: `❌ Rejected проміс in ${delay}ms`,
      position: 'topRight',
    });
  });
});
