export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    const grade = gradeObj ? gradeObj.grade : 'N/A';

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade,
    };
  });

  return updatedStudents;
}
