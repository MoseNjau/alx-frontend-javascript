export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
    .filter(student => student.location === "city")
    .map((student) => {
        const studentCopy = {...student};
        newGrades.forEach((grade) => {
            if (grade.studentId === studentCopy.id) {
                studentCopy.grade = grade.grade;
            }
            else {
                studentCopy.grade = "N/A"
            }
        })
        return studentCopy;
    })
}