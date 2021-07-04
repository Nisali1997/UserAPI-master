package com.userapi.web.AuthenticatorAPI;

import com.userapi.web.AdminAPI.Admin;
import com.userapi.web.AdminAPI.AdminRepository;
import com.userapi.web.EditorAPI.Editor;
import com.userapi.web.EditorAPI.EditorRepository;
import com.userapi.web.ReviewerAPI.Reviewer;
import com.userapi.web.ReviewerAPI.ReviewerRepository;
import com.userapi.web.user.Attendee;
import com.userapi.web.user.AttendeeRepository;
import com.userapi.web.user.Researcher;
import com.userapi.web.user.ResearcherRepository;
import com.userapi.web.user.WorkshopPresenter;
import com.userapi.web.user.WorkshopPresenterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authenticatorapi")
@CrossOrigin
public class AuthController {

    private final WorkshopPresenterRepository workshopPresenterRepository;
    private final ResearcherRepository researcherRepository;
    private final AttendeeRepository attendeeRepository;
    private final EditorRepository editorRepository;
    private final ReviewerRepository reviewerRepository;
    private final AdminRepository adminRepository;

    @Autowired
    public AuthController(WorkshopPresenterRepository workshopPresenterRepository,
            ResearcherRepository researcherRepository, AttendeeRepository attendeeRepository,
            EditorRepository editorRepository, ReviewerRepository reviewerRepository, AdminRepository adminRepository) {
        this.workshopPresenterRepository = workshopPresenterRepository;
        this.researcherRepository = researcherRepository;
        this.attendeeRepository = attendeeRepository;
        this.editorRepository = editorRepository;
        this.reviewerRepository = reviewerRepository;
        this.adminRepository = adminRepository;
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody AuthenticationRequest authenticationRequest) {

        String userID = null;

        if (authenticationRequest.getUserType().equals("workshoppresenter")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            WorkshopPresenter presenter = workshopPresenterRepository
                    .findWorkshoppresenter(authenticationRequest.getEmail(), authenticationRequest.getPassword());
            userID = presenter.getId();

        }

        else if (authenticationRequest.getUserType().equals("researcher")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            Researcher researcher = researcherRepository.findResearcher(authenticationRequest.getEmail(),
                    authenticationRequest.getPassword());
            userID = researcher.getId();

        }

        else if (authenticationRequest.getUserType().equals("attendee")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            Attendee attendee = attendeeRepository.findAttendee(authenticationRequest.getEmail(),
                    authenticationRequest.getPassword());
            userID = attendee.getId();

        }

        else if (authenticationRequest.getUserType().equals("editor")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            Editor editor = editorRepository.findEditor(authenticationRequest.getEmail(),
                    authenticationRequest.getPassword());
            userID = editor.getId();

        }

        else if (authenticationRequest.getUserType().equals("reviewer")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            Reviewer reviewer = reviewerRepository.findReviewer(authenticationRequest.getEmail(),
                    authenticationRequest.getPassword());
            userID = reviewer.getId();

        }

        else if (authenticationRequest.getUserType().equals("admin")) {
            // userID =
            // workshopPresenterRepository.getWorkshopPresenterID(authenticationRequest.getEmail(),
            // authenticationRequest.getPassword());
            Admin admin = adminRepository.findAdmin(authenticationRequest.getEmail(),
                    authenticationRequest.getPassword());
            userID = admin.getId();

        }

        return userID;
    }

    @PostMapping("/signup")
    public void signUpUser(@RequestBody SignUpRequest signUpRequest) {

    }

}
