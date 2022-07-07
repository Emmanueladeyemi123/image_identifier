Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version used is',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WO1_sLpgJ/model.json",modelLoaded());

function modelLoaded(){
    console.log("Your model has loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if (error){
console.error(error);
}
else {
console.log(results);

document.getElementById("resultObjectName").innerHTML=results[0].label;
document.getElementById("resultAccuracy").innerHTML=results[0].confidence.toFixed(2);
}
}