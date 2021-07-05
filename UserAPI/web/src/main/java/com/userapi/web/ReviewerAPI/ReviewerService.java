package com.userapi.web.ReviewerAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.userapi.web.models.ResearchPaper;
import com.userapi.web.models.WorkshopProposal;
import com.userapi.web.repositories.ResearchPaperRepository;
import com.userapi.web.repositories.WorkshopRepository;

@Service
public class ReviewerService {
    private final ReviewerRepository reviewerRepository;
    private final ResearchPaperRepository researchPaperRepository;
    private final WorkshopRepository workshopRepository;

    @Autowired
    public ReviewerService(ReviewerRepository reviewerRepository, ResearchPaperRepository researchPaperRepository,
            WorkshopRepository workshopRepository) {
        this.reviewerRepository = reviewerRepository;
        this.researchPaperRepository = researchPaperRepository;
        this.workshopRepository = workshopRepository;
    }

    public List<Reviewer> getAllReviewers() {
        return reviewerRepository.findAll();
    }

    public void addNewReviewer(Reviewer reviewer) {

        reviewerRepository.save(reviewer);
    }

    // Approve Decline Workshop
    public void approveDeclineWorkshop(WorkshopProposal workshopProposal) {
        WorkshopProposal wProposal = workshopRepository.findById(workshopProposal.getId()).orElse(null);
        wProposal.setWorkshopProposalName(workshopProposal.getWorkshopProposalName());
        wProposal.setWorkshopProposalId(workshopProposal.getWorkshopProposalId());
        wProposal.setApprovedStatus(workshopProposal.getApprovedStatus());
        wProposal.setTBDStatus(workshopProposal.getTBDStatus());
        workshopRepository.save(wProposal);
    }

    public void approveDeclinerResearchPaper(ResearchPaper researchPaper) {
        ResearchPaper rPaper = researchPaperRepository.findById(researchPaper.getId()).orElse(null);
        rPaper.setResearchPaperName(researchPaper.getResearchPaperName());
        rPaper.setResearchPaperId(researchPaper.getResearchPaperId());
        rPaper.setApprovedStatus(researchPaper.getApprovedStatus());
        rPaper.setTBDStatus(researchPaper.getTBDStatus());
        researchPaperRepository.save(rPaper);
    }

    public List<ResearchPaper> getAllResearchPapers() {
        return researchPaperRepository.findAll();
    }

    // Get all Workshops
    public List<WorkshopProposal> getAllWorkshops() {
        return workshopRepository.findAll();
    }

    public WorkshopProposal getWokshopProposal(String id) {
        return workshopRepository.findById(id).orElse(null);
        // return workshopRepository.findByWorkshopProposalId(id);
    }

    public ResearchPaper getResearchPaper(String id) {
        return researchPaperRepository.findById(id).orElse(null);
    }
}
