import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-completo',
  templateUrl: './informe-completo.component.html',
  styleUrls: ['./informe-completo.component.css']
})
export class InformeCompletoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  quitarColorCritico(){
    document.getElementById("critico").style.backgroundColor="white";

  }
  
  quitarColorRiesgoso(){
    document.getElementById("riesgoso").style.backgroundColor="white";

  }

  quitarColorConfiable(){
    document.getElementById("confiable").style.backgroundColor="white";

  }

  quitarColorNotable(){
    document.getElementById("notable").style.backgroundColor="white";

  }


  cambiarColorCritico(){
    document.getElementById("critico").style.backgroundColor="#0A9F25";
  }
  cambiarColorRiesgoso(){
    document.getElementById("riesgoso").style.backgroundColor="#0A9F25";

  }
  cambiarColorConfiable(){
    document.getElementById("confiable").style.backgroundColor="#0A9F25";

  }
  cambiarColorNotable(){
    document.getElementById("notable").style.backgroundColor="#0A9F25";

  }

  textoRojo0(){
    document.getElementById("0").style.color= "#D80D0D"
  }
  quitarColor0(){
    document.getElementById("0").style.color= "black"

  }
  textoRojo1(){
    document.getElementById("1").style.color= "#D80D0D"
  }
  quitarColor1(){
    document.getElementById("1").style.color= "black"

  }
  textoRojo2(){
    document.getElementById("2").style.color= "#D80D0D"
  }
  quitarColor2(){
    document.getElementById("2").style.color= "black"

  }
  textoRojo3(){
    document.getElementById("3").style.color= "#D80D0D"
  }
  quitarColor3(){
    document.getElementById("3").style.color= "black"
  }
  textoRojo4(){
      document.getElementById("4").style.color= "#D80D0D"
    }
    quitarColor4(){
      document.getElementById("4").style.color= "black"
  
    }
    textoRojo5(){
      document.getElementById("5").style.color= "#D80D0D"
    }
    quitarColor5(){
      document.getElementById("5").style.color= "black"
  
    }
    textoRojo6(){
      document.getElementById("6").style.color= "#D80D0D"
    }
    quitarColor6(){
      document.getElementById("6").style.color= "black"
  
    }
    textoRojo7(){
      document.getElementById("7").style.color= "#D80D0D"
    }
    quitarColor7(){
      document.getElementById("7").style.color= "black"
  
    }
    textoRojo8(){
      document.getElementById("8").style.color= "#D80D0D"
    }
    quitarColor8(){
      document.getElementById("8").style.color= "black"
  
    }
    textoRojo9(){
      document.getElementById("9").style.color= "#D80D0D"
    }
    quitarColor9(){
      document.getElementById("9").style.color= "black"
  
    }
    textoRojo10(){
      document.getElementById("10").style.color= "#D80D0D"
    }
    quitarColor10(){
      document.getElementById("10").style.color= "black"
  
    }
}
