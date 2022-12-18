namespace todolist{
  //let´s the counter work
  let number: HTMLHeadingElement = <HTMLHeadElement> document.getElementById("number") // So i got rid of the aling: sting in lib.dom.d.ts and ith was noth redh anyore  ¯\_( ͡° ͜ʖ ͡°)_/¯
  let counter: number = 0;

  // Task add and delete if you dont delete, the data will overflow let checkbox-nim and delete-hyung deal it for you (▀̿Ĺ̯▀̿ ̿)

  window.addEventListener ('load', () => {
    const form = document.querySelector('#new-task');
    const input = document.querySelector('#new-task-input');
    const list_el =document.querySelector('#task');
    
    if (form){
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        counter++;
        console.log(counter);
        number.innerHTML = "" + counter;
        const task = input.value;// My value is not accepted, what a missery (ㆆ_ㆆ) idk but this variation never works it say it does not exist as element but evryone uses it( TvT )What has my life come to. idk what eles to use like i said everyone uses this <( _ _ )>
        if(!task) {
          alert('Please, enter a Task first.');
          return;
        }
    //Ckeckbox-nim. You gotta give hands to this Huyung/Oppa he has it figured out (⌐■_■)
    const checkAndTaskDiv : HTMLDivElement =document.createElement('div')
    checkAndTaskDiv.setAttribute('id', 'checkAndTaskDiv');
    if(list_el)
    list_el.appendChild(checkAndTaskDiv);

    const checkBOXdiv : HTMLElement= document.createElement('div')

    checkAndTaskDiv.appendChild(checkBOXdiv);
    const checkbox : HTMLInputElement =document.createElement('input') 
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox');
    checkbox.addEventListener('click', function(){
    })
    checkBOXdiv.appendChild(checkbox);
  //Formidable de Form, for the forum , you have read it correct, we in other words I add a forum for the to do ( nah igore this it´s out of all our range of understanding ( ﾉ ﾟｰﾟ)ﾉ) 
  const task_el : HTMLDivElement = document.createElement('div')
  checkAndTaskDiv.appendChild(task_el);
  
  task_el.classList.add('task');

  const task_content_el : HTMLDivElement =document.createElement('div')
  task_content_el.classList.add('content');
  task_el.appendChild(task_content_el)

  const task_input_el : HTMLInputElement = document.createElement('input')
  task_input_el.classList.add('text');
  task_input_el.type = ('text');
  task_input_el.setAttribute('readonly', 'readonly');

  task_content_el.appendChild(task_input_el);

  //here comes the long awaited delete-hyung (o゜▽゜)o☆
  const task_action_el: HTMLDivElement = document.createElement('div');
  task_action_el.classList.add('action');
  
  const task_delete_el: HTMLDivElement =document.createElement('div')
  task_delete_el.classList.add('delete');
  task_delete_el.innerHTML = 'delete';

  task_action_el.appendChild(task_delete_el);
  task_el.appendChild(task_action_el);
  checkAndTaskDiv.append(task_el);

  input.vaule = " ";///ayah at this point i gave up on this （￣︶￣）

  task_delete_el.addEventListener('click', function(){
    list_el.removeChild(checkAndTaskDiv);
    counter-- ;
    number.innerHTML =" "; + counter ;
  })
      })
    }
   })
// wanted to add some arrays but the dude who used one was like using js uk and like hella complictaed way, i understood his concept but how am i able to adapt that into ts. like what is the diffrences in elements and datatyps.
// can someone tell me were i can find expplenation over ts, many videos and tutorials are for js. (T_T)i want to learn this but is suckinng the last drops of my nerves here ಥ_ಥ
//i most likely need more time to rework on this 



}