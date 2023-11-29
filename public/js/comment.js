const newCommentHandler = async (event) => {
  event.preventDefault();
  const cmntVal = document.querySelector("#cmnt-desc").value.trim();

  if (cmntVal) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ cmntVal }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(`it works`);
    } else {
      console.log(response);
    }
  } else {
    console.log("try again");
  }
};
document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
