#!/usr/bin/node
// 1-stdin.js

const readline = require('readline');

const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

iface.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  iface.close();
});

iface.on('close', () => {
  console.log('This important software is now closing');
});
