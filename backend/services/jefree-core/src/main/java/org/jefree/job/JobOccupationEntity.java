package org.jefree.job;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.jefree.database.DefaultView;
import org.jefree.security.audit.AuditableEntity;

@Entity(name = "JobOccupation")
@Table(
  name = "job_occupations",
  uniqueConstraints = {
    @UniqueConstraint(columnNames = {"url", "job_id"})
  }
)
public class JobOccupationEntity extends AuditableEntity<String> {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", updatable = false, nullable = false)
  private Long id;

  @NotBlank
  @Column(name="url", updatable = false, nullable = false)
  private String url;

  @NotBlank
  @Column(name="title", updatable = false, nullable = false)
  private String title;

  @Min(1)
  @Column(name="month", updatable = true, nullable = false)
  private int month;

  @ManyToOne(cascade = CascadeType.REFRESH)
  @JoinColumn(name = "job_id", referencedColumnName = "id", nullable = false, updatable = false)
  @JsonView(DefaultView.Ignore.class)
  private JobEntity job;

  public Long getId() {
    return id;
  }

  public void setId(final Long id) {
    this.id = id;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(final String url) {
    this.url = url;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(final String title) {
    this.title = title;
  }

  public int getMonth() {
    return month;
  }

  public void setMonth(final int month) {
    this.month = month;
  }

  public JobEntity getJob() {
    return job;
  }

  public void setJob(final JobEntity job) {
    this.job = job;
  }
}