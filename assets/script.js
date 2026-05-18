const toggle = document.getElementById('protection-toggle');
const statusText = document.getElementById('status-text');
const favicons = document.querySelectorAll("link[rel*='icon']");

function preventClose(e) {
    if (toggle.checked) {
        e.preventDefault();
        e.returnValue = ''; // Exibe o alerta padrão do navegador
    }
}

function changeFavicon(newPath) {
    favicons.forEach(favicon => {
        const path = favicon.getAttribute('href');
        const pathSplited = path.split('/');
        let filename = pathSplited[pathSplited.length - 1]; 
        
        if (pathSplited[pathSplited.length - 2] != newPath) {
            favicon.href = `/assets/${newPath}/${filename}`;
        }
    });
}

window.addEventListener('beforeunload', preventClose);

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        statusText.innerText = "Proteção ATIVADA ✅";
        statusText.className = "on";
        changeFavicon('protected')
    } else {
        statusText.innerText = "Proteção Desativada ❌";
        statusText.className = "off";
        changeFavicon('unprotected')
    }
});