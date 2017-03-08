"use strict";

console.log("app.js linked");

let Tools = require("./weapons.js"),
  Combatants = require("./player.js"),
  SpellBook = require("./spells.js"),
  GuildHall = require('./classes.js'),
  Enemies = require('./enemies.js');

var playerName, classChoosen, weaponChoosen;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");

    var moveAlong = false;

    playerName = $("#player-name").val();

    /* start loop */
    switch (nextCard) {

      case "card--class":
        moveAlong = ($("#player-name").val() !== "");

        $('.class__link').click(function() {
          // Set the class here
          classChoosen = $(this).attr('id');
          console.log('card--class: You choose the class: ', classChoosen);

        });

        break;

      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");

        $('.weapon__link').click(function() {
          // Set the weapon here
          weaponChoosen = $(this).attr('id');
          console.log('card--weapon: You choose the weapon: ', weaponChoosen);
        });

        break;

      case "card--battleground":

        moveAlong = ($("#player-name").val() !== "");
        
        console.log('Class Choosen: ', classChoosen, 'and Weapon Choosen: ', weaponChoosen);
        console.log('Now calling startGame()');

        startGame(); /* - this should be called outside the loop... but for now...
                        we should switch out of this and go to a new portion of the page */

        break;
    } // end switch loop

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

  }); /* end cardlink  */

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

}); /* end doc on */

function startGame () {

      console.log('startGame called. Class Picked Is: ', classChoosen);
      console.log('startGame called. Weapon Picked Is: ', weaponChoosen);

      var newPlayer = new Combatants.Human();
          newPlayer.playerName = playerName;
// old code gone - for git
      if (classChoosen === 'Warrior') {
        newPlayer.class = new GuildHall.Warrior();
      } else if  (classChoosen === 'Valkyrie') {
        newPlayer.class = new GuildHall.Valkyrie();
      } else if  (classChoosen === 'Berserker') {
        newPlayer.class = new GuildHall.Berserker();
      } else if  (classChoosen === 'Monk') {
        newPlayer.class = new GuildHall.Monk();
      } else if  (classChoosen === 'Wizard') {
        newPlayer.class = new GuildHall.Wizard();
      } else if  (classChoosen === 'Sorcerer') {
        newPlayer.class = new GuildHall.Sorcerer();
      } else if  (classChoosen === 'Conjurer') {
        newPlayer.class = new GuildHall.Conjurer();
      } else if  (classChoosen === 'Thief') {
        newPlayer.class = new GuildHall.Thief();
      } else if  (classChoosen === 'Ninja') {
        newPlayer.class = new GuildHall.Ninja();
      } else if  (classChoosen === 'Assassin') {
        newPlayer.class = new GuildHall.Assassin();
      } else {
        console.log('no class??? ');
        // we don't want to get null errors...
        newPlayer.class = 'noClass';
      }

      console.log('startGame. Player Now has Class Attached: ', newPlayer);

      if (weaponChoosen === 'Dagger' ) {
        newPlayer.setWeapon(new Tools.Dagger());
      } else if (weaponChoosen === 'BroadSword') {
        newPlayer.setWeapon(new Tools.BroadSword());
      } else if (weaponChoosen === 'WarAxe') {
        newPlayer.setWeapon(new Tools.WarAxe());
      } else {
        console.log('No Weapon??? :( ');
        newPlayer.weapon = 'noWeapon';
      }

      console.log('startGame. Player Now has Weapon Attached: ', newPlayer);

      console.log('now what do we do? ');

      console.log( newPlayer.toString() );

} /* end start game */

function showPlayerStats() {
  var outputPlayerStats = document.getElementsByClassName("playerStats");
}

function showEnemyStats() {
  var outputEnemyStats = document.getElementsByClassName("enemyStats");
}

/*
  Test code to generate a human player and an orc player
 */
// var orc = new Enemies.Orc();
// orc.generateClass();
// orc.setWeapon(new Tools.BroadSword());
// console.log(orc.toString());

// var warrior = new Combatants.Human();
// warrior.setWeapon(new Tools.WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());
/*
  Test code to generate a spell
 */
// var spell = new SpellBook.Sphere();
// console.log("spell: ", spell.toString());
// 