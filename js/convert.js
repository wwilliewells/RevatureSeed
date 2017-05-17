//(function(){
  var units = document.querySelector('#units');
  var value = document.querySelector('#value');
  var cunits = document.querySelector('#cunits');
  var cvalue = document.querySelector('#cvalue');
  //console.log(units.value,value.value);

  var c;
  //var tValue=3;
  var convert = document.querySelector('#convert');
  convert.addEventListener('click',function(event){
    //event.stopPropagation();
    calculate(c);
  });

  function calculate(c){
    // crazy long logic
    //units.innerHTML=units.value;
    console.log(units.value,value.value);
    //cunits.innerHTML ='<p>';
    switch(units.value){
      case 'hz': 
        cunits.value = 'radians*hz'; cunits.textContent='radians*hz'; 
        cvalue.value = 2*Math.PI*value.value; break;
      
      case 'kg': cunits.value = 'lbm'; cvalue.value = value.value/0.45359237; break;
      case 'kg/s': cunits.value = 'lbm/s'; cvalue.value = value.value/0.45359237; break;
      case 'W/m^2': cunits.value = 'lbm/s^3'; cvalue.value = value.value/0.45359237; break;
      case 'T': cunits.value = 'lbm/(C*s)'; cvalue.value = value.value/0.45359237; break;
      
      case 'm': cunits.value = 'ft'; cvalue.value = value.value/0.3048; break;
      case 'm^2': cunits.value = 'ft^2'; cvalue.value = value.value/(0.3048*0.3048); break;
      case 'm^3': cunits.value = 'ft^3'; cvalue.value = value.value/(0.3048*0.3048*0.3048); break;
      case 'm/s': cunits.value = 'ft/s'; cvalue.value = value.value/0.3048; break;
      case 'm^2/s': cunits.value = 'ft^2/s'; cvalue.value = value.value/(0.3048*0.3048); break;
      case 'm^2/s^2': cunits.value = 'ft^2/s^2'; cvalue.value = value.value/(0.3048*0.3048); break;
      case 'm^3/s': cunits.value = 'ft^3/s'; cvalue.value = value.value/(0.3048*0.3048*0.3048); break;
      case 'm/s^2': cunits.value = 'ft/s^2'; cvalue.value = value.value/0.3048; break;
      case 'm/s^3': cunits.value = 'ft/s^3'; cvalue.value = value.value/0.3048; break;
      case 'C/(m*s)': cunits.value = 'C/(ft*s)'; cvalue.value = value.value*0.3048; break;

      case 'kg*m': cunits.value = 'lbm*ft'; cvalue.value = value.value/(0.45359237*0.3048); break;
      case 'kg*m^2': cunits.value = 'lbm*ft^2'; cvalue.value = value.value/(0.45359237*0.3048*0.3048); break;
      case 'Wb': cunits.value = 'lbm*ft^2/(C*s)'; cvalue.value = value.value/(0.45359237*0.3048*0.3048); break;
      case 'kg*m^3': cunits.value = 'lbm*ft^3'; cvalue.value = value.value/(0.45359237*0.3048*0.3048*0.3048); break;
      case 'kg/m^3': cunits.value = 'lbm/ft^3'; cvalue.value = 0.3048*0.3048*0.3048*value.value/0.45359237; break;
      case 'H': cunits.value = 'lbm*ft^2/C^2'; cvalue.value = value.value/(0.45359237*0.3048*0.3048); break;
      case 'H/m': cunits.value = 'lbm*ft/C^2'; cvalue.value = value.value/(0.45359237*0.3048); break;

      case 'J': cunits.value = 'BTU'; cvalue.value = value.value/(1055.056); break;
      case 'W': cunits.value = 'BTU/s'; cvalue.value = value.value/(1055.056); break;

      case 'N*s': cunits.value = 'lbf*s'; cvalue.value = value.value/(0.45359237*9.80665); break;
      case 'N': cunits.value = 'lbf'; cvalue.value = value.value/(0.45359237*9.80665); break;
      case 'N/C': cunits.value = 'lbf/C'; cvalue.value = value.value/(0.45359237*9.80665); break;
      case 'Pa': cunits.value = 'psf'; cvalue.value = 0.3048*0.3048*value.value/(0.45359237*9.80665); break;
      case 'Pa/s': cunits.value = 'psf/s'; cvalue.value = 0.3048*0.3048*value.value/(0.45359237*9.80665); break;    

      case 'N*m/s': cunits.value = 'lbf*ft/s'; cvalue.value = value.value/(0.45359237*9.80665*0.3048); break;
      case 'N*m': cunits.value = 'lbf*ft'; cvalue.value = value.value/(0.45359237*9.80665*0.3048); break;      case 'volts': cunits = 'lbf*ft/C'; cvalue = value/(0.45359237*9.80665*0.3048); break;
      case 'ohm': cunits.value = 'lbf*ft*s/C^2'; cvalue.value = value.value/(0.45359237*9.80665*0.3048); break; 
      case 'F': cunits.value = '(C^2)/(lbf*ft)'; cvalue.value = 0.45359237*9.80665*0.3048*value.value; break;
      
      case '`C': cunits.value = '`F'; cvalue.value = value.value*1.8 + 32; break;
      //default: cunits.value = 'ps'; cvalue.value = value.value/10^12; break;
    }
    //cunits.innerHTML = +'</p>';
    console.log(cunits.textContent,cvalue.value); return cunits;
    //tmpUnits(cunits); //tmpValue(cvalue);
  } //calculate();
//return;
//function display()
  
  console.log(c,cvalue);
//})();

 /* var submit = document.querySelector('#submit');
  submit.addEventListener('click',function(event){
    event.stopPropagation();
  });*/