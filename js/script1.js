/*var l = +prompt('Введите первое число', '');
 var k = +prompt('Введите второе число', '');
 var y;
 y=l+k
 if (y<4)
 {
 alert ('мало');
 }
 else {
 alert ("много");
 }
 var rez = (a+b<4) ? 'мало' : 'много';
 alert(rez);
 
*/


/*var a = +prompt('Введите первое число', '');
 var b = +prompt('Введите второе число', '');
 var z = prompt ("введите действие + - *  / ", " ");
 var o = "error";
 switch(z)
 { case "+" : o=a+b; break;
 case "-" : o=a-b; break;
 case "*" : o=a*b; break;
 case "/" : o = (b==0)? "error": a/b; break;
 }
 alert( "ответ: " + o);
 */

/*var x = 11;
 var month;
 switch(x)
 {
 case 1:
 case 2:
 case 12: month = "зима"; break;
 case 3: case 4: case 5: month = "весна"; break;
 case 6: case 7: case 8: month = "лето"; break;
 case 9: case 10: case 11: month = "осень"; break;
 default : month = "Не существует"; 	break;
 }
 alert(month);

 */

/*var month = prompt ('Введите название месяца', '')
 if (month == "март" || month == "апрель" || month == "май")
 {
 alert("весна");
 }
 else if  (month == "июнь" || month == "июль" || month == "август")
 {
 alert("лето");
 }
 else if  (month == "сентябрь" || month == "октябрь" || month == "ноябрь")
 {
 alert("осень");
 }
 else if (month == "декабрь" || month == "январь" || month == "февраль")
 {
 alert("зима");
 }
 else
 {
 alert ("попробуйте еще раз");
 }
 */

/*  var k = +prompt ('Введите число от 1 до 5', '')
 var rez;
 switch(k)
 {
 case 1: rez = "плохо"; break;
 case 2: rez = "неудовлетворительно" ; break;
 case 3: rez = "удовлетворительно"; break;
 case 4: rez = "хорошо"; break;
 case 5: rez = "отлично"; break;
 default : rez = "ошибка"; break;
 }
 alert(rez);
 
/*
 var zag = prompt('ежик колючий?', '');
 if (zag != null) {
 var n = confirm("Ви - уверены?");
 if ((n == true) && (zag == "да"))
 alert("вы правы");
 else if ((n == true) && (zag != "да"))
 alert("вы не правы");
 else if (n == false) {
 zag = prompt('ежик колючий?', '');
 if (zag != null) {
 var n = confirm("Ви - уверены?");
 if ((n == true) && (zag == "да"))
 alert("вы правы");
 else if ((n == true) && (zag != "да"))
 alert("вы не правы");
 }
 }
 }

*/
 
/* var vozr = +prompt('Введите свой возраст от 20 до 69 лет', '');
if (vozr < 20 || vozr > 69) {
    alert("ввели не правильное число ");
}
else {
    var des = Math.floor(vozr / 10);
    var ed = (vozr % 10);
    var f;
    var e;

    switch (des) {
        case 2:
            f = "двадцать";
            break;
        case 3:
            f = "тридцать";
            break;
        case 4:
            f = "сорок";
            break;
        case 5:
            f = "пятдесят";
            break;
        case 6:
            f = "шестьдесят";
            break;
    }

    switch (ed) {
        case 0:
            e = "леть";
            break;
        case 1:
            e = "один год";
            break;
        case 2:
            e = "два года";
            break;
        case 3:
            e = "три года";
            break;
        case 4:
            e = "четыре года";
            break;
        case 5:
            e = "пять лет";
            break;
        case 6:
            e = "шесть лет";
            break;
        case 7:
            e = "семь лет";
            break;
        case 8:
            e = "восем лет";
            break;
        case 9:
            e = "девять лет";
            break;
    }
	
    alert(f + " " + e);
}
*/
  
 function f1()
{
document.getElementById("op").style.width="400px";
} 
function f2()
{
document.getElementsByTagName("img")[1].style.position="absolute"; 
document.getElementsByTagName("img")[1].style.left="200px";
document.getElementsByTagName("img")[1].style.top="100px";
}
function f3()
{
document.getElementsByTagName("img")[0].style.position="relative";
document.getElementsByTagName("img")[0].style.left="250px";
document.getElementsByTagName("img")[0].style.top="320px";
}
function f4()
{
document.getElementById("oppp").style.backgroundColor="yellow";
} 
function f5()
{
document.bgColor="red";
}
function f6()
{
var a = +document.getElementById("sum").value;
var d = +document.getElementById("sum2").value;
var s = a + d;
document.getElementById("sum3").value = s;
}
function f7()
{
document.getElementById("upp").style.fontSise="78pt";
} 
