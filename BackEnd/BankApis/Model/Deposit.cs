using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankApis.Model
{
    public class Deposit
    {
        public Guid Id { get; set; }

        public Guid CustomerID { get; set; }

        public Double Amount { get; set; }

        public DateTime Created { get; set; }

    }
}
