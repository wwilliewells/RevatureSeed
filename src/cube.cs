namespace willieSeed{
  internal class Cube : Square {
    public Cube(double width) : base(width){ NumberOfSides = 6; }

    public override double Volume(){ return base.Volume()*base.Width; }
    public override double Perimeter(){ return 6*base.Width*base.Width; }
    public override string Name(){ return "Cube"; }
  }
}
