/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

//----- We are finding the right value by looking which key has the right Value.
//----- We are finding the right User based on his userName

function findUserByUsername(usersArray, username) {        //----- username is a string and it will be the name of the key that we will be looking for.
 return usersArray.find(function(value){
      return value.username === username                  //-----return the first  object with the key of usersame  that matches our  provided string ( our second parameter username)
  });
}


/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
 let foundIndex = usersArray.findIndex(function(value){
     return value.username === username;
 })
 if(foundIndex === -1) return;                            //----- if our finIndex array method  will equal -1 the object we looking for was not found in the array. 
 return usersArray.splice(foundIndex,1)[0];                  //----- remove the instance where the foundIndex was found.
}



