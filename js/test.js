// FIRST IMAGE
function test1()
{
    var input = document.getElementById("test-number1").value
    document.getElementById("test-print1").innerHTML = input

    if(input == "2"){
        document.getElementById("test-print1").innerHTML = "The number which you entered is RIGHT"
    }else document.getElementById("test-print1").innerHTML = "The number which you entered is WRONG" 
    
    if(input == "2"){
        document.getElementById("test-para1").innerHTML = "Most color blind people won't see this number clearly"
    }else document.getElementById("test-para1").innerHTML = "Image showned  number is 2"

    if(input == ""){
        document.getElementById("test-print1").innerHTML = "OOPS!!! Please Enter any number"
    }

    if(input == ""){
        document.getElementById("test-para1").innerHTML = ""
    }
}
