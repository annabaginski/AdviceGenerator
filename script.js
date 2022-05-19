const advice = document.querySelector('p');
const number = document.querySelector('.title');


document.querySelector('button').addEventListener('click', getAdvice);

window.onload = getAdvice();

function getAdvice() {
fetch('https://api.adviceslip.com/advice')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      number.innerText = 'Advice #' + data.slip.id;
      advice.innerText = `"${data.slip.advice}"`;

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}