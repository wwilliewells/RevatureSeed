namespace willieSeed{

  internal class Square : Quadrilateral{
    public Square(double width) : base(width,width){}
    public override string Name(){ return "Square"; }
  }
}
