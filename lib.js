function get_json_path() {
    let today = new Date();
    let year = today.getFullYear().toString().substring(2,4);
    let month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }
    return year + month + '.json';
}

/**
 *  yyyy-MM-dd 포맷으로 반환
 */
function get_format_date(yymmdd) {
    const year = yymmdd.substring(0,2);
    const month = yymmdd.substring(2,4);
    const day = yymmdd.substring(4,6);

    return '20' + year + '-' + month + '-' + day;
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