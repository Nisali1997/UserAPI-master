package com.userapi.web.repositories;

import com.userapi.web.models.EditorChanges;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EditorChangesRepository extends MongoRepository<EditorChanges,Integer> {

}
