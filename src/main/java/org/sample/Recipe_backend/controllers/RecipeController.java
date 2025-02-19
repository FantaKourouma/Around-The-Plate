package org.sample.Recipe_backend.controllers;

import org.sample.Recipe_backend.models.Recipe;
import org.sample.Recipe_backend.models.User;
import org.sample.Recipe_backend.repositories.RecipeRepository;
import org.sample.Recipe_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipes")

public class RecipeController {
	

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> createRecipe(@RequestBody Recipe recipe) {
        // Assuming the user is provided with the recipe, validate user first
        User user = userRepository.findById(recipe.getUser().getId())
                                  .orElseThrow(() -> new RuntimeException("User not found"));

        recipe.setUser(user);
        recipeRepository.save(recipe);
        return ResponseEntity.ok("Recipe added successfully!");
    }
}
