let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector(".msg-container");

let turnO = false;

let win = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame = () =>{
    turnO = true;
    enabledbox();
    msg.classList.add("hide");
}
boxes.forEach((box) =>
{
box.addEventListener("click",() =>{
    if(turnO){
        box.innerText = "X";
        turnO = false;
    }
    else{
        box.innerText = "O";
        box.style.color = "lightgreen";
        turnO = true;
    }
    box.disabled = true;
    checkwinner();
});
});
const disabledbox = () => {
    for(let box of boxes){
box.disabled = true;
    }
}
const enabledbox = () => {
    for(let box of boxes){
box.disabled = false;
box.innerText = "";
    }
}
const showinner = (winner) => {
msg.innerText = `Congratulations,Winner is '${winner}'`;
 msg.classList.remove("hide");
msg.style.fontSize = "4vw";
disabledbox();
}

const checkwinner = () => {
for(let post of win){
    let pos1val = boxes[post[0]].innerText;
    let pos2val = boxes[post[1]].innerText;
    let pos3val = boxes[post[2]].innerText;
if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val == pos2val && pos2val == pos3val){
        console.log("winner",pos1val);
        showinner(pos1val);
    }
   
}
}
};
reset.addEventListener("click",resetgame);
