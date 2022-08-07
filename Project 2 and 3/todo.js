const form = document.querySelector("form");
titleInput = document.querySelector(".title");
taskInput = document.querySelector(".task");
dateInput = document.querySelector(".date");
updateTaskInput = document.querySelector(".add-task");
deleteCompletedBtn = document.querySelector(".delete-completed");
deleteAllBtn = document.querySelector(".delete-all");
taskList = document.querySelector(".task-list");
// liTask = document.querySelector('.list-group-item')

// deleteCompletedInput = deleteCompletedInput.querySelector("input")
// deleteAllInput = deleteAllInput.querySelector("input")
// console.log(liTask)

// Total List Of Tasks
let list = JSON.parse(localStorage.getItem("tasks-list")) || []

/**
 * Show All Tasks From Local Storage In Page
 */
function showTaskList() {
    taskList.innerHTML = ""
    const list = JSON.parse(localStorage.getItem("tasks-list")) || []

    if (list.length === 0) {
        deleteAllBtn.disabled = true
    
        const element = String.raw`
                <div class="ui icon warning message">
                    <i class="inbox icon"></i>
                    <div class="content warning">
                        <div class="header">No Task Assigned for Today!</div>
                        <div>Assign Tasks for Today above.</div>
                    </div>
                </div>
            `
    
        taskList.style.border = "none"
        return taskList.insertAdjacentHTML("beforeend", element)

} else {

    deleteAllBtn.disabled = false
    list.reverse().forEach(task => {
        const element = String.raw`

        <li id="${task.id}" class="list-group-item t10">
            <div class="header">
                Title: ${task.title}
            </div>
            
            <div class="content">${task.text}</div>
            <div class="date">Date: ${task.date}</div>
        </li>
                `

        taskList.insertAdjacentHTML("beforeend", element)
    })
}

//     document.querySelectorAll(`li i.edit`).forEach(item => {
//         item.addEventListener("click", e => {
//           e.stopPropagation()
//           showEditModal(+e.target.dataset.id)
//         })
//       })
    
//       document.querySelectorAll(`li i.trash`).forEach(item => {
//         item.addEventListener("click", e => {
//           e.stopPropagation()
//           showRemoveModal(+e.target.dataset.id)
//         })
//       })
}



// showTaskList()

// form.onsubmit = (e)=>{
//     e.preventDefault(); //preventing form from submitting
function addTask(event) {
    event.preventDefault()
    /**
 * Add new task to local storage
 */

    var title = titleInput.value
    var task = taskInput.value
    var date = dateInput.value

    if (title.trim().length === 0) {
        if (task.trim().length === 0) {
            if (date.trim().length === 0) {
                return (dateInput.value = ""
                )
            }
            return (taskInput.value = ""
      )
        }
        return (titleInput.value = ""
      )
    }
  
    list.push({
      id: list.length + 1,
      title: title,
      text: task,
      date: date,
      completed: false,
    })
    localStorage.setItem("tasks-list", JSON.stringify(list))
    titleInput.value = ""
    taskInput.value = ""
    dateInput.value = ""
  
    // showNotification("success", "Task was successfully added")
    showTaskList()
    window.location.href = form.getAttribute("action");
}


// Change Complete State
function completeTask(e) {
    for (let i = 1; i <= taskList; i++) {
        console.log(taskList[i])
    }

    // if("todo-complete") {
    //     taskList.classList.remove("todo-completed");
    //     showTaskList()
    // } else {
    //     taskList.classList.add("todo-completed");
    //     showTaskList()
    // }
    // Save Changes
    localStorage.setItem("tasksList", JSON.stringify(list))
    showTaskList()
}

/**
 * Remove task
 */
 function DeleteTask(id) {
    list = list.filter(t => t.id !== id)
    localStorage.setItem("tasks", JSON.stringify(list))
  
    showNotification("error", "Task was successfully deleted")
    showTaskList()
}


/**
 * Edit task
 */
 function editTask(id) {
    const taskText = document.querySelector("#task-text").value
  
    if (taskText.trim().length === 0) return
    const taskIndex = list.findIndex(t => t.id == id)
  
    list[taskIndex].text = taskText
    localStorage.setItem("tasks", JSON.stringify(list))
  
    showNotification("success", "Task was successfully updated")
    showTasksList()
}
  
// Clear All Tasks
function deleteAllTasks() {
    console.log('clicked')
    if (list.length > 0) {
        if (confirm("Are you sure?")) {
      list = []
      localStorage.setItem("tasks-list", JSON.stringify(list))
      return showTaskList()
        }
    }
}

// Clear Complete Tasks
function deleteCompleteTasks() {
    if (list.length > 0) {
      if (confirm("Are you sure?")) {
        const filteredTasks = list.filter(t => t.completed !== true)
        localStorage.setItem("tasks", JSON.stringify(filteredTasks))
        return showTaskList()
      }
    }
}
  

// Show Edit Modal And Pass Data
function showEditModal(id) {
    const taskIndex = list.findIndex(t => t.id == id)
    const { text } = list[taskIndex]
  
    document.querySelector("#edit-modal .content #task-id").value = id
    document.querySelector("#edit-modal .content #task-text").value = text.trim()
    document
      .querySelector("#update-button")
      .addEventListener("click", () => editTask(+id))
  
    $("#edit-modal.modal").modal("show")
}
  

// Show Remove Modal
function showRemoveModal(id) {
    document
      .querySelector("#remove-button")
      .addEventListener("click", () => removeTask(+id))
  
    $("#remove-modal.modal").modal("show")
  }


// Show Clear All Tasks Modal
function showDeleteAllTasksModal() {
    if (list.length > 0) {
      return $("#clear-all-tasks-modal.modal").modal("show")
    }
  
    new Noty({
      type: "error",
      text: '<i class="close icon"></i> There is no task to remove.',
      layout: "bottomRight",
      timeout: 2000,
      progressBar: true,
      closeWith: ["click"],
      theme: "metroui",
    }).show()
}


function showNotification(type, text) {
new Noty({
    type,
    text: `<i class="check icon"></i> ${text}`,
    layout: "bottomRight",
    timeout: 2000,
    progressBar: true,
    closeWith: ["click"],
    theme: "metroui",
}).show()
}



// Event Listeners
taskList.addEventListener("click", completeTask)
deleteCompletedBtn.addEventListener("click", deleteCompleteTasks)
deleteAllBtn.addEventListener("click", deleteAllTasks)
form.addEventListener("submit", addTask)
window.addEventListener("load", () => updateTaskInput.focus())

showTaskList()



// console.log(titleInput)
// console.log(taskInput)
// console.log(dateInput)
// console.log(updateTaskInput)
// console.log(deleteCompletedBtn)
// console.log(deleteAllBtn)
// console.log(taskList)

