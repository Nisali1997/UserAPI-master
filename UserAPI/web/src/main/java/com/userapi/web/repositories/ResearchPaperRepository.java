package com.userapi.web.repositories;

import com.userapi.web.models.ResearchPaper;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ResearchPaperRepository extends MongoRepository<ResearchPaper, String> {
    @Query("{approvedStatus : ?0}")
    List<ResearchPaper> findByApprovedStatus(boolean approvedStatus);


}
