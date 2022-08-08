// Variables
const taskList = document.getElementById('task-list');

// Event listeners
eventListeners();

function eventListeners(){
    // form submission
    document.querySelector('#form').addEventListener('submit', addTask);

    // // Remove tweet from the list
    // tweetList.addEventListener('click', removeTweet);





    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);


//     deleteCompletedBtn.addEventListener("click", deleteCompleteTasks)
// deleteAllBtn.addEventListener("click", deleteAllTasks)


}


// Functions 

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

