// Your code goes here

//mouseenter
const scaleUp = document.querySelectorAll('.boat').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = "scale(1.2)";
        item.style.transition = 'all 0.5s';
    })
})

//mouseleave
const scaleDown = document.querySelectorAll('.boat').forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = "scale(1)";
        item.style.transition = 'all 0.5s';
    })
})


// //click
// const btnChange = document.querySelectorAll('.btn').forEach(item => {
//     item.addEventListener('click', e => {
//         item.style.backgroundColor = "blue";
//     })
// })

//mouseup
document.querySelector('.nav-link').addEventListener('mouseup', function (e) {
    alert(`OH HIIIIIIII!`)
})



//click
document.querySelectorAll('.text-content').forEach(item => {
    item.addEventListener('click', function (e) {
        item.style.backgroundColor = "pink";
    });
})

//dblclick
const textContent = document.querySelectorAll("h2")
textContent.forEach(item => {
    item.addEventListener('dblclick', function (e) {
        item.style.background = "red";
    })
})


//mousemove
document.querySelector('body').addEventListener('mousemove', rainbowMouse);

function rainbowMouse(e) {

    console.log(e.offsetX, e.offsetY);
    document.querySelector('h2').textContent = `MOuseX: ${e.offsetX} MouseY:${e.offsetY}`;
    //create input for offset
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 52)`;
}

// // document.querySelectorAll('p').addEventListener('ctrlKey', noRight);

// function noRight(e) {
// }

document.querySelector('body').addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('value', 'Hello World')

const box = document.querySelector('.content-pick');
box.appendChild(input);

input.addEventListener('select', function () {
    alert('HelloWorld')
})

// let destP = window.querySelectorAll('.destination p');
// destP.forEach((item, index) => {
//     item[index].addEventListener('scroll', function (e){
//         document.querySelectorAll('.nav-link').style.backgroundColor = "green";
//     })

// })


const sec = document.querySelector('.content-pick');
const bttn = document.querySelectorAll('.btn');
function clickEvent(e){
   e.stopPropigation();
    alert('OH HI'); 

}
function stopEvent(e){
    alert('event has concluded');
}

bttn.forEach( item => {
    item.addEventListener('click', clickEvent)
})

sec.addEventListener('click', stopEvent)


// document.querySelector('body').addEventListener('scroll', function(e){
//     destP.forEach( item => {
//         item.transform = "scale(4)";
//     })})

// document.querySelector('.img-fluid').addEventListener('contextmenu',function(e){
//     e.preventDefault();
// });
// textContent.transform = "scale(1.2)";



// .preventDefault()




//prevent refresh
// document.querySelectorAll('.nav-links')