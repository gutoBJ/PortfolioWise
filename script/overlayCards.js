export function overlayCards() {
    const cards = document.querySelectorAll(".card-projetos");
    const modal = document.getElementById("modalProjeto");

    const modalDescricao = modal.querySelector(".modal-descricao");
    const modalStack = modal.querySelector(".modal-stack");
    const modalDemo = modal.querySelector(".modal-demo");
    const modalRepo = modal.querySelector(".modal-repo");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            // Desktop continua usando hover
            if (window.innerWidth >= 1024) return;

            const overlay = card.querySelector(".overlay-projeto");

            // Descrição
            modalDescricao.innerText =
                overlay.querySelector(".container-descricao p").innerText;

            // Stack
            modalStack.innerHTML =
                overlay.querySelector(".stack-projeto").innerHTML;

            // Links
            modalDemo.href =
                overlay.querySelector(".acoes-projeto .btn").href;

            modalRepo.href =
                overlay.querySelector(".acoes-projeto .links-btn").href;

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Fechar modal
    modal.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("modal-projeto") ||
            e.target.closest(".modal-close")
        ) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}