using System;
using sc = System.Console;

namespace willieSeed{
  internal class Program{
    public static void Main(){
      sc.WriteLine("I am lost at Sea");
      PlayShape();
    }
    public static void PlayShape(){
      var s1 = new Square(2.3);
      var c1 = new Circle(1.15);
      var t1 = new Triangle(2.3,2.3);
      var sp1 = new Sphere(1.15);
      var cu1 = new Cube(2.3);

      var arr = new Shape[]{s1,c1,t1,sp1,cu1};

      foreach(var item in arr){ item.Print(); }    
    }
  }
}
