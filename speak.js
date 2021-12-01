javascript: (() => {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        let synth = window.speechSynthesis;
        let utterance = new SpeechSynthesisUtterance(selectedText);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    }
    else {
        alert('No text selected');
    }
})();