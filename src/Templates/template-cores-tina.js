window.onload=function(){
function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "tema-padrao";

    function ativarTema(themeName) {
        themeStylesheetLink.setAttribute("href", `temas/${themeName}.css`);
    }
    themeSelect.addEventListener("change", () => {
        ativarTema(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });

    ativarTema(currentTheme);
    themeSelect.value = currentTheme;

}

initThemeSelector();
}

// window.onload=function(){
//     function initexbicaoSelector() {
//         const exibicaoSelect = document.getElementById("exibicaoSelect");
//         const exibicaoStylesheetLink = document.getElementById("exibicaoStylesheetLink");
//         const currentExibicao = localStorage.getItem("exibicao") || "tema-letras";
    
//         function ativarExibicao(exibicaoName) {
//             themeStylesheetLink.setAttribute("href", `temas/${exibicaoName}.css`);
//         }
//         exibicaoSelect.addEventListener("change", () => {
//             ativarExibicao(exibicaoSelect.value);
//             localStorage.setItem("theme", texibicaoSelect.value);
//         });
    
//         ativarExibicao(currentExibicao);
//         exibicaoSelect.value = currentExibicao;
    
//     }
    
//     initexbicaoSelector();
//     }