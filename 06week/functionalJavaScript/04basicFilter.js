'use script';

// Use Array#filter to write a function called getShortMessages.
//
// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
//
// The function should return an array containing the messages themselves, without their containing object.

// const getShortMessages = (messages) => {
//   messages.filter(obj => obj.message.length < 50))
//   };
// }

// function getShortMessages(messages) {
//
//   let shortMessage = messages.filter(function(shorten) {
//     if (shorten.message.length < 50) {
//   		return true;
//   	}
//   });
//
//   return shortMessage.map(function(shorten) {
//     return shorten.message;
//   })
// }

module.exports = getShortMessages

const getShortMessages = (messages) => {
  return messages.map(obj => obj.message).filter(msg => msg.length < 50);
}

module.exports = getShortMessages
