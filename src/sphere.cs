namespace willieSeed{
  internal class Sphere : Circle {
    public Sphere(double radius) : base(radius){}

    public override double Volume(){ return base.Volume()*base.Radius*4/3; }
    public override double Perimeter(){ return base.Perimeter()*2*base.Radius; }
  }
}
