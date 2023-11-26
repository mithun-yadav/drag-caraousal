// setTimeout(()=>{
//     console.log('first setTimeOut');
//     setTimeout(()=>{
//         console.log('second setTimeOut');
//             setTimeout(()=>{
//             console.log('third setTimeOut');
//         },3000)
//     },2000);
// },1000);
/*
const wait= function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000)
    })
}
wait(2).then(()=>{
    console.log('first setTimeOut');
    return wait(1);
})
.then(()=>console.log("second setTimeout"));
*/

//class factory
/*
class Factory1{
    constructor(myName,age){
       this.myName = myName;
       this.age = age;
       this.details= this.myName + " is " + " of age " + this.age;
    }
    fatherAge(){
       console.log(25);
    }
}

class Factory2{
    constructor(schoolName){
       this.schoolName = schoolName;
    }
}

const obj1 = new Factory1("Shivam",20);

console.log(obj1.fatherAge());

const obj2 = new Factory2("DCAV",100);
obj2.__proto__ = obj1.__proto__;

console.log(obj2.fatherAge());
console.dir(obj1);
console.dir(obj2);
*/

// const btn = document.querySelectorAll("button");
// btn.forEach((item)=>{
//    item.addEventListener("click",(e)=>{
//      if(item.classList.contains("btnClass")){
//         console.log(item.innerText);
//      }
//      else if(item.dataset.name =="krishna"){
//         console.log("krishna");
//      }
//      else if(item.dataset.nameSurname =="Yadav"){
//         console.log("yadav");
//      }
//    })
// });


// const h1 = document.querySelector('.animateHead');
// const btn = document.querySelector('.pop-animamtion-btn');
// h1.innerHTML = h1.textContent.replace(/\S/g, "<span class='animateSpan'>$&</span>")

// document.querySelectorAll('.animateSpan').forEach((span, index) => {
//   span.style.setProperty('--delay', `${index * 0.1}s`)
// });


// btn.addEventListener("click", e => {
//     h1.style.setProperty('--animation', e.target.getAttribute('data-animation'))
    
//     h1.classList.remove('animate')
//     void h1.offsetWidth
//     h1.classList.add('animate')
//   })

//   btn.click();
//   setInterval(() => {
//     btn.click();
//   }, 3900);


/*======================Animate Start========================== */
/*
const headingNew = document.querySelector('.animateHead');
const btnNew = document.querySelector('.pop-animamtion-btn');
headingNew.innerHTML = headingNew.textContent.replace(/\S/g, "<span class='animateSpan'>$&</span>")

document.querySelectorAll('.animateSpan').forEach((span, index) => {
  span.style.setProperty('--delay', `${index * 0.1}s`)
});


btnNew.addEventListener("click", e => {
    headingNew.style.setProperty('--animation', e.target.getAttribute('data-animation'))
    
    headingNew.classList.remove('animate')
    void headingNew.offsetWidth
    headingNew.classList.add('animate')
  })

  btnNew.click();
  setInterval(() => {
    btnNew.click();
  }, 3900);
  */
  /*=========================Animate End======================= */

/*====================Not Completed Space checker================== */
// const spaceChecker = document.querySelector(".spaceChecker");
// spaceChecker.addEventListener("keyup",(e)=>{
//   let keysEntered = e.target.value;
//   let keysEnteredLength = e.target.value.length;
//   let val = keysEntered[keysEnteredLength-1];
//   let spaceCount = 0;
//   if((spaceCount === 0) && (val ===" ")){
//     spaceCount++;
//     console.log(spaceCount);
//   }
//   else if(val !== " "){
//     spaceCount =0;
//     console.log(spaceCount);
//   }
  
// })
/*====================Not Completed Space checker end================== */
// const obj ={
//   a:1,
//   b:2
// };

// const val1 = JSON.stringify(obj);
// console.log(val1);
// const val2 = JSON.parse(val1);
// console.log(val2);

const div1 = document.querySelector(".div1");
let valStart = false,prevPageX,prevScrollLeft;

div1.addEventListener("mousedown",(e)=>{
  valStart= true;
  prevPageX = e.pageX;
  prevScrollLeft = div1.scrollLeft;
})
div1.addEventListener("mouseup",(e)=>{
  valStart= false;
})
div1.addEventListener("mousemove",(e)=>{
  console.log(e.pageX);
  console.log(valStart);
  if(!valStart){
    return;
  }
  e.preventDefault();
  let positionDiff = prevPageX - e.pageX;
  div1.scrollLeft = prevScrollLeft - positionDiff;
})
