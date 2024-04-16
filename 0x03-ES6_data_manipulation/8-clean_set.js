#!/usr/bin/node
export default function cleanSet(set, startString) {
  let string;
  for (const element of set) {
    if (element.startsWith(startString)) {
      string += element;
    }
  }
  return string;
}
