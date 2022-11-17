
//query selectors
let form = document.querySelector("#addToList");
let input = document.querySelector("#item");
let toDoList = document.querySelectorAll("ol .listItem");
let remove = document.querySelector("#clearAll")

//adds & displays to-do items
form.addEventListener("submit", function(event)
{
    event.preventDefault();

    let listItem = document.createElement("li");
    listItem.innerText = input.value;
    listItem.className = "listItem"; //need this?

    let list = document.querySelector("#olList");
    list.appendChild(listItem);
    toDoList = document.querySelectorAll("ol .listItem");

    listItem.addEventListener("click", function()
    {
        console.log(listItem.innerText);
    })

    crossOff();
  
    input.value = "";
})

//clears all to-do items 
remove.addEventListener("click", function()
{
    for (let i = 0; i < toDoList.length; i++)
    {
        toDoList[i].remove();
    }
})

// cross items off list
function crossOff(arr)
{
    for (let i = 0; i < toDoList.length; i++) 
{
    toDoList[i].addEventListener("click", function()
    {
        toDoList[i].style.textDecoration = "line-through";
    })
} return arr;
}


//stretch goals
// function crossOff(arr) // toggle Broken
// {
//     for (let i = 0; i < toDoList.length; i++) 
// {
//     toDoList[i].addEventListener("click", function()
//     {
//         if (toDoList[i].style.textDecoration === "line-through")
//         {
//             toDoList[i].style.textDecoration = "underline";
//         } else
//         {
//             toDoList[i].style.textDecoration = "line-through";
//         }
//     })
// } return arr;
// }


// //delete Individual items **BROKEN

// let remove1 = document.querySelector("#remove1Button");
// remove1.addEventListener("click", function()
// {
//     let itemToRemove = Number(remove1Input.value - 1);
    
//     toDoList[itemToRemove].remove();
//     console.log(toDoList);
    
    
//     remove1Input.value = "";
// })

// let remove1 = document.querySelector("#remove1Button");
// remove1.addEventListener("click", function()
// {
//     let itemToRemove = Number(remove1Input.value - 1);
//     console.log(itemToRemove);
    
        
//         listArr.splice(itemToRemove, 1);
//         console.log(listArr);
    
//     remove1Input.value = "";
// })


//edit items


  






