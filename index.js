const media = document.getElementById('video');
const play_btn = document.getElementById('play-vid');
const right = document.getElementById("right-arrow-btn");
const left = document.getElementById("left-arrow-btn");
const cart_modal = document.getElementById('modal');
const request_modal=document.getElementById('request-modal');
const body_ele=document.getElementsByTagName('body')[0];

var card_map = new Map(); // card_map to map slides to the card to be shown at that slide .   
card_map.set(0, 0);card_map.set(1, 1);card_map.set(2, 2); 

// initial content of each card
var card_prop=[{src: "Images/unsplash_MqT0asuoIcU.png",disc_tag: "none",disc_value: "0%",name: "Veggie Pizza",price: "₹190",rating: "4.7",time: "50-79",add_normal: "none",add_minus: "flex"},
                   {src: "Images/pexels-omar-mahmood-106343 1.png",disc_tag: "block",disc_value: "20%",name: "Tandoori Chicken",price: "₹184",rating: "4.3",time: "15-29",add_normal: "block",add_minus: "none"},
                   {src: "Images/pexels-mumma-oyens-8799602 1.png",disc_tag: "block",disc_value: "50%",name: "Chilli Chicken",price: "₹116",rating: "4.1",time: "30-40",add_normal: "block",add_minus: "none"}
               ]
// handle right arrow of slide              
right.addEventListener('click', () => {
    for(let i=0;i<3;i++){
    card_map.set(i,(3+card_map.get(i)-1)%3);
    }
    set_cards();
});

//handle left arrow of slide
left.addEventListener('click',()=>{
    for(let i=0;i<3;i++){
        card_map.set(i,(card_map.get(i)+1)%3);
      }
      set_cards();
});

// change slides
function set_cards(){
    for(let i=0;i<3;i++){
        let val=card_map.get(i);
        document.getElementById(`img-${i}`).src=card_prop[val].src;
        document.getElementById(`disc-tag-${i}`).style.display=card_prop[val].disc_tag;
        document.getElementById(`disc-tag-inner-${i}`).style.display=card_prop[val].disc_tag;
        document.getElementById(`disc-tag-inner-${i}`).innerHTML=card_prop[val].disc_value;
        document.getElementById(`item-name-${i}`).innerHTML=card_prop[val].name;
        document.getElementById(`item-price-${i}`).innerHTML=card_prop[val].price;
        document.getElementById(`rating-${i}`).innerHTML=card_prop[val].rating;
        document.getElementById(`time-${i}`).innerHTML=card_prop[val].time;
        document.getElementById(`add-normal-${i}`).style.display=card_prop[val].add_normal;
        document.getElementById(`add-minus-${i}`).style.display=card_prop[val].add_minus;
    }
}

// cart modal open 
document.getElementById('cart-btn').addEventListener('click',()=>{
    cart_modal.style.display="block";
    body_ele.style.overflow="hidden";
})

//cart modal close
document.getElementById("close-btn").addEventListener('click',()=>{
    cart_modal.style.display="none";
    body_ele.style.overflow="visible";
});

// request modal open
document.getElementById('request-btn').addEventListener('click',()=>{
    request_modal.style.display="block";
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    body_ele.style.overflow="hidden";
})

//request modal close
document.getElementById('cancel-modal').addEventListener('click',()=>{
    request_modal.style.display="none";
    body_ele.style.overflow="visible";
})

//request-modal-close
document.getElementById('submit-modal').addEventListener('click',()=>{
    request_modal.style.display="none";
    body_ele.style.overflow="visible";
})

//play video on play click and removes play button 
play_btn.addEventListener("click",()=>{
    media.play();
    play_btn.style.display="none";
})

// remove play button on when playing
media.addEventListener("playing", () => {
    play_btn.style.display="none";
});

// restore play button on pause 
media.addEventListener("pause", () => {
    play_btn.style.display="block";
});


    
