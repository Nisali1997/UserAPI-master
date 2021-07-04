package com.userapi.web.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;
@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Activity {
    @Id
    private String id;
    private String type;
    private Date date;
    private String description;
    private String userId;
}
