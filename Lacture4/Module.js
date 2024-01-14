var CounterModule = (function() {
    var count = 0;
  
    return {
      increment: function() {
         count++;
       },
      getCount: function() {
          return count;
     }
    };
  })();
  
  CounterModule.increment(); 
  CounterModule.increment(); 
  CounterModule.getCount();     // Output: 2
  CounterModule.count;            //Ouput : 'undefined' as it is a private variable