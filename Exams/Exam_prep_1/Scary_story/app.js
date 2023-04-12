window.addEventListener("load", solve);

function solve() {

    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let title = document.getElementById("story-title");
    let genre = document.getElementById("genre");
    let story = document.getElementById("story");

    // If the input fields are not empty, the "Publish" button is enabled.

    let publishButton = document.getElementById("form-btn");
    publishButton.disabled = false;
    publishButton.addEventListener("click", publishStory);


        function publishStory() {
        if (firstName.value === "" || lastName.value === "" || age.value === "" || title.value === "" || story.value === "") {
           console.log("error");
        }else {
            console.log("publishStory");

            let previewList = document.getElementById("preview-list");

            let storyInfo = document.createElement("li");
            storyInfo.classList.add("story-info");
            previewList.appendChild(storyInfo);

            let article = document.createElement("article");
            storyInfo.appendChild(article);

            let h4 = document.createElement("h4");
            h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
            article.appendChild(h4);

            let pAge = document.createElement("p");
            pAge.textContent = `Age: ${age.value}`;
            article.appendChild(pAge);

            let pStory = document.createElement("p");
            pStory.textContent = `Story: ${title.value}`;
            article.appendChild(pStory);

            let pGenre = document.createElement("p");
            pGenre.textContent = `Genre: ${genre.value}`;
            article.appendChild(pGenre);

            let pText = document.createElement("p");
            pText.textContent = story.value;
            article.appendChild(pText);

            let saveButton = document.createElement("button");
            saveButton.classList.add("save-btn");
            saveButton.textContent = "Save Story";
            saveButton.addEventListener("click", saveStory);

            let editButton = document.createElement("button");
            editButton.classList.add("edit-btn");
            editButton.textContent = "Edit Story";
            editButton.addEventListener("click", editStory);

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-btn");
            deleteButton.textContent = "Delete Story";
            deleteButton.addEventListener("click", deleteStory);

            storyInfo.appendChild(saveButton);
            storyInfo.appendChild(editButton);
            storyInfo.appendChild(deleteButton);

            let first_name_reserved = firstName.value;
            let last_name_reserved = lastName.value;
            let age_reserved = age.value;
            let title_reserved = title.value;
            let genre_reserved = genre.value;
            let story_reserved = story.value;

            firstName.value = "";
            lastName.value = "";
            age.value = "";
            title.value = "";
            story.value = "";

            publishButton.disabled = true;


            function editStory() {
                firstName.value = first_name_reserved;
                lastName.value = last_name_reserved;
                age.value = age_reserved;
                title.value = title_reserved;
                genre.value = genre_reserved;
                story.value = story_reserved;

                previewList.removeChild(storyInfo);
                publishButton.disabled = false;

            }

            function saveStory() {
                let mainDiv = document.getElementById("main");
                mainDiv.innerHTML = "";
                let h1 = document.createElement("h1");
                h1.textContent = "Your scary story is saved!";
                mainDiv.appendChild(h1);
            }

            function deleteStory() {
                previewList.removeChild(storyInfo);
                publishButton.disabled = false;
            }

        }
    //TODO ....
    }
}

