using System;

namespace willieSeed{

  internal interface Shape{
    double Perimeter();
    double Volume();
    void Print();
    string Name();

    //#region FIELDS . . . #endregion
    int SideCount();
  }
}
