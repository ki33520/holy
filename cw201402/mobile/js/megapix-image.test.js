window.onload = function() {
  var fileInput = document.getElementById('fileInput');
  fileInput.onchange = function() {
    var file = fileInput.files[0];
    // MegaPixImage constructor accepts File/Blob object.
    var mpImg = new MegaPixImage(file);

    // Render resized image into image element using quality option.
    // Quality option is valid when rendering into image element.
    // var resImg = document.getElementById('resultImage');
    // mpImg.render(resImg, { maxWidth: 300, maxHeight: 300, quality: 0.5 });

    // // Render resized image into canvas element.
    // var resCanvas1 = document.getElementById('resultCanvas1');
    // mpImg.render(resCanvas1, { maxWidth: 300, maxHeight: 300 });

    // Render resized image into canvas element, rotating orientation = 6 (90 deg rotate right)
    // Types of orientation is defined in EXIF specification.
    // To detect orientation of JPEG file in JS, you can use exif.js from https://github.com/jseidelin/exif-js
    

    //3264,2448
    var sw = 538, sh = 502
    var w = 3264, h = 2448;
    
    if(w > h){
        y = 583;
        x = parseInt(583/2448*3264);
        document.getElementById('ttt').innerHTML = x;
    }else{
        var b = h/w*sw;
        x = b / this.image.width;
        y = b / this.image.height;
    }
    mpImg.render(resImg, { width: x, height: y, orientation: 6  });
    //mpImg.render(resCanvas2, { width: x, height: y,  orientation: 6 });
  };
};

var addImg = function(imgUrl){
    var canvas = document.getElementById("resultCanvas2");
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.onload = function() {
        ctx.drawImage(image, 0, 0);
    };
    image.src = imgUrl;
}
