//Déclaration des variables
const form = document.querySelector("form")               // Le formulaire complet
const nameInput = document.querySelector("#name")         // Champ nom
const nameError = document.querySelector("#name-error")   // Message d'erreur du nom
const emailInput = document.querySelector("#mail")        // Champ email
const emailError = document.querySelector("#email-error") // Message d'erreur de l'email
const messageInput = document.querySelector("#message")   // Champ message
const messageError = document.querySelector("#message-error") // Message d'erreur du message
const sendSuccess = document.querySelector("#send-success")   // Message de succès

// Écoute de l'envoi du formulaire
form.addEventListener("submit", function(event){
    event.preventDefault()   // Empêche le rechargement de la page

    // Tableau regroupant les champs avec leurs messages d'erreur
    const array = [
        [nameInput, nameError],
        [emailInput, emailError],
        [messageInput, messageError]
    ]

    // Vérification si un champ est vide ou si le message est trop court
    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "" || messageInput.value.length < 10 ){
        
        // Gestion spécifique des erreurs du champ message
        if (messageInput.value == ""){
            messageError.innerHTML = "Le message ne doit pas être vide"
        }
        else if(messageInput.value.length < 10 && messageInput.value != ""){
            messageError.innerHTML = "Le message doit contenir au moins 10 caractères"
        }

        // Parcours de chaque champ pour afficher ou non les erreurs
        array.forEach((elements) => {

            // Si le champ est vide ou si le message est trop court
            if(elements[0].value === "" || (messageInput.value.length < 10 && elements[0] === messageInput)){
                elements[0].classList.add("input-error") // Ajoute le style d'erreur sur l'input
                elements[1].classList.add("show")        // Affiche le message d'erreur
                sendSuccess.classList.remove("show")     // Cache le message de succès
            }
            else{
                // Sinon on retire les erreurs
                elements[0].classList.remove("input-error")
                elements[1].classList.remove("show")
            }
        })

    }
    // Si tout est valide
    else{
        // Nettoyage de tous les messages d'erreur
        array.forEach((elements) =>{
            elements[0].classList.remove("input-error")
            elements[1].classList.remove("show")
        })

        // Affichage du message de succès
        sendSuccess.classList.add("show")

        // Affichage des valeurs dans la console
        console.log("nom: ", nameInput.value)
        console.log("adresse email: ", emailInput.value)
        console.log("message: ", messageInput.value)

        // Réinitialisation du formulaire
        form.reset()
    }
})