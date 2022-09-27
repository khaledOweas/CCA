global using CCA.Domain.Common;
global using CCA.Domain.Entities;
global using CCA.Domain.Enums;
global using CCA.Domain.Events;
global using CCA.Domain.Exceptions;
global using CCA.Domain.ValueObjects;

//dotnet ef migrations add "AddingPatientVisitAndConfigurations" --project src/Infrastructure --startup-project src/WebUI --output-dir Persistence/Migrations --msbuildprojectextensionspath
//dotnet ef database update --project src/Infrastructure --startup-project src/WebUI