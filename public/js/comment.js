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

// put
const newUpdate = async (event) => {
  event.preventDefault();
  const updVal = document.querySelector("#upd").value.trim();
  const upd2 = document.querySelector("#upd2").value.trim();
  if (updVal && upd2) {
    const response = await fetch("/api/projects/:id", {
      method: "PUT",
      body: JSON.stringify({ updVal, upd2 }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    // if (response.ok) {
    //   await fetch("/api/comments", { method: "get" });
    //   console.log(`it works`);
    // } else {
    //   console.log(response);
    // }
  } else {
  }
};

document.querySelector(".new-put-form").addEventListener("submit", newUpdate);
