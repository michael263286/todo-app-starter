// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

const completeList = document.querySelector('#complete-items')
const incompleteList = document.querySelector('#incomplete-items')


for (let item of todoItems){

    const listItem = document.createElement('li')
    listItem.innerText = item.title
    listItem.classList.add('list-group-item')
    listItem.classList.add('form')
    if (item.completed == true){
        completeList.appendChild(listItem)
    }
    else{
        incompleteList.appendChild(listItem)
    }
  }

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.
