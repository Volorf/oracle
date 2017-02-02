class ChangeSwitcher {
    constructor (switcher) {
      this.state = false
      this.switcher = switcher
    }
    change () {
      this.state = !(this.state)
      this.changeUI(this.state)
    }
    changeUI (state) {
      if (state == true) {
        this.switcher.addClass("bgOn")
        this.switcher.children().addClass("circleOn")
        this.state = true
      } else {
        this.switcher.removeClass("bgOn")
        this.switcher.children().removeClass("circleOn")
        this.state = false
      }     
    }
    currentState () {
      return this.state
    }
 } 

$(document).ready(function() {
  
  var switcherOne = $(".switcherOne .control")
  var switcherTwo = $(".switcherTwo .control")
  var switcherThree = $(".switcherThree .control")
  
  var changeSwitcherOne = new ChangeSwitcher(switcherOne)
  var changeSwitcherTwo = new ChangeSwitcher(switcherTwo)
  var changeSwitcherThree = new ChangeSwitcher(switcherThree)
  
  switcherOne.on("click", function() {
    changeSwitcherOne.change() 
    if (changeSwitcherTwo.currentState() == true && changeSwitcherThree.currentState() == true ) {
      changeSwitcherTwo.changeUI(false)
      changeSwitcherThree.changeUI(false)
    }
  })
  
  switcherTwo.on("click", function() {
    changeSwitcherTwo.change()
    if (changeSwitcherOne.currentState() == true && changeSwitcherThree.currentState() == true) {
      changeSwitcherOne.changeUI(false)
      changeSwitcherThree.changeUI(false)
    }
  })
  
  switcherThree.on("click", function() {
    changeSwitcherThree.change()
    if (changeSwitcherOne.currentState() == true && changeSwitcherTwo.currentState() == true) {
        changeSwitcherOne.changeUI(false)
        changeSwitcherTwo.changeUI(false)
    }
  }) 
  
})