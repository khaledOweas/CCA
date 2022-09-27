namespace  CCA.Domain.Entities
{
    public class Patient: BaseAuditableEntity
    {
        public string? Name { get; set; }      
        public DateTime BirthDate { get; set; }                   

        public Gender Gender { get; set; }

        public string? Phone { get; set; }

        public List<Visit>? Visits { get; set; }
    }
}