const { writeFile, readFile } = require("fs").promises;

const writer = async () => {

  try {
    await writeFile(
      './temporary/temp.txt',
      'Hi\nthere,\nfriends'
    )
    console.log('ended')
  } catch(err) {
    console.log('An error occurred: ', err)
  }
}

const reader = async () => {
  
  let result = await readFile( './temporary/temp.txt', 'utf-8')
  console.log(result)

}

const readWrite = async () => {
  await writer()
  await reader()
}

readWrite()
console.log('program ended')