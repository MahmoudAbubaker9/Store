var userName = prompt('whats your name?')

function welcome(){
alert('Hello ' + userName + ' nice to meet you')
}
welcome()

var pass = prompt('did we offer HUAWEI phone. please answer with yes or NO')
var correct = 'no'

function ask1(){
while(pass !== correct ) {
pass = prompt('Wrong!! , try agin')
}
}
ask1()

var phone = prompt('Whats your favourite Phone samsung or iphone??') 

function picktype(){

while(phone !== 'iphone' && phone !== 'samsung'){
  phone = prompt('Please choose from the available options ')
}
}
picktype()
var counter = prompt('How many Phone do you want to see ?')

var pics = function() {
for( var y=1 ; y <= counter ; y++ ){
  if(phone === 'iphone'){
    document.write('<img src="https://www.blitzmicro.eu/11091-medium_default/AP-MGMP3QLA.jpg">'+ y )
  }else if(phone === 'samsung'){
    document.write('<img src="https://quickfixcentre.com/wp-content/uploads/2020/09/image.jpg">'+ y)
  }

}

<<<<<<< HEAD
}
pics()
let resultm = confirm('i hoepe that you like the store')
=======
let resultm = confirm('i hoepe that you like the store')
>>>>>>> 745785fa5369b43682146ae9a4f3402b1df90a0e
