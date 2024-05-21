const jobModel = require("../models/job");


const createJob = async(req,res)=>{
    const reqData = req.body;
    const newJob = new jobModel(reqData);
    const newData = await newJob.save();       //while inserting this generates uniuqe id that to be stored in the DB.
    res.json({
        status : true,
        message : "Data has been added successfully.",
        job_id : newData._id
    })
};

const viewJob = async(req,res)=>{
    const jobList = await jobModel.find();
    console.log(jobList);
    res.json({
        status: true,
        Jobs : jobList
    })
};

const editJob = async(req,res)=>{
    // const id = req.params.id;
    // const newData = req.body;
    const findObj = {

    }
    const updatedField = {
        salary : 120000
    };
    await jobModel.findOneAndUpdate(findObj, updatedField);
    res.json({
        status: true,
        message : "Data has been updated successfully.",
    })
};

const deleteJob = async(req,res)=>{
    const jobId = req.params.id;
    await jobModel.findByIdAndDelete(req.params.id);

    res.json({
        status : true,
        message : "Data has been deleted successfully.",
        Job_id : jobId
    })
};

const jobController = {
    createJob,
    viewJob,
    editJob,
    deleteJob
};

module.exports = jobController;