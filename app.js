var userName = prompt('whats your name?')

alert('Hello ' + userName + ' nice to meet you')

var pass = prompt('did we offer HUAWEI phone. please answer with yes or NO')
var correct = 'no'

while(pass !== correct ) {
pass = prompt('Wrong!! , try agin')
}

var phone = prompt('Whats your favourite Phone samsung or iphone??') 

while(phone !== 'iphone' && phone !== 'samsung'){
  phone = prompt('Please choose from the available options ')
}
var counter = prompt('How many Phone do you want to see ?')

for( var y=1 ; y <= counter ; y++ ){
  if(phone === 'iphone'){
    document.write('<img src="https://www.blitzmicro.eu/11091-medium_default/AP-MGMP3QLA.jpg">'+ y )
  }else if(phone === 'samsung'){
    document.write('<img src="https://quickfixcentre.com/wp-content/uploads/2020/09/image.jpg">'+ y)
  }


}

let resultm = confirm('i hoepe that you like the store')
