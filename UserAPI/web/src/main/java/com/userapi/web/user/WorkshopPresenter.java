package com.userapi.web.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WorkshopPresenter {
    @Id
    private String id;
    private String name;
    private String email;
    private String contactNumber;
    private String password;
    private String workshopProposalId;

}