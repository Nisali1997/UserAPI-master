package com.userapi.web.EditorAPI;

import java.util.List;

import com.userapi.web.AdminAPI.ActivityService;
import com.userapi.web.models.Conference;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/editorapi")
@CrossOrigin
public class EditorController {

    private final EditorService editorService;
    private final ActivityService activityService;
    @Autowired
    public EditorController(EditorService editorService, ActivityService activityService) {
        this.editorService = editorService;
        this.activityService = activityService;
    }

    @GetMapping("/")
    public List<Editor> getEditors() {
        return editorService.getAllEditors();
    }

    @GetMapping("/viewAllConference")
    public List<Conference> getAllConferences() {
        return editorService.getAlltheConferences();
    }

    @GetMapping("/viewApprovedConferences")
    public List<Conference> getAllApprovedConferences() {
        return editorService.getApprovedConferences();
    }

    @GetMapping("/viewConference/{id}")
    public Conference getOneConference(@PathVariable String id) {
        return editorService.getCertainConference(id);
    }

    @PostMapping("/")
    public void registerNewEditor(@RequestBody Editor editor) {
        editorService.addNewEditor(editor);
    }

    @PostMapping("/addConference")
    public void registerNewWorkshopPresenter(@RequestBody Conference conference) {
        activityService.addActivity("Add Conference",conference.toString());
        editorService.addNewConference(conference);
    }

    // @PutMapping("/editConference/{id}")
    // public void updateConference(@PathVariable String id, @RequestParam String
    // ConferenceName,
    // @RequestParam String Date, @RequestParam String Venue, @RequestParam String
    // StartTime,
    // @RequestParam String Duration, @RequestParam boolean approved) {
    // editorService.updatetheConference(id, ConferenceName, Date, Venue, StartTime,
    // Duration, approved);
    // }

    @PutMapping("/editConference")
    public void updateConference(@RequestBody Conference conference) {
        editorService.updatetheConference(conference);
    }

}
