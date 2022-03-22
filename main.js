
const keys = document.querySelectorAll(".key")



function playNote(event) {
  let audioKeyCode = getKeyCode(event); 

  
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  
  const cantFoundAnyKey = !key
  if (cantFoundAnyKey){
      return;
  }

  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function getKeyCode(event){
    let KeyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard){
        KeyCode = event.KeyCode
    } else{
        KeyCode = event.target.dataset.key
    }
    return KeyCode
}





keys.forEach( function(Key){
Key.addEventListener("click", playNote)
})

window.addEventListener("keydown", playNote)