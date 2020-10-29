//get elements
const submitButton = document.querySelector("[type='submit']");
const ToDos = document.getElementById("ToDos");

//get events
submitButton.addEventListener('click', () => {
    const input = document.getElementById("inputToDo").value;
    postData(input);
});
//getdata
const fetchToDoData = async () => {
    const result = await getData();
    return result;
};


//put and delete innerhtml
const pushData = async () => {
    ToDos.innerHTML = "";
    fetchToDoData().then(data => {
        let tasks = Object.keys(data).map(key => ({
            id: data[key]._id,
            description: data[key].description,
            done: data[key].done
        }));
        tasks.forEach(task => {
            const removeButton = document.createElement("i");
            removeButton.classList.add(`fas`);
            removeButton.classList.add(`fa-trash`);
            const listItemTodo = "Task: " + task.description + ", Done: " + task.done;
            const createItem = document.createElement("LI");
            const textnode = document.createTextNode(listItemTodo);
            createItem.appendChild(textnode);
            createItem.appendChild(removeButton);
            ToDos.appendChild(createItem);
            removeButton.addEventListener ("click", function() {
                deleteData(task.id);
            });
        });
    });
};
pushData();










