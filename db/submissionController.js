const express = require('express');
const SubmissionDAO = require('./DAO');

const router = express.Router();

class SubmissionController {
  static create(req, res) {
    SubmissionDAO.create({ name: req.name, email: req.email }).then(() => {
      res.status(200);
    });
  }
}

router.post('/', SubmissionController.create);

module.exports = SubmissionController;
