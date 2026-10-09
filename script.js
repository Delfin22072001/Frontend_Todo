const addBtn = document.getElementById('task-button')
const myInput = document.getElementById('task')
const taskContainer = document.querySelector('.task-items')

addBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  const taskInput = document.getElementById('task').value 
  if(!taskInput){
    alert("Please enter a task")
    return
  }
  myInput.value = ""

  const input = document.createElement('input')
  const label = document.createElement('label')
  const div = document.createElement('div')

  const taskId = `task-${Date.now()}`

  div.className = "items"
  label.htmlFor = taskId
  input.id = taskId
  input.type = "checkbox"
  label.textContent = taskInput

  div.appendChild(input)
  div.appendChild(label)
  taskContainer.appendChild(div)

  input.addEventListener('change', () =>{
    if(input.checked){
      label.style.textDecoration = "line-through"
    }
    else{
      label.style.textDecoration = "none"
    }
  })
  
})

//toggle
const darkTheme = document.querySelector('.fa-moon')
const lightTheme = document.querySelector('.fa-sun')

darkTheme.addEventListener('click', () => {
  lightTheme.style.visibility = "visible"
  darkTheme.style.visibility = "hidden"
  document.body.style.backgroundColor = "#0a101f"
})

lightTheme.addEventListener('click', () => {
  darkTheme.style.visibility = "visible"
  lightTheme.style.visibility = "hidden"
  document.body.style.backgroundColor = "#121826"
})