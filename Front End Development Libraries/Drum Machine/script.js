const playSound = (elem, evt) => {
    let audio = document.getElementById(elem);
    audio.play();
    document.getElementById(`drum_${elem}`).setAttribute('class', 'drum-pad drum-active');
    document.getElementById('display').innerHTML = document.getElementById(`drum_${elem}`).getAttribute('data-key');
    setTimeout(() => {
        document.getElementById(`drum_${elem}`).setAttribute('class', 'drum-pad');
    }, 200);
  }

let drums = document.querySelectorAll('.drum-pad');
drums.forEach(drum => drum.addEventListener('click', (elem, evt) => playSound));

document.onkeyup = (evt) => {
    let key = evt.key.toUpperCase();
    if (key === 'Q' || key === 'W' || key === 'E' || key === 'A' || key === 'S' || key === 'D' || key === 'Z' || key === 'X' || key === 'C') {
        playSound(key);
    }
}