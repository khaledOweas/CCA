using CCA.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CCA.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }

    DbSet<Patient> Patients{get;}

    DbSet<Visit> Visits {get;}

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
