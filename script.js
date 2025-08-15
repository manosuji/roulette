let x = document.getElementById('switch'); // initial text
let orig = document.getElementById('switch').textContent; // original text

let idx = 0; // current index of item displayed in list
let l1 = ["sky", "hands", "mouth"] // list of words to display

// when mouse over word, cycle through list of words
x.addEventListener('mouseover', function () {
        x.textContent=nextItem(l1);
});

// returns the next item in a list, returning to beginning of list if needed
function nextItem(list) {
    if (idx >= list.length) {
        idx = 0;
    }
    item = list[idx];
    idx++;
    return item;
}