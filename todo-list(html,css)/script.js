let inputTodo = document.getElementById('input')
let todoList = document.getElementById('todoList')
let newTodo =[]
if (localStorage.getItem('TODO')){
  newTodo =  JSON.parse(localStorage.getItem('TODO'));
  addNewTodo()
}

function buttonAdd() {
  let todo = {
    todo: inputTodo.value
  };
  newTodo.push(todo)
  addNewTodo()
  localStorage.setItem('TODO', JSON.stringify(newTodo))
}




function addNewTodo() {
  let todo = ""
  newTodo.reverse().forEach(function (element,){
    todo +=`  <div class="todo-item">   
            <span> ${element.todo} </span>
        <div class="todo-item__icons">
            <img class="todo-item__icon"
                 src="./assets/icons/trash-icon.svg"
                 alt="trash-icon">
            <img class="todo-item__icon"
                 src="./assets/icons/edit-icon.svg"
                 alt="edit-icon">
            <img class="todo-item__icon-mobile"
                 src="./assets/icons/mobile-ellipse.svg"
                 alt="mobile-ellipse">
        </div>
    </div>`

    todoList.innerHTML = todo

  })
}












// function removeTodo(){
//
//   for (let item of todoItem){
//     item.innerHTML=''
//   }
// }
