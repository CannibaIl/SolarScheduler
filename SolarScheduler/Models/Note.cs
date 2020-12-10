using System;


namespace SolarScheduler.Models
{
    public class Note
    {
        public DateTime CreationDate { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Select { get; set; }
        public DateTime Time { get; set; }
        public string Staus { get; set; }

        internal static string FirstOrDefault(object p)
        {
            throw new NotImplementedException();
        }

        internal static string FirstOrDefault(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }
    }
}