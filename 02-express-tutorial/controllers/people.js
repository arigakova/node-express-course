let { people } = require("../data.js");

const getPeople = (req, res) => {
  res.json(people)
}

const getPerson = (req, res) => {
  if (req.params.id === undefined) {
    res.status(400).json({ success: false, message: "Please provide an id" });
  } else {
    const id = Number(req.params.id)
    const person = people.find(it => it.id === id)
    if (person === undefined) {
      res.status(400).json({ success: false, message: `Person with id ${id} not found` });
    } else {
      return res.json(person)
    }
  }
}

const addPerson = (req, res) => {
  if (req.body.name === undefined) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
}

const deletePeople = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `There is no person with is ${req.params.id}` });
  }
  const id = Number(req.params.id)
  people = people.filter((person) => person.id !== id)
  res.status(200).json({ success: true, data: people });
};

const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  people = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: people })
}

module.exports = {
  addPerson,
  getPeople,
  getPerson,
  updatePeople,
  deletePeople
}