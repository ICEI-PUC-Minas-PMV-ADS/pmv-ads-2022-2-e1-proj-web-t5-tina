# Programação de Funcionalidades
  As telas desenvolvidas para cada funcionalidade do sistema são exibidas neste tópico. O endereço pode ser acessado no seguitne link: (link)

Nesta seção são apresentadas as funcionalidades do sistema.

## Alteração de design do site (RF-011)
### Desenvolvedor(a): Juliana Dutra

A tela de temas permite que o usuário escolha um tema de desing específico para aplicar em todo o site durante o uso do sistema, permitindo que este tema se mantenha durante todo o acesso ao site.

<img src="img/temas-juliana.png">

### Requisitos atendidos

RF-11 - O site deve possibilitar edições de design como mudanças de cores, plano de fundo e adesivos.

### Artefatos da funcionalidade

- template-cores-tina.html.html
- template-cores-tina.js
- template-cores-tina.css
- tema-dark.css
- tema-padrao.css
- logo.png
- favicon.ico

```js
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
```

### Instruções de acesso

A Tela perfil é acessada ao usuário acessar o botão ferramentas no menu lateral.
