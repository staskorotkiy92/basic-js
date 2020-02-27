module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  members.forEach((value) => {
    if(typeof(value) === 'string')
    teamName.push(value.trim()[0].toUpperCase());
  });
  return teamName.sort().join('');
};