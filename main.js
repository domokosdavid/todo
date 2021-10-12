function general(){
    let adat = document.getElementById("szoveg").value;
    let li = document.createElement("li");
    li.setAttribute("class","list-group-item");
    let check = document.createElement("input");
    check.addEventListener("change",athuz);
    check.setAttribute("type","checkbox");
    
    let x = document.createElement("span");
    x.style.marginLeft="200px";
    
    
    x.innerHTML="X";
    x.addEventListener("click", torol);
    li.appendChild(check);
    
    li.innerHTML += adat;
    li.appendChild(x);
    if (adat < 1){
        alert("Az input mező nem lehet üres!");
    }
    else{
        
        document.getElementById("lista").appendChild(li);
        
        document.getElementById("szoveg").value = "";
    }
    
    
}
function torol(e){
    e.target.parentElement.remove();
}
function athuz(e){
    if(e.target.checked){
        e.target.parentElement.style.textDecoration="line-through";
        e.target.parentElement.setAttribute("class","list-group-item")
    }
    else{
        e.target.parentElement.style.textDecoration="none";
        e.target.parentElement.setAttribute("class","list-group-item")
    }
}

function init(){
    document.getElementById("felveszgomb").addEventListener("click", general);
}
document.addEventListener("DOMContentLoaded",init);