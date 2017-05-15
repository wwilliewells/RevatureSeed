namespace willieSeed{

  internal class Quadrilateral{
    public Quadrilateral(){}
    public Quadrilateral(double width, double height){ _Width = width; _Height=height; }
    public double Area(){ return Width*Height; }
    public double Perimeter(){ return 2*(Width+Height); }

    // properties
    public double Width{ 
      get{ return _Width; } 
      set{ if(value > 0){ _Width = value; }else{ _Width = 0.1; } } 
    }
    public double Height{ 
      get{ return _Height; } 
      set{ if(value > 0){ _Height = value; }else{ _Height = 0.1; } }
    }

    //#region FIELDS . . . #endregion
    private double _Width = default(double);
    private double _Height = default(double);
  }
}
