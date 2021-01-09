![EnFields](https://raw.githubusercontent.com/aj1thkr1sh/EnField/main/Enfields_Cover.png)

# EnFields
Say, if you are developing the web application in JavaScript


You need to manipulate the HTML DOM to add event listener or actions or anything by mapping the HTML DOM to JavaScript variables

Example,
if below is the HTML
```
......
<input type="text" id="name" placeholder="Name">
<input type="email" id="email" placeholder="EMail">
<input type="number" id="mobile_number" placeholder="Mobile Number">
......
```
you need to map those HTML DOM to JavaScript variable to access
```
......
var name = document.getElementById("name");
var email = document.getElementById("email");
var mobileNumber = document.getElementById("mobile_number");
......
```
then you can get the values or attach event or whatever you want to manipulate the HTML DOM

#### :thinking: What if the library dose this for you?
## Say Hi, to EnFields
EnFields does the process for you
## :astonished: How?
It is very simple.  Include the library in you webpage

```
<script src="https://unpkg.com/enfields"></script>
// Or
<script src="https://cdn.jsdelivr.net/npm/enfields"></script>
```
then,
```
EnFields.start();
```

### :tada: Ta-da!
The
```<input type="text" id="name" placeholder="Name">```
DOM will map to variable
```_name```

#:heart_eyes:
###How cool, right?


### :gear: Naming Convention( What will be the name of the variable? )
The name given to the id, that is ```id="name"```, the "name" is taken, appending with preceding underscore, so, the ```_name```  is the variable generated, which will be added to window object.  So, directly using ```_name``` will refer to that HTML DOM

### :wrench: EnFields parameters

```EnFields.start()``` accepts the object of below type,

1. queryElement : is the value, where the variable generation process starts, if not provided then, all id element from the HTML DOM will be generated

  Example

  ```<form id="user-form">......</form>```
  ```
  EnFields.start({
    queryElement: 'user-form'
  });

  ```

  The variable will be generated for all the HTML DOM elements containing id attribute, in user-form HTML DOM, including user-form tag

2. targetObject : is used to assign the generated variable to the provided target object, instead of window object

  Example
  ```
  var UserForm = {};

  EnFields.start({
    targetObject: UserForm
  });

  ```
  The variables will be generated, and will be stored to UserForm object instead of window object

3. idList : list of id names in array, if passed, variables will be generated only for those ids, contained in this array

  Example
  ```
  EnFields.start({
    idList: ['name', 'email']
  });

  ```

  The variable will be generated only for name and email HTML DOM

However, one can use all the three keys to make more flexible

Example
```
EnFields.start({
  targetObject: UserForm,
  queryElement: 'user-form',
  idList: ['name', 'email']
});

```
[:star: on GitHub](https://github.com/aj1thkr1sh/EnField) if you love
