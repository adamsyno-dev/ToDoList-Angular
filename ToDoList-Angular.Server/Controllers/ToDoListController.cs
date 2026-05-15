using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using ToDoList_Angular.Server.Models.Controller;
using ToDoList_Angular.Server.Services;
using Microsoft.AspNetCore.Authorization;

namespace ToDoList_Angular.Server.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoListController : ControllerBase
    {
        [HttpGet(Name = "GetToDoList")]
        public List<ToDoList_Modal> Get()
        {
            List<ToDoList_Modal> data = (new ToDoList_Service()).GetToDoLists();

            return data;
        }
    }
}
