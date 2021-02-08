let menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', () => {
    let menu = document.querySelector('#menu');

    if (menu.classList.contains('on')) {
        menu.classList.remove('on');
    } else {
        menu.classList.add('on');
    }
});


// Label effect
let input = document.getElementsByClassName("form-input");

for (let i = 0; i < input.length; i++) {
    input[i].lastElementChild.addEventListener('click', e => {
        let label = input[i].firstElementChild;

        if (!label.classList.contains("form-focus")) {
            label.classList.add("form-focus");
        }
    });

    input[i].lastElementChild.addEventListener('focusout', e => {
        let label = input[i].firstElementChild;

        if (e.target.value.length > 0) {
            label.style.opacity = 0;
        } else {
            label.style.opacity = 1;
        }

        if (label.classList.contains("form-focus")) {
            label.classList.remove('form-focus');
        }
    });
}

// Footer mobile section

let footerSection = document.getElementsByClassName("footer-section");

for (section of footerSection) {
    section.addEventListener("click", (e) => {
        let hiddenSection = e.target.getElementsByClassName('hide');

        for (hide of hiddenSection) {
            if (hide.classList.contains('off')) {
                hide.classList.remove('off');
                e.target.querySelector('img').style.transform = 'rotate(0deg)';
            } else {
                hide.classList.add('off');
                e.target.querySelector('img').style.transform = 'rotate(180deg)';
            }
        }
    });
}