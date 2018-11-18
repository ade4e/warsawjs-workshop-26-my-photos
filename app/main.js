let imagesList = new ImagesList();
fetchImages({
  tags: [
    // "Owls", "Short-eared Owl"
  ],
  callback: () => {
    let carousel = new Carousel();
  }
});

let fileForm = new FileForm();
fileForm.render();
fileForm.bindEvent();
let lightBox = new LightBox();

// allImages = [];
// let parentEL = document.querySelector(".images-list");
// allImages = localData.map(function(image) {

//   let imageClass = new ImageClass(image);
//   return parentEL.appendChild(imageClass.render());

//   //  return `<img src='${image.url}'/>`;
// });
