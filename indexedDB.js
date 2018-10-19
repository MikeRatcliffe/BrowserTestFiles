"use strict";

function createIndexedDB() {
  var open = indexedDB.open("MyDatabase", 1);

  open.onupgradeneeded = function () {
    var db = open.result;
    var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
  };

  open.onsuccess = function () {
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
    store.put({id: 54321, name: {first: "Ralph", last: "Wood"}, age: 38});
    store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
    store.put({id: 98765, name: {first: "Freddie", last: "Krueger"}, age: 40});

    tx.oncomplete = function () {
      db.close();
    };
  };
}
