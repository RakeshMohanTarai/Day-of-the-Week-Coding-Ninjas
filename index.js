function returnDay() {
  var number = parseInt(document.getElementById("numberInput").value);

  if (number < 1 || number > 7) {
      document.getElementById("result").textContent = "null";
  } else {
      var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      document.getElementById("result").textContent = days[number - 1];
  }
}