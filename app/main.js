
let imagesList = new ImagesList({source: localData});
imagesList.render();
let fileForm = new FileForm();
fileForm.render();
fileForm.bindEvent();

// allImages = [];
// let parentEL = document.querySelector(".images-list");
// allImages = localData.map(function(image) {
   
//   let imageClass = new ImageClass(image);
//   return parentEL.appendChild(imageClass.render());

//   //  return `<img src='${image.url}'/>`;
// });

