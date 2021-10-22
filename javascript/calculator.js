function calculatorPopup(initial) {
  if(initial){
    document.write('<div><iframe src="../nav.html" frameborder="0"  width=100% ></iframe></div>')
    document.write('<button onclick="calculatorPopup(false)">Calculate!</button>')
  }
  let cont = true;
  let first = true;
  let min;
  let max;
  let count = 0;
  let total = 0;
  while(cont){
    let result;
    let x = prompt("Value of x:");
    let operator = prompt("Operator:");
    let y = prompt("Value of y:");
    if (x == null || x == "" || y == null || y == "" || operator == null || operator == "" ) {
      result = "No entry for a value";
    } else {
      if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
        result = "wrong input number";
      } else if (operator != "+" && operator != "-" && operator!= "*" && operator!= "/" && operator!= "%") {
        result = "operation computational error";
      } else {
          result = eval(x + operator + y)
          total += result;
          count++
          if(first){
            min = result;
            max = result;
          }
          if(result > max){
            max = result;
          }
          if(result < min){
            min = result;
          }
          

      }
      if (first){
        document.write("<table>"); 
        document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
      }
       
      document.write("<tr><td>"+ x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"); 
    }
    
    if (confirm("Continue?")) {
      cont = true;
      first = false;
    } else {
      cont = false;
      document.write("</table>");
    }
  }
  let average = total/count
  document.write("<table>"); 
  document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>"+ min + "</td><td>" + max + "</td><td>" + average + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
  document.write('<link rel="stylesheet" href="../styles/tableStyle.css">')
}

