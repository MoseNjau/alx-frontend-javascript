export default function getStudentsByLocation(studentList, location) {
  return studentList.filter((student) => student.location === location);
}
