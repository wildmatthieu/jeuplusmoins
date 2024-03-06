const playerName = prompt("quel est votre prenom ?");

const numberToGuess = Math.ceil(Math.random() * 100);


let playerNumber = null;

// tant que le nombre du joueur n'est pas égal au nombre à deviner
while(playerNumber !== numberToGuess)
{
    playerNumber = parseInt(prompt("Devinez le nombre"));

    // si le joueur devine le bon nombre
    if(playerNumber === numberToGuess)
    {
        // alors il a gagné
        alert('Bravo ' + playerName + ' !')
    } 
    // sinon si le nombre du joueur est trop petit
    else if(playerNumber < numberToGuess)
    {
        // alors on lui dit que le nombre a deviner est plus grand
        alert('Le nombre a deviner est plus grand !');
    }
    else
    {
        alert('Le nombre a deviner est plus petit !');
    }
}


