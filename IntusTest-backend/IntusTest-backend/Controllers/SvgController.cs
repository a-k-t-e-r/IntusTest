using IntusTest_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

namespace IntusTest_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SvgController : ControllerBase
    {
        [HttpGet]
        [Route("getdata")]
        public object GetData()
        {
            try
            {
                string allPerimeter = System.IO.File.ReadAllText(@"./files/data.json");

                object jsonObject = JsonConvert.DeserializeObject(allPerimeter);
                
                return jsonObject;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpPost]
        [Route("setdata")]
        public void SetData(SvgModel perimeters)
        {
            try
            {
                System.IO.File.WriteAllText(@"./files/data.json", JsonConvert.SerializeObject(perimeters));
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
