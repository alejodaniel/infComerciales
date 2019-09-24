import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormArray } from '@angular/forms';
import { FormProveedoresServiceService } from '../services/form-proveedores-service.service';
import { FormExpress } from '../models/formularioExpress';



@Component({
  selector: 'app-requisitos-proveedores',
  templateUrl: './requisitos-proveedores.component.html',
  styleUrls: ['./requisitos-proveedores.component.css']
})
export class RequisitosProveedoresComponent implements OnInit {
  //para mongo
  formularioExpress = new FormExpress();
  submitted = false;
  //empieza formulario
  reporteExpress: FormGroup;

  razonSocialExpress: string;
  fecha: string;
  solicitante: string;
  nombreComercialExpress: string;
  rucExpress: number;
  formaLegalExpress: string;
  estadoExpress: string;
  inicioActividadesExpress: string;
  actividadPrincipalExpress: string;
  provinciaCiudadExpress: string;
  direccionExpress: string;
  sucursalesExpress: string;
  telefonoExpress: number;
  paginaCorreoExpress: string;
  representanteLegalExpress: string;
  personaContactoExpress: string;
  cargoExpress: string;
  empresasRelacionadasExpress: string;
  numeroEmpleadosExpress: number;
  pagoRentaUnoExpress: string;
  //pagoRentaDosExpress: string;
  impuestoDivisasExpressUno: string;
  //impuestoDivisasExpressDos: string;
  //calificacion
  requeridoClienteExpress: string;
  requeridoServiratingExpress: string;
  nombreReferenciaExpress: string;
  direccionReferenciaExpress: string;
  telefonoReferenciaExpress: string;
  contactoReferenciaExpress: string;
  lineaCreditoExpress: string;
  pagosReferenciaExpress: string;
  productoServicioReferenciaExpress: string;
  clienteDesdeExpress: string;
  compraMensualExpress: string;
  //selects
  checks: String;
  checks1: String;
  puntualidad:String;
  //checks
  procesosJudicialesExpress: string;
  accionesDelitosExpress: string;
  informacionRelevanteExpress: string;
  informacionBancariaExpress: string;
  ventas2014Express: string;
  ventas2015Express:string;
  activos2014Express:string;
  activos2015Express: string;
  pasivo2014Express: string;
  pasivo2015Express: string;
  patrimonio2014Express: string;
  patrimonio2015Express: string;
  utilidad2014Express: string;
  utilidad2015Express:string;
  terrenoAreaExpress: string;
  terrenoAvaluoExpress: string;
  construccionAreaExpress: string;
  construccionAvaluoExpress: string;
  avaluoTotalAreaExpress: string;
  avaluoTotalAvaluoExpress: string;
  marcaExpress: string;
  marcaExpress1: string;
  marcaExpress2: string;
  marcaExpress3: string;
  marcaExpress4: string;
  tipoExpress: string;
  tipoExpress1: string;
  tipoExpress2: string;
  tipoExpress3: string;
  tipoExpress4: string;
  fechavahiculosExpress: string;
  fechavahiculosExpress1: string;
  fechavahiculosExpress2: string;
  fechavahiculosExpress3: string;
  fechavahiculosExpress4: string;
  avaluoExpress: string;
  avaluoExpress1: string;
  avaluoExpress2: string;
  avaluoExpress3: string;
  avaluoExpress4: string;
  observacionesExpress: string;




  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  textPattern= new RegExp(/^[a-zA-Z ]+$/);
  numberPattern= new RegExp(/^[0-9 ]+$/);

