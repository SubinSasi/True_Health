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
// SECOND IMAGE
function test2()
{
    var input = document.getElementById("test-number2").value
    document.getElementById("test-print2").innerHTML = input

    if(input == "5"){
        document.getElementById("test-print2").innerHTML = "The number which you entered is RIGHT"
    }else document.getElementById("test-print2").innerHTML = "The number which you entered is WRONG" 
    
    if(input == "5"){
        document.getElementById("test-para2").innerHTML = "Most color blind people won't see this number clearly"
    }else document.getElementById("test-para2").innerHTML = "Image showned  number is 5"

    if(input == ""){
        document.getElementById("test-print2").innerHTML = "OOPS!!! Please Enter any number"
    }

    if(input == ""){
        document.getElementById("test-para2").innerHTML = ""
    }
}
// THIRD IMAGE
function test3()
{
    var input = document.getElementById("test-number3").value
    document.getElementById("test-print3").innerHTML = input

    if(input == "0"){
        document.getElementById("test-print3").innerHTML = "The number which you entered is RIGHT"
    }else document.getElementById("test-print3").innerHTML = "The number which you entered is WRONG" 
    
    if(input == "0"){
        document.getElementById("test-para3").innerHTML = "Most color blind people won't see this number clearly"
    }else document.getElementById("test-para3").innerHTML = "Image showned  number is 0"

    if(input == ""){
        document.getElementById("test-print3").innerHTML = "OOPS!!! Please Enter any number"
    }

    if(input == ""){
        document.getElementById("test-para3").innerHTML = ""
    }
}
// FOURTH IMAGE
function test4()
{
    var input = document.getElementById("test-number4").value
    document.getElementById("test-print4").innerHTML = input

    if(input == "8"){
        document.getElementById("test-print4").innerHTML = "The number which you entered is RIGHT"
    }else document.getElementById("test-print4").innerHTML = "The number which you entered is WRONG" 
    
    if(input == "8"){
        document.getElementById("test-para4").innerHTML = "Most color blind people won't see this number clearly"
    }else document.getElementById("test-para4").innerHTML = "Image showned  number is 8"

    if(input == ""){
        document.getElementById("test-print4").innerHTML = "OOPS!!! Please Enter any number"
    }

    if(input == ""){
        document.getElementById("test-para4").innerHTML = ""
    }
}