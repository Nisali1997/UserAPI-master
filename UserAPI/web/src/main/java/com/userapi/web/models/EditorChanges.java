package com.userapi.web.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EditorChanges {
    @Id
    private int id;
    private String ConferenceName;
    private String Date;
    private String Venue;
    private String StartTime;
    private String Duration;
    private int numberOfAttendees;
    private int maximumAttendees;
    private Boolean approveOrDeclineEdit;

    public EditorChanges(int id, Boolean approveOrDeclineEdit) {
        this.id = id;
        this.approveOrDeclineEdit = approveOrDeclineEdit;
    }

    public EditorChanges(String conferenceName, String date, String venue, String startTime, String duration) {
        this.ConferenceName = conferenceName;
        this.Date = date;
        this.Venue = venue;
        this.StartTime = startTime;
        this.Duration = duration;
    }
}
