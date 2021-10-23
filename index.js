var numberOfDrumButtons = document.querySelectorAll('.drum').length;

function playSound(code) {
    switch (code) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}

(function (plugin) {

	let installPromptEvent;

	if (plugin.installprompt.mode === 'normal') {
		return;
	}

	window.addEventListener('beforeinstallprompt', (event) => {

		// Prevent Chrome <= 67 from automatically showing the prompt
		event.preventDefault();
		installPromptEvent = event;

		if (plugin.installprompt.mode === 'trigger') {

			/**
			 * Installable on click
			 */

			const $elements = document.querySelectorAll(plugin.installprompt.onclick);
			let i, ii;

			for (i = 0; i < $elements.length; ++i) {
				$elements[i].classList.add('installable-active');
				$elements[i].onclick = function () {
					if (this.classList.contains('installable-active')) {
						installPromptEvent.prompt();
						installPromptEvent.userChoice.then((choice) => {
							if (choice.outcome === 'accepted') {
								// User accepted the A2HS prompt
							} else {
								// User dismissed the A2HS prompt
							}

							for (ii = 0; ii < $elements.length; ++ii) {
								$elements[ii].classList.remove('installable-active');
							}

							installPromptEvent = null;
						});
					}
				};
			}
		} else {
			installPromptEvent.prompt();
		}
	});
})
