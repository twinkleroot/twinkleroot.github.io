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