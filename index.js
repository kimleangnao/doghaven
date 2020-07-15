let adoptResult = document.querySelector(".adopt__result");
let mixUp = document.querySelector(".mixup");

let mastiffButton = document.querySelector(".adopt__select__js__mastiff");
let affenpinscherButton = document.querySelector('.adopt__select__js__affenpinscher');
let corgiButton = document.querySelector(".adopt__select__js__corgi");
let elkhoundButton = document.querySelector(".adopt__select__js__elkhound");
let huskyButton = document.querySelector(".adopt__select__js__husky");
let mountainswissButton = document.querySelector(".adopt__select__js__mountainswiss");
let akitaButton = document.querySelector(".adopt__select__js__akita");
let shibaButton = document.querySelector(".adopt__select__js__shiba");
let stbernardButton = document.querySelector(".adopt__select__js__stbernard");

//suppose to give me a header
let myHeaders = new Headers();
function apiCallAndShowResult(breed){
    let arrayResult = [];
    let promise = new Promise(function(resolve, reject){
        fetch("https://dog.ceo/api/breed/"+breed+"/images",{
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
        }).then(response => response.json())
        .then(result => {
            adoptResult.textContent = "";
            for(let i = 0; i < result.message.length; i++){
                let newElement = document.createElement("img");
                newElement.src = result.message[i];
                newElement.alt = "Dog";
                newElement.setAttribute("class", "adopt__result__picture");
                adoptResult.appendChild(newElement);
            }
        });
    })

    
}

//call to get first picture before any button was click
apiCallAndShowResult("akita");

//mixup random picture
(function apiRandomCall(num){
    for(let i = 0; i < num; i++){
        fetch("https://dog.ceo/api/breeds/image/random", {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
        }).then(response => response.json())
        .then(result => {
            let newElement = document.createElement("img");
            newElement.src = result.message;
            newElement.alt = "Dog";
            newElement.setAttribute("class", "mixup__picture");
            mixUp.appendChild(newElement);
        });
    }
})(50);


mastiffButton.addEventListener("click", function(){
    apiCallAndShowResult("mastiff");
});

affenpinscherButton.addEventListener("click", function(){
    apiCallAndShowResult("affenpinscher");
});

corgiButton.addEventListener("click", function(){
    apiCallAndShowResult("corgi");
});

elkhoundButton.addEventListener("click", function(){
    apiCallAndShowResult("elkhound");
});

huskyButton.addEventListener("click", function(){
    apiCallAndShowResult("husky");
});

mountainswissButton.addEventListener("click", function(){
    apiCallAndShowResult("mountain");
});

akitaButton.addEventListener("click", function(){
    apiCallAndShowResult("akita");
});

shibaButton.addEventListener("click", function(){
    apiCallAndShowResult("shiba");
});

stbernardButton.addEventListener("click", function(){
    apiCallAndShowResult("stbernard");
});
