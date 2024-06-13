var a=10;
document.write( " The " + " value "+ " of "+ " a "+" is "+ a++ + "</br>");

document.write( " The " + " value "+ " of "+ " a "+" is "+ +a + "</br>");

document.write( " The " + " value "+ " of "+ " a "+" is "+ ++a + "</br>");

document.write( " The " + " value "+ " of "+ " a "+" is "+ --a + "</br>") ;

document.write( " The " + " value "+ " of "+ " a "+" is "+ --a + "</br>") ;

//2. What will be the output in variables a, b & result after
//execution of the following script:

var a = 2;
var b = 1;

document.write(--a +"</br>");//2-1=1

document.write(--a - --b+ "</br>");//1-1=0

document.write(--a - --b + ++b+ "</br>");//1-0+1=0

document.write(--a - --b + ++b + b-- + "</br>");


var tableNum=5;
var counter=1;
var inc=1;

document.write(
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>"+
    tableNum + " x " + counter++ + " = " + tableNum*inc++ + "</br>")

//     3. Write a program that takes input a name from user &
// greet the user.
  
var myname= prompt("Put your name");
alert("Have a nice day");

    var sub1=prompt("1st sub");
    var sub2=prompt("2nd sub");
    var sub3=prompt("3rd sub");

    totalMarksPerSubject=100;
    var totalMarks=totalMarksPerSubject*3;
    var Marks1=prompt("Enter the obtained marks for sub1");
    var Marks2=prompt("Enter the obtained marks for sub2");
    var Marks3=prompt("Enter the obtained marks fo sub 3");

    var totalObtMarks=Marks1+Marks2+Marks3;
    var per=(totalObtMarks/totalMarks)*100;

    document.write(
        "<table border 10px>"+
        "<tr>"+
        "<th>"+"Subject"+"</th>"+
        "<th>"+"Marks Obtained"+"</th>"+
        "<th>"+"Total Marks"+"</th>"+
        "</tr>"+
        
        "<tr>"+
        "<td>"+sub1+"</td>"+
        "<td>"+Marks1+"</td>"+
        "<td>"+totalMarksPerSubject+"</td>"+
        "</tr>"+

        "<tr>"+
        "<td>"+sub2+"</td>"+
        "<td>"+Marks2+"</td>"+
        "<td>"+totalMarksPerSubject+"</td>"+
        "</tr>"+

        "<tr>"+
        "<td>"+sub3+"</td>"+
        "<td>"+Marks3+"</td>"+
        "<td>"+totalMarksPerSubject+"</td>"+
        "</tr>"+

        "<tr>"+
        "<th>"+"Total"+"</th>"+
        "<td>"+totalObtMarks+"</td>"+
        "<td>"+totalMarks+"</td>"+
        "</tr>"+
        
        "<tr>"+
        "<th>"+"Percentage"+"</th>"+
        "<td>"+per+"%"+"</td>"+
        "</table>"

    )