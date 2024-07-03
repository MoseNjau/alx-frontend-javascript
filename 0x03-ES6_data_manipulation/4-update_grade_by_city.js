export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentCopy = { ...student };
      newGrades.forEach((gradeObject) => {
        if (gradeObject.studentId === student.id) {
          studentCopy.grade = gradeObject.grade;
        } else {
          studentCopy.grade = 'N/A';
        }
      });
      return studentCopy;
    });
}
