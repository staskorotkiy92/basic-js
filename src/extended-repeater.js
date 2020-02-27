module.exports = function repeater(str, options) {
    let sep = options.separator || '+';
    let additionSep = options.additionSeparator || '|';
    let times = options.repeatTimes;
    let additionTimes = options.additionRepeatTimes;
    let value = '' + str;
    let additionValue = new Array(additionTimes).fill(('' + options.addition), 0, additionTimes).join(additionSep);
    if(additionValue !== 'undefined') {
        return new Array(times).fill((value + additionValue), 0, times).join(sep);
    }
    else {
        return new Array(times).fill(value, 0, times).join(sep);
    }
};
