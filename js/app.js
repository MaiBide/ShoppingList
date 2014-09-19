  	
/*Author: Mai, Bide
  Date: 9/5/14
  subject: javascript for Thinful Shopping List project

  Reminders: 1)Add erase all: Sure? Yes or No  2) 
*/

  /*-------INITIALIZATION-------*/
/*---Global Variables ---*/
var itemNum = 0;
$(".clearList").hide();
var my_text0="Your List is empty."

/*Start javascript execution after DOM loaded*/
$(document).ready(function(){
	
  /*------SHOPPING-LIST CONTROL CENTER--------*/
  //$("#tab1 section").show();//Make sure this tab is displayed first 
  $(".inputButton").click (function(){//H1: frm "http://bacalj.github.io/shop2/"
    populateShoppingList();
  });
  $('.inputItem').keypress(function(event){
 
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      populateShoppingList();  
  }
 
});

  $('ul').on('click', '.del', function() {
    if(itemNum != 0){$(this).closest('li').remove();}
    var el = $("ul").text();
    if ((el === undefined || el === "")){resetList();}
//    else{return 0;}
//    else{resetList()};
  });
  
  $('ul').on('click', '.xOutUnDo', function() {
    //if(itemNum != 0){$(this).closest('p').toggleClass("crossOut");}
    if(itemNum != 0){$(this).siblings('p').toggleClass("crossOut");}

  });/**/

  $('div').on('click', '.clearList', function() {
    //alert("Are you really sure?!")
    clearList();
  });
});

  /*-------NAMED FUNCTIONS-------*/
  var clearList= function() {
    if (window.confirm("Are you SURE you wan't to CLEAR ENTIRE LIST?!\
                   If yes, press OK.") == true) {
        resetList();
    }
  }
  var resetList= function() {
    itemNum = 0;
    $(".clearList").hide();
    $(".inputItem").attr("placeholder","Type the name of the health product here.");
    var listObj = getItemElement(my_text0);
    $(".allListItems").html(listObj);
//  $(".allListItems").empty();
    
  }
  var getItemElement= function(my_text) {
    var listObj1 = "<span class=\"itemNum\">"+itemNum+"</span>";
    var listObj2 = "<p class=\"itemName\">"+my_text+"</p>";
    var listObj3 = "<button class=\"xOutUnDo\">Done!/Undo!</button>";
    var listObj4 = "<button class=\"del\">Don't need</button>";
    var listObj = '<li class="itemList">'+listObj1+'\
                  '+listObj2+''+listObj4+''+listObj3+'</li>';
    return listObj;
  }
  var populateShoppingList= function() {
    itemNum++;
    var my_text = $(".inputItem").val();
    //var listObj0 = "li class=\"itemList\"";
    var listObj = getItemElement(my_text);
    if (my_text!=""){
      if(itemNum==1){
          $(".allListItems").html(listObj);
          $(".clearList").show();
      }
      else{
          $(".allListItems").append(listObj);
      }
      $(".inputItem").attr("placeholder","Next item");
      $(".inputItem").val("");
    }
    else{alert("To and a product, first type the name.")}
  }
  


