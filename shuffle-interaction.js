const shuffleDivs = document.querySelectorAll('.text-shuffle');
const emojis = ['☆', '*', '彡', '✿', '౨ৎ', '✧', '⊹', '♡', '˚｡', '｡°', '✦', '𖥔', '✿'];

const pickRandFromArr = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

shuffleDivs.forEach((element) => {
  let currentPretext = element.innerText;
  let formattedDivs = '';

  for (const character of currentPretext) {
    let currentCharacter = character;
    let currentDiv = '<span class="shuffle">' + currentCharacter + '</span>';
    formattedDivs += currentDiv;
  }

  element.innerHTML = formattedDivs;
  const textSpans = document.querySelectorAll('.shuffle');

  textSpans.forEach((element) => {
    element.dataset.original = element.innerText;
    let timeoutId;

    element.addEventListener('mouseenter', (evt) => {
      clearTimeout(timeoutId);
      const originalWidth = evt.target.offsetWidth;
      const originalHeight = evt.target.offsetHeight;

      evt.target.innerText = pickRandFromArr(emojis);

      // Generate a random color between pink, yellow, blue, green, and red
      const randomColor = ['#FF87F3', '#32B5FF', '#FF3232', '#0EDC0A', '#E9ED19', '#FF87F3'];
      evt.target.style.color = pickRandFromArr(randomColor);

      // Add class to reduce font size for replaced text
      evt.target.classList.add('smaller-font');

      // Set width and height of replaced string same as original text
      evt.target.style.width = originalWidth + 'px';
      evt.target.style.height = originalHeight + 'px';
    });

    element.addEventListener('mouseleave', (evt) => {
      timeoutId = setTimeout(() => {
        evt.target.innerText = evt.target.dataset.original;
        evt.target.classList.remove('smaller-font');
        evt.target.style.width = ''; // Reset width
        evt.target.style.height = ''; // Reset height
        evt.target.style.color = ''; // Reset text color
      }, 350);
    });
  });



  
});
