using BankApis.Database;
using BankApis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankApis.ViewModel
{
    public class TransferViewModel
    {
        public Guid ID { get; set; }

        public Guid TransferFromID { get; set; }

        public Guid TransferToID { get; set; }

        public Double Amount { get; set; }

        public DateTime Created { get; set; }
    }

}
