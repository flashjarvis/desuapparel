window.addEventListener("load", function () {
    const form = document.getElementById('mailing-list');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
                //TODO sublter success pop up 
            })
    });
});