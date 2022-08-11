let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
     const item = document.createElement("div");
    item.classList.add(item);
    item.id.add(item-order);
    item.draggable;
    addEventListener('dragstart', (event) => {
      return ev.DataTransfer.setData('text', id).ev.target;
    });
    addEventListener('dragend', (event) => {
      return ev.DataTransfer.clearData()
    });
    let input = addEventListener('input')
    ev.target.appendChild(input, item);

    const save_btn = document.createElement('button');
    save_btn = document.innerHTML('Save');
    document.getElementsByName(save_btn).addEventListener('click' => (){
      document.innerHTML('error', "")
      if (input != "") {
        order++
        item = document.innerHTML(input);
        adding = false
        } else {
          error = document.innerHTML('message');
        }
        item.appendChild();
        return create_item();
    });
   
  
};



document.querySelectorAll('.drop').forEach(element => {
  addEventListener('drop', event => {
    event.preventDefault()
    const id = ev.DataTransfer.getData('text') 
    document.getElementById(id).append(event.target);
  });
    addEventListener('dragover', event => {
    event.preventDefault()

  })
});