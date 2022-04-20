const inputTodo = document.getElementById("input")
const todoList = document.getElementById('todoList')
addNewTodo()
function buttonAdd() {
  if (!inputTodo.value) return
  const newTodo = JSON.parse(localStorage.getItem("TODO"))
  if (!newTodo){
    localStorage.setItem("TODO", JSON.stringify(inputTodo.value))
    inputTodo.value =``
    addNewTodo()
    return;
  }
  localStorage.setItem("TODO", JSON.stringify([...newTodo, inputTodo.value]))
  inputTodo.value =``
  addNewTodo()
}
function addNewTodo() {
  todoList.innerHTML =``
  const newTodo = JSON.parse(localStorage.getItem("TODO"))
  newTodo.forEach((element, i) => {
    const cardTask = document.createElement('div')
    cardTask.classList.add('todo-item')
    cardTask.innerHTML =`  
            <input type="text" readonly value="${element}"
             style="
             outline: none; 
            border: none; 
            background: transparent">
        <div class="todo-item__icons">
            <img class="todo-item__icon delete"
                 src="./assets/icons/trash-icon.svg" 
                 alt="trash-icon" >
            <img class="todo-item__icon edit"
                 src="./assets/icons/edit-icon.svg"
                 alt="edit-icon">
            <img class="todo-item__icon-mobile"
                 src="./assets/icons/mobile-ellipse.svg"
                 alt="mobile-ellipse">
        </div>  
    `
    cardTask.addEventListener('click', e => {
      e.target.classList.contains('delete') && deleteTodo(i)
      e.target.classList.contains('edit') && changeTodo(i, e.currentTarget)
    })
    todoList.append(cardTask)
  })
}
 const deleteTodo = (i) => {
   const newTodo = JSON.parse(localStorage.getItem("TODO"))
   newTodo.splice(i,1)
   localStorage.setItem('TODO', JSON.stringify(newTodo))
   addNewTodo()
 }
const changeTodo = (i, e) => {
     const newTodo = JSON.parse(localStorage.getItem("TODO"))
     const item = e.querySelector('input')
      item.removeAttribute("readonly")
      item.focus()
      item.selectionStart = item.value.length;
      item.addEventListener('change', () => {
        newTodo[i] = item.value
        item.setAttribute('readonly', "")
        localStorage.setItem('TODO', JSON.stringify(newTodo))
        addNewTodo()
      })
}

















