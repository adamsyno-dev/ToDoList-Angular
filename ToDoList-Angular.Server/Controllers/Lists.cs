using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ToDoList_Angular.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        [HttpGet(Name = "GetLists")]
        public string Get()
        {
            return "hello";
        }
    }
}
