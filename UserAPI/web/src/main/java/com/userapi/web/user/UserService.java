package com.userapi.web.user;

import java.util.List;

import com.userapi.web.models.Conference;
import com.userapi.web.repositories.ConferenceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final WorkshopPresenterRepository workshopPresenterRepository;
    private final ResearcherRepository researcherRepository;
    private final AttendeeRepository attendeeRepository;
    private final ConferenceRepository conferenceRepository;

    @Autowired
    public UserService(UserRepository userRepository, WorkshopPresenterRepository workshopPresenterRepository,
            ResearcherRepository researcherRepository, AttendeeRepository attendeeRepository,
            ConferenceRepository conferenceRepository) {
        this.userRepository = userRepository;
        this.workshopPresenterRepository = workshopPresenterRepository;
        this.researcherRepository = researcherRepository;
        this.attendeeRepository = attendeeRepository;
        this.conferenceRepository = conferenceRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();

    }

    public List<WorkshopPresenter> getAllWorkshopPresenters() {
        return workshopPresenterRepository.findAll();

    }

    public void addNewUser(User user) {

        userRepository.save(user);
    }

    public void addNewWorkshopPresenter(WorkshopPresenter presenter) {

        workshopPresenterRepository.save(presenter);
    }

    public List<WorkshopPresenter> getOneWorkshopPresenter(String id) {
        return workshopPresenterRepository.findByWorkshopProposalId(id);
    }

    public void addNewResearcher(Researcher researcher) {
        researcherRepository.save(researcher);
    }

    public void addNewAttendee(Attendee attendee) {
        Conference conference = conferenceRepository.findById(attendee.getConferenceId())
                .orElseThrow(() -> new IllegalStateException("conference does not exist"));

        int attendees = conference.getNumberOfAttendees();
        int maxAttendees = conference.getMaximumAttendees();

        if (attendees >= maxAttendees) {
            throw new IllegalStateException("Can't register! maximum number of attendees exceeded");
        } else {
            attendeeRepository.save(attendee);
        }
    }

    public List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }

    public List<Researcher> getAllResearchers() {
        return researcherRepository.findAll();
    }

}