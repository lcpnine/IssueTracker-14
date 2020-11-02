// TODO: assignee CRD
const { assignee: AssigneeModel } = require("../../db/models");

const createAssignee = async (req, res) => {
  try {
    const { issueid } = req.params;
    const { id: userid } = req.body;

    const newAssignee = await AssigneeModel.create({ issueid, userid });
    if (!newAssignee) {
      return res.status(400).json({ message: "fail" });
    }
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: "fail", erroror: error.message });
  }
};

const readAssignee = async (req, res) => {
  try {
    //   TODO: read assignee 할때 user, assignee, issue의 join 필요
  } catch (error) {
    return res.status(400).json({ message: "fail", erroror: error.message });
  }
};

const deleteAssignee = async (req, res) => {
  try {
    const { issueid, assineeid } = req.params;
    await AssigneeModel.delete({ where: { issueid, assineeid } });
    return res.status(200).json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: "fail", erroror: error.message });
  }
};

module.exports = { createAssignee, readAssignee, deleteAssignee };
