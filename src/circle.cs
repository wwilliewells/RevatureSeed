namespace willieSeed{
  internal class Circle : AShape {
    public Circle(double radius){ Radius = radius; NumberOfSides = 1; }

    public override double Volume(){ return PI*Radius*Radius; }
    public override double Perimeter(){ return 2*PI*Radius; }

    // properties
    public double Radius{
      get{ return _radius; } 
      set{  _radius = Check(value); } 
    }

    // fields
    private double _radius = default(double);
    private double PI = 3.1415926535; // Math.PI  
  }
}
