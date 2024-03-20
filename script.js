document.addEventListener("DOMContentLoaded", function () {
  var cssInput = document.getElementById("cssInput");
  var copyBtn = document.getElementById("copyBtn");

  cssInput.addEventListener("input", function () {
    var cssText = cssInput.value;
    var convertedCss = convertPxToRem(cssText);
    document.getElementById("output").textContent = convertedCss;

    if (cssText.trim() === "") {
      copyBtn.style.display = "none";
    } else {
      copyBtn.style.display = "block";
    }
  });

  copyBtn.addEventListener("click", function () {
    var convertedCss = document.getElementById("output").textContent;
    copyToClipboard(convertedCss);
  });
});

function convertPxToRem(cssText) {
  return cssText.replace(/(\d*\.?\d+)px/g, function (match, value) {
    var pxValue = parseFloat(value);
    var remValue = pxValue / 16;
    return remValue + "rem";
  });
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      alert("Text copied to clipboard");
    })
    .catch(function (err) {
      console.error("Unable to copy text to clipboard: ", err);
    });
}
