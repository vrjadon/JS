# JavaScript Execution Context

 JS runs programs in two phases
 -  a *Global Execution Context* is made and it is stored in the *this* variable.
 - *this* is different for different run environments(bun, borwser, windows)
 - For browser, value of *this* is *window object*
 - JS is single threaded, everything is a processes for it
 - The other EC is *Function Execution Context*
 - But for some other documentatons, one more context is *Eval*

The phases are 
- *Memory Creation Phase* and *Execution Phase*
- location is allocated to all variables/functions etc in MCP
Steps of Execution Phase
- Code is run through Global Execution/Global Run Context using *this*
- MCP
- all variables are stored as undefined, functions definition stored in memory
- this completes first cycle
Steps of Execution Phase
- values given to variables, nothing changes in function
- when function call is encountered it makes it own executionthread + new variable environment
- and MCP AND EP repeated for the functions
  
![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/20201213102457/global.png)
