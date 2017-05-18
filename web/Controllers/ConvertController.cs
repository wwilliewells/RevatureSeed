using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using web.model;
using web;

namespace web.Controllers{
  [EnableCors("AllowCORS")]
  [Route("api/[controller]")]
  public class ConvertController : Controller{
    // GET api/values
    [HttpGet("{data, units}")]
    public UnitConvert Get(double data,string units){
      var c= new ConvertCollection();
      return c.Calculate(data,units);
    }
  }
}
