'use strict';
    const inputName = document.querySelector('#name-input');
    const outputName = document.querySelector('#name-output');

    function getName() {
    const trimedName = inputName.value.trim();
    outputName.textContent = trimedName === '' ? 'Anonymous' : trimedName;
    }
    inputName.addEventListener('input', getName)