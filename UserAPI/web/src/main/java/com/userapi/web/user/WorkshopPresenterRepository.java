package com.userapi.web.user;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface WorkshopPresenterRepository extends MongoRepository<WorkshopPresenter, String> {

    List<WorkshopPresenter> findByWorkshopProposalId(String workshopProposalId);

    // @Query("{email : ?0}")
    // List<WorkshopPresenter> findByEmail(String email);

    @Query("{email: ?0, password: ?1}")
    List<WorkshopPresenter> findByEmail(String email, String password);

    @Query(value = "{email: ?0, password: ?1}", fields = "{id:1}")
    String getWorkshopPresenterID(String email, String password);

    @Query("{email: ?0, password: ?1}")
    WorkshopPresenter findWorkshoppresenter(String email, String password);

}
