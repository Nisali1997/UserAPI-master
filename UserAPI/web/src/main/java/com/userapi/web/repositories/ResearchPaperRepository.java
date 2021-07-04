package com.userapi.web.repositories;

import com.userapi.web.models.ResearchPaper;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResearchPaperRepository extends MongoRepository<ResearchPaper, String> {

}
