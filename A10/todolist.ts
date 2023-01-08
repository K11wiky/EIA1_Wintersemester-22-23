namespace todolist10{
let number: HTMLHeadElement = <HTMLHeadElement>document.querySelector('number')
let counter:  number = 0;

window.addEventListener('load', () =>{
    const form = document.querySelector('#new-task');
    const input = document.querySelector('#new-task-input') as HTMLInputElement;
    const list_el = document.querySelector('#task');
    if (form){ form.addEventListener('submit', (e) =>{
        e.preventDefault;
        counter ++;
        console.log(counter);
        number.innerHTML = '' + counter;
        const task =input.value;
        if
        (!task){alert("No new Task was added");
    return;
}
const CheckAndTaskDiv: HTMLDivElement = document.createElement('div')
CheckAndTaskDiv.setAttribute
if (list_el){
    list_el.appendChild(CheckAndTaskDiv);
    const Checkboxdiv : HTMLDivElement = document.createElement('div');
    CheckAndTaskDiv.appendChild(Checkboxdiv);
    const checkbox: HTMLInputElement = document.createElement('input')
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id', 'checkbox');
    checkbox.addEventListener('click', function(){

    });
    Checkboxdiv.appendChild(checkbox)

    const task_el: HTMLDivElement = document.createElement('div');
    CheckAndTaskDiv.appendChild(task_el);
    task_el.classList.add('task')

    const task_content_element : HTMLDivElement = document.createElement('div');

    task_content_element.classList.add('content')
    task_el.appendChild(task_content_element);
    
    const task_input_el : HTMLInputElement = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type =('text');
    task_input_el.value =task;
    task_input_el.setAttribute('readonly','readonly')
    task_content_element.appendChild(task_input_el)
//delete
    const task_activity_el : HTMLDivElement = document.createElement ('div') 
    task_activity_el.classList.add('activity');

    const task_delete_el : HTMLButtonElement =document.createElement ('button')
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

    task_activity_el.appendChild(task_delete_el);
    task_el.appendChild(task_activity_el);
    CheckAndTaskDiv.appendChild(task_el);
    input.value = '';

    task_delete_el.addEventListener('click', function(){
        list_el.removeChild(CheckAndTaskDiv);
    })
    counter --;
    number.innerHTML  = '' + counter;


}    })}
})
}