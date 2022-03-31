//DECLARACION DE FUNCIONES Y VARIABLES GLOBALES//////////////////////////////////////////////////////////////
var step1 = document.getElementById("step1");
var step2 =  document.getElementById("step2");
var step3 =  document.getElementById("step3");
var step4 =  document.getElementById("step4");
var step5 =  document.getElementById("step5");
var buttonPreviusPC = document.getElementById("button-previus-pc"); //boton pc
var buttonPreviusAndroid = document.getElementById("button-previus"); // boton android resolution
var stepcurrent = 1;
var anchoVentana = window.innerWidth;

//avanzando  por los pasos con el boton next -- USANDO LISTENERS

document.getElementById("button-next1").addEventListener("click", function() {
    gotoNextStep(stepcurrent)
});
document.getElementById("button-next2").addEventListener("click", function() {
    gotoNextStep(stepcurrent)
});
document.getElementById("button-next3").addEventListener("click", function() {
    gotoNextStep(stepcurrent)
});
document.getElementById("button-next4").addEventListener("click", function() {
    gotoNextStep(stepcurrent)
});
document.getElementById("button-next5").addEventListener("click", function() {
    gotoNextStep(stepcurrent)
});
/*
var buttonNext1 = document.getElementById("button-next1");
var buttonNext2 = document.getElementById("button-next2");
var buttonNext3 = document.getElementById("button-next3");
var buttonNext4= document.getElementById("button-next4");
var buttonNext5 = document.getElementById("button-next5");
*/


function setButtons(){
    if(anchoVentana > 1108){        
        resolutionPC(1);             
    }else{
        resolutionMovil(2);
    }
}
function resolutionPC(){
    showButtons(1)
}
function resolutionMovil(){
    showButtons(2)
}
function  showButtons(params) {
    if(stepcurrent == 1){
        buttonPreviusAndroid.style = "display: none";   
        buttonPreviusPC.style = "display: none";   
    }else{
        if(params == 1){
            //resolucion de PC
            buttonPreviusPC.style = "display: block";   //mostrar boton pc
            buttonPreviusAndroid.style = "display: none" ;        //no mostrar boton movil
        }else if (params == 2){
            //ya estamos  en resoluciones de android, entonces debe mostrar el  boton previus en la parte inferior
            buttonPreviusPC.style = "display: none";  
            buttonPreviusAndroid.style = "display: block" ;
        }
    }
}
function gotoNextStep(Pstepcurrent){
    switch(Pstepcurrent){
        case 1:      
            step1.style ="display: none";
            step2.style ="display: block";  
            stepcurrent = 2;               
        break;
        case 2:
            step2.style ="display: none";
            step3.style ="display: block";     
            stepcurrent= 3;  
        break;
        case 3:
            step3.style ="display: none";
            step4.style ="display: block";   
            stepcurrent= 4;   
        break;
        case 4:
            step4.style ="display: none";
            step5.style ="display: block";     
            stepcurrent= 5; 
        break;
        case 5:
            step5.style ="display: none";
            step6.style ="display: block";     
        break;
        case 6:
        break;     
    }
    setButtons();
    
}
function gotoStepPrevius(Pstepcurrent){
    switch(Pstepcurrent){
        case 1:          
        break;
        case 2:
            step1.style ="display: block";
            step2.style ="display: none";  
            stepcurrent = 1;
        break;
        case 3:
            step2.style ="display: block";
            step3.style ="display: none";  
            stepcurrent = 2;
        break;
        case 4:            
            step3.style ="display: block";
            step4.style ="display: none";  
            stepcurrent = 3;
        break;
        case 5:
            step4.style ="display: block";
            step5.style ="display: none";  
            stepcurrent = 4;
        break;
        case 6:
        break;     
    }
    setButtons();
}
/*ir hacia atras cuando presiono boton previus anddroid o pc*/
buttonPreviusAndroid.onclick = function(){
    gotoStepPrevius(stepcurrent);    
}
buttonPreviusPC.onclick = function(){
    gotoStepPrevius(stepcurrent);    
}
//step 1 :Seleccion de algun servicio paso 1
function handleClick(element){
    /* significa que ya sali delpaso 1*/        
        if(element == 'youtube'){                
            gotoNextStep(stepcurrent);        
        }
        if(element == 'hbomax'){
            gotoNextStep(stepcurrent);
        }
        if(element == 'netflix'){
            gotoNextStep(stepcurrent);
        }
        if(element == 'disney'){
            gotoNextStep(stepcurrent);
        }
        if(element == 'spotify'){
            gotoNextStep(stepcurrent);
        }
        if(element == 'crunchyroll'){
            gotoNextStep(stepcurrent);
        }
        if(element == 'primevideo'){
            gotoNextStep(stepcurrent);
        }    
        
    }
setButtons();
//IMPLEMENTACION O LLAMADO DE LAS FUNCIONES //////////////////////////////////////////////////////////////
/*pra ocultar el boton de ir hacia trans antes del step 1*/


/* diferentes comportamientos dependiento de la resolucion de lapantalla*/
window.onresize = function(){
    anchoVentana = window.innerWidth;    
    setButtons();
};    

