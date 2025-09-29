// Utility function to return a promise with a delay
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

// Main function to run transformations
function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Start immediately with the array [1,2,3,4]
  Promise.resolve([1, 2, 3, 4])
    // Step 1: Filter evens after 1 second
    .then(arr => {
      const evens = arr.filter(num => num % 2 === 0);
      return delay(1000, evens).then(result => {
        outputDiv.textContent = result.join(",");
        return result;
      });
    })
    // Step 2: Multiply evens by 2 after 2 more seconds
    .then(evens => {
      const multiplied = evens.map(num => num * 2);
      return delay(2000, multiplied).then(result => {
        outputDiv.textContent = result.join(",");
        return result;
      });
    })
    .catch(err => console.error("Error:", err));
}

// Call the function on page load
manipulateArray();

