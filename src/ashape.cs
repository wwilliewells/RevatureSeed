using System;
using sc = System.Console;

namespace willieSeed{

  internal abstract class AShape: Shape{
    //public virtual double Area(){ return 0; }
    public virtual double Perimeter(){ return 0; }
    public virtual double Volume(){ return 0; }
    public virtual double Check(double checkValue){
      if(checkValue > 0){ return checkValue; }else{ return 0.1; }
    }
    public virtual void Print(){
      sc.WriteLine("Shape: {0:G}, Sides: {1:N}, Volume: {2:F}, Perimeter: {3:F} ",
        Name(),SideCount(),Volume(),Perimeter());
    }
    public virtual string Name(){ return ""; } 
    public int SideCount(){ return NumberOfSides; }

    protected int NumberOfSides{ 
      get{ return _sides; } 
      set{ _sides = value > 0 ? value : 1; }
    }
    
    //#region FIELDS . . . #endregion
    private int _sides = default(int);
  }
}
