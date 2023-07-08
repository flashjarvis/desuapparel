window.addEventListener("load", function () {
    const form = document.getElementById('unsubscribe-mailing-list');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                // alert("Success!");
                document.getElementById("unsubscribe-success").innerHTML = "Unsubscribe Successful!";
                //TODO sublter success pop up
            })
    });
});
