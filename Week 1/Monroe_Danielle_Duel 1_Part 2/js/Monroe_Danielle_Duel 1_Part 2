/**
 * Created by DanielleMonroe on 4/3/14.
 * Assignment: Goal 1, Duel 1
 */

//self-executing function
(function(){
   console.log("FIGHT!!!");

    //player name
    var fighterOneName = "Spiderman";
    var fighterTwoName = "Batman";

    //Player damage
    var fighter1Damage = 20;
    var fighter2Damage = 20;

    //player health
    var fighterOneHealth = 100;
    var fighterTwoHealth = 100;

    var round = 0;

    function fight(){
        console.log("in the fight function");

        alert(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

        for (var i=0; i<10; i++){

            //random formula is - Math.floor(math.random() * (max - min) + min);
            var minDamage1 = fightert1Damage * .5;
            var minDamage2 = fighter2Damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            fighterOneHealth-=f1;
            fighterTwoHealth-=f2;

            //console.log(fighterOneHealth);
            //console.log(fighterTwoHealth);

            console.log(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

            var results = winnerCheck();
            console.log(results);
            if(results === "no winner"){
                round++;
                alert(fighterOneName+":"+fighterOneHealth+" *ROUND "+round+" OVER* "+fighterTwoName+":"+fighterTwoHealth);
            }else{
                alert(results);
                break;
            };


        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";
        if(fighterOneHealth<1 && fighterTwoHealth<1){
            result = "You Both Die";
        } else if(fighterOneHealth<1){
            result = fighterTwoName+"WINS!!!"
        } else if(fighterTwoHealth<1){
            result = fighterOneName+"WINS!!!"

        };
        return result;

    };

    console.log("program starts");
    fight();
})();

