const cursor = document.querySelector(".cursor__area");
const cursorPonto = document.querySelector(".cursor__ponto");
const btn = document.querySelector('#btnIniciar');

AOS.init();

document.addEventListener('mousemove', (e) => {
    cursor.style.cssText = cursorPonto.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
})


btn.addEventListener('click', (e) => {
    document.querySelector('#btnIniciar')
        .classList.toggle('fade__button');

        document.querySelector('#loading__page')
        .classList.toggle('fade__loading__in');

        setTimeout(function() {
            document.querySelector('#loading__page')
                .classList.toggle('fade__loading__out');

                document.querySelector('#content')
                    .classList.toggle('fade');
        },3000);
})
