// alert("Connected");
var input = document.querySelector("#input-txt");
var btnClick = document.querySelector("#btn");

var otpt = document.querySelector(".output");
var server = "https://api.funtranslations.com/translate/binary.json"



function getTranslateURL(txt) {
    return server + "?" + "text=" + txt;
}



function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something wrong with the server!! Try again after sometime ");
}

function clickHandler() {
    var inputTxt = input.value;
    fetch(getTranslateURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            otpt.innerText = translatedTxt;

        })
        .catch(errorHandler)
};

btnClick.addEventListener("click", clickHandler);