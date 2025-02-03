function subscribe () {
  const buttonElement = document.querySelector('.submit');

  if (buttonElement.innerHTML === 'SUBSCRIBE') {
  buttonElement.innerHTML = 'SUBSCRIBED'
  } else {
      buttonElement.innerHTML = 'SUBSCRIBE'
  };

}