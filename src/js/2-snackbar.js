import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector("input[name='delay']"),
  stateInputs: document.querySelectorAll("input[name='state']"),
};

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();

  const delay = refs.delayInput.value;

  const selectedState = [...refs.stateInputs].find(
    input => input.checked
  )?.value;

  if (!selectedState) return;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);

      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);

      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
