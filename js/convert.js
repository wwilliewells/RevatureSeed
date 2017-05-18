/*function calculate(){
  var units = document.getElementById('units').value;
  var value = document.getElementById('value').value;
  var cunits='';
  var cvalue=0.0;

  // crazy long logic
  switch(units){
    case 'hz': cunits = 'radians*hz'; cvalue = 2*Math.PI*value; break;
    case 'kg': cunits= 'lbm'; cvalue = value/0.45359237; break;
    case 'kg/s': cunits= 'lbm/s'; cvalue = value/0.45359237; break;
    case 'W/m^2': cunits= 'lbm/s^3'; cvalue= value/0.45359237; break;
    case 'T': cunits= 'lbm/(C*s)'; cvalue= value/0.45359237; break;
      
    case 'm': cunits= 'ft'; cvalue= value/0.3048; break;
    case 'm^2': cunits= 'ft^2'; cvalue= value/(0.3048*0.3048); break;
    case 'm^3': cunits= 'ft^3'; cvalue= value/(0.3048*0.3048*0.3048); break;
    case 'm/s': cunits= 'ft/s'; cvalue= value/0.3048; break;
    case 'm^2/s': cunits= 'ft^2/s'; cvalue= value/(0.3048*0.3048); break;
    case 'm^2/s^2': cunits= 'ft^2/s^2'; cvalue= value/(0.3048*0.3048); break;
    case 'm^3/s': cunits= 'ft^3/s'; cvalue= value/(0.3048*0.3048*0.3048); break;
    case 'm/s^2': cunits= 'ft/s^2'; cvalue= value/0.3048; break;
    case 'm/s^3': cunits= 'ft/s^3'; cvalue= value/0.3048; break;
    case 'C/(m*s)': cunits= 'C/(ft*s)'; cvalue= value*0.3048; break;

    case 'kg*m': cunits= 'lbm*ft'; cvalue= value/(0.45359237*0.3048); break;
    case 'kg*m^2': cunits= 'lbm*ft^2'; cvalue= value/(0.45359237*0.3048*0.3048); break;
    case 'Wb': cunits= 'lbm*ft^2/(C*s)'; cvalue= value/(0.45359237*0.3048*0.3048); break;
    case 'kg*m^3': cunits= 'lbm*ft^3'; cvalue= value/(0.45359237*0.3048*0.3048*0.3048); break;
    case 'kg/m^3': cunits= 'lbm/ft^3'; cvalue= 0.3048*0.3048*0.3048*value/0.45359237; break;
    case 'H': cunits= 'lbm*ft^2/C^2'; cvalue= value/(0.45359237*0.3048*0.3048); break;
    case 'H/m': cunits= 'lbm*ft/C^2'; cvalue= value/(0.45359237*0.3048); break;

    case 'J': cunits= 'BTU'; cvalue= value/(1055.056); break;
    case 'W': cunits= 'BTU/s'; cvalue= value/(1055.056); break;

    case 'N*s': cunits= 'lbf*s'; cvalue= value/(0.45359237*9.80665); break;
    case 'N': cunits= 'lbf'; cvalue= value/(0.45359237*9.80665); break;
    case 'N/C': cunits= 'lbf/C'; cvalue= value/(0.45359237*9.80665); break;
    case 'Pa': cunits= 'psf'; cvalue= 0.3048*0.3048*value/(0.45359237*9.80665); break;
    case 'Pa/s': cunits= 'psf/s'; cvalue= 0.3048*0.3048*value/(0.45359237*9.80665); break;    

    case 'N*m/s': cunits= 'lbf*ft/s'; cvalue= value/(0.45359237*9.80665*0.3048); break;
    case 'N*m': cunits= 'lbf*ft'; cvalue= value/(0.45359237*9.80665*0.3048); break;      case 'volts': cunits = 'lbf*ft/C'; cvalue = value/(0.45359237*9.80665*0.3048); break;
    case 'ohm': cunits= 'lbf*ft*s/C^2'; cvalue= value/(0.45359237*9.80665*0.3048); break; 
    case 'F': cunits= '(C^2)/(lbf*ft)'; cvalue= 0.45359237*9.80665*0.3048*value; break;
      
    case '`C': cunits= '`F'; cvalue= value*1.8 + 32; break;
    default: cunits= units; cvalue= value; break;
  }
  
  document.getElementById("cunits").value= cunits;
  document.getElementById('cvalue').value= cvalue;
}*/

function access(){
  var password= document.getElementById('password').value;
  var user= document.getElementById('userName').value;
  if(user.length <1){ 
    document.getElementById('warn').value='enter a user name';
    return false; 
  } 
  if(password.length!==7){ 
    document.getElementById('warn').value='password must be seven characters';
    return false;
  }
  document.getElementById('login').innerHTML='<legend>' +user+'</legend>';
  document.getElementById('warn').value='';
  document.getElementById('Sign').innerHTML='<legend>'+'<br>'+'</legend>';
  return true;
}

//
window.addEventListener("load", function(event){
  var submit= document.getElementById('submit');
  submit.addEventListener('click',function(event){
    event.stopPropagation();
    if(access()){
      'use strict';
      
      function ajax(url,callback){
        var xhr= new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.onreadystatechange= function(){ 
          if(xhr.readyState == 4 && xhr.status == 200){ callback(xhr.response); }
          else if(xhr.readyState==4){ console.log(xhr.response); }
        }
        xhr.send(); // not posting yet
      }

      function calculate(res){ 
        var r= JSON.parse(res); // r.Measure, r.Converters[0-2]
        document.getElementById("cunits").value= r.Units;
        document.getElementById('cvalue').value= r.Value;
      }
      var convert = document.getElementById('convert');
      convert.addEventListener('click',function(event){
        event.stopPropagation();
        
        var units = document.getElementById('units').value;
        var data = document.querySelector('#value').value;
        console.log(data,units);
        ajax('http://127.0.0.1:5000/api/convert'/* +'/'+ data +'/'+ units*/, calculate);
        event.preventDefault();
      });
    }
    event.preventDefault();
  });
});

/*(function(){
  
})();*/