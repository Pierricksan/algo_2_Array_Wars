/* 
Sans aucune biblioCreer en JS 2 tableaux que vous allez remplir avec 20 nombres/chiffres (chacun)
Votre programme va creer un 3eme tableau qui va stocker ces nombres dans l'ordre croissant.
afficher le nombre médian.
ajouter au moins une recursive.Tout cela doit etre dans un git et synchronisé avec githubVous devez avoir un certain nombre de commit que vous devez justifier.
__BONUS
vous afficherez les log du git sur une ligne
hash - date - message.
*/

// création deux tableaux
let lightSide = [20, 50, 23, 12,36];
let darkSide = [12, 16, 19, 90, 56];

// création d'un tableau à trier
let newHope = [];

function pushArray(fromArray, toArray) {
    for(i = 0 ; i < fromArray.length ; i++) {
        toArray.push(fromArray[i])
    }
    return toArray
}

let array1 = pushArray(lightSide, newHope);
let array2 = pushArray(darkSide, newHope)

console.log(`Tableau avant triage ${newHope}`);



