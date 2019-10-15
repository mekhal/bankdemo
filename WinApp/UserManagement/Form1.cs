using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Newtonsoft.Json;

namespace UserManagement
{
    public partial class Form1 : Form
    {

        IWebDriver driver;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            driver = new ChromeDriver();
            driver.Url = "http://randomiban.com/?country=Netherlands";
            txtISBN.Text = driver.FindElement(By.Id("demo")).Text;
        }

        private void btSave_Click(object sender, EventArgs e)
        {
            try
            {
                var client = new System.Net.WebClient();

                client.Headers.Add("Content-Type", "application/json");

                var data = JsonConvert.SerializeObject(new
                {
                    IBANNumber = txtISBN.Text,
                    FirstName = txtFirstName.Text,
                    LastName = txtLastName.Text,
                    Email = txtEmail.Text
                });

                client.UploadData("https://bankdemoapi.azurewebsites.net/api/user/", "PUT", Encoding.UTF8.GetBytes(data));

                MessageBox.Show("Saved successfully!");

                ResetPage();

            }
            catch {
                MessageBox.Show("Saved error!");
            }

        }

        private void ResetPage() {

            ResetISBN();
            txtFirstName.Text = string.Empty;
            txtLastName.Text = string.Empty;
            txtEmail.Text = string.Empty;
        }

        private void ResetISBN() {

            driver.FindElement(By.Id("gen_button")).Click();
            txtISBN.Text = driver.FindElement(By.Id("demo")).Text;
        }

        //driver.FindElement(By.ClassName("AddContentBTN")).Click();
        //gen_button
    }
}
