module.exports = function check(str, bracketsConfig) {
    const hist = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][0]) {
                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                    if (hist[hist.length - 1] === str[i]) {
                        hist.pop();
                        break;
                    }
                }
                hist.push(str[i]);
                break;
            }
            if (str[i] === bracketsConfig[j][1]) {
                if (hist.pop() !== bracketsConfig[j][0]) return false;
                break;
            }
        }
    }
    return hist.length === 0;
};
