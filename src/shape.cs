using System;

namespace willieSeed{

  internal interface Shape{
    double Perimeter();
    double Volume();
    void print();

    //#region FIELDS . . . #endregion
    int SideCount();
  }
}
