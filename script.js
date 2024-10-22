        const inputBox = document.getElementById('input-box');
        const toDoList = document.getElementById('todo-list');

        showTask();

        function addTask(){

            if(inputBox.value === ''){
                alert('You must write something!');
            } else {
                let li = document.createElement('li');
                li.innerHTML = inputBox.value.trim();
                toDoList.appendChild(li);
                let span = document.createElement('span');
                span.innerHTML = '\u00d7';
                li.appendChild(span); 
                saveData();
            }

            inputBox.value = '';
        }

        toDoList.addEventListener('click', (e) =>{
            if(e.target.tagName === 'LI'){
                e.target.classList.toggle('checked');
                saveData();
            }else if(e.target.tagName === 'SPAN'){
                e.target.parentElement.remove();
                saveData();
            }
        }, false);

        function saveData(){
            localStorage.setItem('data', toDoList.innerHTML);
        }

        function showTask(){
            toDoList.innerHTML = localStorage.getItem('data');
        }

