using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankApis.Database;
using Microsoft.AspNetCore.Mvc;

namespace BankApis.Controllers
{
    public class BaseController : Controller
    {
        internal readonly DatabaseContext _dbContext = new DatabaseContext();

        public IActionResult Index()
        {
            return View();
        }
    }
}