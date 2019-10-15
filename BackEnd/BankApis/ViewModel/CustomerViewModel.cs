using BankApis.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankApis.ViewModel
{
    public class CustomerViewModel
    {
        public Guid ID { get; set; }

        public string IBANNumber { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public DateTime Created { get; set; }

    }

    public static class CustomerViewModelExtenstion
    {

        public static CustomerViewModel ToViewModel(this Customer data) {

            return new CustomerViewModel
            {
                ID = data.Id,
                IBANNumber = data.IBANNumber,
                FirstName = data.FirstName,
                LastName = data.LastName,
                Email = data.Email,
                Created = DateTime.SpecifyKind(data.Created, DateTimeKind.Utc)
            };
        }
    }
}
