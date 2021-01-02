var model = ml5.styleTransfer("ml5-data-and-models/models/style-transfer/la_muse/", () => {
  console.log("Model loaded...");
});

function transfer() {
  var input = document.getElementById("input");
  var output = document.getElementById("output");

  model.transfer("bird.jpg", function(err, result) {
    if (result) {
      console.log(result.src);
    } else {
      console.error(err);
    }   
  });    
}  