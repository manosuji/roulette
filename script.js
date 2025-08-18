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

// gathers all changeable elements
var changers = document.querySelectorAll(".c");
// adds event listeners to each changeable element
changers.forEach(item => {
    item.addEventListener('mouseover', function () {
        item.textContent=nextItem(item.dataset.alt.split('/'));
    });  
    item.addEventListener('click', function () {
        item.textContent=nextItem(item.dataset.alt.split('/'));
    });
})
