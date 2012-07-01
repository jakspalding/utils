/**
 * Tests for date/twelveHourTime
 * @author Rob Taylor [manix84@gmail.com]
 * @requires src/date/twelveHourTime
 */
define([
    'src/date/twelveHourTime'
], function (twelveHourTime) {
    module('date/twelveHourTime');

    test('twelveHourTime', function () {
        equal(twelveHourTime(new Date(1287496289000)), '2', 'Twelve Hour Time (EG: 14 = 2)');
    });
});
