#!/usr/bin/node
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  return buffer;
}

try {
  const length = 5;
  const position = 2;
  const value = 42;
  const newArrayBuffer = createInt8TypedArray(length, position, value);
  console.log(newArrayBuffer);
} catch (error) {
  console.error(error.message);
}
