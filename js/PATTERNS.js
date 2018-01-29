js шиблоные проектирования:

==============================================
прототип: нужен для создания объектов с одинаковым набором свойств и методов.

var vehiclePrototype = {  

  init: function (carModel) {  
    this.model = carModel;  
  },  

  getModel: function () {  
    console.log( "The model of this vehicle is " + this.model);  
  }  
};  
function vehicle (model) {  

  function F() {};  
  F.prototype = vehiclePrototype;  

  var f = new F();  

  f.init(model);  
  return f;  

}  

var car = vehicle("Ford Escort");  
car.getModel();

==============================================
модуль: нужен для сорытия свойств и методов в отдельном пространстве имён

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

==============================================
наблюдатель: нужен для подписки объектов на события

var PubSub = function ()
{
    var handlers = {};
 
    this.subscribe = function (event, handler)
    {
        if (handlers[event] === undefined)  handlers[event] = [];
        handlers[event].push(handler);
    };
 
    this.publish = function (event)
    {
        if (handlers[event] === undefined) return;
 
        var i = 0,
            len = handlers[event].length;
 
        for (i; i < len; i++)
        {
            handlers[event][i](arguments[i+1]);
        }
    };
};
 
pubSub = new PubSub();
pubSub.subscribe('myEvent', function(arg){alert("myEvent worked. Arg: " + arg);});
pubSub.publish('myEvent', 'it myArg');

==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================
==============================================