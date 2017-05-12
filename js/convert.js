(function(){
  var units = document.querySelector('#units');
  var value = document.querySelector('#value');
  var cunits = document.querySelector('#cunits');
  var cvalue = document.querySelector('#cvalue');

  var convert = document.querySelector('#convert');
  convert.addEventListener('click',function(event){
    event.stopPropagation();
    // crazy long logic
    switch(units){
      case 'hz': cunits = 'radians*hz'; cvalue = 2*Math.PI*value; break;
      
      case 'kg': cunits = 'lbm'; cvalue = value/0.45359237; break;
      case 'kg/s': cunits = 'lbm/s'; cvalue = value/0.45359237; break;
      case 'W/m^2': cunits = 'lbm/s^3'; cvalue = value/0.45359237; break;
      case 'T': cunits = 'lbm/(C*s)'; cvalue = value/0.45359237; break;
      
      case 'm': cunits = 'ft'; cvalue = value/0.3048; break;
      case 'm^2': cunits = 'ft^2'; cvalue = value/(0.3048*0.3048); break;
      case 'm^3': cunits = 'ft^3'; cvalue = value/(0.3048*0.3048*0.3048); break;
      case 'm/s': cunits = 'ft/s'; cvalue = value/0.3048; break;
      case 'm^2/s': cunits = 'ft^2/s'; cvalue = value/(0.3048*0.3048); break;
      case 'm^3/s': cunits = 'ft^3/s'; cvalue = value/(0.3048*0.3048*0.3048); break;
      case 'm/s^2': cunits = 'ft/s^2'; cvalue = value/0.3048; break;
      case 'm/s^3': cunits = 'ft/s^3'; cvalue = value/0.3048; break;

      case 'kg*m/s': cunits = 'lbm*ft/s'; cvalue = value/(0.45359237*0.3048); break;
      case 'N': cunits = 'lbf'; cvalue = value/(0.45359237*9.80665); break;
      case 'kg*m^2': cunits = 'lbm*ft^2'; cvalue = value/(0.45359237*0.3048*0.3048); break;
      case 'J': cunits = 'BTU'; cvalue = value/(1054.5); break;
      case 'W': cunits = 'BTU/s'; cvalue = value/(1054.5); break;
      //case 'W': cunits = 'ft*lbf/s'; cvalue = 0.615*value/(0.45359237*0.3048*0.3048); break;
      case 'volts': cunits = 'ft*lbf/C'; cvalue = 0.615*value/(0.45359237*0.3048*0.3048); break;
      case 'kg*m^3': cunits = 'lbm*ft^3'; cvalue = value/(0.45359237*0.3048*0.3048*0.3048); break;
      case 'Pa': cunits = 'psf'; cvalue = 0.3048*0.3048*value/(0.45359237*9.80665); break;
    }
      // elasticity kg/(s*s) pressure*distance disputed
    // electric field kg*m/(C*s*s)
    // pressure kg/(m*s*s)
    // Capacitance C*C*s*s/(kg*m*m)
    // conductance C*C*s/(kg*m*m)
    // reluctance C*C/(kg*m*m)
    // conductivity C*C*s/(kg*m*m*m)
    // permeability kg*m/(C*C)
    // inductance kg*m*m/(C*C)
    // resistance kg*m*m/(C*C*s)
    // resiistivity kg*m*m*m/(C*C*s)
    // angle radian
    // angular velocity radian/s
    // angular acceleration radian/(s*s)
    // angular momentum radian*kg*m*m/s
    // torque radian*kg*m*m/(s*s)
    // Temperature degrees C
    // pixel?

  //   if(fn.value.length > 0){ c.name = fn.value; }
  //   else{ console.log('no name'); return; }
  //   if(email.value.length > 0){ c.email = email.value; }
  //   else{ console.log('no email'); return; }
  //   if(msg.value.length > 0){ c.message = msg.value; }
  //   else{ console.log('no message'); return; }

  //   console.log(c.name,c.email,c.message);
  });
})();

  var submit = document.querySelector('#submit');
  submit.addEventListener('click',function(event){
    event.stopPropagation();
  });