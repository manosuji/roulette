let x = document.getElementById('switch'); // initial text

let idx = 0; // current index of item displayed in list
let line1 = ["sky", "hands", "mouth"] // list of words to display

// when mouse over word, go to next word in list
x.addEventListener('mouseover', function () {
        x.textContent=nextItem(line1);
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