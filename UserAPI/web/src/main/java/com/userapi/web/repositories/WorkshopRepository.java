package com.userapi.web.repositories;

import java.util.List;

import com.userapi.web.models.WorkshopProposal;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkshopRepository extends MongoRepository<WorkshopProposal, String> {

    List<WorkshopProposal> findByWorkshopProposalId(String workshopProposalId);

}
