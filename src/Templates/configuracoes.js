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