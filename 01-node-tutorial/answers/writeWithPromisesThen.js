const { writeFile, readFile } = require("fs").promises;

writeFile('./temporary/temp.txt', 'Hi\n')
  .then(() => {
    console.log(1)
    return writeFile('./temporary/temp.txt', 'there\n', { flag: 'a' })
  })
  .then(() => {
    console.log(2)
    return writeFile('./temporary/temp.txt', 'friends\n', { flag: 'a' })
  })
  .then(() => {
    console.log(3)
    return readFile('./temporary/temp.txt', 'utf-8')
  })
  .then((result) => {
    console.log(4)
    console.log(result)
  })
  .catch((error) => {
    console.log("An error occurred: ", error)
  })
