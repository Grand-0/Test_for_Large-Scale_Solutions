using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using TestProgForLargeScaleSolutions.Modules;
using TestProgForLargeScaleSolutions.Storage;

namespace TestProgForLargeScaleSolutions.Controllers
{
    [ApiController, Route("[controller]")]
    public class ContextController : ControllerBase
    {
        private readonly DataRouter _router;
        public ContextController(IConfiguration configuration)
        {
            _router = new DataRouter(configuration.GetConnectionString("DefaultStorageConnection"));
        }

        [HttpGet("getByNums")]
        public IActionResult GetByNumbers([FromQuery] int? countSymbols, [FromQuery] bool camelCaseFilter)
        {
            DataStorage data  = _router.GetContent();

            List<string> response = new List<string>();

            foreach(string s in data.Data)
            {
                if (s.Length > countSymbols)
                    response.Add(s);
            }

            if (response.Count == 0)
                return BadRequest("Coincidences not found");

            return Ok(response);
        }

        [HttpGet("getByString")]
        public IActionResult GetBySubString([FromQuery] string clientString, [FromQuery] bool camelCaseFilter)
        {
            if (clientString == null)
                return BadRequest("Your string cannot be null");

            DataStorage data = _router.GetContent();

            List<string> response = new List<string>();

            if (camelCaseFilter)
            {
                foreach(string s in data.Data)
                {
                    int position = s.ToLower().IndexOf(clientString.ToLower());
                    
                    if (position >= 0)
                    {
                        response.Add(s);
                    }
                }
            }
            else
            {
                foreach (string s in data.Data)
                {
                    int position = s.IndexOf(clientString);

                    if (position >= 0)
                    {
                        response.Add(s);
                    }
                }
            }

            if (response.Count == 0)
                return BadRequest("Coincidences not found");

            return Ok(response);
        }
    }
}
