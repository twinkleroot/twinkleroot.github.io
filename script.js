(function() {
    let header = document.querySelector('header');
    let section = document.querySelector('section');

    // 현재 yyyy, mm 가져와서 json 파일을 만들어서 호출하자.
    const path = "2011.json";
    fill_html_data(path);

    // 저번 달 기록을 선택해서 다시 그리게 하는 것도 필요. (페이징)
}) ();

function fill_html_data(path) {
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        let response = request.response;
        
        console.log(response);
        show_daily_log(response);
    }
}

function show_daily_log(response) {
    response.forEach(element => {
        let article = document.createElement('article');
        let title = document.createElement('h1');
        let date = document.createElement('p');
        let weight = document.createElement('p');
        let memo = document.createElement('p');

        title.textContent = element.title;
        date.textContent = element.date;
        weight.textContent = element.weight;
        memo.textContent = element.memo;

        article.appendChild(title);
        article.appendChild(date);
        article.appendChild(weight);
        article.appendChild(memo);

        section.appendChild(article);
    });
}