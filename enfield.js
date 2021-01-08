var EnField = {

  variableRegex: /^([0-9a-z])$/i,

  start: function(passedObject){
    if(typeof passedObject === "undefined"){
      var passedObject = {};
      passedObject.targetObject = window;
      passedObject.queryElement = document.getElementsByTagName("body")[0];
      passedObject.idList = [];
      document.querySelectorAll("*[id]").forEach(function(element){
          passedObject.idList.push(element.getAttribute("id"));
      });
    }
    if(typeof passedObject.targetObject === "undefined"){
      passedObject.targetObject = window;
    }
    if(typeof passedObject.queryElement === "undefined"){
      passedObject.queryElement = document.getElementsByTagName("body")[0];
    }else if(passedObject.queryElement.tagName !== "BODY"){
      passedObject.queryElement = document.getElementById(passedObject.queryElement);
    }
    if(typeof passedObject.idList === "undefined"){
      passedObject.idObject = {};
      var  elementList = passedObject.queryElement.querySelectorAll("*[id]");
      for(var elementI = 0, elementN = elementList.length; elementI < elementN; ++elementI){
        passedObject.idObject[elementI] = elementList[elementI];
      }
      // document.querySelectorAll("*[id]").forEach(function(element){
      //   passedObject.idList.push(element.getAttribute("id"));
      // });
    }else{
      passedObject.idObject = {};
      var  elementList = passedObject.queryElement.querySelectorAll("*[id]");
      for(var elementI = 0, elementN = elementList.length; elementI < elementN; ++elementI){
        if(passedObject.idList.indexOf(elementList[elementI].getAttribute("id")) > -1){
              passedObject.idObject[elementI] = elementList[elementI];
        }
      }
    }
    passedObject.idObject[elementI] = passedObject.queryElement;
    console.log(passedObject);
    EnField.generateVariables(passedObject.targetObject, passedObject.queryElement, passedObject.idObject);
  },

  // @targetObject is the object all the generated variables are stored
  // @queryElement is the HTML DOM Element to be read all id Elements
  // @idList is the list only the idList id variable are generated
  generateVariables: function(targetObject, queryElement, idObject){

    for(var elementI in idObject){
      var idName = idObject[elementI].getAttribute("id");
      targetObject[EnField.getValidVariableName(idName)] = idObject[elementI];
    }

    // queryElement.querySelectorAll("*[id]").forEach(function(element){
    //   var idName = element.getAttribute("id");
    //   if(idList.indexOf(idName) > -1){
    //     targetObject[EnField.getValidVariableName(idName)] = element;
    //   }
    // });
  },

  getValidVariableName: function(idName){
    var variableName = "_";
    for(var nameI = 0, nameN = idName.length; nameI < nameN; ++nameI){
      if(EnField.variableRegex.test(idName.charAt(nameI)) || idName.charAt(nameI) === "_"){
        variableName += idName.charAt(nameI);
      }
    }
    return variableName;
  }

};

var t = {};
var p = {};
t.targetObject = p;
t.queryElement = "searchform";
t.idList = [];

module.exports.EnField = EnField;
