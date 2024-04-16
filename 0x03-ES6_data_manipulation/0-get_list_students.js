#!/usr/bin/node
export default function getListStudents() {
  const myArray = [];
  myArray.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  myArray.push({ id: 2, firstName: 'James', location: 'Columbia' });
  myArray.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return (myArray);
}
