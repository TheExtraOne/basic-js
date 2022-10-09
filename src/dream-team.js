const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
      return false;
  }
  let firstLetters = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let shortName = members[i].trim();
      firstLetters.push(shortName[0].toUpperCase());
    }
  }
  if (!firstLetters.length) {
    return false;
  }
  firstLetters = firstLetters.sort().join('');
  return firstLetters;

}

module.exports = {
  createDreamTeam
};
