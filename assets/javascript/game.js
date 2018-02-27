/* The setGame Function should span a box on the left with your chosen character, a box in the middle as the "Battleground" and a box/button on the right that contains the available enemies.*/

function setGame(x) {
    var element = document.getElementById("chooseChamp1");
    element.outerHTML = "";
    delete element;
    var element = document.getElementById("chooseChamp2");
}  
function setChampPic(x) {
    if (x === 1) {
      $("#yourChamp").html('<div class="pt-3 inline bg-dark cleric"><img src="assets/images/cleric.png" alt="Human Cleric" class="mb-2" style="height:200px;"><br><h5 class="p-1 text-light border border-light rounded">Pablo the Priest</h5></div>');
    
    } else if (x === 2) {
      $("#yourChamp").html('<div class="pt-3 inline bg-dark mage"><img src="assets/images/girl_mage.png" alt="Human Mage" class="mb-2" style="height:200px;"><br><h5 class="p-1 offset-1 text-info border border-info rounded">Maddie the Mage</h5></div>');
      
    } else if (x === 3) {
      $("#yourChamp").html('<div class="pt-3 inline bg-dark rifleman"><img src="assets/images/rifleman.png" alt="Dwarven Rifleman" class="mb-2" style="height:200px;"><br><h5 class="p-1 text-warning border border-warning rounded">Randy the Rifleman</h5></div>');
      
    } else if (x === 4) {
       $("#yourChamp").html('<div  class="pt-3 inline hamiBox bg-dark"> <img src="assets/images/hamilton.gif" alt="Hamilton the Destroyer" class="hami"><br><h5 class="p-1 text-danger border border-danger rounded">Hamilton the Harasser</h5></div>');
      
    } 
}

function chooseFoe(x) {
  if (x === 1) {
    $("#battleground").html('');
    $("#").fadeOut();
  } else if (x === 2) {
    $("#battleground").html('');
    $("#").fadeOut();
  } else if (x === 3) {
    $("#battleground").html('');
    $("#").fadeOut();
  } else if (x === 4) {
    $("#battleground").html('');
    $("#").fadeOut();
  } 
}

$("#fightScreen").hide();

$("#resetMe").click(function() {
  location.reload();
});

$(".characterSelect").click(function() {
  $("#selectionScreen").fadeOut(500, function() { $("#fightScreen").fadeIn(); })
});