using CCA.Application.Common.Mappings;
using CCA.Domain.Entities;

namespace CCA.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
