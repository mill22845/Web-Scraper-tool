var checkOut = 'Wed, Jun 2, 2022';

function formatDate(checkOut) {
    var let = new Date(checkOut),
        month = '' + (let.getMonth() + 1),
        day = '' + let.getDate(),
        year = let.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
console.log(formatDate(checkOut));

var checkIn = 'Sun, Jun 20, 2022';

function formatDate(checkIn) {
    var let = new Date(checkIn),
        month = '' + (let.getMonth() + 1),
        day = '' + let.getDate(),
        year = let.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
console.log(formatDate(checkIn));