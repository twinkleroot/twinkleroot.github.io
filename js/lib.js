function get_json_path(dateObj) {
    const year = dateObj.getFullYear().toString().substring(2,4);
    const month = dateObj.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }
    return 'data/' + year + month + '.json';
}

function get_day_diff(_date1, _date2) {
    var diff_date_1 = _date1 instanceof Date ? _date1 :new Date(_date1);
    var diff_date_2 = _date2 instanceof Date ? _date2 :new Date(_date2);
 
    diff_date_1 =new Date(diff_date_1.getFullYear(), diff_date_1.getMonth()+1, diff_date_1.getDate());
    diff_date_2 =new Date(diff_date_2.getFullYear(), diff_date_2.getMonth()+1, diff_date_2.getDate());
 
    var diff = Math.abs(diff_date_2.getTime() - diff_date_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}

function get_calendar_row(base_day) {
    let row = 4;
    if(base_day - 28 > 0) {
        row = 6;
    } else if(base_day - 28 <= 0) {
        row = 5;
    }

    return row;
}