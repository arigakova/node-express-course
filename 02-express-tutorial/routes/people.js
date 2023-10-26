const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  getPerson,
  updatePeople,
  deletePeople
} = require('../controllers/people')

router.get('/', getPeople)
router.post('/', addPerson)
router.get('/:id', getPerson)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople)

module.exports = router 