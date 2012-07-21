/**
 * @author Rob Taylor [manix84@gmail.com]
 */
define('date/convert/toIso8601', [
    'date/convert/toDate'
], function (convertToDate) {

    /**
     * Converts strings, numbers and date objects into an ISO8601 formated date.
     * @param {string|number|date object} value - Value taken, to be converted to an ISO8601 formatted date.
     * @returns {string} EG: "2010-10-19T13:51:29+01:00"
     */
    var convertToIso8601 = function (value) {
        var dateValue = convertToDate(value),
            output = dateValue.getUTCFullYear() + '-' +
                pad(dateValue.getUTCMonth() + 1) + '-' +
                pad(dateValue.getUTCDate()) + 'T' +
                pad(dateValue.getUTCHours()) + ':' +
                pad(dateValue.getUTCMinutes()) + ':' +
                pad(dateValue.getUTCSeconds()) +
                offset(dateValue);

        return output;
    },
    pad = function (input) {
        var output = String(input);
        while (output.length < 2) {
            output = "0" + output;
        }
        return output;
    },
    offset = function (dateObj) {
        var offset = -dateObj.getTimezoneOffset(),
            hours = Math.floor(offset / 60),
            minutes = (offset - (hours * 60));
        return ((hours >= 0) ? '+' : '-') +
            pad(hours) + ':' + pad(minutes);
    };

    return convertToIso8601;
});
