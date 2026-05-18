const toggle = document.getElementById('protection-toggle');
const statusContainer = document.getElementById('status-container');
const favicons = document.querySelectorAll("link[rel*='icon']");

function preventClose(e) {
    if (toggle.checked) {
        e.preventDefault();
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
        statusContainer.className = "on";
        changeFavicon('protected')
    } else {
        statusContainer.className = "off";
        changeFavicon('unprotected')
    }
});