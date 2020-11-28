(function() {
    show_calendar(new Date());

    load_data_json();
    // 이전, 이후 달력 버튼 만들어서 저번달 데이터 로드
}) ();

function show_calendar(date) {
    const section = document.querySelector('section');
    const dom_firstday = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();
    const last_date = (new Date(date.getFullYear(), date.getMonth()+1, 0)).getDate();
    const title_div = document.querySelector('.calendar-month>strong');
    title_div.textContent = date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월';
    
    const base_day = last_date-(7-dom_firstday);    // 이 달의 일수 - (일주일 - 첫번째날의 요일값)이 기준일.
    const last_index = get_calendar_row(base_day) * 7;

    for(let index=0; index<last_index; index++) {
        const div = document.createElement('div');
        const real_date = index - dom_firstday + 1;
        const current_row = parseInt(index / 7);
        const current_column = index % 7;
        
        if(index > dom_firstday && index < last_date+dom_firstday) {
            const date_text = document.createElement('span');
            date_text.textContent = real_date;
            div.appendChild(date_text);
            div.setAttribute('data-row', current_row);
            div.setAttribute('data-column', current_column);
            div.classList.add('day-'+real_date);
        }
        div.classList.add('calendar-day');
        section.appendChild(div);
    }
}

function load_data_json() {
    let request = new XMLHttpRequest();
    const path = get_json_path();
    request.open("GET", path);
    request.responseType = 'json';
    request.send();
    request.onerror = function() {
        alert('데이터가 없습니다.');
    }
    request.onload = function() {
        return show_daily_log(request.response);
    }
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

function show_daily_log(response) {
    const header_count_area = document.querySelector('header>h1');
    const start_date = '2020-11-09';
    header_count_area.textContent = '식단변경 ' + get_day_diff(start_date, new Date()) + '일차';

    for (const [key, value] of Object.entries(response[0])) {
        const article_el = document.createElement('article');
        const title_el = document.createElement('h3');
        const weight_el = document.createElement('p');
        const body_fat_el = document.createElement('p');
        const memo_el = document.createElement('p');
        const day_el = document.querySelector('.day-'+key);

        title_el.textContent = value.title;
        weight_el.textContent = value.weight + 'kg';
        if(value.body_fat != "") {
            body_fat_el.textContent = value.body_fat + '%';
        }
        memo_el.textContent = value.memo;
        memo_el.classList.add('no-display');

        article_el.appendChild(title_el);
        article_el.appendChild(weight_el);
        if(value.body_fat != "") {
            article_el.appendChild(body_fat_el);
        }
        article_el.appendChild(memo_el);
        article_el.classList.add('daily-log');

        day_el.classList.add('there-is-content');
        day_el.appendChild(article_el);
    };
}