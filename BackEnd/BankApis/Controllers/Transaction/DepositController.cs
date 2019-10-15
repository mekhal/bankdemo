using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankApis.Model;
using BankApis.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace BankApis.Controllers.Transaction
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepositController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> GetDeposits()
        {

            try
            {
                return Ok(new
                {
                    status = "ok",
                    data = from dop in _dbContext.Deposit
                           join cust in _dbContext.Customers on dop.CustomerID equals cust.Id
                           select new DepositViewModel {
                               ID = dop.Id,
                               Amount = dop.Amount,
                               IBANNumber = cust.IBANNumber ?? string.Empty,
                               FirstName = cust.FirstName ?? string.Empty,
                               LastName = cust.LastName ?? string.Empty,
                               Email = cust.Email ?? string.Empty,
                               Created = DateTime.SpecifyKind(dop.Created, DateTimeKind.Utc)
                           }
                });
            }
            catch (Exception ex)
            {
                return Ok(new
                {
                    status = "error",
                    error = ex.Message
                });

            }
        }

        [HttpPut]
        public void AddDeposit([FromBody] DepositViewModel value)
        {

            _dbContext.Deposit.Add(new Deposit()
            {
                Id = Guid.NewGuid(),
                CustomerID = value.CustomerID,
                Amount = value.Amount,
                Created = DateTime.UtcNow
            }
            );

            _dbContext.SaveChanges();
        }
    }
}