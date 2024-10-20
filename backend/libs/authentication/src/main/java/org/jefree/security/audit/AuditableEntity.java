package org.jefree.security.audit;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Version;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditableEntity<U> {

  @CreatedBy
  @Column(name = "created_by")
  private U createdBy;

  @CreatedDate
  @Column(name = "created_date")
  private LocalDateTime createdDate;

  @LastModifiedBy
  @Column(name = "last_modified_by")
  private U modifiedBy;

  @LastModifiedDate
  @Column(name = "last_modified_date")
  private LocalDateTime lastModifiedDate;

  @Version
  private Long version;

  public U getCreatedBy() {
    return createdBy;
  }

  private void setCreatedBy(final U createdBy) {
    this.createdBy = createdBy;
  }

  public LocalDateTime getCreatedDate() {
    return createdDate;
  }

  private void setCreatedDate(final LocalDateTime createdDate) {
    this.createdDate = createdDate;
  }

  public U getModifiedBy() {
    return modifiedBy;
  }

  private void setModifiedBy(final U modifiedBy) {
    this.modifiedBy = modifiedBy;
  }

  public LocalDateTime getLastModifiedDate() {
    return lastModifiedDate;
  }

  private void setLastModifiedDate(final LocalDateTime lastModifiedDate) {
    this.lastModifiedDate = lastModifiedDate;
  }

  public Long getVersion() {
    return version;
  }

  private void setVersion(final Long version) {
    this.version = version;
  }
}