$('form').on('submit', async function (event) {
  event.preventDefault();

  // get values
  const value1 = $('#value1').val();
  const value2 = $('#value2').val();

  // validate values
  if (!value1 || !value2) {
    alert("You need inform the alternatives");
    return;
  }

  // hide inputs
  $('.inputs').hide();

  // show spinner
  $('.loader').show();

  await setTimeout(function () {
    $('.loader').hide();
    showDestiny(value1, value2);
}, 2000);

});

function showDestiny(value1, value2) {
  
  // Set alternatives
  document.getElementById('previa').innerHTML = `<p><strong>${value1}</strong> or <strong>${value2}</strong></p>`;

  const destiny = document.getElementById('resposta');
  if(getResult(0,1)) {
    destiny.innerText = value1;
  }
  else {
    destiny.innerText = value2;
  }
  
  $('#escolha').show();

  $('#submit').hide();
  $('#reset').show();
}

function getResult(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$('#reset').on('click', function () {
  document.location.reload();
});