var currentDate = new Date();
var currentDayOfTheWeek = currentDate.getDay() + 1; // sunday = 1
var nextDayOfTheWeek;
var week = {};
var daysOfTheWeek = {1:"ראשון", 2:"שני", 3:"שלישי", 4:"רביעי", 5:"חמישי", 6:"שישי", 7:"שבת"};
var textualDayOfTheWeek = daysOfTheWeek[currentDayOfTheWeek];

week[1] = new Set(["חינוך", "ספרות", "חנ\"ג", "עברית", "של\"ח", "אנגלית", "מתמטיקה"]);
week[2] = new Set(["ערבית / צרפתית", "מתמטיקה", "מדעים"]);
week[3] = new Set(["אנגלית", "מתמטיקה", "תנ\"ך", "עברית", "של\"ח", "ניצוצות", "חנ\"ג"]);
week[4] = new Set(["חינוך", "היסטוריה", "עברית", "מדעים", "תנ\"ך"]);
week[5] = new Set(["תנ\"ך", "מתמטיקה", "ערבית / צרפתית", "מדעים"]);
week[6] = new Set(["אנגלית", "ספרות", "היסטוריה"]); 


if (currentDayOfTheWeek == 7 || currentDayOfTheWeek == 6) {
  currentDayOfTheWeek = 6;
  nextDayOfTheWeek = 1;
} else
  nextDayOfTheWeek = currentDayOfTheWeek + 1;

const removeFromBag = new Set([...week[currentDayOfTheWeek]].filter(x => !week[nextDayOfTheWeek].has(x)))
const addToBag = new Set([...week[nextDayOfTheWeek]].filter(x => !week[currentDayOfTheWeek].has(x)))

function printItemsInSet(setOfItems) {
  setOfItems.forEach(function(value) {
    document.write(value + " <br>");
  })
}

document.write("מסדר מערכת לפי יום " + textualDayOfTheWeek + ".<br><br>");
document.write("מחשב...")

setTimeout(function() {
	sendResults();
}, 1000);

function sendResults() {
  document.write("<html dir=\"rtl\"><title>PackUnpack - ח'2 שרת</title>");
  document.write("<link href=\"style.css\" rel=\"stylesheet\" type=\"text/css\" />");
  document.write("מסדר מערכת לפי יום " + textualDayOfTheWeek + ".<br><br>");
  document.write("להוציא מהתיק: <br>")
  printItemsInSet(removeFromBag);
  document.write("<br>לשים בתיק: <br>");
  printItemsInSet(addToBag);
  document.write("<br> יום לימודים מוצלח!");
}