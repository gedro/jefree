package org.jefree.database;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories("org.jefree")
@EntityScan("org.jefree.*")
@EnableTransactionManagement
public class DatabaseConfiguration {
}
