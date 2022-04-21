const items = document.querySelectorAll('.item')
console.log("Number of categories:", items.length);


for (const item of items) {
     
    const title = item.firstElementChild
    const list = item.querySelector('ul').children.length
    
    console.log("Category:", title.textContent)
    console.log("Elements:", list);
}

// Category: Animals
// Elements: 4

