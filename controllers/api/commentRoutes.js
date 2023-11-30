const router = require("express").Router();
const { Comment, Project } = require("../../models");
const withAuth = require("../../utils/auth");

// post comment

router.post("/", withAuth, async (req, res) => {
  try {
    // const projectIds = await Project.findAll({ attributes: ["id"] });

    const newComment = await Comment.create({
      ...req.body,
      comment_text: req.body.cmntVal,
      user_id: req.session.user_id,
      project_id: req.body.proj_id,
    });
    // console.log(newComment);
    res.status(200).json(newComment);
    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const cmnt = await Comment.findAll({});
//     console.log(cmnt);
//     res.render("profile", { ...cmnt });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
