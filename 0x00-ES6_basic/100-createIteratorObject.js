export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const employeeList = [];
    
    for (const department in allEmployees) {
      if (Object.hasOwnProperty.call(allEmployees, department)) {
        employeeList.push(...allEmployees[department]);
      }
    }
  
    return employeeList;
  }
  