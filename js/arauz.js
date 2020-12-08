const questBtn = document.querySelectorAll('[data-open-close-btn]'),
      questContent = document.querySelectorAll('[data-open-close-content]'),
      questWrapper = document.querySelectorAll('[data-open-close-wrapper]');
// 
// questContent.forEach(text => {
//     text.style.height = '0';
    // text.style.display = 'none';
// });
// 
// questBtn.forEach((btn, i) => {
//     btn.addEventListener('click', (e) => {
        // let tar = e.target;
        // if (tar.nextElementSibling.style.height = '0') {
            // tar.nextElementSibling.display = 'block';
        //     tar.nextElementSibling.style.height = '100%';
        // } else {
        //     tar.nextElementSibling.style.height = '0';
        // }

//         if (questContent[i].style.height = '0') {
//             questContent[i].style.height = '100%';
//             questContent[i].style.overflow = 'hidden';
//         }
//         
//     });
// });

questBtn.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
            questWrapper[i].classList.toggle('open-close--visible');
    });
});

