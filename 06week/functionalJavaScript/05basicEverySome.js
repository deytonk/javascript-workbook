'use strict';

// Return a function that takes a list of valid users, and returns a function that returns true
// if all of the supplied users exist in the original list of users.
//
// You only need to check that the ids match.

// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

const checkUsersValid = (goodUserArr) => {
  return (submittedUsers) => {
    return submittedUsers.every(everyUser => {
      return goodUserArr.some(goodUser => goodUser.id === everyUser.id)
    });
  };
}

module.exports = checkUsersValid
