/* exported getStudentNames */
function getStudentNames(students: Record<string, string>[]): string[] {
  const arrayOfStudents = [];
  for (let i = 0; i < students.length; i++) {
    arrayOfStudents.push(students[i].name);
  }
  return arrayOfStudents;
}
