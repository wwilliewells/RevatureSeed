using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using web.model;

namespace web.Controllers{
 /* [EnableCors(origins: "http://127.0.0.1:8000", headers: "*",
  methods: "*")]*/
  [Route("api/[controller]")]
  public class PersonController : Controller{
    // GET api/values
    [HttpGet]
    public Person Get(){
      var p = new Person(){
        Id=23,
        FirstName="William",
        LastName="Wells",
        Email="wwilliewells@gmail.com"
      };
      return p;
    }
  }
}
