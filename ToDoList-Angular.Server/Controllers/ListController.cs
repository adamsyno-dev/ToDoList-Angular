using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList_Angular.Server.Models.Controller;
using ToDoList_Angular.Server.Services;

namespace ToDoList_Angular.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        [HttpGet(Name = "GetToDoList")]
        public List<ToDoList_Modal> Get()
        {
            List<ToDoList_Modal> data =  (new ToDoList_Service()).GetToDoLists();

            return data;
        }
    }
}
