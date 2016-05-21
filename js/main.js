/* Inserta tu código aqui */


var data= function eleccion_data(){
      var random_peru,random_mexico;
      $('#sede').change(function(){
      var value=$('#local').val();
      if(value==1) {
        random_peru = random(peru)
        $('#imagen').html("<img class= 'photograpy' src='fotos/peru/"+random_peru.image+"'/>")}
      else if (value==2) {
        random_mexico = random(mexico)
        $('#imagen').html("<img class= 'photograpy' src='fotos/mexico/"+random_mexico.image+"'/>")}
      });
};
$(document).ready(function(){
  
  data;

});


 var contador=0;
 var total_puntuacion=0;
  $('#contrast').click(function(){
    if(($('#name_coder').val()==random_peru.nam)||($('#name_coder').val()==random_mexico.nam)){
        $('#resultado').text("BIEN!");
        total_puntuacion=total_puntuacion+5;
        $('#puntos').html(total_puntuacion);
        clean();
        random_peru = random(peru);
        random_mexico = random(mexico);
        $('#imagen').html("<img class= 'photograpy' src='fotos/peru/"+random_peru.image+"'/>");
        contador=0;
    }
    else {
        contador++;
        $('#resultado').text("AGAIN");
        total_puntuacion--;
        $('#puntos').html(total_puntuacion);
        clean();
        if(contador===4) {
            random_peru= random(peru);
            random_mexico = random(mexico);
            $('#imagen').html("<img class= 'photograpy' src='fotos/peru/"+random_peru.image+"'/>");
            contador=0;
        }
    }
  });
function random(arrays){
  var longitud=arrays.length;
  var num=Math.round(Math.random() * (longitud)) + 1;
  var imagen=arrays[num];
  return imagen;
}
function clean(){
   var tex = document.getElementById("name_coder");
   tex.value="";
   tex.focus();
}