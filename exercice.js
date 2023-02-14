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

function triage(putYourArray) {
  //nombre des éléments dans le tableau
  let len = putYourArray.length;       
  let tmp, i, j;                  
  
  // analyse du duo 
  for(i = 1; i < len; i++) {
      // i sera la valeur +1 à droite de la valeur analysée en cours
    //stocker la valeur actuelle 
    tmp = putYourArray[i] // la valeur de l'index
    j = i - 1 // j est la valeur qui sera analysée en cours
    while (j >= 0 && putYourArray[j] > tmp) {
      // déplacer le nombre
      putYourArray[j+1] = putYourArray[j]
      j--
    }
    //Insère la valeur temporaire à la position 
    //correcte dans la partie triée.
    putYourArray[j+1] = tmp
  }
  return putYourArray
}

let ReturnOfTheArray = triage(newHope);
console.table(ReturnOfTheArray)

