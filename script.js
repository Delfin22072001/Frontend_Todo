const addBtn = document.getElementById('task-button')
const myInput = document.getElementById('task')
const taskContainer = document.querySelector('.task-items')
const myArray = JSON.parse(localStorage.getItem('tasks')) || []

addBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const taskInput = document.getElementById('task').value.trim()
  if (!taskInput) {
    alert("Please enter a task")
    return
  }
  myInput.value = ""

  const repeat = myArray.some((val) => val.task === taskInput)

  if (repeat) {
    alert("Task already present")
    
  }
  else {
    myArray.push({ task: taskInput, status: "pending" })
    localStorage.setItem('tasks', JSON.stringify(myArray))
    addTasks()
  }
})

function addTasks() {
  taskContainer.innerHTML = myArray.length > 0 ?
    myArray.map((item, index) => `
      <div class="items ${item.status}">
        <input type="checkbox" class="checkboxInput" id="task-${index}" name="" ${item.status === "completed" ? "checked" : ""}/>
        <label class="label" for="task-${index}">${item.task}</label>
      </div>
    `).join('') : (`<p class="displayMessage text-center p-2">No task found</p>`)

  document.querySelectorAll('.checkboxInput').forEach((checkbox, index) => {
    checkbox.addEventListener('input', () => {
      if (checkbox.checked) {
        myArray[index].status = "completed"
        localStorage.setItem('tasks', JSON.stringify(myArray))
      }
      else {
        myArray[index].status = "pending"
        localStorage.setItem('tasks', JSON.stringify(myArray))
      }
      addTasks()
    })
  })
}

addTasks()

//toggle
const themeToggler = document.querySelector('.icons')
let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () =>{
  document.body.classList.add('dark-mode')
  localStorage.setItem('darkMode', 'active')
}

const disableDarkMode = () =>{
  document.body.classList.remove('dark-mode')
  localStorage.setItem('darkMode', null)
}

if(darkMode === 'active') enableDarkMode()

themeToggler.addEventListener('click', () =>{
  darkMode = localStorage.getItem('darkMode')
  darkMode !== 'active'? enableDarkMode() : disableDarkMode()
})

