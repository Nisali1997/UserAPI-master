package com.userapi.web.EditorAPI;

import java.util.List;

import com.userapi.web.models.Conference;
import com.userapi.web.models.EditorChanges;
import com.userapi.web.repositories.ConferenceRepository;

import com.userapi.web.repositories.EditorChangesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditorService {
    @Autowired
    private final EditorRepository editorRepository;
    @Autowired
    private final ConferenceRepository conferenceRepository;
    @Autowired
    private final EditorChangesRepository editorChangesRepository;


    public EditorService(EditorRepository editorRepository, ConferenceRepository conferenceRepository, EditorChangesRepository editorChangesRepository) {
        this.editorRepository = editorRepository;
        this.conferenceRepository = conferenceRepository;
        this.editorChangesRepository = editorChangesRepository;
    }

    public List<Editor> getAllEditors() {
        return editorRepository.findAll();
    }

    public void addNewEditor(Editor editor) {
        editorRepository.save(editor);
    }

    public void addNewConference(Conference conference) {
        conferenceRepository.save(conference);
    }

    // @Transactional
    // public void updatetheConference(String id, String conferenceName, String
    // date, String venue, String startTime,
    // String duration, boolean approved) {
    // Conference conference = conferenceRepository.findById(id).orElse(null);
    // conference.setConferenceName(conferenceName);
    // conference.setDate(date);
    // conference.setVenue(venue);
    // conference.setStartTime(startTime);
    // conference.setDuration(duration);
    // conference.setApproved(approved);
    // conferenceRepository.save(conference);
    // }

    public void updatetheConference(Conference conference) {
        Conference newConference = conferenceRepository.findById(conference.getId()).orElse(null);

        EditorChanges editorChanges = new EditorChanges();

        newConference.setConferenceName(conference.getConferenceName());
        newConference.setDate(conference.getDate());
        newConference.setVenue(conference.getVenue());
        newConference.setStartTime(conference.getStartTime());
        newConference.setDuration(conference.getDuration());
        newConference.setNumberOfAttendees(conference.getNumberOfAttendees());
        newConference.setMaximumAttendees(conference.getMaximumAttendees());
        newConference.setApproved(conference.getApproved());

        editorChanges.setConferenceName(conference.getConferenceName());
        editorChanges.setDate(conference.getDate());
        editorChanges.setVenue(conference.getVenue());
        editorChanges.setStartTime(conference.getStartTime());
        editorChanges.setDuration(conference.getDuration());
        editorChanges.setNumberOfAttendees(conference.getNumberOfAttendees());
        editorChanges.setMaximumAttendees(conference.getMaximumAttendees());
        editorChanges.setApproveOrDeclineEdit(null);

        editorChangesRepository.save(editorChanges);
    }

    public List<Conference> getAlltheConferences() {
        return conferenceRepository.findAll();
    }

    public Conference getCertainConference(String id) {
        return conferenceRepository.findById(id).orElse(null);
    }

    public List<Conference> getApprovedConferences() {
        return conferenceRepository.findByApproved(true);
    }

}
