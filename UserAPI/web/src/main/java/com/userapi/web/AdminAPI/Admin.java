package com.userapi.web.AdminAPI;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
public class Admin {
    @Id
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private String password;

    public Admin(String id, String name, String email, String contactNumber,String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.password = password;
    }

    public Admin(String name, String email, String contactNumber,String password) {
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.password = password;
    }
}
