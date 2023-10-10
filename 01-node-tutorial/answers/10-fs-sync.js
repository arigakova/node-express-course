const { readFileSync, writeFileSync } = require('fs') 

writeFileSync(
  './temporary/fileA.txt',
  'Alisa\n'
)
writeFileSync(
  './temporary/fileA.txt',
  'Loves\n', 
  {flag: 'a'}
)
writeFileSync(
  './temporary/fileA.txt',
  'Ice cream', 
  {flag: 'a'}
)

const result = readFileSync('./temporary/fileA.txt', 'utf-8')

console.log(result)