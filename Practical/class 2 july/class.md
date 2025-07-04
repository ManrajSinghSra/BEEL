read 
write 
append

unlink = delete 

exists == return whether file 


| Operation | Function        | Args in callback |
| --------- | --------------- | ---------------- |
| Read      | `fs.readFile`   | `(err, data)`    |
| Write     | `fs.writeFile`  | `(err)`          |
| Append    | `fs.appendFile` | `(err)`          |
| Delete    | `fs.unlink`     | `(err)`          |


| Operation | Function            | Throws Error | Return Value         |
| --------- | ------------------- | ------------ | -------------------- |
| Read      | `fs.readFileSync`   | Yes          | `string` or `Buffer` |
| Write     | `fs.writeFileSync`  | Yes          | `undefined`          |
| Append    | `fs.appendFileSync` | Yes          | `undefined`          |
| Delete    | `fs.unlinkSync`     | Yes          | `undefined`          |



| Operation | Async Function  | Return Type           | Sync Function       | Return Type         |
| --------- | --------------- | --------------------- | ------------------- | ------------------- |
| Read      | `fs.readFile`   | `void` (via callback) | `fs.readFileSync`   | `string` / `Buffer` |
| Write     | `fs.writeFile`  | `void`                | `fs.writeFileSync`  | `undefined`         |
| Append    | `fs.appendFile` | `void`                | `fs.appendFileSync` | `undefined`         |
| Delete    | `fs.unlink`     | `void`                | `fs.unlinkSync`     | `undefined`         |

