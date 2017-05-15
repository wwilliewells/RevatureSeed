using System;
using sc = System.Console;

namespace willieSeed{
  internal class Program{
    public static void Main(){
      sc.WriteLine("I am lost at Sea");
      PlaySquare();
    }
    public static void PlaySquare(){
      //var s = new Square(){Width = 1.1};
      var s1 = new Square(2.3);
      //Square s2(2.3);

      sc.WriteLine(s1.Perimeter());
      sc.WriteLine("Area: {0:F}, Perimeter: {1:F} ",s1.Area(),s1.Perimeter());
    }
  }
}
