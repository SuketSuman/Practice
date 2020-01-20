exports.addition=function(){
    a=Number(document.form1.num1.value);  
    b=Number(document.form1.num2.value);
    c=a+b;
    document.form1.result1.value=c;
    }
	

   exports.subtraction = function(){
    a=Number(document.form1.num1.value);  
    b=Number(document.form1.num2.value);
    c=a-b;
    document.form1.result2.value=c;

    }
	

    exports.multiply = function(){
    a=Number(document.form1.num1.value);  
    b=Number(document.form1.num2.value);
    c=a*b;
    document.form1.result3.value=c;

    }
	

    exports.division = function(){
    a=Number(document.form1.num1.value);  
    b=Number(document.form1.num2.value);
    c=a/b;
    document.form1.result4.value=c;

    }    