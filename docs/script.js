const btnListen = document.getElementById("btn-listen");
const btnBack = document.getElementById("btn-back");
const modal = document.getElementById("modal-background");
const body = document.querySelector("body");

let modalOpen = false;

btnListen.onclick = function () {
    modalOpen = true;

    modal.classList.add("display");

    setTimeout(function () {
        modal.classList.add("open");
    }, 10);

    body.style.overflowY = "hidden";
};

btnBack.onclick = function () {
    modal.classList.remove("open");

    setTimeout(function () {
        modal.classList.remove("display");
    }, 210);

    if (modal.scrollTop > 0) {
        setTimeout(function () {
            modal.scrollTo({
                top: 0,
                behavior: "instant"
            });
        }, 205);
    };

    body.style.overflowY = "auto";

    modalOpen = false;
};