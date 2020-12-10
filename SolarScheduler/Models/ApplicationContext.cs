using Microsoft.EntityFrameworkCore;

namespace SolarScheduler.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Note> Notes { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    }
}