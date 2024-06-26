export default function createIteratorObject(report) {
  const iterable = [];
  for (const departmentEmployeesArray of Object.values(report.allEmployees)) {
    iterable.push(...departmentEmployeesArray);
  }
  return iterable;
}
