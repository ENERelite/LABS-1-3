

let div = document.createElement('div')
let textNode = document.createTextNode("шутка");
document.body.append(div);
div.append(textNode);


div.classList.add('goose');

let goose = document.querySelector(".goose")
goose.style.margin = "50px";



function milti(){

    let inp1 = document.getElementById('inp_1').value;
    let inp2 = document.getElementById('inp_2').value;


    
    alert(inp1*inp2)
    window.open("https://www.meme-arsenal.com/memes/518f72a6d5bec6d2b6999a73e22498fb.jpg")


}
