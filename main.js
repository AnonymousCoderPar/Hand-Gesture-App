prediction_1 = "";
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");

    Webcam.attach('#camera');

    function take_snapshot() {
        Webcam.snap(function(data_uri){
document.getElementById("capturedimage").innerHTML='<img id="captured_image" src="'+data_uri+'">';
        });
    }

    
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mLeanyjKl/model.json', modelLoaded);

 function check(){
img = document.getElementById("captured_image");
     classifier.classify(img, gotResults);
 }

function modelLoaded(){
console.log('Model Loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The Prediction Is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();

        if (results[0].label == "Thumbs Up"){
            document.getElementById("update_emoji").innerHTML ="&#128077";
         }
         if(results[0].label == "Thumbs Down"){
            document.getElementById("update_emoji").innerHTML ="&#128078";
            }
            if(results[0].label == "Mind-Blowing"){
        document.getElementById("update_emoji").innerHTML ="&#128076";
            }
            if (results[0].label == "Thumbs Up"){
                document.getElementById("update_emoji").innerHTML ="&#128077";
             }
             if(results[0].label == "Thumbs Down"){
                document.getElementById("update_emoji").innerHTML ="&#128078";
                }
                if(results[0].label == "Mind-Blowing"){
            document.getElementById("update_emoji").innerHTML ="&#128076";
                }
    }
}