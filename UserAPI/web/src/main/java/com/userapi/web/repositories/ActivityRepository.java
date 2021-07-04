package com.userapi.web.repositories;

import com.userapi.web.models.Activity;
import com.userapi.web.models.Conference;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActivityRepository extends MongoRepository<Activity, String> {

}
