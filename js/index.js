jQuery(document).ready(function(){

  $('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
  });


  function prueba(){
    $('.contenido-columna').css('opacity', '1');
    $('.contenido-columna').css('visibility', 'visible');
    setTimeout(prueba1, 3000);
  }
  function prueba1(){
    $('.contenido-columna').css('opacity', '0');
    $('.contenido-columna').css('visibility', 'hidden');
  }

  function buttonChange(){
    $('#boton-primera').css('opacity', '1');
    $('#boton-segunda').css('opacity', '1');
    $('#boton-tercera').css('opacity', '1');
    $('#boton-cuarta').css('opacity', '1');
    $('#boton-quinta').css('opacity', '1');
    $('#boton-sexta').css('opacity', '1');
    $('#boton-septima').css('opacity', '1');
    setTimeout(buttonChange1, 1000);
  }
  function buttonChange1(){
    $('#boton-primera').css('opacity', '0.5');
    $('#boton-segunda').css('opacity', '0.5');
    $('#boton-tercera').css('opacity', '0.5');
    $('#boton-cuarta').css('opacity', '0.5');
    $('#boton-quinta').css('opacity', '0.5');
    $('#boton-sexta').css('opacity', '0.5');
    $('#boton-septima').css('opacity', '0.5');
    setTimeout(buttonChange, 1000);
  }
  setTimeout(buttonChange, 50);
  setTimeout(prueba, 50);

});
