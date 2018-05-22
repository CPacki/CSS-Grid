//  Get Modal element
let modal = document.getElementById('simpleModal');
//  Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//  Listen for open click
modalBtn.addEventListener('click', openModal);
//  Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

//  Function to open modal
function openModal() {
    modal.style.display = 'block';
}

//  Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//  Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

/**
 *    Shopping list
 *    Add Todo
 */

const input = document.querySelector('.shopping-list-section input');
const ul = document.querySelector('.shopping-list-section ul');
const button = document.querySelector('.shopping-list-section button');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('button-delete')
    li.appendChild(document.createTextNode(input.value));
    deleteButton.appendChild(document.createTextNode('Delete'));
    ul.appendChild(li);
    li.appendChild(deleteButton);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

/**
 *    Delete Todo
 */

function deleteListItem(event) {
    if (event.target.classList.contains('button-delete')) {
        // if (confirm('Are you sure?')) {
        let li = event.target.parentElement;
        ul.removeChild(li);
        // }
    }
}

ul.addEventListener('click', deleteListItem);

/**
 *    Toggle Done
 */

function toggleDone(event) {
    if (event.target.classList.contains('todo-item')) {
        let li = event.target;
        li.classList.toggle('done');
    }
}

ul.addEventListener('click', toggleDone);

/**
 *    Gradient Background
 *    @type {[type]}
 */

const colorLeft = document.querySelector('.color-left');
const colorRight = document.querySelector('.color-right');
const gradientOutput = document.querySelector('.gradient-bg h3');
const gradientBackground = document.querySelector('.gradient-bg');
const randomColors = document.querySelector('.gradient-bg button');

function setGradient(left, right) {
    gradientBackground.style.background = `
        linear-gradient(to right, ${left} , ${right})
    `;
    gradientOutput.textContent = `${gradientBackground.style.background}`;
}

setNewGradient();

function randomColor() {
    return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}

function setRandomGradient() {
    setGradient(randomColor(), randomColor());
}

function setNewGradient() {
    setGradient(colorLeft.value, colorRight.value);
}

colorLeft.addEventListener('input', setNewGradient);
colorRight.addEventListener('input', setNewGradient);

randomColors.addEventListener('click', setRandomGradient);

// Replace http links with https links
$(document).ready(function() {

    $('a[href^="http:"]').each(function() {
        this.href = this.href.replace('http:', 'https:');
    });

});

/**
 *    Drag and Drop
 */

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop Through empties and call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
    this.className = 'fill';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
