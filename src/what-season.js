module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!Date.parse(date) || date.constructor !== Date || 
      Object.getOwnPropertyNames(date).length !== 0) {
    throw 'Error';
  }
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();
  let season = (2 <= month && month <= 4)? seasons[1]:
                (5 <= month && month <= 7)? seasons[2]: 
                (8 <= month && month <= 10)? seasons[3]: seasons[0];
  
  return season;
};


