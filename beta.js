const reportForm = document.querySelector("#reportForm");
const reportList = document.querySelector("#reportList");


reportForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const letter = reportForm.elements.letter.value;
    const reportInput = reportForm.elements.reportInput.value;
    addReport(letter, reportInput);

    reportForm.elements.letter.value = "";
    reportForm.elements.reportInput.value = "";
})


const addReport = function (letter, reportInput) {
    const newReport = document.createElement("li");
    const bLetter = document.createElement("b");
    bLetter.append(letter);
    newReport.append(bLetter);
    newReport.append(`- ${reportInput}`);
    reportList.append(newReport);
}


