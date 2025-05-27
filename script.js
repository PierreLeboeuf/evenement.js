
// // ---------------------------------------------
// Exercice 1 : Réagir à un clic sur un bouton
// // ---------------------------------------------
  let bouton = document.getElementById("monBouton");

  bouton.addEventListener("click", function() {
    alert("Le bouton a été cliqué.");
  });

  // // ---------------------------------------------
// Exercice 2 : Modifier le contenu d’un paragraphe au clic
// // ---------------------------------------------

let texte = document.getElementById("texte");
let boutonDeux = document.querySelector("#modifierTexte");

boutonDeux.addEventListener("click",function(){
texte.textContent = "Le texte a été modifié avec succès.";
})

// // ---------------------------------------------
// Exercice 3 : Changer la couleur d’une zone avec la souris
// // ---------------------------------------------

let zone = document.querySelector("#zone");

zone.addEventListener("mouseover", function(){
  zone.style.backgroundColor = "lightblue";
})

zone.addEventListener("mouseout", function(){
  zone.style.backgroundColor = "white";
})

// // ---------------------------------------------
// Exercice 4 : Compter les clics d’un bouton
// // ---------------------------------------------

let boutonTrois = document.querySelector("#compter");
let resultat = document.querySelector("#resultat");
let table = [];

boutonTrois.addEventListener("click", function(){
    let click = table.length +1;
    table.push(click);
    resultat.textContent = `Vous avez cliqué ${click} fois.`;
   
})

// // ---------------------------------------------
// Exercice 5 : Afficher la valeur d’un champ texte
// // ---------------------------------------------

let boutonQuatre = document.querySelector("#afficherNom");
let nom = document.querySelector("#champNom");
let message = document.querySelector("#message");

boutonQuatre.addEventListener("click", function(){
  message.textContent = `Bonjour, ${nom.value}`;
})

// // ---------------------------------------------
// Exercice 6 : Activer et désactiver un champ
// // ---------------------------------------------

let boutonCinq = document.querySelector("#toggleChamp");
let text = document.querySelector("#champTexte");

boutonCinq.addEventListener("click", function(){
  if (text.disabled){
    text.disabled = false;
  } else {
    text.disabled = true;
  }
  // text.disabled = !text.disabled; // Inverse l'état désactivé
})

// // ---------------------------------------------
// Exercice 7 : Ajouter dynamiquement un élément à une liste
// // ---------------------------------------------

let boutonSix = document.querySelector("#ajouter");
let list = document.querySelector("#listeElements");

boutonSix.addEventListener("click", function(){
  let element = document.createElement("li");
  element.textContent = "Nouvel élément ajouté";

  list.append(element);
})

// // ---------------------------------------------
// Exercice 8 : Supprimer l’élément cliqué dans une liste
// // ---------------------------------------------

let liste = document.querySelectorAll(".cliquable");

for(let li of liste){
  li.addEventListener("click",function(){
    li.remove();
  })
}


// // ---------------------------------------------
// Exercice 9 : Détecter la touche Entrée dans un champ
// // ---------------------------------------------

let clavier = document.querySelector("#champClavier");
let p = document.querySelector("#messageClavier");

clavier.addEventListener("keydown", function(event){
  
  
  if (event.key === "Enter"){
    console.log(event);
  p.textContent = `Vous avez appuyé sur la touche ${event.key} `
  }
})

// // ---------------------------------------------
// Exercice 10 : Filtrer dynamiquement une liste à partir d’un champ
// // ---------------------------------------------

let animal = document.querySelectorAll(".animal");
let filtre = document.querySelector("#filtreAnimaux");


filtre.addEventListener("keyup", function(){

  for(let lettre of animal){
// console.log(lettre);

    let lettreText = lettre.textContent
// console.log(lettreText);

    if (lettreText.includes(filtre.value)){
      lettre.style.display = "";
    }else{
      lettre.style.display ="none";
    }
 
  }  
})  
