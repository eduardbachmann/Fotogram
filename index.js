const fileName = [
  'avenue-815297_1280',
  'antelope-4840335_1280',
  'bachalpsee-7572681_1280',
  'desert-2646209_1280',
  'field-9295186_1280',
  'glacier-7187291_1280',
  'mountain-6815304_1280',
  'rain-2573488_1280',
  'sunset-8516639_1280',
  'trail-5726987_1280',
  'water-6579313_1280',
]

fileName.forEach((value, index) => {
  const imgId = `img-${index + 1}`;
  const imgElement = document.getElementById(imgId);
  imgElement.addEventListener('click', function () {
    selectImage(value, index);
  });
});

function selectImage (arrayValue, index) { 

  const popUpElement = document.querySelector('.popup-container');
  popUpElement.innerHTML = `
  <div class="popup-window-div">
    <div class="popup-img-name-and-cross">
      <div class="popup-top-left-section">
        <div class="popup-img-name">${arrayValue}</div>
      </div>
      <div class="popup-top-right-section">
        <div class="close-img" id="close-img">⨉</div>
      </div>
    </div>
    <div class="popup-img-div">
      <img class="dialog-img"src="assets/img/photos/${arrayValue}.jpg">
    </div>
    <div class="arrow-buttons-div">
      <button class="left-arrow-button"><</button>
      <div class="text-between-arrow-buttons">${index + 1}/11</div>
      <button class="right-arrow-button">></button>
    </div>
  </div>
  `;
  
  const leftArrowButton = document.querySelector('.left-arrow-button')
  leftArrowButton.addEventListener('click', function() {
    
    document.querySelector('.popup-img-div').innerHTML = `
    <img class="dialog-img"src="assets/img/photos/${fileName[--index]}.jpg">
    `;
    
    document.querySelector('.popup-top-left-section').innerHTML = `
    <div class="popup-img-name">${fileName[index]}</div>
    `;

    document.querySelector('.text-between-arrow-buttons').innerHTML = `
    <div class="text-between-arrow-buttons">${[index + 1]}/11</div>
    `;
    
  });
  
  
  const rightArrowButton = document.querySelector('.right-arrow-button')
  rightArrowButton.addEventListener('click', function() {
    
    document.querySelector('.popup-img-div').innerHTML = `
    <img class="dialog-img"src="assets/img/photos/${fileName[--index]}.jpg">
    `;
    
    document.querySelector('.popup-top-left-section').innerHTML = `
    <div class="popup-img-name">${fileName[index]}</div>
    `;

    document.querySelector('.text-between-arrow-buttons').innerHTML = `
    <div class="text-between-arrow-buttons">${[index + 1]}/11</div>
    `;
    
  });
  const overlayElement = document.querySelector('.overlay-div');
  const crossElement = document.querySelector('.close-img');
  
  overlayElement.innerHTML = `<div class="overlay"></div>`;
  overlayElement.addEventListener('click', function() {
    popUpElement.innerHTML = '';
    overlayElement.innerHTML = '';
  });

  crossElement.addEventListener('click', function() {
    popUpElement.innerHTML = '';
    overlayElement.innerHTML = '';
  });
}


