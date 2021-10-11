const todoIn = document.querySelector('.inAdd');
const todoBtn = document.querySelector('.btnAdd');
const todoList = document.querySelector('.todoList');
const todosFilter = document.querySelector('#todoFilter');

todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", btnAction);
todosFilter.addEventListener("click", filter);

function addTask (event){

    event.preventDefault();

    const todoItemDiv = document.createElement('div') ;
    todoItemDiv.classList.add('todoItem');

    const checkedBtn= document.createElement('button');
    checkedBtn.innerHTML= '<i class="fa fa-check-circle-o fa-lg"></i>';
    checkedBtn.classList.add('checked');
    todoItemDiv.appendChild(checkedBtn);

    const todoTaskLi=document.createElement('li');
    todoTaskLi.classList.add('todoTask');
    todoTaskLi.innerText = todoIn.value;
    todoItemDiv.appendChild(todoTaskLi);

    const deleteBtn= document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-eraser fa-lg"></i>';
    deleteBtn.classList.add('delete');
    todoItemDiv.appendChild(deleteBtn);

    todoList.appendChild(todoItemDiv);

    todoIn.value='';
}
function filter(event){
     const allTodos = todoList.childNodes;
    // console.log(allTodos);
     allTodos.forEach( function (todoTask){
        switch(event.target.value){
            case "all":
                todoTask.style.display = "flex";
                break;
            case "done":
                if(todoTask.classList.contains("done")){
                    todoTask.style.display = "flex";
                }
                else{
                    todoTask.style.display = 'none';
                }
                break;
                case "not-yet":
                    if(!todoTask.classList.contains("done")){
                        todoTask.style.display = "flex";
                    }
                    else{
                        todoTask.style.display = 'none';
                    }
                    break;    
        }
    });
}
function btnAction(event){
    if(event.target.classList[0] == "delete"){
    event.target.parentElement.remove();
    }
    else if(event.target.classList[0] == "checked"){
        event.target.parentElement.classList.toggle("done");
        }
    
}
