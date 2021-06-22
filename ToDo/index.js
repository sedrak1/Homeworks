function addItem() {
    const input = document.querySelector(".input");
    let i = Math.random();
    if (input.value !== "") {
        let div = document.createElement("div");
        let addItem = document.createElement("p");
        let deleteItemButton = document.createElement("button");
        let checkDoneButton = document.createElement("button");
        let notDone = document.createElement("button");
        div.className = "listItems";

        addItem.textContent = input.value;
        addItem.className = "todo";

        deleteItemButton.textContent = "Delete";
        deleteItemButton.className = "deleteItemButton";

        checkDoneButton.textContent = "Done";
        checkDoneButton.className = "checkDoneButton";

        notDone.textContent = "Not done";
        notDone.className = "notDone";
        notDone.style.display = "none";

        deleteItemButton.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        });
        checkDoneButton.addEventListener("click", (event) => {
            event.target.parentElement.style.backgroundColor = "green";
            addItem.style.color = "white";
            addItem.style.borderColor = "#fed800";
            checkDoneButton.style.display = "none";
            notDone.style.display = "initial";
        });

        notDone.addEventListener("click", (event) => {
            event.target.parentElement.style.backgroundColor = "#fed800";
            addItem.style.color = "#5e5e5e";
            addItem.style.borderColor = "#5e5e5e";
            checkDoneButton.style.display = "initial";
            notDone.style.display = "none";
        });

        let checkDoneButtonsArr = document.querySelectorAll(".checkDoneButton");
        div.appendChild(addItem);
        div.appendChild(deleteItemButton);
        div.appendChild(checkDoneButton);
        div.appendChild(notDone);
        document.body.appendChild(div);
        localStorage.setItem(i, input.value);
        input.value = "";
    }
}

function delItem() {}
