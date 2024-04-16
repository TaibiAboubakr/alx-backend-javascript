#!/usr/bin/node
export default function getStudentIdsSum(myArray) {
  if (myArray instanceof Array) {
    const sum = myArray.reduce((student) => student.id);
    return (sum);
  }
  return (0);
}
