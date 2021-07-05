package com.userapi.web.loadfile;

import java.io.IOException;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

// import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import org.apache.commons.io.IOUtils;

@Service
public class FileService {
    @Autowired
    private GridFsTemplate template;

    @Autowired
    private GridFsOperations operations;

    @Autowired
    private ResearchPaperRepository researchPaperRepository;

    @Autowired
    private WorkshopRepository workshopRepository;

    public String addFile(MultipartFile upload) throws IOException {

        DBObject metadata = new BasicDBObject();
        metadata.put("fileSize", upload.getSize());

        Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(), upload.getContentType(),
                metadata);

        return fileID.toString();
    }

    public String addResearchPaper(MultipartFile upload) throws IOException {

        DBObject metadata = new BasicDBObject();
        metadata.put("fileSize", upload.getSize());

        Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(), upload.getContentType(),
                metadata);

        ResearchPaper researchPaper = new ResearchPaper();
        researchPaper.setResearchPaperId(fileID.toString());
        researchPaper.setResearchPaperName(upload.getOriginalFilename().toString());
        researchPaper.setApprovedStatus(false);
        researchPaper.setTBDStatus(true);

        researchPaperRepository.save(researchPaper);

        return fileID.toString();
    }

    public String addWorkshopProposal(MultipartFile upload) throws IOException {

        DBObject metadata = new BasicDBObject();
        metadata.put("fileSize", upload.getSize());

        Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(), upload.getContentType(),
                metadata);

        WorkshopProposal workshopProposal = new WorkshopProposal();
        workshopProposal.setWorkshopProposalId(fileID.toString());
        workshopProposal.setWorkshopProposalName(upload.getOriginalFilename().toString());
        workshopProposal.setApprovedStatus(false);
        workshopProposal.setTBDStatus(true);

        workshopRepository.save(workshopProposal);

        return fileID.toString();
    }

    public LoadFile downloadFile(String id) throws IOException {

        GridFSFile gridFSFile = template.findOne(new Query(Criteria.where("_id").is(id)));

        LoadFile loadFile = new LoadFile();

        if (gridFSFile != null && gridFSFile.getMetadata() != null) {
            loadFile.setFilename(gridFSFile.getFilename());

            loadFile.setFileType(gridFSFile.getMetadata().get("_contentType").toString());

            loadFile.setFileSize(gridFSFile.getMetadata().get("fileSize").toString());

            loadFile.setFile(IOUtils.toByteArray(operations.getResource(gridFSFile).getInputStream()));
        }

        return loadFile;
    }
}
