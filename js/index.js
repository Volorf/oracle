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
    removeTremor()
    if (changeSwitcherTwo.currentState() == true && changeSwitcherThree.currentState() == true ) {
      changeSwitcherTwo.changeUI(false)
      changeSwitcherThree.changeUI(false)
      addTremor()
    }
  })
  
  switcherTwo.on("click", function() {
    changeSwitcherTwo.change()
    removeTremor()
    if (changeSwitcherOne.currentState() == true && changeSwitcherThree.currentState() == true) {
      changeSwitcherOne.changeUI(false)
      changeSwitcherThree.changeUI(false)
      addTremor()
    }
  })
  
  switcherThree.on("click", function() {
    changeSwitcherThree.change()
    removeTremor()
    if (changeSwitcherOne.currentState() == true && changeSwitcherTwo.currentState() == true) {
        changeSwitcherOne.changeUI(false)
        changeSwitcherTwo.changeUI(false)
        addTremor()
    }
  }) 
  
  function addTremor() {
    $(".container").addClass("windowTremor")
  }
  
  function removeTremor() {
    $(".container").removeClass("windowTremor")
  }
  
})