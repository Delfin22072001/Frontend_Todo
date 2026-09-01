const taskBtn = document.getElementById('task-button')
const taskItems = document.querySelector('.task-items')
const taskValue = document.getElementById('task')
const errorMsg = document.getElementById('error-msg')

const ul = document.createElement('ul')     // created once
taskItems.append(ul)

taskBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const task = taskValue.value.trim()
  if (!task) {
    errorMsg.textContent = "Please enter a task"
    return
  }
  errorMsg.textContent = ""

  const li = document.createElement('li')
  const span = document.createElement('span')
  const editBtn = document.createElement('i')
  const deleteBtn = document.createElement('i')
  const div = document.createElement('div')

  span.textContent = task
  editBtn.classList.add('fa-solid', 'fa-pen')
  deleteBtn.classList.add('fa-solid', 'fa-trash')
  div.classList.add('d-flex', 'gap-2')

  div.appendChild(editBtn)
  div.appendChild(deleteBtn)
  li.appendChild(span)
  li.appendChild(div)
  ul.appendChild(li)

  taskValue.value = ""

  deleteBtn.addEventListener('click', () => li.remove())

  editBtn.addEventListener('click', () => {
    const input = document.createElement('input')
    input.type = 'text'
    input.value = span.textContent
    span.replaceWith(input)
    input.focus()

    input.addEventListener('blur', () => {
      span.textContent = input.value.trim() || span.textContent
      input.replaceWith(span)
    })
  })
})

//toggle
const darkTheme = document.querySelector('.fa-moon')
const lightTheme = document.querySelector('.fa-sun')

darkTheme.addEventListener('click', () => {
  lightTheme.style.visibility = "visible"
  darkTheme.style.visibility = "hidden"
  document.body.style.backgroundColor = "#1f1f1f"
})

lightTheme.addEventListener('click', () => {
  darkTheme.style.visibility = "visible"
  lightTheme.style.visibility = "hidden"
  document.body.style.backgroundColor = "#121826"
})