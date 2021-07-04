package com.userapi.web.EditorAPI;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Editor {
    @Id
    private String id;
    private String Name;
    private String email;
    private String ContactNumber;
    private String password;
}
