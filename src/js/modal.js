const portfolioContainer = document.querySelector(".portfolio-items")

portfolioContainer.addEventListener("click", event => {
    event.preventDefault()

    const modalLinkClick = event.target.closest(".portfolio-link")

    if (! modalLinkClick) {
        return
    }

    else {

        const modal = modalLinkClick.parentNode.nextElementSibling
        const closeButton = modal.querySelector(".modal-close")
        
        let modalOpen = _ => {
            modal.classList.add("is-open")
            modal.style.animation = "modalFadeIn 1s forwards"
            document.body.style.overflowY = "hidden"
        }

        modalOpen()

        // z opcijo 2 ne rabimo te funkcije
        // let modalClose = _ => {
        //     modal.classList.remove("is-open")
            
        //     modal.removeEventListener("animationend", modalClose)
        //     document.body.style.overflowY = "scroll"
        // }

        closeButton.addEventListener("click", _ => {
            modal.style.animation = "modalFadeOut 1s forwards"
            // modal.addEventListener("animationend", modalClose)
            // opcija 2:
            setTimeout(_ => {
                modal.classList.remove('is-open')
                document.body.style.overflowY = "scroll"
              }, 500)
            
        })

        document.addEventListener("keydown", e => {
            if (e.key === "Escape") {
                modal.style.animation = "modalFadeOut 1s forwards"
                // modal.addEventListener("animationend", modalClose)
                // opcija 2:
                setTimeout(_ => {
                    modal.classList.remove('is-open')
                    document.body.style.overflowY = "scroll"
                  }, 500)
            }
        })
    }
})
