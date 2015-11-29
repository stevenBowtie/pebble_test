var UI = require('ui');
//var Vibe = require('ui/vibe');
// Create a Card with title and subtitle
var mode='Kill';
var batt='24.8';

var loading_card = new UI.Card({
  title:'MenuTest',
  body: "Mode: "+mode+"\nBatt: "+batt
});

loading_card.show();

var menuItems=[
  {title:"Slow"},
  {title:"Fast"}
];

var speedMenu = new UI.Menu(
  {sections: [{
    title: "Speed",
    items: menuItems
  }]
  });

loading_card.on('click','select', function(e){
  speedMenu.show();
});

loading_card.on('click','up', function(e){
  mode="Fast";
  loading_card.body("Mode: "+mode+"\nBatt: "+batt);
  loading_card.show();
});

loading_card.on('click','down', function(e){
  mode="Slow";
  loading_card.body("Mode: "+mode+"\nBatt: "+batt);
  loading_card.show();
});

speedMenu.on('select', function(e){
  if(e.itemIndex===0){mode="Slow";}
  if(e.itemIndex===1){mode="Fast";}
  loading_card.body("Mode: "+mode+"\nBatt: "+batt);
  loading_card.show();
});