function countDown() {
    let countDown = 0;
    while (countDown < 11) {
        console.log(countDown++);
    }
}
countDown(11);

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
      
      names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
    }
    return(names); 
  }