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
public class WorkshopProposal {
    @Id
    private String id;
    private String workshopProposalId;
    private String workshopProposalName;
    private boolean approvedStatus;
    private boolean TBDStatus;

    public boolean getApprovedStatus() {
        return this.approvedStatus;
    }

    public boolean getTBDStatus() {
        return this.TBDStatus;
    }

    public void setApprovedStatus(boolean ApprovedStatus) {
        this.approvedStatus = ApprovedStatus;
    }

    public void setTBDStatus(boolean TBDStatus) {
        this.TBDStatus = TBDStatus;
    }

}
