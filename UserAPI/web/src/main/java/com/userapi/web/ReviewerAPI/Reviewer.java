package com.userapi.web.ReviewerAPI;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Reviewer {

    @Id
    private String id;
    private String Name;
    private String Email;
    private String contactNumber;
    private String Password;
}
