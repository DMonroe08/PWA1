/**
 * Created by DanielleMonroe on 4/17/14.
 */
//if '#' is placed before the 'h4' rounds do not appear over the fight button and fighters numbers will go below 1
// if '#' is not placed before the 'h4' fighters' health never reaches under 1


(function(){
    console.log(" ** Fight **");

    //fighter's info
    var fighterOne = document.querySelector("#kratos").querySelector("p");
    var fighterTwo = document.querySelector("#kabal").querySelector("p");
    var roundInfo = document.querySelector("h4");
    var outcome = document.querySelector("#blah").querySelector("p");
    var button = document.getElementById("fight_btn");
    console.log();

 //commenting out old code
    //Player damage
    //var fighter1Damage = 25;
    //var fighter2Damage = 25;

    //player health
    //var fighterOneHealth = 175;
    //var fighterTwoHealth = 175;

    //var round = 0;


    button.addEventListener("click", fight, false);

    //making array for fighters
    var fighters = [
        {
            name: "Sub Zero",
            damage: 25,
            health: 100
        },
        {
            name: "Scorpio",
            damage: 25,
            health: 100
        }];
    var round = 1;


    //initializes DOM innerHTML text
    roundInfo.innerHTML = "Click to Start Fight";
    fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;
    outcome.innerHTML = "Lets Fight!!";

    //function fight(){
        //console.log("in the fight function");

        //alert(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

        //for (var i=0; i<10; i++){

            //random formula is - Math.floor(math.random() * (max - min) + min);
            //var minDamage1 = fighter1Damage * .6;
            //var minDamage2 = fighter2Damage * .6;
            //var f1 = Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
            //var f2 = Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //fighterOneHealth-=f1;
            //fighterTwoHealth-=f2;

            //console.log(fighterOneHealth);
            //console.log(fighterTwoHealth);

           // console.log(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

           // var results = winnerCheck();
           // console.log(results);
            //if(results === "no winner"){
              //  round++;
                //alert(fighterOneName+":"+fighterOneHealth+" *ROUND "+round+" OVER* "+fighterTwoName+":"+fighterTwoHealth);
           // }else{
               // alert(results);
                //break;
           // };


       // };

   // };


    //New fight function to work in the inner HTML
    function fight(e){
        fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;

            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

            fighters[0].health -= f1;
            fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        var result  = winnerCheck(); //not sure if this belongs here
        console.log(result);

        roundInfo.innerHTML = "ROUND" + round + "complete";
        round++;
        if(result === "no winner")
        {
            fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;
            fighterTwo.innterHTML = fighters[1].name + ":" + fighters[1].health;

        }else{
            fighterOne.innterHTML = result;
            fighterTwo.innterHTML = result;
            button.removeEventListener("click", fight, false);
            document.querySelector('.buttonblue').innerHTML = 'DONE!';

        }
        e.preventDefault();
        return false;







        function winnerCheck(){
            //console.log("in winnerCheck FN");

            var result="no winner";
            if(fighters[0].health <1 && fighters[1].health <1){
            result = "You Both Die";
            } else if(fighters[0].health <1){
            result = fighters[1].name +"WINS!!!"
            } else if(fighters[1].health <1){
            result = fighters[0].name +"WINS!!!"

            };
            return result;

        };
    //console.log("program starts");
    //fight();
    };
    outcome.innerHTML(fight);
})();

