package com.userapi.web.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResearchPaper {
    @Id
    private String id;
    private String ResearchPaperId;
    private boolean ApprovedStatus;
    private boolean TBDStatus;

}
