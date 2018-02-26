var currentDate = new Date();

module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    var hour = currentDate.getHours();

    if (hour > 16)
        return hour + " Добрый вечер, " + name ;
    else if (hour > 10) 
        return hour + " Добрый день, " + name;
    else 
        return hour + " Доброе утро, " + name;
} 