
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">
  var saci = document.getElementById(saci);
  $( "saci" ).hover(
  function() {$(this).append($("<span style='position:absolute; top:140px; left:100px; right:750px; color:white;'> O saci é um ser mítico que habita as florestas<br> e tem como grande característica o fato de ser travesso <br>e pregar peças nas pessoas,<br> conta-se que o saci costuma sugar o sangue dos cavalos,<br> além de amedrontá-los durante a noite e quando morre <br>pode transformar-se em um cogumelo venenoso.</span>"))
}, function() {$(this).find("span").last().remove()
  }
  );
</script>