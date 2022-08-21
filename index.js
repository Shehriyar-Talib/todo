let input =  document.getElementById('input-feild');
let btn = document.getElementById('btn');
let todo = document.getElementById('todo-container');
btn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    todo.appendChild(paragraph)
    paragraph.innerHTML = input.value;
    input.value = '';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        todo.removeChild(paragraph)
    })
});
