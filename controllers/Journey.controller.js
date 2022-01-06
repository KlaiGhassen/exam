const { Journay } = require("../models/Journey.model");

module.exports = {
  createJournay: async (req, res) => {
    const { id } = req.headers;
    if (!id) {
      return res.status(401).end();
    }

    const journay = new Journay({
      ...req.body,
    });

    if (req.file) {
      journay.imageUrl = req.file.path;
    }
    await journay.save();
    res.json(journay);
  },
  getALLJournays: async (req, res) => {
    const journays = await Journay.find();
    res.json(journays);
  },
  getJournaysByUser: async (req, res) => {
    const journays = await Journay.find();
    res.render("list", { journays });
  },
  getJournayById: async (req, res) => {
    const { id } = req.params;
    const journay = await Journay.findById(id);
    journay.image = journay.image.replace("uploads/", "");
    res.render("details", { journay });
  },
  deleteJournay: async (req, res) => {
    const { id } = req.params;
    await Journay.remove({ _id: id });
    res.redirect("/journays/all");
  },
};
