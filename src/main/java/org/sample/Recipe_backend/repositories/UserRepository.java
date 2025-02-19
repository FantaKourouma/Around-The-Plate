package org.sample.Recipe_backend.repositories;
import org.sample.Recipe_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
	// Custom method to find a user by their email
    User findByEmail(String email);
}
