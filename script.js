// returns the next item in a list, returning to beginning of list if needed
let idx = 0; // current index of item displayed in list
function nextItem(list) {
    if (idx >= list.length) {
        idx = 0;
    }
    item = list[idx];
    idx++;
    return item;
}

let line1 = ["sky", "hands", "mouth"]

var changers = document.querySelectorAll(".changer");

changers.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.textContent=nextItem(item.dataset.alts.split('/'));
    });
    item.addEventListener('click', function () {
        item.textContent=nextItem(item.dataset.alts.split('/'));
    });  
})


// for (var i=0;i<changers.length;i++) {
//     changers[i].addEventListener('mouseover', function () {
//         changers[i].textContent=nextItem(line1);
//     });
//     changers[i].addEventListener('click', function () {
//         changers[i].textContent=nextItem(line1);
//     });
// }

//WORKING BELOW

// let x = document.getElementById('eyes'); // initial text

// let line1 = ["sky", "hands", "mouth"] // list of words to display

// // when mouse over word, go to next word in list
// x.addEventListener('mouseover', function () {
//         x.textContent=nextItem(line1);
// });

// x.addEventListener('click', function () {
//     x.textContent=nextItem(line1);
// });

