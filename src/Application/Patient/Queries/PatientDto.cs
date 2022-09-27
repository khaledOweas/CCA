using CCA.Application.Common.Mappings;
using CCA.Domain.Entities;
using CCA.Domain.Enums;

namespace CCA.Application.Patietn.Queries
{
    public class PatientDto : IMapFrom<Patient>
    {
        public string? Name { get; set; }
        public DateTime BirthDate { get; set; }

        public Gender Gender { get; set; }

        public string? Phone { get; set; }

        public List<Visit>? Visits { get; set; }
    }
}