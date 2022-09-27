namespace  CCA.Domain.Entities
{
    public class Visit:BaseAuditableEntity
    {
        public int PatientId { get; set; }
        public Patient? Patient { get; set; }
    }
}