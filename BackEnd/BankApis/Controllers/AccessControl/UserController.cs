using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankApis.Model;
using BankApis.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace BankApis.Controllers.AccessControl
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> GetCustomers()
        {

            try
            {
                return Ok(new
                {
                    status = "ok",
                    data = _dbContext.Customers.Select(r=>r.ToViewModel()).ToList()
                });
            }
            catch(Exception ex) {
                return Ok(new
                {
                    status = "error",
                    error = ex.Message
                });

            }
        }

        [HttpPut]
        public void AddCustomer([FromBody] CustomerViewModel value)
        {

            _dbContext.Customers.Add(new Customer()
                { Id = Guid.NewGuid(),
                IBANNumber = value.IBANNumber,
                FirstName = value.FirstName,
                LastName = value.LastName,
                Email = value.Email,
                Created = DateTime.UtcNow
            }
            );

            _dbContext.SaveChanges();
        }
    }
}