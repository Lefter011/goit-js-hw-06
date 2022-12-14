// const ul = document.querySelector("#categories").children.length;
// let title = [].concat(...document.querySelectorAll("h2"));
// const insideLi = [].concat(...document.querySelectorAll("li>ul"));

// console.log(`Number of categories: ${ul}`);
// console.log(`Category: ${title[0].textContent}`);
// console.log(`Elements: ${insideLi[0].children.length}`);

// console.log(`Category: ${title[1].textContent}`);
// console.log(`Elements: ${insideLi[1].children.length}`);

// console.log(`Category: ${title[2].textContent}`);
// console.log(`Elements: ${insideLi[2].children.length}`);


const elementsRef = document.querySelectorAll('.item');
console.log('Number of categories: ', elementsRef.length);

const items = elementsRef.forEach(item => {
    const categories = item.firstElementChild.textContent;
    console.log("Category: ", categories);
    const elements = item.lastElementChild.children.length;
    console.log("Elements: ", elements);
})