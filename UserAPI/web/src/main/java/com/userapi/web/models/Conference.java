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
public class Conference {
    @Id
    private String id;

    //Unique Attribute
    private String conferenceName;

    private String date;
    private String venue;
    private String startTime;
    private String duration;
    private int numberOfAttendees;
    private int maximumAttendees;
    private boolean approved;

    public boolean getApproved() {
        return this.approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

}
