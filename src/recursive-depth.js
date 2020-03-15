module.exports = class DepthCalculator {
    constructor() {
        this.depthCounter = 0;
    }
    calculateDepth(arr, currentLevel = 0) {
        if (!currentLevel) {
            this.depthCounter = 0;
        }
        if (Array.isArray(arr)) {
            arr.forEach(element => {
                if (Array.isArray(element)) {
                    this.calculateDepth(element, currentLevel + 1);
                }
            });
        }
        if (currentLevel > this.depthCounter) this.depthCounter = currentLevel;
        return this.depthCounter + 1;
    }
};