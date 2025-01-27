fetch('actionBar/actionBar.css')
    .then(response => response.text())
    .then(data => {
        let style = document.createElement('style');
        style.innerHTML = data;
        document.body.appendChild(style);
    });

fetch('actionBar/actionBar.html')
    .then(response => response.text())
    .then(data => document.body.insertAdjacentHTML('afterbegin', data));
