//javascript DOM manipulation





    

        function change() {
            document.getElementById("hello").innerHTML = "hello world";
            document.getElementById("hello").style.color = "red";
            document.getElementById("hello").style.fontSize = "50px";




            // document.getElementsByTagName("h1")[0].innerHTML = "hello world";
            // document.getElementsByTagName("h1")[0].style.color = "red";

            // document.getElementsByClassName("demo")[0].innerHTML = "hello world";
            // document.getElementsByClassName("demo")[0].style.color = "red";

        }



        // document.getElementsByTagName("h1")[0].innerHTML = "hello world";
        // document.getElementsByTagName("h1")[0].style.color = "red";

        // document.getElementsByClassName("demo")[0].innerHTML = "hello world";
        // document.getElementsByClassName("demo")[0].style.color = "red";

        // document.getElementById("hello").innerHTML = "hello world";




//Text change*****************************************************************************
        {

            function change1(){
                document.getElementById("text").innerHTML = "aaa"
            }
            function change2(){
                document.getElementById("text").innerHTML = "bbb"
            }
            function change3(){
                document.getElementById("text").innerHTML = "ccc"
            }
            function change4(){
                document.getElementById("text").innerHTML = "ddd"
            }

        }


//Switch button*****************************************************************************

        {
            function change5(){
                document.getElementById("check").style.transform = "translateX(60px)";
                document.getElementById("check").style.background="green"
                document.getElementById("check").style.transition="0.5s"
            }
            function change6(){
                document.getElementById("check").style.transform = "translateX(0px)";
                document.getElementById("check").style.background="red"
                document.getElementById("check").style.transition="0.5s"
               
            }

            document.getElementById("check").addEventListener("click",function(){
                if(document.getElementById("check").style.transform=="translateX(60px)"){
                    change6()
                }else{
                    change5()
                }
            })

            document.getElementById("btn-1").style.background="green"
            document.getElementById("btn-1").style.color="white"

            document.getElementById("btn-2").style.background="red"
            document.getElementById("btn-2").style.color="white"


        }


//Bulb switch*****************************************************************************

        {
            let on = false;

    function toggleBulb() {
      const bulb = document.getElementById('bulb');
      if (on) {
        bulb.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        on = false;
      } else {
        bulb.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        on = true;
      }
    }
            
                
        }



//Menu bar*****************************************************************************
        {
        document.getElementById("menu").style.transform="translateX(-200px)"
            function change8(){
                document.getElementById("menu").style.transform="translateX(0px)"
                document.getElementById("menu").style.transition="0.5s";
            }

            function change9(){
                document.getElementById("menu").style.transform="translateX(-200px)"
                document.getElementById("menu").style.transition="0.5s";
            }
        }
