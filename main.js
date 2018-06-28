
    const employees = [{
        employee: "Jacob",
        employeeId: 1,
    },
    {
        employee: "Brett",
        employeeId: 2,
    },
    {
        employee: "Austin",
        employeeId: 3,
    }]
    const departments = [{
        department: "software",
        departmentId: 1,
    },
    {
        department: "hardware",
        departmentId: 2,
    },
    {
        department: "roughware",
        departmentId: 3,
    }]
    const computers = [{
        computer: "dell",
        computerId: 1
    },
    {
        computer: "acer",
        computerId: 2
    },
    {
        computer: "mac",
        computerId: 3
    }]
    const allThem = [{
        employeeId: 1,
        departmentId: 1,
        computerId: 1
    },
    {
        employeeId: 2,
        departmentId: 2,
        computerId: 2
    },
    {
        employeeId: 3,
        departmentId: 3,
        computerId: 3
    }
];
const article = $("<article>")
allThem.forEach(item => {
    const employeeName = item.employeeId;
    const employeeDepartment = item.departmentId;
    const employeeComputer = item.computerId;
    employees.forEach(key => {
        const name = key.employee;
        const employeeId = key.employeeId;
        if(employeeId === employeeName){
            const nameh1 = $("<h1>").text(name);
            const nameSection = $("<section>").append(nameh1);
            article.append(nameSection);
        }      
    })
    departments.forEach(lock => {
        const department = lock.department;
        const depId = lock.departmentId;
        if(employeeDepartment === depId){
            const depSec = $("<section>").text(`works in the ${department} department.`);
            article.append(depSec)
        }
    })
    computers.forEach(pick => {
        const computer = pick.computer;
        const compId = pick.computerId;
        if(compId === employeeComputer){
            const compSec = $("<section>").text(`uses the ${computer} computer.`);
            article.append(compSec);
        }
    })
})
$("body").append(article);