const newCommentHandler = async (event) => {
  event.preventDefault();
  const cmntVal = document.querySelector("#cmnt-desc").value.trim();
  const proj_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  if (cmntVal) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ cmntVal, proj_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await fetch("/api/comments", { method: "get" });
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
