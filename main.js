SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);

    result = event.results[0][0].transcript;

    if (result == "take my selfie") {
        console.log("taking selfie in 5 seconds")
        console.log("taking next selfie in 10 seconds")
        console.log("taking next selfie in 15 seconds")
        speak()
    }
}

function speak() {
    setTimeout(function(){
        img_id = selfie1
        snap()
        textalue = "taking selfie in 5 seconds"
     }, 5000)
     setTimeout(function(){
        img_id = selfie2
        snap()
        textalue = "taking next selfie in 10 seconds"
     }, 10000)
     setTimeout(function(){
        img_id = selfie3
        snap()
        textalue = "taking next selfie in 15 seconds"
     }, 5000)
    var apis = window.speechSynthesis;
    TtoS = new SpeechSynthesisUtterance(textalue)
    apis.speak(TtoS)
    Webcam.attach(camera);
}

 
Webcam.set({
    width: 400,
    height:250,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("webcam")

function snap() {
    Webcam.snap(function (img_uri){
       if (img_id ==selfie1) {
        document.getElementById("resultshow1").innerHTML = '<img id="result_img" src='+img_uri+'>';
       }
        if (img_id ==selfie2) {
         document.getElementById("resultshow2").innerHTML = '<img id="result_img" src='+img_uri+'>';
        }
         if (img_id ==selfie2) {
          document.getElementById("resultshow3").innerHTML = '<img id="result_img" src='+img_uri+'>';
         }
    })

}

function save() {
    img = document.getElementById("result_img").src ;
    anker = document.getElementById("anker");
    anker.href = img;
    anker.click();
}