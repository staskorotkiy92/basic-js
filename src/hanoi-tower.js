module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = (Math.pow(2, disksNumber) - 1)  / (turnsSpeed / 3600);
  return {turns, seconds};
}