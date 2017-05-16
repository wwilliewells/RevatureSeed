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
    public virtual void print(){
      sc.WriteLine("Sides: {0:N}, Volume: {1:F}, Perimeter: {2:F} ",
        SideCount(),Volume(),Perimeter());
    }

    protected int NumberOfSides{ 
      get{ return _sides; } 
      set{ _sides = value; }
    }
    
    //#region FIELDS . . . #endregion
    public int SideCount(){ return NumberOfSides; }
    private int _sides = default(int);
  }
}
