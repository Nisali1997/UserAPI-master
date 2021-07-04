package com.userapi.web.AdminAPI;

import com.userapi.web.models.Activity;
import com.userapi.web.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {
    @Autowired
    private final ActivityRepository activityRepository;


    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public void addActivity(String type,String description){
        Activity activity = new Activity();
        activityRepository.insert(activity);
    }
}
