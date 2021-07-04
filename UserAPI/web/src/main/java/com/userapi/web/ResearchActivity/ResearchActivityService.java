package com.userapi.web.ResearchActivity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ResearchActivityService {
    private final ResearchActivityRepository researchActivityRepository;

    @Autowired
    public ResearchActivityService(ResearchActivityRepository researchActivityRepository) {
        this.researchActivityRepository = researchActivityRepository;
    }


    public List<ResearchActivity> getAllResearchActivities() {
        return researchActivityRepository.findAll();

    }

    public void addNewResearchActivity(ResearchActivity researchActivity) {
        researchActivityRepository.save(researchActivity);
    }
}
