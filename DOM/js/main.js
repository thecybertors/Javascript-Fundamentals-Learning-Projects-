const firstView=document.querySelector("#view1");
console.log(firstView);
const secondView=document.querySelector("#view2");
console.log(secondView);
const thirdView=document.querySelectorAll(".view");
console.log(thirdView);
const classView=document.getElementById("view1");
console.log(classView);
const sameDivs=document.getElementsByTagName("div");
console.log(sameDivs);
const evenDivs=document.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs[0].parentElement);
console.log(evenDivs);
for(let i=0;i<evenDivs.length;i++)
    {
     evenDivs[i].style.backgroundColor="blue";   
    evenDivs[i].style.height="200px";
    evenDivs[i].style.width="200px";
    }
const navbar=document.querySelector("nav");
navbar.textContent="Hello World";
navbar.innerHTML=`<h1>Good Evening</h1><p>Welcome to my page</p>`;

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);

firstView.style.display="none";
secondView.style.display="flex";
secondView.style.flexFlow="row wrap";


while(secondView.lastChild){
    secondView.lastChild.remove();
}

const createDivs = (parent, num) => {
    const newDiv=document.createElement('div');
    newDiv.textContent=num;
    newDiv.style.height="100px";
    newDiv.style.width="100px";
    newDiv.style.margin="10px";
    newDiv.style.backgroundColor="black";
    newDiv.style.display="flex";
    newDiv.style.alignItems="center";
    newDiv.style.justifyContent="center";
    newDiv.style.flexFlow="row wrap";
    parent.append(newDiv);
};


for(let i=1;i<=12;i++){
createDivs(secondView, i);
}




