const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};


const task1 = newTask("Clean Cat Litterbox, Take the poop out of the box");
const task2 = newTask("Do Laundry, Nice and Fresh");
const tasks = [task1, task2];

task1.logState();  // shows not done
task1.markCompleted();  // changes false to true
task1.logState();  // shows done

console.log(tasks);

// ////Refractoring the functions below
// /// shows the task details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// //Shows it they are completed or not
// function completeTask(task) {
//   task.complete = true;
// }

// const task1 = newTask("Clean Cat Litterbox, Take the poop out of the box");
// const task2 = newTask("Do Laundry, Nice and Fresh");
// const tasks = [task1, task2];

// logTaskState(task1);  // shows not done
// completeTask(task1);  // changes false to true
// logTaskState(task1);  // shows done

// console.log(tasks)


/*
Code Below is the same but doesn't use OO!

// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskDescription.push(description);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
*/
