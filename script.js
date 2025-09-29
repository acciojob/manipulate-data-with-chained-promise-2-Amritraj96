//your JS code here. If required.
// script.js

// Utility function to return a promise with a delay
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
  });
}

// Main function to run transformations
function manipulateArray() {
  const outputDiv = document.getElementById("output");

  // Step 1: Start with initial array after 3 sec delay
  delay(3000, [1, 2, 3, 4])
    // Step 2: Filter evens after 1 sec
    .then(arr => {
      const evens = arr.filter(num => num % 2 === 0);
      return delay(1000, evens).then(result => {
        outputDiv.textContent = result.join(",");
        return result;
      });
    })
    // Step 3: Multiply by 2 after 2 sec
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
