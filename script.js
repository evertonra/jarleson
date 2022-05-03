const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.teste');

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

// const tabMenu2 = document.querySelectorAll('.js-menu2 li');
// const tabContent2 = document.querySelectorAll('.teste2');

// if (tabMenu2.length && tabContent2.length) {
//   tabContent2[0].classList.add('ativado');

//   function activeTab2(index) {
//     tabContent2.forEach((div) => {
//       div.classList.remove('ativado');
//     });
//     tabContent2[index].classList.add('ativado');
//   }

//   tabMenu2.forEach((itemMenu2, index) => {
//     itemMenu2.addEventListener('click', () => {
//       activeTab2(index);
//     });
//   });
// }

// const tabMenu3 = document.querySelectorAll('.js-menu3 li')
// const tabContent3 = document.querySelectorAll('.teste3')

// if (tabMenu3.length && tabContent3.length) {
//   tabContent3[0].classList.add('ativado2')

//   function activeTab3(index) {
//     tabContent3.forEach((div) => {
//       div.classList.remove('ativado2')
//     })
//     tabContent3[index].classList.add('ativado2')
//   }

//   tabMenu3.forEach((itemMenu3, index) => {
//     itemMenu3.addEventListener('click', () => {
//       activeTab3(index)
//     })
//   })
// }

// const tabMenu4 = document.querySelectorAll('.js-menu4 li');
// const tabContent4 = document.querySelectorAll('.teste4');

// if (tabMenu4.length && tabContent4.length) {
//   tabContent4[0].classList.add('ativado3');

//   function activeTab4(index) {
//     tabContent4.forEach((div) => {
//       div.classList.remove('ativado3');
//     });
//     tabContent4[index].classList.add('ativado3');
//   }

//   tabMenu4.forEach((itemMenu4, index) => {
//     itemMenu4.addEventListener('click', () => {
//       activeTab4(index);
//     });
//   });
// }
