package com.userapi.web.EditorAPI;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EditorRepository extends MongoRepository<Editor, String> {

    @Query("{email: ?0, password: ?1}")
    Editor findEditor(String email, String password);
}
