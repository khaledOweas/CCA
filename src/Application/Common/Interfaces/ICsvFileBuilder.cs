using CCA.Application.TodoLists.Queries.ExportTodos;

namespace CCA.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
