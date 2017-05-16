using System;
using sc = System.Console;

namespace willieSeed{
  internal class Triangle : AShape{
    public Triangle(double base1, double height){ 
      Base = base1; Height = height; NumberOfSides = 3; 
    }
    public override double Volume(){ return Base*Height/2; }
    public override double Perimeter(){ 
      return Base+Height+Math.Sqrt(Base*Base+Height*Height); 
    }

    // properties
    public double Base{ 
      get{ return _base; } 
      set{ _base = Check(value); } 
    }
    public double Height{ 
      get{ return _height; } 
      set{ _height = Check(value); }
    }

    //#region FIELDS . . . #endregion
    private double _base = default(double);
    private double _height = default(double);
  }
}
