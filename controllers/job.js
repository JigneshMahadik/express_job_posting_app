const jobModel = require("../models/job");


const createJob = async(req,res)=>{
    try {
        const reqData = req.body;
        const newJob = new jobModel(reqData);
        const newData = await newJob.save();       //while inserting this generates uniuqe id that to be stored in the DB.
        res.json({
            status : true,
            message : "Data has been added successfully.",
            job_id : newData._id
        })    
    } 
    catch (error){
        res.json({
            status : false,
            message : "Something went wrong !"
        });
    }
};

const viewJob = async(req,res)=>{
    try {
        const jobList = await jobModel.find();
        // console.log(jobList);
        res.json({
            status: true,
            total_records : jobList.length,
            Jobs : jobList
        });
    } 
    catch (error) {
        res.json({
            status : false,
            message : "Something went wrong !"
        });   
    }
};

const editJob = async(req,res)=>{
    try {
        const id = req.params.id;
        const newData = req.body;
        const findObj = {
            _id : id
        };
        // console.log(findObj);
        // const updatedField = {
        //     salary : newData
        // };
        // console.log(newData);
        await jobModel.findOneAndUpdate(findObj, newData);
        res.json({
            status: true,
            message : "Data has been updated successfully.",
        });
    } 
    catch(error){
        res.json({
            status : false,
            message : "Something went wrong !"
        });   
    }
};

const deleteJob = async(req,res)=>{
    try {
        const jobId = req.params.id;
        await jobModel.findByIdAndDelete(req.params.id);

        res.json({
            status : true,
            message : "Data has been deleted successfully.",
            Job_id : jobId
        });
    } 
    catch (error){
        res.json({
            status : false,
            message : "Something went wrong !"
        });   
    }
};

const jobController = {
    createJob,
    viewJob,
    editJob,
    deleteJob
};

module.exports = jobController;