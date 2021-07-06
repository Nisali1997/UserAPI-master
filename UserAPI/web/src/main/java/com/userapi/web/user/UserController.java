package com.userapi.web.user;

import java.io.IOException;
import java.util.List;

import com.userapi.web.EditorAPI.EditorService;
import com.userapi.web.loadfile.FileService;
import com.userapi.web.models.Conference;

import com.userapi.web.models.ResearchPaper;
import com.userapi.web.models.WorkshopProposal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/userapi")
@CrossOrigin
public class UserController {

    private final UserService userService;
    private final FileService fileService;
    private final EditorService editorService;

    @Autowired
    public UserController(UserService userService, FileService fileService, EditorService editorService) {
        this.userService = userService;
        this.fileService = fileService;
        this.editorService = editorService;
    }

    @GetMapping("/")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/workshoppresenter")
    public List<WorkshopPresenter> getWorkshopPresenters() {
        return userService.getAllWorkshopPresenters();
    }

    @GetMapping("/attendee")
    public List<Attendee> getAttendees() {
        return userService.getAllAttendees();
    }

    @GetMapping("/researcher")
    public List<Researcher> getResearchers() {
        return userService.getAllResearchers();
    }

    @GetMapping("/workshoppresenter/{id}")
    public List<WorkshopPresenter> getWorkshopPresenterByProposal(@PathVariable String id) {
        return userService.getOneWorkshopPresenter(id);
    }

    @GetMapping("/viewAllConference")
    public List<Conference> getAllApprovedConferences() {
        return editorService.getApprovedConferences();
    }

    @GetMapping("/viewAllResearchPapers")
    public List<ResearchPaper> getResearchPapers() {
        return userService.getAllResearcherPapers();
    }

    @GetMapping("/viewAllWorkshopProposals")
    public List<WorkshopProposal> getWorkshopProposals() {
        return userService.getAllWorkshopProposals();
    }

    @PostMapping("/")
    public void registerNewUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

    @PostMapping("/createConferenceRequest")
    public ResponseEntity<?> createProposal(@RequestParam("file") MultipartFile file) throws IOException {
        return new ResponseEntity<>(fileService.addResearchPaper(file), HttpStatus.OK);
    }

    @PostMapping("/createResearchActivity")
    public ResponseEntity<?> createResearchPaper(@RequestParam("file") MultipartFile file) throws IOException {
        return new ResponseEntity<>(fileService.addWorkshopProposal(file), HttpStatus.OK);
    }

    @PostMapping("/workshoppresenter")
    public void registerNewWorkshopPresenter(@RequestBody WorkshopPresenter workshopPresenter) {
        userService.addNewWorkshopPresenter(workshopPresenter);
    }

    @PostMapping("/researcher")
    public void registerNewResearcher(@RequestBody Researcher researcher) {
        userService.addNewResearcher(researcher);
    }

    @PostMapping("/registerForConference")
    public void registerNewAttendee(@RequestBody Attendee attendee) {
        userService.addNewAttendee(attendee);
    }

    @GetMapping("/viewApprovedWorkshops")
    public List<WorkshopProposal> getAllApprovedWorkshops() {
        return userService.getApprovedWorkshops();
    }


    @GetMapping("/viewApprovedResearchPapers")
    public List<ResearchPaper> getAllApprovedResearchPapers() {
        return userService.getApprovedResearchPapers();
    }

    // @PostMapping("/createConferenceRequest ")
    // public void registerNewUser(@RequestBody User user, @RequestParam("file")
    // MultipartFile file) throws IOException {

    // // ResponseEntity<String> proposalID = new
    // // ResponseEntity<String>(fileService.addFile(file), HttpStatus.OK);
    // // String proposalId = proposalID.toString();

    // userService.addNewWorkshopPresenter(user, file);
    // // userService.addNewUser(user);
    // }

}