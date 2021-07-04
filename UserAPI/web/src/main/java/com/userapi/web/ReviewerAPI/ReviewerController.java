package com.userapi.web.ReviewerAPI;

import com.userapi.web.AdminAPI.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.userapi.web.models.ResearchPaper;
import com.userapi.web.models.WorkshopProposal;

@RestController
@RequestMapping("/reviewerapi")
@CrossOrigin
public class ReviewerController {
    private final ActivityService activityService;
    private final ReviewerService reviewerService;

    @Autowired
    public ReviewerController(ActivityService activityService, ReviewerService reviewerService) {
        this.activityService = activityService;
        this.reviewerService = reviewerService;
    }

    @GetMapping("/")
    public List<Reviewer> getReviewers() {
        return reviewerService.getAllReviewers();
    }

    @GetMapping("/viewAllConferenceResearchPapers")
    public List<ResearchPaper> getResearchPapers() {
        return reviewerService.getAllResearchPapers();
    }

    @GetMapping("/viewCertainWorkshop/{id}")
    public WorkshopProposal getWorkshopById(@PathVariable String id) {
        return reviewerService.getWokshopProposal(id);
    }

    @GetMapping("/searchCertainResearchPaper/{id}")
    public ResearchPaper getResearchPaperById(@PathVariable String id) {
        return reviewerService.getResearchPaper(id);
    }

    @PostMapping("/create")
    public void registerNewReviewer(@RequestBody Reviewer reviewer) {
        activityService.addActivity("Add Reviewer",reviewer.toString());
        reviewerService.addNewReviewer(reviewer);
    }

    @PostMapping("/approveDeclineConferenceResearchPaper")
    public void approveDeclineResearchPaper(@RequestBody ResearchPaper researchPaper) {
        activityService.addActivity("Approve/Decline Research Paper", researchPaper.toString());
        reviewerService.approveDeclineConferenceResearchPaper(researchPaper);
    }

    // Approve Decline Workshop
    @PostMapping("/approveDeclineWorkshop")
    public void approveDeclineWorkshop(@RequestBody WorkshopProposal workshopProposal) {
        activityService.addActivity("Approve/Decline Workshop",workshopProposal.toString());
        reviewerService.approveDeclineWorkshop(workshopProposal);
    }

    // Get all Workshops
    @GetMapping("/viewWorkshops")
    public List<WorkshopProposal> getWorkshops() {
        return reviewerService.getAllWorkshops();
    }
}
