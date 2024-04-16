#!/usr/bin/node
export default function getStudentIdsSum(myArray) {
  if (myArray instanceof Array) {
    const sum = myArray.reduce(
      (accumulator, student) => accumulator.id || accumulator + student.id, 0,
    );
    return (sum);
  }
  return (0);
}
