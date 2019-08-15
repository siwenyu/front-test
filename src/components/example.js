/* eslint-disable semi */
/* eslint-disable no-undef */
define(function () {
    var counter = 3;
    function incCounter () {
        counter++
        return counter;
    }
    return {incCounter, counter};
});
