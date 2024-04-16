#!/usr/bin/node
export default function getListStudentsIds(myArray) {
  const arrayIds = myArray.map((student) => student.id);

  return (arrayIds);
}
