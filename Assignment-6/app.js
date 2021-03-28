const inp = document.getElementById('inp_title');
const btn = document.getElementById('addTodo');
const list = document.getElementById('list');
const upSVG = document.querySelector('.up').innerHTML;
const downSVG = document.querySelector('.down').innerHTML;
const editSVG = document.querySelector('.edit').innerHTML;
const deletSVG = document.querySelector('.delete').innerHTML;

// console.log(upSVG);
// console.log(document.getElementById('up').parentElement.parentElement)
console.log(document.querySelector("#list li ").innerText);
console.log("___________________")
console.log(document.querySelector(`#lst0`).innerText);
let count=1;

function upClicked(count) {
     
      
       const indx=count;
       console.log(indx);
       if(indx==1)
       {return;}
       let upli = document.querySelector(`#lst${indx-1} span`)
       let downli = document.querySelector(`#lst${indx} span`)

       console.log(upli)
        console.log(downli)
       let temp = upli.innerText;
       upli.innerText=downli.innerText;
       downli.innerText=temp;
     

}


function editClicked(count){
    const indx = count
    let currli = document.querySelector(`#lst${indx}`)
    let curspan = document.querySelector(`#lst${indx} span`)
    let prevValue = curspan.innerText;
    curspan.innerText="";
    let div = document.createElement("div");
    let inpt = document.createElement("input")

    let btn = document.createElement("button")
    btn.innerHTML="OK"
    btn.setAttribute('class',"ok")
    inpt.setAttribute("type","text")
    inpt.setAttribute("placeholder",prevValue)
    div.setAttribute("class","editdiv")
    div.append(inpt)
    div.append(btn)

    curspan.insertAdjacentElement('afterend',div);
    btn.onclick=function(){
        if(inpt.value=="")
        {
            curspan.innerText=prevValue;
            div.remove();
            return;
        }
        curspan.innerText=inpt.value;
        div.remove();
    }

    
        

}
function deletClicked(cont){
let indx =cont;

let list = document.querySelectorAll("li");
console.log(list.length)


let i=indx;

if(indx!=1)
{document.querySelector(`#lst${indx-1}   .down`).setAttribute('onclick',`upClicked(${indx+1})`)}


document.querySelector(`#lst${indx}`).remove();
i=indx+1;

while(i<list.length)
{


 

        document.querySelector(`#lst${i}   .up`).setAttribute('onclick',`upClicked(${i-1})`)
        if(i>2)
        {document.querySelector(`#lst${i-2}   .down`).setAttribute('onclick',`upClicked(${i-1})`)}
        document.querySelector(`#lst${i}   .edit`).setAttribute('onclick',`editClicked(${i-1})`)
        document.querySelector(`#lst${i}   .delete`).setAttribute('onclick',`deletClicked(${i-1})`)
        
        document.querySelector(`#lst${i}`).setAttribute("id",`lst${i-1}`);

    
    
    i=i+1;
}



count=count-1;
console.log(count);

}






btn.onclick = function (e) {

    // const todoText = inp.value;
    let prevDown = document.querySelector(`#lst${count-1}  .down`)
   console.log(prevDown);
     if(inp.value=="")
     {
         alert("Please give a Title")
         return
     }
     console.log(count)
     console.log("***********")
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const upb = document.createElement('buttton');
    const down = document.createElement('button');
    const edit = document.createElement('button');
    const delet = document.createElement('button');

    span.innerText=inp.value;

    li.setAttribute("id",`lst${count}`)
    li.append(span);
    div.setAttribute("class","box");

    upb.setAttribute("class","up");
    upb.setAttribute("id",`upbtn${count}`);
    
    // upb.onclick=upClicked(e)

    down.setAttribute("class","down");
    down.setAttribute("id",`dobtn${count}`);
    
    // down.onclick=downClicked(e)

    edit.setAttribute("class","edit");
    edit.setAttribute("id",`edbtn${count}`);
    
    // edit.onclick=editClicked(e)

    delet.setAttribute("class","delete");
    delet.setAttribute("id",`debtn${count}`);
    
    // delet.onclick=deletClicked(e);

    
    
    div.append(upb);
    div.append(down);
    div.append(edit);
    div.append(delet);

    
    li.append(div)
    list.append(li);


  upb.setAttribute('onclick',`upClicked(${count})`)
    prevDown.setAttribute('onclick',`upClicked(${count})`)
    edit.setAttribute('onclick',`editClicked(${count})`)
    delet.setAttribute('onclick',`deletClicked(${count})`)

    upb.innerHTML=upSVG;
    down.innerHTML=downSVG;
    edit.innerHTML=editSVG;
    delet.innerHTML=deletSVG;

    inp.value = "";

    count=count+1;
}



// li.onclick = function (e) {
//     console.log(e.target);
//     e.target.remove();
// }