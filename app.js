let numberBox=document.querySelector("#numberBox")

const my_plus=document.querySelector("#plus")
const my_minus=document.querySelector("#minus")
const resetBox=document.querySelector("#reset")

let my_number=0;
let numberBoxInput=parseInt(numberBox.value)

// my_plus.addEventListener('click', function(){
//     my_number=my_number+1;
//     // my_number++; -SHORTER VERSION OF SAME THING
//     numberBox.value=numberBoxInput+my_number
// });

my_plus.addEventListener('click', function(){
    if(numberBox.value==0){
        my_number=my_number+1;
        // my_number++; -SHORTER VERSION OF SAME THING
        numberBox.value=numberBoxInput+my_number
    } else{
        numberBoxInput=parseInt(numberBox.value)
        numberBox.value=numberBoxInput+1
    }
});



my_minus.addEventListener('click', function(){
    if(numberBox.value==0){
        my_number=my_number-1;
        // my_number++; -SHORTER VERSION OF SAME THING
        numberBox.value=numberBoxInput-my_number
    } else{
        numberBoxInput=parseInt(numberBox.value)
        numberBox.value=numberBoxInput-1
    }
});

resetBox.addEventListener('click', function(){
    my_number=null;
    numberBox.value=my_number
});

// my_minus.addEventListener('click', function(){
//     my_number=my_number-1;
//     // my_number--; -SHORTER VERSION OF SAME THING
//     numberBox.value=my_number
// });

// OTHER WAY TO WRITE IT
// my_minus.addEventListener('click', ()=>{
//     my_number=my_number-1;
//     numberBox.value=my_number
// })


// let a= numberBox.addEventListener('type', function(){
//     return numberBox.value
// })


// if(numberBox.value==0){
//     my_number=my_number+1;
//     // my_number++; -SHORTER VERSION OF SAME THING
//     numberBox.value=numberBoxInput+my_number
// } else{
//     numberBoxInput=parseInt(numberBox.value)
//     numberBox.value=numberBoxInput+1
// }