# Week 1 Report
* **Variables**: Dynamically typed, Assigned using `var`, `let` or `const`
* **Data Types**: Can be checked using the `typeof()` function.
	* String: series of characters
	* Number: numbers (with or without decimal points)
	* Bigint: Normal integers are 64-bit and 15 digits accurate... Larger integers are bigint
	* Boolean: True or False
	* Undefined: Value of a variable when it has been declared but not assigned
	* Null: A variable is assigned with this value to represent "no value"
	* Object: Can be built-in of user defined. Built-ins include
		* objects: Kind of like Key-Value pairs like Dictionaries/Lists in other languages
		* arrays: collection of values of same datatype
		* dates
		* maps
		* sets
		* intarrays
		* floatarrays
		* promises
		* etc
* **Functions**: 
	* Declaration: Declaring a function  
		`function name() { /* body */* }`
	* Expression: Declaring a function without name (unless used in a variable)  
		`const name = function() { /* body */* }`
		`const name = new Function("params", "body")`
	* Arrow Functions: Short hand declaration of functions  
		`const myFunction = (params) => expression;`
		`const myFunction = (params) => { /*body*/ };`
* **Loops**:
	* For:  
		`for (let i = 0; i < length; i++) { /*body*/ } `
	* While  
		`while(condition) { /*body*/ }`
	* ForEach  
		`array.forEach(function());`
* **Let**: Scopes the variable in the current `{}` block.  Hoisted but not initialized. does not create a property on the global object. Re-declaration not allowed. `var` is the exact opposite. https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var
* **Const**:The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. 
* **How JavaScript works on the web?**: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/
* **Necessity of JavaScript**: A universal language for website and web development which is integrated by default in basically all browsers. Maybe not the best language by design but great and lightweight nonetheless 
* **DOM**: DOM (Document Object Model) is a programming interface that represents the structure of a web page in a way that programming languages like JavaScript can understand and manipulate. But from info I was able to collect, not a inherent part of JavaScript itself. This is basically a tree of html elements.

# Week 1 Assignment
#### Create a simple password generator using javascript The user just clicks on a button and it should generate random mixed passwords.

## Progress
### Progress 12-12-24/22.14
![image](https://github.com/user-attachments/assets/3a26dc13-657d-40dd-b840-6f70e47315a8)  

### Progress 12-12-24/00:08
![image](https://github.com/user-attachments/assets/e6c8ee27-03e6-4c11-a669-a4938fce8f63)  

### Progress 12-12-24/12.32
UI Completed  
  
![image](https://github.com/user-attachments/assets/68433505-fbc7-4807-91a7-e748344df96c)  

### Progress 12-12-24/13.17
Full Site Completed  
  
![image](https://github.com/user-attachments/assets/4b965ac1-0c75-43d7-aae1-5a5c70db14e0)  
![image](https://github.com/user-attachments/assets/c8ce96ef-cf1e-4bff-a145-b8018c31df2d)  
![image](https://github.com/user-attachments/assets/7de13854-ff30-4a41-8376-423b2f6db238)  
![image](https://github.com/user-attachments/assets/69ddd0da-094f-4374-b1f8-a30270919d68)
