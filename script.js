let font = document.getElementById('font');
let fontSize = document.getElementById('fontSize');
let fontColor = document.getElementById('fontColor');
let textbox = document.getElementById('textbox');


var fontFamilySelect = document.getElementById("font");

  var fontList = [
    "Arial", "Times New Roman", "Verdana",
    "Helvetica", "Georgia", "Courier New",
    "Impact", "Trebuchet MS", "Comic Sans MS",
    "Palatino", "Garamond", "Courier", "Book Antiqua"
  ];

  fontList.forEach(function(font) {
    var option = document.createElement("option");
    option.value = font;
    option.textContent = font;
    fontFamilySelect.appendChild(option);
  });

var fontSizeSelect = document.getElementById("fontSize");

  for (var i = 8; i <= 96; i+=2) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    fontSizeSelect.appendChild(option);
  }
font.addEventListener('change', () => {
 textbox.style.fontFamily = font.value;
});

fontSize.addEventListener('change', () => {
 textbox.style.fontSize = fontSize.value + 'px';
});

fontColor.addEventListener('change', () => {
 textbox.style.color = fontColor.value;
});
