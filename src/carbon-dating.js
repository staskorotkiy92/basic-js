const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(+sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0 ||
        typeof (sampleActivity) !== 'string' || isNaN(parseFloat(sampleActivity))) return false;
        let k = 0.693/HALF_LIFE_PERIOD;
        let t = Math.log(MODERN_ACTIVITY/(parseFloat(sampleActivity)))/k;
        return Math.ceil(t);
    };
    