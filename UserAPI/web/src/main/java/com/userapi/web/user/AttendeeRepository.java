package com.userapi.web.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AttendeeRepository extends MongoRepository<Attendee, String> {

    @Query("{email: ?0, password: ?1}")
    Attendee findAttendee(String email, String password);

}
