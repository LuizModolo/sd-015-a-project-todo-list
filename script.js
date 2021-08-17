const mainSection = document.getElementById('main-section');

function addInput() {
  const inputField = document.createElement('input');
  mainSection.appendChild(inputField);
  inputField.id = 'texto-tarefa';
}
addInput();

function createButtonAdd() {
  const buttonAdd = document.createElement('button');
  mainSection.appendChild(buttonAdd);
  buttonAdd.id = 'criar-tarefa';
  buttonAdd.innerText = 'Adicionar';
}
createButtonAdd();

function createOrderList() {
  const orderList = document.createElement('ol');
  mainSection.appendChild(orderList);
  orderList.id = 'lista-tarefas';
}
createOrderList();

const itensLista = document.getElementsByClassName('itens-lista-individuais');

function colorListItem(event) {
  const alvo2 = event.target;
  for (let i = 0; i < itensLista.length; i += 1) {
    itensLista[i].classList.remove('selecionado');
    itensLista[i].style.backgroundColor = 'transparent';
    alvo2.style.backgroundColor = 'rgb(128, 128, 128)';
    alvo2.classList.add('selecionado');
  }
}

function strikeItem(event) {
  const alvo3 = event.target;
  // if (!alvo3.classList.contains('completed')) {
  //   alvo3.classList.add('completed');
  // } else {
  //   alvo3.classList.remove('completed');
  // }
  alvo3.classList.toggle('completed');
}

function addTask() {
  const inputField = document.querySelector('#texto-tarefa');
  const orderList = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  orderList.appendChild(listItem);
  listItem.className = 'itens-lista-individuais';
  listItem.innerText = inputField.value;
  inputField.value = '';
  listItem.addEventListener('click', colorListItem);
  listItem.addEventListener('dblclick', strikeItem);
}

const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', addTask);

function newSectionFooter() {
  const sectionFooter = document.createElement('section');
  mainSection.appendChild(sectionFooter);
  sectionFooter.id = 'section-footer';
}
newSectionFooter();

const sectionFooter = document.getElementById('section-footer');

function createButtonClear() {
  const buttonClear = document.createElement('button');
  sectionFooter.appendChild(buttonClear);
  buttonClear.id = 'apaga-tudo';
  buttonClear.innerText = 'Apagar Tudo';
}
createButtonClear();

function clearAll() {
  const olListParent = document.querySelector('#lista-tarefas');
  while (olListParent.firstChild) {
    olListParent.removeChild(olListParent.firstChild);
  }
}

const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', clearAll);

function createButtonRemoveDone() {
  const buttonRemoveDone = document.createElement('button');
  sectionFooter.appendChild(buttonRemoveDone);
  buttonRemoveDone.id = 'remover-finalizados';
  buttonRemoveDone.innerText = 'Remover Finalizados';
}
createButtonRemoveDone();

// Duas formas diferentes de fazer o removeDone.

// function removeDone() {
//   const olListParent = document.getElementById('lista-tarefas');
//   for (let i = itensLista.length - 1; i >= 0; i -= 1) {
//     if (itensLista[i].classList.contains('completed')) {
//       olListParent.removeChild(itensLista[i]);
//     }
//   }
// }

// function removeDone() {
//   const liCompleted = document.querySelectorAll('.completed');
//   for (let i = liCompleted.length - 1; i >= 0; i -= 1) {
//     liCompleted[i].remove();
//   }
// }

function removeDone() {
  const liCompleted = document.getElementsByClassName('completed');
  while (liCompleted.length) {
    liCompleted[0].remove();
  }
}

const buttonRemoveDone = document.getElementById('remover-finalizados');
buttonRemoveDone.addEventListener('click', removeDone);

function createButtonUp() {
  const buttonUp = document.createElement('button');
  sectionFooter.appendChild(buttonUp);
  buttonUp.id = 'mover-cima';
  buttonUp.innerHTML = '&#5169;';
}
createButtonUp();

function createButtonDown() {
  const buttonDown = document.createElement('button');
  sectionFooter.appendChild(buttonDown);
  buttonDown.id = 'mover-baixo';
  buttonDown.innerHTML = '&#5167;';
}
createButtonDown();

function removeSelected() {
  const buttonRemoveSelected = document.createElement('button');
  sectionFooter.appendChild(buttonRemoveSelected);
  buttonRemoveSelected.id = 'remover-selecionado';
  buttonRemoveSelected.innerHTML = 'Remover Selecionado';
}
removeSelected();

// MoveUp e MoveDown feitos com ajuda do Eric Cruz.

function moveUp() {
  const liCompleted = document.getElementsByClassName('selecionado')[0];
  const beforeSibling = liCompleted.previousSibling;
  beforeSibling.before(liCompleted);
}

function moveDown() {
  const liCompleted = document.getElementsByClassName('selecionado')[0];
  const afterSibling = liCompleted.nextSibling;
  afterSibling.after(liCompleted);
}

function removeSelectedItem() {
  const RemoveSelected = document.getElementsByClassName('selecionado');
  while (RemoveSelected.length) {
    RemoveSelected[0].remove();
  }
}

const buttonRemoveSelected = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
buttonUp.addEventListener('click', moveUp);
buttonDown.addEventListener('click', moveDown);
buttonRemoveSelected.addEventListener('click', removeSelectedItem);
