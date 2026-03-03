let titleInputE1 = document.getElementById("titleInput");
let ReviewTextAreaE1 = document.getElementById("ReviewTextArea");
let reviewsContainerE1 = document.getElementById("reviewsContainer");

function onAddReview() {
    let title = titleInputE1.value;
    let review = ReviewTextAreaE1.value;

    if (title === "") {
        alert("Please Enter a Movie Name");
        return;
    }

    let titleE1 = document.createElement("h1");
    titleE1.textContent = "Movie: " + title;
    reviewsContainerE1.appendChild(titleE1)

    let reviewE1 = document.createElement("p");
    reviewE1.textContent = "Review: " + review;
    reviewsContainerE1.appendChild(reviewE1);

    let horizontal = document.createElement("hr");
    reviewsContainerE1.appendChild(horizontal);

    titleInputE1.value = "";
}