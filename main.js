const keyNum = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 88, 67, 86, 66, 78, 77];
const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

const randKey = (arr) => {
    let selection = Math.floor(Math.random() * arr.length);
    console.log(keys[selection]);
    return keys[selection];
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 32) { // Only run this if the spacebar is pressed for next
        console.log(e);
        console.log(randKey(keys));
        let selectedKey = randKey(keys);
        let chosen = document.querySelector(`#${selectedKey}`);
        chosen.classList.toggle('chosen');
    } 
});