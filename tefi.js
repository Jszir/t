document.addEventListener("DOMContentLoaded", function () { 

    
let y_bt = document.getElementById("yes")
let n_bt = document.getElementById("no")
let img_1 = document.getElementById("img1")
let img_2 = document.getElementById("img2")
y_bt.style.width = 200 + 'px'
y_bt.style.height = 200 + 'px'
n_bt.style.width = 200 + 'px'
n_bt.style.height = 200 + 'px'
let width = 200; // setting the width to 200px
 let height = 200 ; // setting the width to 200px

 let width_n = 200
 let height_n = 200

 const images = [
    'images/pv.jpg',
    'images/tr.jpg',
    'images/vt.jpg',
    'images/otra.jpg'
];

const images2 = [
    'images/tr.jpg',
    'images/tr.jpg',
    'images/vt.jpg',
    'images/otra.jpg'
];
let currentIndex = 0;
img_1.src = images[currentIndex]
 

function change_array (group_images) { 
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % group_images.length;
        img_1.src = group_images[currentIndex]
        img_1.style.opacity = 1;
    }, 200);
}
n_bt.addEventListener("click", function() { 
    
  
    width += 50
    height += 50
    y_bt.style.width = width  + 'px'; // setting the width to 200px
    y_bt.style.height = height + 'px'; // setting the width to 200px

    width_n -= 20
    height_n -= 20
    n_bt.style.width =  width_n + 'px'
    n_bt.style.height =  height_n + 'px'


    img_1.style.opacity = 0;
 
    change_array(images2)
    
})


y_bt.addEventListener("click", function(){
    y_bt.style.backgroundColor =  'white'
    y_bt.style.color = 'pink'

    currentIndex = 0
    img_1.style.opacity = 0;

        change_array(images)
    
})



})

