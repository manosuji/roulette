let x = document.getElementById('switch');
let orig = document.getElementById('switch').textContent;
let idx = 0;

let l1 = ["eyes", "hands", "mouth"]

x.addEventListener('mouseover', function () {
    // x.textContent = 'hands';
    for (let i = 1; i < l1.length; i++) {
        setTimeout(() => {
            x.textContent = l1[i];
        }, i*1000);  
    }
});

x.addEventListener('mouseout', function () {
    x.textContent = orig;
});