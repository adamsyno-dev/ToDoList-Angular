namespace ToDoList_Angular.Server.Models.DataBase
{
    public class ListItem
    {
        public long ListItemId { get; set; }
        public long ListId { get; set; }
        public string Text { get; set; }    
        public bool IsComplete { get; set; }

    }
}
