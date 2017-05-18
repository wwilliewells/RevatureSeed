using System;
using System.Collections.Generic;
using web.model;

namespace web{

  public class ConvertCollection{
    //public ConvertCollection(){}
    
    public UnitConvert Calculate(double value,string units){
      var convert= new UnitConvert();
      // crazy long logic
      switch(units){
        case "hz": 
          convert.Measure= "Frequency";
          convert.Units= "radians*hz";
          convert.Converters[0]= 2*Math.PI; 
          convert.Value= convert.Converters[0]*value; 
          break;
        case "kg": 
          convert.Measure= "Mass"; 
          convert.Units= "lbm";
          convert.Converters[0]= 1/0.45359237;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "kg/s": 
          convert.Measure= "Damping"; 
          convert.Units= "lbm/s";
          convert.Converters[0]= 1/0.45359237;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "W/m^2": 
          convert.Measure= "Intensity"; 
          convert.Units= "lbm/s^3";
          convert.Converters[0]= 1/0.45359237;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "T": 
          convert.Measure= "Magnetic Field";
          convert.Units= "lbm/(C*s)"; 
          convert.Converters[0]= 1/0.45359237;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m":  
          convert.Measure= "Displacement";
          convert.Units= "ft"; 
          convert.Converters[0]= 1/0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m/s":  
          convert.Measure= "Speed";
          convert.Units= "ft/s"; 
          convert.Converters[0]= 1/0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m/s^2": 
          convert.Measure= "Acceleration";
          convert.Units= "ft/s^2"; 
          convert.Converters[0]= 1/0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m/s^3": 
          convert.Measure= "Jerk";
          convert.Units= "ft/s^3"; 
          convert.Converters[0]= 1/0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m^2": 
          convert.Measure= "Area";
          convert.Units= "ft^2"; 
          convert.Converters[0]= 1/(0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m^2/s": 
          convert.Measure= "kinematic Viscosity";
          convert.Units= "ft^2/s"; 
          convert.Converters[0]= 1/(0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m^2/s^2": 
          convert.Measure= "Specific Internal Energy";
          convert.Units= "ft^2/s^2"; 
          convert.Converters[0]= 1/(0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break; 
        case "m^3": 
          convert.Measure= "Volume";
          convert.Units= "ft^3";  
          convert.Converters[0]= 1/(0.3048*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "m^3/s": 
          convert.Measure= "Flow Rate";
          convert.Units= "ft^3/s";  
          convert.Converters[0]= 1/(0.3048*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "C/(m*s)": 
          convert.Measure= "Magnetization";
          convert.Units= "C/(ft*s)";  
          convert.Converters[0]= 0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "kg*m": 
          convert.Measure= "Drag";
          convert.Units= "lbm*ft";   
          convert.Converters[0]= 1/(0.45359237*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "kg*m^2": 
          convert.Measure= "Inertia";
          convert.Units= "lbm*ft^2";  
          convert.Converters[0]= 1/(0.45359237*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "Wb": 
          convert.Measure= "Magnetic Flux";
          convert.Units= "lbm*ft^2/(C*s)"; 
          convert.Converters[0]= 1/(0.45359237*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break; 
        case "kg*m^3": 
          convert.Measure= " ";
          convert.Units= "lbm*ft^3";
          convert.Converters[0]= 1/(0.45359237*0.3048*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "kg/m^3": 
          convert.Measure= "Density";
          convert.Units= "lbm/ft^3"; 
          convert.Converters[0]= 0.3048*0.3048*0.3048/0.45359237;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "H": 
          convert.Measure= "Inductance";
          convert.Units= "lbm*ft^2/C^2"; 
          convert.Converters[0]= 1/(0.45359237*0.3048*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "H/m": 
          convert.Measure= "Permeability";
          convert.Units= "lbm*ft/C^2"; 
          convert.Converters[0]= 1/(0.45359237*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;

        case "J": 
          convert.Measure= "Energy";
          convert.Units= "BTU"; 
          convert.Converters[0]= 1/1055.056;   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "W": 
          convert.Measure= "Power";
          convert.Units= "BTU/s"; 
          convert.Converters[0]= 1/1055.056;   
          convert.Value= convert.Converters[0]*value;         
          break;

        case "N*s": 
          convert.Measure= "Momentum";
          convert.Units= "lbf*s"; 
          convert.Converters[0]= 1/(0.45359237*9.80665);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "N": 
          convert.Measure= "Force";
          convert.Units= "lbf"; 
          convert.Converters[0]= 1/(0.45359237*9.80665);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "N/C": 
          convert.Measure= "Electric Field";
          convert.Units= "lbf/C"; 
          convert.Converters[0]= 1/(0.45359237*9.80665);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "Pa": 
          convert.Measure= "Pressure";
          convert.Units= "psf"; 
          convert.Converters[0]= 0.3048*0.3048/(0.45359237*9.80665);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "Pa/s": 
          convert.Measure= "Spectral Emittance";
          convert.Units= "psf/s"; 
          convert.Converters[0]= 0.3048*0.3048/(0.45359237*9.80665);   
          convert.Value= convert.Converters[0]*value;         
          break; 

        case "N*m/s": 
          convert.Measure= "Power";
          convert.Units= "lbf*ft/s"; 
          convert.Converters[0]= 1/(0.45359237*9.80665*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "N*m": 
          convert.Measure= "Energy";
          convert.Units= "lbf*ft"; 
          convert.Converters[0]= 1/(0.45359237*9.80665*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;      
        case "volts": 
          convert.Measure= "Voltage";
          convert.Units= "lbf*ft/C";  
          convert.Converters[0]= 1/(0.45359237*9.80665*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break;
        case "ohm": 
          convert.Measure= "Resistance";
          convert.Units= "lbf*ft*s/C^2"; 
          convert.Converters[0]= 1/(0.45359237*9.80665*0.3048);   
          convert.Value= convert.Converters[0]*value;         
          break; 
        case "F": 
          convert.Measure= "Capacitance";
          convert.Units= "(C^2)/(lbf*ft)"; 
          convert.Converters[0]= 0.45359237*9.80665*0.3048;   
          convert.Value= convert.Converters[0]*value;         
          break;
      
        case "`C": 
          convert.Measure= "Temperature";
          convert.Units= "`F"; 
          convert.Converters[0]= 1.8;
          convert.Converters[1]= 32;   
          convert.Value= convert.Converters[0]*value+convert.Converters[1];         
          break;
        default: 
          convert.Measure= " ";
          convert.Units= units; 
          convert.Converters[0]= 1;   
          convert.Value= convert.Converters[0]*value;         
          break;
      } 
      return convert;
    }
  }
}
