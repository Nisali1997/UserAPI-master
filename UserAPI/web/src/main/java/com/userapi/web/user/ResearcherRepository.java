package com.userapi.web.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ResearcherRepository extends MongoRepository<Researcher, String> {

    @Query("{email: ?0, password: ?1}")
    Researcher findResearcher(String email, String password);

}
