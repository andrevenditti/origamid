const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

/* Verificação pra ver se existe o conteúdo, senão existir, o código nao sera executado */
if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  /*
    Essa é a navegação por tabs, linkando o a lista de fotos dos animais com a descriçao
    deles que esta ao lado. Fazendo isso nós conseguimos ativar a funcao da classe ativo
    para a seção escolhida e as outras somem
  */
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
