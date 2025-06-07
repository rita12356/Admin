let userscontainer = document.querySelector(`.users-container`);

let template = `
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      admin
    </div>
    <button type="button" class="user-delete btn btn-outline-primary">Х</button>
  </li>
`;

let usersName = [`admin`, `test`, `xyz`];
let Add = document.querySelector(`#add`);
let input = document.querySelector(`.form-control`);
let result = document.querySelector(`#result`);

function render() {
  userscontainer.innerHTML = ``;
  for(let i = 0; i < usersName.length; i++ ) {
    let usersNames = usersName[i];
   userscontainer.innerHTML +=`
   <li class="list-group-item d-flex justify-content-between align-items-start">
   <div class="ms-2 me-auto">
     ${usersNames}
   </div>
   <button type="button" class="user-delete btn btn-outline-primary">Х</button>
 </li>
 `;
 }
 let buttons = document.querySelectorAll(`.user-delete`);
for(let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener(`click`, function() {
    usersName.splice(i, 1);
    render();
  });
}
}

render(); 

Add.addEventListener(`click`, function() {
  let newUser = input.value;
  if(usersName.indexOf(newUser) != -1) {
    result.innerHTML = `Такой пользователь уже есть в системе`;
  } else{
    result.innerHTML = `Пользователь ${newUser} добавлен`;
    usersName.push(newUser);
    
    render();
    input.value = ``;
    
  }
});