  constructor(public fb: FormBuilder, private proveedoresService:FormProveedoresServiceService) {
    this.reporteExpress = this.fb.group({
      
      razonSocialExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      nombreComercialExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      rucExpress:  ['', [Validators.required,Validators.minLength(13) ,Validators.maxLength(13),Validators.pattern(this.numberPattern)]],
      formaLegalExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      estadoExpress:  ['', [Validators.required,Validators.minLength(6) ,Validators.maxLength(8),Validators.pattern(this.textPattern)]],
      inicioActividadesExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      actividadPrincipalExpress: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      provinciaCiudadExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      direccionExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      sucursalesExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      telefonoExpress:  ['', [Validators.required,Validators.minLength(7) ,Validators.maxLength(10)]],
      paginaCorreoExpress:  ['', [Validators.required,Validators.minLength(10) ,Validators.maxLength(30),Validators.pattern(this.emailPattern)]],
      representanteLegalExpress: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      personaContactoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      cargoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      empresasRelacionadasExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      numeroEmpleadosExpress:  ['', [Validators.required,Validators.minLength(1) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      pagoRentaUnoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
     // pagoRentaDosExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      impuestoDivisasExpressUno:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
     // impuestoDivisasExpressDos:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      //calificacion
      requeridoClienteExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      requeridoServiratingExpress: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      nombreReferenciaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      direccionReferenciaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      telefonoReferenciaExpress:  ['', [Validators.required,Validators.minLength(7) ,Validators.maxLength(10),Validators.pattern(this.numberPattern)]],
      contactoReferenciaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      lineaCreditoExpress:  ['', [Validators.required,Validators.minLength(7) ,Validators.maxLength(7),Validators.pattern(this.textPattern)]],
      pagosReferenciaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      productoServicioReferenciaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      clienteDesdeExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      compraMensualExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      //selects
      checks: ['', [Validators.required]],
      checks1: ['', [Validators.required]],
      puntualidad:['',[Validators.required]],
      //checks
      procesosJudicialesExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      accionesDelitosExpress: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      informacionRelevanteExpress: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      informacionBancariaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      ventas2014Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      ventas2015Express: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      activos2014Express: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      activos2015Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      pasivo2014Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      pasivo2015Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      patrimonio2014Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      patrimonio2015Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      utilidad2014Express:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      utilidad2015Express: ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      terrenoAreaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      terrenoAvaluoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      construccionAreaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      construccionAvaluoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      avaluoTotalAreaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      avaluoTotalAvaluoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      marcaExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      marcaExpress1:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      marcaExpress2:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      marcaExpress3:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      marcaExpress4:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      tipoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      tipoExpress1:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      tipoExpress2:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      tipoExpress3:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      tipoExpress4:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
      fechavahiculosExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      fechavahiculosExpress1:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      fechavahiculosExpress2:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      fechavahiculosExpress3:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      fechavahiculosExpress4:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
      avaluoExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      avaluoExpress1:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      avaluoExpress2:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      avaluoExpress3:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      avaluoExpress4:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]],
      observacionesExpress:  ['', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30),Validators.pattern(this.textPattern)]],
    
    });

  }
    ngOnInit() {}
    
   
 
   saveData(){
     /* 
      this.razonSocial=this.formularioProveedor.value.razonSocial;
      this.direccion=this.formularioProveedor
      r.value.numeroProveedor;
      this.nombreReferenciaComercial=this.formularioProveedor.value.nombreReferenciaComercial;
      this.numeroReferenciaComercial=this.formularioProveedor.value.numeroReferenciaComercial;

      this.nombreReferenciaComercial2=this.formularioProveedor.value.nombreReferenciaComercial2;
      this.numeroReferenciaComercial2=this.formularioProveedor.value.numeroReferenciaComercial2;

      this.nombreDirectivo2 = this.formularioProveedor.value.nombreDirectivo2;
      this.cargoDirectivo2 = this.formularioProveedor.value.cargoDirectivo2;
      
      this.nombreDirectivo3 = this.formularioProveedor.value.nombreDirectivo3;
      this.cargoDirectivo3 = this.formularioProveedor.value.cargoDirectivo3;
      this.nombreDirectivo4 = this.formularioProveedor.value.nombreDirectivo4;
      this.cargoDirectivo4 = this.formularioProveedor.value.cargoDirectivo4;
      this.nombreDirectivo5 = this.formularioProveedor.value.nombreDirectivo5;
      this.cargoDirectivo5 = this.formularioProveedor.value.cargoDirectivo5;

      this.nombreParticipacion2 = this.formularioProveedor.value.nombreParticipacion2;
      this.porcentajeParticipacion2 = this.formularioProveedor.value.porcentajeParticipacin2;
      this.nombreParticipacion3 = this.formularioProveedor.value.nombreParticipacion3;
      this.porcentajeParticipacion3 = this.formularioProveedor.value.porcentajeParticipacion3;
      this.nombreParticipacion4 = this.formularioProveedor.value.nombreParticipacion4;
      this.porcentajeParticipacion4 = this.formularioProveedor.value.porcentajeParticipacion4;
      this.nombreParticipacion5 = this.formularioProveedor.value.nombreParticipacion5;
      this.porcentajeParticipacion5 = this.formularioProveedor.value.porcentajeParticipacion5;
      this.nombreProveedor2=this.formularioProveedor.value.nombreProveedor2;
      this.numeroProveedor2=this.formularioProveedor.value.numeroProveedor2;


      alert("Se Han ingresado exitosamente los datos");
      console.log(this.formularioProveedor.value);
      this.onResetForm();
      */
    } 
    
    
  
  onResetForm(){
    this.reporteExpress.reset();
  
  }


  //funciones anandidas para mongoDB

  newProveedor(): void {
    this.submitted = false;
    this.formularioExpress = new FormExpress();
  }

 addReporteExpress() {
   this.submitted = true;
   this.save();
 }

  /*goBack(): void {
    this.location.back();
  }*/
  
  private save(): void {
    console.log(this.formularioExpress);
    this.proveedoresService.addInforme(this.formularioExpress)
        .subscribe();
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
