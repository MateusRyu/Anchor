# ⚓ Anchor - Controle de Proteção

O **Anchor** é um utilitário front-end simples projetado para evitar a perda de dados. Ele oferece uma interface limpa para ativar ou desativar a proteção contra o fechamento acidental do navegador.

## 🚀 Funcionalidades
- **Trava de Segurança:** Quando ativada, impede que o navegador seja fechado sem um aviso prévio.
- **Interface Responsiva:** Design moderno estilo "Card", adaptável a dispositivos móveis e desktops.
- **Feedback Visual:** Status em tempo real indicando se a proteção está ativa (verde) ou desativada (vermelho).

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização com variáveis CSS e animações suaves de transição no switch.
- **JavaScript (Vanilla):** Manipulação do DOM e interceptação do evento `beforeunload`.

## 📦 Como usar
1. Clone este repositório ou copie o código do arquivo `.html`.
2. Abra o arquivo em qualquer navegador moderno.
3. Clique no **Switch** para ativar a "Proteção ATIVADA".
4. Tente fechar a aba ou atualizar a página (`F5`) para ver o alerta de segurança em ação.

## 💡 Por que usar?
Muitas vezes perdemos horas de trabalho em formulários, editores de texto online ou dashboards porque fechamos o navegador por engano. O **Anchor** serve como um "seguro" manual para esses momentos críticos.

## 🎨 Personalização
Você pode alterar as cores principais modificando as variáveis no `:root` do CSS:
```css
:root {
    --primary: #1e3a8a; /* Cor principal do switch e ícone */
    --bg: #f1f5f9;      /* Cor de fundo da página */
}
```

---

Criado com ❤️ para salvar seu progresso na web.
