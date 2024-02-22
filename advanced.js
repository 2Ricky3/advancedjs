const myCompleteFunction = async (param1, param2, param3, callback) => {
    try {
      // Arrow functions
      const executeAsyncOperation = async (i, j) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`Async operation completed for iteration (${i}, ${j})`);
          }, 100);
        });
      };
  
      // Callback 
      const myCallback = (message) => {
        console.log(message);
      };
  
      // Nested loop
      for (let i = 0; i < param1; i++) {
        for (let j = 0; j < param2; j++) {
          // Nested if statements
          if (i % 2 === 0 && j % 2 === 0) {
            // Using callback function
            callback(`Executing iteration (${i}, ${j})`);
  
            // Using async-await and promises
            const result = await executeAsyncOperation(i, j);
            console.log(result);
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
 
  myCompleteFunction(3, 4, 'additionalParam', myCompleteFunction);
  