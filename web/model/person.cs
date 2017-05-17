using System;
using sc = System.Console;

namespace web.model{

  public class Person{
    //public Person();
    /*public Person(string firstName,string lastName,string email,int id){
      FirstName=firstName; LastName=lastName; Email=email; Id=id;
    }*/
    public string FirstName{ 
      get; 
      set;
    }
    public string LastName{ 
      get; 
      set;
    }
    public string Email{ 
      get; 
      set;
    }
    public int Id{ 
      get; 
      set;
    }
  }
}
