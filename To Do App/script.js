const newForm = document.getElementById('new');
const editForm = document.getElementById('edit');
const input = document.getElementById('name');
const todos = document.getElementById('todos');

newForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const todo = input.value;
    if (todo){
        const check=document.createElement('input');
        check.type='checkbox';
        check.setAttribute('name','checked')
        const todoEl=document.createElement('li');
        todos.appendChild(todoEl)
        todoEl.innerText=todo;
        todoEl.insertAdjacentElement('afterbegin',check);
        const icondiv = document.createElement('div');
        icondiv.className='icondiv';
        const icon = document.createElement('i');
        icon.className="fa fa-pencil pencil";
        icondiv.appendChild(icon);
        todoEl.appendChild(icondiv);

        var checkbox = document.querySelector("input[name=checked]")
        checkbox.addEventListener("click", ()=>{
            todoEl.classList.toggle("completed");
        })
    }

})

