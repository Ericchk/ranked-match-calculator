let heroName = "Ericchk"

function winCalculator(victory, defeat){ 
    
    let balanceVictory = victory - defeat;

    let rank;

    if (balanceVictory < 10 ){
        rank = "Ferro";
    }else if(balanceVictory >= 10 && balanceVictory <= 19) {
        rank = "Bronze";
    }else if(balanceVictory >= 20 && balanceVictory <= 29) {
        rank = "Prata";
    }else if(balanceVictory >= 30 && balanceVictory <= 39) {
        rank = "Ouro";
    }else if(balanceVictory >= 40 && balanceVictory <= 49) {
        rank = "Platina";
    }else if(balanceVictory >= 50 && balanceVictory <= 59) {
        rank = "Diamante";
    }else if(balanceVictory >= 60 && balanceVictory <= 69) {
        rank = "Mestre";
    }else if(balanceVictory >= 70 && balanceVictory <= 79) {
        rank = "Grão-Mestre";
    }else if(balanceVictory >= 80 && balanceVictory <= 89) {
        rank = "Ascendente";
    }else if(balanceVictory >= 90 && balanceVictory <= 99) {
        rank = "Legend";
    }else if(balanceVictory >= 100 && balanceVictory <= 149) {
        rank = "Imortal";
    }else if(balanceVictory >= 150) {
        rank = "Radiante";
    }

    return "O Herói " + heroName + " tem de saldo de " + balanceVictory + " está no nível de " + rank

}

console.log(winCalculator(143, 26))


