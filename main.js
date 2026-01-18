// Délaration ds variables
const darkMode = document.querySelector("#switcher")      // Checkbox permettant d'activer/désactiver le mode sombre
const page = document.body                                // Élément body de la page pour appliquer les styles
const icon = document.getElementById("dark-mode-image")   // Image représentant l'icône jour/nuit
const mode = sessionStorage.getItem("mode")               // Récupération du mode enregistré dans la session

// Au chargement du script, vérifie si le mode sombre était déjà activé
if(mode === "enable"){
    darkMode.checked = true               // Coche l'interrupteur
    page.classList.add("dark")            // Applique la classe CSS du mode sombre
    icon.src = "images/moon.png"          // Affiche l'icône lune
}

// Écouteur d'événement sur le changement d'état du switch
darkMode.addEventListener("change", function(){

    // Si l'utilisateur active le mode sombre
    if(darkMode.checked){
        page.classList.add("dark")                // Ajoute la classe dark au body
        icon.src = "images/moon.png"              // Change l'icône en lune
        sessionStorage.setItem("mode", "enable")  // Sauvegarde l'état dans la session
    }
    // Si l'utilisateur désactive le mode sombre
    else{
        page.classList.remove("dark")             // Retire la classe dark
        icon.src = "images/sun.png"               // Change l'icône en soleil
        sessionStorage.setItem("mode", "disable") // Sauvegarde l'état dans la session
    }

})

