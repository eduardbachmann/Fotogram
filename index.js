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

fileName.forEach((file, index) => {
  const imgId = `img-${index + 1}`;
  const imgElement = document.getElementById(imgId);
  imgElement.addEventListener('click', function () {
    selectImage(imgId, file);
  });
});

function selectImage (iD, file) {

  const popUpElement = document.querySelector('.popup-container');
  popUpElement.innerHTML = `
    <div class="popup-window-div">
      <div class="popup-img-name-and-cross">
        <div class="popup-img-name">${file}</div>
        <div class="close-img" id="close-img">⨉</div>
      </div>
      <div class="popup-img-div">
        <img class="dialog-img"src="assets/img/photos/${file}.jpg">
      </div>
      <div class="arrow-buttons-div">
        <button class="arrow-button"><</button>
        <div class="text-between-arrow-buttons">1/2</div>
        <button class="arrow-button">></button>
      </div>
    </div>
    `;

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