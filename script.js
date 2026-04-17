const message = `halo kak, i think it'll kinda shocking you.. that ihacoy.\nsince we being moots and we communicate intensely i got attraction towards you...\n\ni adore your sweet smile, those pretty eyes, the way you giggled, your voice, your vulnerable self you've been hide perfectly, the warmest soul. I adore everything about you, and fyi i got no interest to other people, kinda pathetic but after that i realise i really like you... i often think abt what's your activity and i want became a better person because of you, you're my muse, kak.\n\nI'm expecting nothing kok, kak\n\nThank you for being the reason i became happy and smile while we talk even though just for a while, idk after this your gaze still same to me, but in this once life i just wanted someone someone that i love know that i love her`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 700);
}