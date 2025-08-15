let x = document.getElementById('switch');
let orig = document.getElementById('switch').textContent

x.addEventListener('mouseover', function() {
    x.textContent='hands';
});

x.addEventListener('mouseout', function() {
    x.textContent=orig;
});