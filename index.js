


var qutes=[
     
 "<p>“Be yourself; everyone else is already taken.”</p><p>― Oscar Wilde ―</p> " ,
 "<p>“A room without books is like a body without a soul.”</p><p>― Marcus Tullius Cicero―</p>",
 "<p>“Be the change that you wish to see in the world.”</p><p>― Mahatma Gandhi―</p>",
 "<p>“If you tell the truth, you don't have to remember anything.”</p><p>― Mark Twain―</p>",
 "<p>“To live is the rarest thing in the world. Most people exist, that is all.”</p><p>― Oscar Wilde―</p>",
 "<p>“Always forgive your enemies; nothing annoys them so much.”</p><p>― Oscar Wilde―</p>",
 "<p>“I have not failed. I've just found 10,000 ways that won't work.”</p><p>― Thomas A. Edison―</p>",
 
 
]

function newQute(){

 document.getElementById("qute").innerHTML= qutes[Math.trunc(Math.random()*qutes.length)] 


}
