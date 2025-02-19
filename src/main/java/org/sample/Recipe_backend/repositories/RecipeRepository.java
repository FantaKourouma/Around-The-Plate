package org.sample.Recipe_backend.repositories;
import org.sample.Recipe_backend.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long>{}
