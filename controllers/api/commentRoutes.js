const router = require("express").Router();
const { Comment, Project } = require("../../models");
const withAuth = require("../../utils/auth");

// post comment

router.post("/", withAuth, async (req, res) => {
  try {
    // const projectIds = await Project.findAll({ attributes: ["id"] });

    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      project_id: req.body.project_id,
    });
    console.log(req.body.project_id);
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
