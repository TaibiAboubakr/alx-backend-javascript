#!/usr/bin/node
export default function getStudentsByLocation(studentsArray, location) {
  if (studentsArray instanceof Array) {
    const studentsByLoc = studentsArray.filter((student) => student.location === location);
    return (studentsByLoc);
  }
  return ([]);
}
