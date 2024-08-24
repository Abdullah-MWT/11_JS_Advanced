// +++++++++++++++ Bind In JS +++++++++++++++++++

function multiply(a, b) {
    console.log(a * b);
  }

  const multiplyBy2 = multiply.bind(null, 2);

  multiplyBy2(5); // Output: 10


  // Now here in the above code: multiply.bind(null, 2) creates a new function where a is always 2