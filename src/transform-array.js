
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw "Error";
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-prev') {
            if (i > 0) {
                result.pop();
            }
            else {
                continue;
            }
        }
        else if (arr[i] === '--discard-next') {
            i++;
        }
        else if (arr[i] === '--double-prev') {
            if (i > 0) {
                result.push(arr[i - 1]);
            }
            else continue;
        }
        else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                result.push(arr[i + 1]);
            }
            else continue;
        }
        else result.push(arr[i]);
    }
    return result;
};





