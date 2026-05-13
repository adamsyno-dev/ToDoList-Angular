namespace ToDoList_Angular.Server.Models
{
    public class ListItem
    {
        public long ListItemId { get; set; }
        public long ListId { get; set; }
        public string Name { get; set; }    
        public bool IsComplete { get; set; }

    }
}
