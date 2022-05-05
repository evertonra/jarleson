const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.conteudo');

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

//Selecionar curso
const links = document.querySelectorAll('.dobra-3-categorias ul li');
function ativar(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove('selecionado');
  });
  event.currentTarget.classList.add('selecionado');
}

links.forEach((link) => {
  link.addEventListener('click', ativar);
});

//ativa a navegação, remove classe ativo e puxa os cursos q foram selecionados
links.forEach((item, index) => {
  item.addEventListener('click', function () {
    item.classList.add('selecionado');
  });
});
