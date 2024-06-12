var myValue=[]
var inputTxt=document.getElementById("input-txt")
var saveBtn= document.getElementById("save-btn");
var ulLI = document.getElementById("ul-li");
var delBtm =document.getElementById("det-btn")

//localStorage.setItem("mysite","www.raka.com")

var localstorage = JSON.parse(localStorage.getItem("myValue"))
console.log(localstorage);

if(localstorage){
  myValue=localstorage;
  rendor();
}

saveBtn.addEventListener("click" ,()=> {
     myValue.push(inputTxt.value)
     inputTxt.value=""   //for clear text from input tag
     localStorage.setItem("myValue", JSON.stringify(myValue))
     rendor();

     console.log(localStorage.getItem("myValue"));
     
}) 

delBtm.addEventListener("dblclick",()=> {
  localStorage.clear()
  myValue=[]
  rendor()
})

function rendor(){
let myString="";
for(let i=0;i<myValue.length;i++){
   myString+=
   `<li>
        <a target='_blank' href='${myValue[i]}'> 
              ${myValue[i]} 
        </a>
   </li>`
}
ulLI.innerHTML=myString;
}