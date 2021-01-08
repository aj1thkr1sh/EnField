# EnField
Say, if you are developing the web application in JavaScript
You need to manipulate the HTML DOM to add event listener, actions by mapping the HTML DOM to JavaScript variables

Example,
if below is the HTML DOM
```
......
<input type="text" id="name" placeholder="Name">
<input type="email" id="email" placeholder="EMail">
<input type="number" id="mobile_number" placeholder="Mobile Number">
......
```
one need to map those HTML DOM to JavaScript variable to access
```
......
var name = doucment.getElementById("name");
var email = doucment.getElementById("email");
var mobileNumber = doucment.getElementById("mobile_number");
......
```
then one can get the values or attach event or whatever they need to manipulate the HTML DOM

#### What if the library done this for you

## Say Hi, to EnField
EnField does the process for you

## How?
It is very simple.  Includes the library in you webpage
then,
```
EnField.start();
```

### Tada!

```<input type="text" id="name" placeholder="Name">```
DOM will map to variable
```_name```

### Naming Convention( What will be the name of the variable? )
The name given to the ```id="name"``` will be added with preceding underscore ```_name``` add will be added to window object.  So, directly using ```_name``` will refer to that HTML DOM

### EnField base parameters

```EnField.start()``` accept the object of below type,

1. queryElement : is the value where the variable generation process starts, if not provided then all id element from the HTML DOM will be generated

  Example

  ```<form id="user-form">......</form>```
  ```
  EnField.start({
    queryElement: 'user-form'
  });

  ```

  The variable will be generated for all the id in user-form HTML DOM, including user-form tag

2. targetObject : is used to assign the generated variable to provided object instead of window object

  Example
  ```
  var UserForm = {};

  EnField.start({
    targetObject: UserForm
  });

  ```
  The variables will be generated and will be stored to UserForm object instead of window object

3. idList : list of id name in array, variables only generated for the ids mentioned in this array

  Example
  ```
  EnField.start({
    idList: ['name', 'email']
  });

  ```

  The variable will be generated only for name and email HTML DOM

However one can use all the three key to make more flexible

Example
```
EnField.start({
  targetObject: UserForm,
  queryElement: 'user-form',
  idList: ['name', 'email']
});

```
