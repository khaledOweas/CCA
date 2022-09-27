using CCA.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configurations
{
    public class PatientItemConfiguration : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder.Property(p=>p.Name)
            .HasMaxLength(100)
            .IsRequired();

            builder.Property(p=>p.BirthDate)
            .IsRequired();

            builder.Property(p=>p.Phone)
            .IsRequired();
        }
    }
}