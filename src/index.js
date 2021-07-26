let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
 
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//********************************* */
//This section creates the cards
//******************************** */

const toyURL = 'http://localhost:3000/toys/'
fetch(toyURL)
.then(resp => resp.json())
.then(toys => {
  let cardCollection = document.querySelector('#toy-collection')
  for (let i = 0; i < toys.length; i++){
    createCard(toys[i], cardCollection)
    //Below is not working
    //Using this to add an event listener
    //Think the problem is that I don't have the button element found
    // console.log(cardCollection, toys[i].id, toys[i].likes)
    // console.log(cardCollection.querySelector(`#${toys[i].id}`))
    
    // const elem = document.getElementById(`${toys[i].id}`)
    // console.log(elem)
    // clickListener(elem, toys[i].id ,toys[i].likes)
  }
    const toyElems = document.querySelectorAll('.like-btn')
    // for (let i = 0; i < toyElems.length; i++) {
    //   clickListener(toyElems[i]);
      
    // }
    // function currrentLikeCount(id){
    //   fetch(`${toyURL}${id}`)
    //   .then(resp=> console.log(resp.json()))
    //   .then(result => console.log(result))
    // }
    console.log(toyElems)
    toyElems.forEach((elem) => {clickListener(elem, elem.id)
    
    })
  })
  
  
  
  function createCard(data, element){
    element.innerHTML += `
    <div class="card">
    <h2>${data.name}</h2>
    <img src="${data.image}" class="toy-avatar" />
    <p>${data.likes} Likes </p>
    <button type="button" class="like-btn" id="${data.id}">Like <3</button>
    </div> 
    `}
    
    
    
    function clickListener(element, id){
      element.addEventListener('click', (e) => {
    console.log(element, 'inside click listener')
  
  console.log(e)
  e.preventDefault()
  let [currentLikes,] = e.target.previousElementSibling.innerHTML.split(" ")
  const likeElement = document.querySelector('.id')
  
  console.log(id, 'inside click listener')
  // fetch(`${toyURL}${id}`, {
  //   method : "PATCH",
  //   headers : 
  //   {
  //     "Content-Type": "application/json"
  //             },
  //   body: JSON.stringify(
  //   {likes: `${currentLikes++}`})
  // })
   
  })
}
  
      // debugger;
      // element.addEventListener('click',() =>  {
  // console.log('Im here!')
  // fetch(`${toyURL}${id}`), createPatchLikeSettings(likes)

  // } )
// }

function createPatchLikeSettings(likeCount){
  // likeCount++
  // console.log('settings Fired')
  return{
   method : "PATCH",
   headers : 
   {
     "Content-Type": "application/json"
             },
   body: JSON.stringify(
   {likes: `${likeCount}`}
   )
 } 
 }

// const textInputs = document.querySelectorAll('.input-text');
// const toyForm = document.querySelector('.submit')
// for (let x = 0; x > textInputs.length; x++){
//   console.log(textInputs[x])
// }

// ********************************* */
// This section adds new toys
// ******************************** */
const example = document.querySelector('.class')

document.addEventListener('submit', (e) => {
  e.preventDefault()
  const toyURL = e.target.children[3].value;
  const toyName = e.target.children[1].value
  const postSettings = createPostSettings(toyURL, toyName, 'POST')
  console.log(postSettings)
  fetch('http://localhost:3000/toys', createPostSettings(toyName, toyURL)
  )
})


function createPostSettings(name, URL){
 return{
  method : "POST",
  headers : 
  {
    "Content-Type": "application/json",
             "Accept": "application/json" 
            },
  body: JSON.stringify(
  {"name": `${name}`,
  "image": `${URL}`,
  "likes": 0}
  )
} 
}

//********************************* */
//This section adds points to the cards
//******************************** */

// const likeButtons = document.querySelectorAll('.like-btn');
// console.log(likeButtons)
// for(let index = 0; index < likeButtons.length; index++){
//   document.addEventListener('click', e => {
//     console.log(likeButtons[index].previousSibling)
//     // fetch('http://localhost:3000/toys',)
//   } )
// }


