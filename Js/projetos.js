
const info = document.querySelector(".info");
const alturaInicial = info.clientHeight;
const overflow = document.querySelector(".overflow");
const btn = document.querySelector(".toggle");

btn.addEventListener('click', initToggle)

function initToggle(e){
    info.style.maxHeight = e.target.dataset.state === 'more'
        ? `${info.scrollHeight}px`
        : `${alturaInicial}px`;

    e.target.setAttribute(
        "data-state", e.target.dataset.state === "more" ? "less" : "more"
    );

    e.target.innerHTML =
    e.target.dataset.state === "more" ? "Ver Mais" : "Ver Menos"

    overflow.setAttribute(
        "data-state",
        e.target.dataset.state === "more" ? "visible" : "hidden"
    )
}