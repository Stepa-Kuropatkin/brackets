module.exports = function check(str, bracketsConfig) {
    let openBr = [];
    let closedBr = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBr[i] = bracketsConfig[i][0];
        closedBr[i] = bracketsConfig[i][1];
    }

    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        for (let br in openBr) {
            if (arr[i] == openBr[br]) {
                if (arr[i + 1] == closedBr[br]) {
                    arr.splice(i, 2);
                    i = -1;
                    break;
                }
            }
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }
};
