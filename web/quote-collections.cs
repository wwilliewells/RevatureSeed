using System.Collections.Generic;
using web.model;

namespace web{

  public static class QuoteCollection{
    //public QuoteCollection(){}
    public static List<Quote> quotes = new List<Quote>(){
      new Quote(){Id=0, Header="q", Body="w", Footer="e"},
      new Quote(){Id=0, Header="r", Body="t", Footer="y"},
      new Quote(){Id=0, Header="u", Body="i", Footer="o"}
    };
  }
}
