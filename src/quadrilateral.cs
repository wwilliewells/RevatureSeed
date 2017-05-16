using sc = System.Console;

namespace willieSeed{

  internal class Quadrilateral : AShape{
    public Quadrilateral(double width, double height){ 
      Width = width; Height = height; NumberOfSides = 4;
    }
    public override double Volume(){ return Width*Height; }
    public override double Perimeter(){ return 2*(Width+Height); }

    // properties
    public double Width{ 
      get{ return _width; } 
      set{ _width = Check(value); } 
    }
    public double Height{ 
      get{ return _height; } 
      set{  _height = Check(value); }
    }

    // fields
    private double _width = default(double);
    private double _height = default(double);
  }
}

