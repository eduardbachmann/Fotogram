document.querySelector('.photo-container').innerHTML = `
  <img class="photo" id="img-1" src="assets/img/photos/avenue-815297_1280.jpg">
  <img class="photo" id="img-2"src="assets/img/photos/antelope-4840335_1280.jpg">
  <img class="photo" id="img-3"src="assets/img/photos/bachalpsee-7572681_1280.jpg">
  <img class="photo" id="img-4"src="assets/img/photos/desert-2646209_1280.jpg">
  <img class="photo" id="img-5"src="assets/img/photos/field-9295186_1280.jpg">
  <img class="photo" id="img-6"src="assets/img/photos/glacier-7187291_1280.jpg">
  <img class="photo" id="img-7"src="assets/img/photos/mountain-6815304_1280.jpg">
  <img class="photo" id="img-8"src="assets/img/photos/rain-2573488_1280.jpg">
  <img class="photo" id="img-9"src="assets/img/photos/sunset-8516639_1280.jpg">
  <img class="photo" id="img-10"src="assets/img/photos/trail-5726987_1280.jpg">
  <img class="photo" id="img-11"src="assets/img/photos/water-6579313_1280.jpg">
`;

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
];

for (let i = 0; i < fileName.length; i++) {
  const imgFile = fileName[i];
  const imgId = `img-${i + 1}`;
  const imgElement = document.getElementById(imgId);
  imgElement.addEventListener('click', function () {
    selectImage(imgFile, i);
  });
};

function selectImage (arrayValue, index) { 
  const popUpElement = document.querySelector('.dialog-container');
  popUpElement.innerHTML = `
  <div class="dialog-window-div">
    <div class="dialog-img-name-and-cross">
      <div class="dialog-top-left-section">
        <div class="dialog-img-name">${arrayValue}</div>
      </div>
      <div class="close-img" id="close-img">⨉</div>
    </div>
    <div class="dialog-img-div">
      <img class="dialog-img"src="assets/img/photos/${arrayValue}.jpg">
    </div>
    <div class="arrow-buttons-div">
      <button class="left-arrow-button"><</button>
      <div class="text-between-arrow-buttons">${index + 1}/11</div>
      <button class="right-arrow-button">></button>
    </div>
  </div>
  `;
  
  const leftArrowButton = document.querySelector('.left-arrow-button');
  leftArrowButton.addEventListener('click', function() {
    if (index === 0) {index = 11}
    document.querySelector('.dialog-img-div').innerHTML = `
    <img class="dialog-img"src="assets/img/photos/${fileName[--index]}.jpg">
    `;
    renderImgAndCount();
  });
  
  const rightArrowButton = document.querySelector('.right-arrow-button');
  rightArrowButton.addEventListener('click', function() {
    if (index === fileName.length -1) {index = -1}
    document.querySelector('.dialog-img-div').innerHTML = `
    <img class="dialog-img"src="assets/img/photos/${fileName[++index]}.jpg">
    `;
    renderImgAndCount();
  });

  function renderImgAndCount() {
    document.querySelector('.dialog-top-left-section').innerHTML = `
    <div class="dialog-img-name">${fileName[index]}</div>
    `;
    
    document.querySelector('.text-between-arrow-buttons').innerHTML = `
    <div class="text-between-arrow-buttons">${[index + 1]}/11</div>
    `;
  };

  const overlayElement = document.querySelector('.overlay-div');
  const crossElement = document.querySelector('.close-img');
  overlayElement.addEventListener('click', closePopup);
  crossElement.addEventListener('click', closePopup);
  
  function closePopup() {
    popUpElement.innerHTML = '';
    overlayElement.innerHTML = '';
  };
};
