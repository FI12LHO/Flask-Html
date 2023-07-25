setTimeout(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let body = document.body.innerHTML;
    let head = document.querySelector('head').innerHTML;

    urlParams.forEach((value, key) => {
        value = value.replaceAll('%20', ' ')
        head = head.replaceAll(`{${key}}`, value);
        body = body.replaceAll(`{${key}}`, value);
    });

    document.body.innerHTML = body;
    document.querySelector('head').innerHTML = head;

    window.history.pushState(null, null, window.location.href.split('?')[0]);
}, 100);