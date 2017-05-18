using System;

namespace web.model{

  public class UnitConvert{
    public string Measure{ 
      get; 
      set;
    }
    public double Value{ 
      get; 
      set;
    }
    public string Units{ 
      get; 
      set;
    }
    public double[] Converters= new double[3];
  }
}
