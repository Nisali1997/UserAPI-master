package com.userapi.web.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Activity {
    @Id
    private String id;
    @Field("type")
    private String type;
    @Field("date")
    private LocalDateTime date = java.time.LocalDateTime.now();
    @Field("description")
    private String description;
    @Field("userId")
    private String userId;

}
