const storage = require('./storage');

storage.put('first', 'firstPlayer');
storage.put('second', 'SecondPlayer');
storage.update('first', 'changeFirstPlayer');

storage.save();
storage.load();
console.log(storage.getAll());
storage.put('third', 'ThirdPlayer');
storage.save();
storage.load();
console.log(storage.getAll());
storage.load();


