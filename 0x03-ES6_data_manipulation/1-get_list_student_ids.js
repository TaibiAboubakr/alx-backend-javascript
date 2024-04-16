#!/usr/bin/node
export default function getListStudentsIds(myArray) {
  if (myArray.isArray) {
    const arrayIds = myArray.map((student) => student.id);
    return (arrayIds);
  }
  return ([]);
}
