const body = document.querySelector("body")
const card = createAndAppennd("div","id","card",body)
const img = createAndAppennd("img","src","https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",card)
const h1 = createAndAppennd("h1",null,null,card,"Angle Priya")
const h5 = createAndAppennd("h5",null,null,card,"Stranger")
const btnContainer = createAndAppennd("div","id","btn-container",card)
const button = createAndAppennd("button",null,null,btnContainer,"Add friend")

function createAndAppennd(tag,attType,attNname,parent,text){
    const element = document.createElement(tag)
    if(!!(attType && attNname)){
        element.setAttribute(attType,attNname)
    }
    if(!!parent){
        parent.append(element);
    }
    if(!!text){
        element.innerText = text;
    }
    return element;

}

button.addEventListener("click",clickFnc)
let value = 0;
function clickFnc(){
    
    if(value === 0){
        h5.innerText = "Friend"
        h5.style.color = "green"

        button.innerText = "Remove Friend"
        button.style.backgroundColor = "red"
        value = 1;
    }else{
        h5.innerText = "Stranger"
        h5.style.color = "red"

        button.innerText = "Add Friend"
        button.style.backgroundColor = "green"
        value = 0;
    }
}