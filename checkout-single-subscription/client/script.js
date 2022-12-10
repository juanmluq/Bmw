/* Fetch prices and update the form */
fetch("/config")
  .then(r => r.json())
  .then(({pricex1, pricex6, pricex2, pricex3, pricex4}) => {
    const pricex1Input = document.querySelector('#pricex1');
    pricex1Input.value = pricex1;
    const pricex6Input = document.querySelector('#pricex6');
    pricex6Input.value = pricex6;
    const pricex2Input = document.querySelector('#pricex2');
    pricex2Input.value = pricex2;
    const pricex3Input = document.querySelector('#pricex3');
    pricex3Input.value = pricex3;
    const pricex4Input = document.querySelector('#pricex4');
    pricex4Input.value = pricex4;
  })
