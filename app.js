
const button = document.querySelector('.calculator__btn');

button.addEventListener('click', () => {
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    console.log(day.value);
    console.log(month.value);
    console.log(year.value);
    if (day.value === ''){
      const dayEmptyInputSpan = document.querySelector('#alert__day');
      dayEmptyInputSpan.innerText = 'This field is required';
      const dayEmptyInputInput = document.querySelector('#day');
      dayEmptyInputInput.style.borderColor = "hsl(0, 100%, 67%)";
      const dayEmptyInputLabel = document.querySelector('#label__day');
      dayEmptyInputLabel.style.color = "hsl(0, 100%, 67%)";
    } 
    if (month.value === ''){
      const monthEmptyInputSpan = document.querySelector('#alert__month');
      monthEmptyInputSpan.innerText = 'This field is required';
      const monthEmptyInputInput = document.querySelector('#month');
      monthEmptyInputInput.style.borderColor = "hsl(0, 100%, 67%)";
      const monthEmptyInputLabel = document.querySelector('#label__month');
      monthEmptyInputLabel.style.color = "hsl(0, 100%, 67%)";
    }  
    if (year.value === ''){
      const yearEmptyInputSpan = document.querySelector('#alert__year');
      yearEmptyInputSpan.innerText = 'This field is required';
      const yearEmptyInputInput = document.querySelector('#year');
      yearEmptyInputInput.style.borderColor = "hsl(0, 100%, 67%)";
      const yearEmptyInputLabel = document.querySelector('#label__year');
      yearEmptyInputLabel.style.color = "hsl(0, 100%, 67%)";
    }    
})
