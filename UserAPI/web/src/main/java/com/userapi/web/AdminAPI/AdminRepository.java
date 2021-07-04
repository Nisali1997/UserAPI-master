package com.userapi.web.AdminAPI;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AdminRepository extends MongoRepository<Admin, String> {

    @Query("{email: ?0, password: ?1}")
    Admin findAdmin(String email, String password);

}
