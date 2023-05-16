async function loadAmount() {
  const response = await fetch(window.location + "amount");

  const amount = await response.text();
  const progress = parseInt(amount) / 50000 * 260; // max width of progress

  document.querySelector('#amount').innerHTML = amount;
  document.querySelector('#progress').setAttribute('width', progress);
}

loadAmount();
setInterval(loadAmount, 60 * 1000);
