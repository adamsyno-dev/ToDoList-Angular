namespace ToDoList_Angular.Server.Services
{
    using ToDoList_Angular.Server.Models.DataBase;
    using ToDoList_Angular.Server.Models.Controller;
    using ToDoList_Angular.Server.BL;   


    public class ToDoList_Service
    {
        public List<ToDoList_Modal> GetToDoLists()
        {
            //Prod: Get data from database using BL methods

            #region Demo: Seed Data
            List<ToDoList_Modal> data = new List<ToDoList_Modal>()
            {
                new ToDoList_Modal
                {
                    Text = "Task 1",
                    IsComplete = false
                },
                new ToDoList_Modal
                {
                    Text = "Task 2",
                    IsComplete = true
                },
                new ToDoList_Modal
                {
                    Text = "Task 3",
                    IsComplete = false
                }
            };
            #endregion

            return data;
        }
    }
}
