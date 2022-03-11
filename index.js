document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#imprimir1");
  $boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.querySelector("#tabla"); // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 1,
        filename: "documento.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait", // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch((err) => console.log(err));
  });
});


function myFunction() {
  var x,
    y,
    numpadre,
    numhijo,
    text,
    text1,
    text2,
    text3,
    numhijo1,
    numhijo2,
    variable,
    variable2,
    variable3,
    text4,
    text5,
    Comprobacion,
    text6,
    Comprobacion2,
    text7;

  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;
  if (isNaN(x) || isNaN(y)) {
    text = "Es necesarios introducir dos números válidos";
  } else {
    numpadre = Math.floor(x / y);
    numhijo = Math.floor(x / y + 1);
    variable = Math.floor(numpadre * y);
    numhijo1 = Math.floor(x - variable);
    numhijo2 = Math.floor(y - numhijo1);
    variable2 = Math.floor(numhijo1 * numhijo);
    variable3 = Math.floor(numhijo2 * numpadre);
    Comprobacion = Math.floor(variable2 + variable3);
    Comprobacion2 = Math.floor(y);

    text = numpadre;
    text1 = numhijo;
    text2 = numhijo1;
    text3 = numhijo2;
    text4 = variable2;
    text5 = variable3;
    text6 = Comprobacion;
    text7 = Comprobacion2;
  }
  document.getElementById("Cargando").innerHTML = text;
  document.getElementById("Distribuir").innerHTML = text1;
  document.getElementById("Distribuir1").innerHTML = text2;
  document.getElementById("Distribuir2").innerHTML = text3;
  document.getElementById("Distribuir3").innerHTML = text4;
  document.getElementById("Distribuir4").innerHTML = text5;
  document.getElementById("Distribuir5").innerHTML = text6;
  document.getElementById("Distribuir6").innerHTML = text7;
}

function capturar(){
  var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24;
   
  c1 = document.getElementById("num3").value;
  c2 = document.getElementById("num4").value;
  c3 = document.getElementById("num5").value;
  c4 = document.getElementById("num6").value;
  c5 = document.getElementById("num7").value;
  c6 = document.getElementById("num8").value;
  c7 = document.getElementById("num9").value;
  c8 = document.getElementById("num10").value;
  c9 = document.getElementById("num11").value;
  c10 = document.getElementById("num12").value;
  c11 = document.getElementById("num13").value;
  c12 = document.getElementById("num14").value;
  c13 = document.getElementById("num15").value;
  c14 = document.getElementById("num16").value;
  c15 = document.getElementById("num17").value;
  c16= document.getElementById("num18").value;
  c17 = document.getElementById("num19").value;
  c18 = document.getElementById("num20").value;
  c19 = document.getElementById("num21").value;
  c20 = document.getElementById("num22").value;
  c21 = document.getElementById("num23").value;
  c22 = document.getElementById("num24").value;
  c23 = document.getElementById("num25").value;
  c24 = document.getElementById("num26").value;

  if(isNaN(c1) || isNaN(c2)){
    text = "Es necesarios introducir dos números válidos";
  }else{

  co1=c1;
  co2=c2;
  co3=c3;
  co4=c4;
  co5=c5;
  co6=c6;
  co7=c7;
  co8=c8;
  co9=c9;
  co10=c10;
  co11=c11;
  co12=c12;
  co13=c13;
  co14=c14;
  co15=c15;
  co16=c16;
  co17=c17;
  co18=c18;
  co19=c19;
  co20=c20;
  co21=c21;
  co22=c22;
  co23=c23;
  co24=c24;

  text1=co1;
  text2=co2;
  text3=co3;
  text4=co4;
  text5=co5;
  text6=co6;
  text7=co7;
  text8=co8;
  text9=co9;
  text10=co10;
  text11=co11;
  text12=co12;
  text13=co13;
  text14=co14;
  text15=co15;
  text16=co16;
  text17=co17;
  text18=co18;
  text19=co19;
  text20=co20;
  text21=co21;
  text22=co22;
  text23=co23;
  text24=co24;






  
     
  }





  document.getElementById("comu1").innerHTML = text1;
  document.getElementById("comu2").innerHTML = text2;
  document.getElementById("comu3").innerHTML = text3;
  document.getElementById("comu4").innerHTML = text4;
  document.getElementById("comu5").innerHTML = text5;
  document.getElementById("comu6").innerHTML = text6;
  document.getElementById("comu7").innerHTML = text7;
  document.getElementById("comu8").innerHTML = text8;
  document.getElementById("comu9").innerHTML = text9;
  document.getElementById("comu10").innerHTML = text10;
  document.getElementById("comu11").innerHTML = text11;
  document.getElementById("comu12").innerHTML = text12;
  document.getElementById("comu13").innerHTML = text13;
  document.getElementById("comu14").innerHTML = text14;
  document.getElementById("comu15").innerHTML = text15;
  document.getElementById("comu16").innerHTML = text16;
  document.getElementById("comu17").innerHTML = text17;
  document.getElementById("comu18").innerHTML = text18;
  document.getElementById("comu19").innerHTML = text19;
  document.getElementById("comu20").innerHTML = text20;
  document.getElementById("comu21").innerHTML = text21;
  document.getElementById("comu22").innerHTML = text22;
  document.getElementById("comu23").innerHTML = text23;
  document.getElementById("comu24").innerHTML = text24;


}


function repartir(){
  var x,
    y,
    numpadre,
    numhijo,
    text,
    text1,
    text2,
    text3,
    numhijo1,
    numhijo2,
    variable,
    variable2,
    variable3,
    text4,
    text5,
    Comprobacion,
    text6,
    Comprobacion2,
    text7,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,i;

  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;
 
    numpadre = Math.floor(x / y);
    numhijo = Math.floor(x / y + 1);
    variable = Math.floor(numpadre * y);
    numhijo1 = Math.floor(x - variable);
    numhijo2 = Math.floor(y - numhijo1);
    variable2 = Math.floor(numhijo1 * numhijo);
    variable3 = Math.floor(numhijo2 * numpadre);
    Comprobacion = Math.floor(variable2 + variable3);
    Comprobacion2 = Math.floor(y);

    text = numpadre;
    text1 = numhijo;
    text2 = numhijo1;
    text3 = numhijo2;
    text4 = variable2;
    text5 = variable3;
    text6 = Comprobacion;
    text7 = Comprobacion2;


    for(i=1;i<=numhijo1;i++){
      caja=numhijo
      document.getElementById("comu1").innerHTML = caja;
      document.getElementById("comu2").innerHTML = caja;
     
    
    } 

    var w=i;
    var m=y;

    for(var j=w; j<=m ; j++){
      caja=numpadre

      document.getElementById("comu1").innerHTML = caja;
      document.getElementById("comu2").innerHTML = caja;
     
    }

  
  
}

    


 