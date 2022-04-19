let inputTodo = document.getElementById('input')
let todoList = document.getElementById('todoList')
// создаём пустой массив
let newTodo =[]
// Берём данные из Localstorage при загрузке страницы
if (localStorage.getItem('TODO')){
  newTodo =  JSON.parse(localStorage.getItem('TODO'));
  addNewTodo()
}
// Объявляем функцию для добавления задач
function buttonAdd() {
  // Создаём объект и записываем в него значение поля input
  let todo = {
    todo: inputTodo.value
  };
  // Добавляем наш объект в массив который мы создали ранее
  newTodo.push(todo)
  if (inputTodo.value){
    addNewTodo()
  }
  // Записываем данные из todolist в localStorage
  localStorage.setItem('TODO', JSON.stringify(newTodo))
}



// Создаём функцию для отрисовки задач на странице
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
