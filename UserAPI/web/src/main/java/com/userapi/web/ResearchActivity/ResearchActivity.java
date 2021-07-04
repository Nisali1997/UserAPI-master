package com.userapi.web.ResearchActivity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor

public class ResearchActivity {
    @Id
    private String id;
    private String type;
    private String presenter_email;
    private String conference_name;
    private String date;
    private double amount;
    private String payment_method;
}
