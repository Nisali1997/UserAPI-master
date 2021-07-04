package com.userapi.web.ResearchActivity;

import com.userapi.web.AdminAPI.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userapi/research_activity")
@CrossOrigin
public class ResearchActivityController {

    private final ResearchActivityService researchActivityService;
    private final ActivityService activityService;
    @Autowired
    public ResearchActivityController(ResearchActivityService researchActivityService, ActivityService activityService) {
        this.researchActivityService = researchActivityService;
        this.activityService = activityService;
    }

    @GetMapping("/")
    public List<ResearchActivity> getResearchActivities(){
        return researchActivityService.getAllResearchActivities();
    }

    @PostMapping("/")
    public void addNewResearchActivity(@RequestBody ResearchActivity researchActivity){
        activityService.addActivity("Add Research Activity",researchActivity.toString());
        researchActivityService.addNewResearchActivity(researchActivity);
    }

}
