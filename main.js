/******************
 * YOUR CODE HERE *
 ******************/

function slice(string, start = 0, end = '') {
  let out = "";
  if(end === '') {
    end = string.length;
  }
  for(let i = start; i < Math.min(string.length, end); i++) {
    out += string[i];
  }

  return out;
}

function repeat(string, count) {
  out = '';
  for(let i = 0; i < count; i++) {
    out += string;
  }

  return out;
}

function startsWith(string, substring) {
  return substring === slice(string, 0, substring.length);
}

function endsWith(string, substring) {
  return substring === slice(string, string.length - substring.length, string.length);
}

function includes(array, item) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === item) {
      return true;
    }
  }
  return false;
}

function join(array, separator = '') {
  let out = '';
  for(let i = 0; i < array.length; i++) {
    out += array[i];
    if(i + 1 < array.length) {
      out += separator;
    }
  }

  return out;
}

function split(string, split = '') {
  let out = [];
  let current = '';

  for(let i = 0; i < string.length; i++) {
    if(string[i] == split[0]) {
      out.push(current);
      current = '';
    } else {
      current += string[i];
    }
  }
  out.push(current);

  return out;
}

function trimStart(string) {
  let out = '';
  let doneStart = 0;

  for(let i = 0; i < string.length; i++) {
    if(string[i] != ' ' || doneStart) {
      out += string[i];
      doneStart = 1;
    }
  }

  return out;
}

function trimEnd(string) {
  let out = [];
  let doneEnd = 0;

  for(let i = string.length - 1; i >= 0; i--) {
    if(string[i] != ' ' || doneEnd) {
      out.unshift(string[i]);
      doneEnd = 1;
    }
  }

  return join(out);
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
