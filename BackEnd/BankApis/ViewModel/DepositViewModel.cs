using BankApis.Database;
using BankApis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankApis.ViewModel
{
    public class DepositViewModel
    {
        public Guid ID { get; set; }

        public Double Amount { get; set; }

        public Guid CustomerID { get; set; }

        public string IBANNumber { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public DateTime Created { get; set; }
    }
}
