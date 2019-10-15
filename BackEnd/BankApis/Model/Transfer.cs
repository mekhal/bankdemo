using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankApis.Model
{
    public class Transfer
    {
        public Guid Id { get; set; }

        public Guid TransferFromID { get; set; }

        public Guid TransferToID { get; set; }

        public Double Amount { get; set; }

        public DateTime Created { get; set; }
    }
}
