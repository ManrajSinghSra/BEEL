const employees = [
    { name: "John", salary: { basic: 20000, bonus: 5000 } },
    { name: "Alice", salary: { basic: 25000 } },
    { name: "Bob" },
    { name: "Carol", salary: { basic: 30000, bonus: 10000 } }
]

 

function getEmployeeSalary(name){
   const emp= employees.find((curr)=>curr.name===name)
   if(!emp){
    console.log("Employee not found")
    return
   }
   //salary;
   const sal=emp.salary
   if(!sal){
    console.log("No salary")
    return 
   }
   const total=sal?.basic+(sal?.bonus ?? 0)
   console.log("Total salary is ",total);
}

getEmployeeSalary("Alice")