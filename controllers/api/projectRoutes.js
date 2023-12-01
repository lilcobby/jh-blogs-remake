const router = require("express").Router();
const { Project, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", async (req, res) => {
  try {
    const test = await Project.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id"] },
        // {
        //   model: Comment,
        //   include: [{ model: User, attributes: ["name"] }],
        // },
      ],
    });
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});
// need to add the put route here/ post
// router.post("/:id", withAuth, async (req, res)=>{

// })
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// put route works just need front end html and js

// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const updateProj = await Project.update(
//       { name: req.body.name, description: req.body.description },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(updateProj);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;



