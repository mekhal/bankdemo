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
    public class TransferController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> GetTransfers()
        {

            try
            {
                return Ok(new
                {
                    status = "ok",
                    data = from trf in _dbContext.Transfer
                           join custF in _dbContext.Customers on trf.TransferFromID equals custF.Id
                           join custT in _dbContext.Customers on trf.TransferToID equals custT.Id
                           select new
                           {
                               ID = trf.Id,
                               From = custF.IBANNumber,
                               FromName = custF.FirstName + " " + custF.LastName,
                               To = custT.IBANNumber,
                               ToName = custT.FirstName + " " + custT.LastName,
                               Amount = trf.Amount,
                               Created = trf.Created
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
        public void AddCustomer([FromBody] TransferViewModel value)
        {
            _dbContext.Transfer.Add(new Transfer()
            {
                Id = Guid.NewGuid(),
                TransferFromID = value.TransferFromID,
                TransferToID = value.TransferToID,
                Amount = value.Amount - (value.Amount * 0.001),
                Created = DateTime.UtcNow
            }
            );

            _dbContext.SaveChanges();
        }
    }
}