const taskInput=document.getElementById('taskInput');
const addButton=document.getElementById('addButton');
const taskList=document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

function addTask(){
    const task=taskInput.value.trim();
    if(task!== ''){
        const li=document.createElement('li');
        li.textContent=task;
        const span = document.createElement('span');
        span.textContent='Delete';
        span.className='delete';
        li.appendChild(span);
        taskList.appendChild(li);
        taskInput.value= '';
    }
}
function deleteTask(event){
    if(event.target.className ==='delete'){
        const li=event.target.parentElement;
        li.remove();
    }
}

console.log(document)