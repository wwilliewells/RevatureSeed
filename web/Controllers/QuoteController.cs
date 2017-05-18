using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using web.model;
using web;

namespace web.Controllers{
  [EnableCors("AllowCORS")]
  [Route("api/[controller]")]
  public class QuoteController : Controller{
    // GET api/values
    [HttpGet]
    public Quote Get(){
      var r = new Random();
      return QuoteCollection.quotes[r.Next(0,2)];
    }
  }
}
