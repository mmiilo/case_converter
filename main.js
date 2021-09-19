let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let save = document.getElementById("save-text-file");
let textarea = document.querySelector("textarea");


upper.addEventListener("click", function () {
    let userText = textarea.value
    textarea.value = userText.toUpperCase()
});

lower.addEventListener("click", function () {
    let userText = textarea.value
    textarea.value = userText.toLowerCase()
});

proper.addEventListener("click", function () {
    let textArray = textarea.value.split(" ")
    let properCased = textArray.map(txt => capitalizeFirstLetter(txt)) 
    textarea.value = properCased.join(" ")
});

sentence.addEventListener("click", function () {
    let textArray = textarea.value.split(".")
    let sentenceCased = textArray.map(txt => capitalizeFirstLetter(txt.trim()))
    textArray.forEach(txt => capitalizeFirstLetter(txt));
    textarea.value = sentenceCased.join(". ").trim()

});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

save.addEventListener("click", function () {
    download("text.txt", textarea.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}