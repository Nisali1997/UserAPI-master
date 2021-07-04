package com.userapi.web.ReviewerAPI;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ReviewerRepository extends MongoRepository<Reviewer, String> {

    @Query("{email: ?0, password: ?1}")
    Reviewer findReviewer(String email, String password);
}
