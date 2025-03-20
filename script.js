document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
      const taskList = document.getElementById('taskList');

      // Create new list item
      const li = document.createElement('li');
      li.textContent = taskText;
      taskInput
      addTaskBtn
      taskList
      // Add delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
          taskList.removeChild(li);
      });

      // Mark task as completed
      li.addEventListener('click', function () {
          li.classList.toggle('completed');
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      // Clear input
      taskInput.value = "";
  }
});