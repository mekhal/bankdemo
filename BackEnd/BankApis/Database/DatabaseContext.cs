using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankApis.Model;

namespace BankApis.Database
{
    public class DatabaseContext: DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Deposit> Deposit { get; set; }
        public DbSet<Transfer> Transfer { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder { DataSource = "BankDB.db" };
            var connectionString = connectionStringBuilder.ToString();
            var connection = new SqliteConnection(connectionString);

            optionsBuilder.UseSqlite(connection);
        }

    }
}
