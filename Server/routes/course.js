const express = require('express');
const courseModel = require('../models/courseModel');
const router = express.Router();

/* GET all */
router.get('/', (req, res) => {
    courseModel.find({}, (err, courses) =>{
        // If error return a 500. As well as return json message
        if(err) res.status(500).json({error: "Not courses found!"});
        res.json(courses);
    })
});
/* GET by name */
router.get('/:name', (req,res) => {
    if(req.params.name) {
        courseModel.findOne({name: req.params.name }, (err, course) => {
            // If error return a 500. As well as return json message
            if(err) res.status(500).json({error: "Course not found!"});
            res.json(course);
        });
    }
    res.status(400).json({status: 400, err: 'Bad Request'});
});
/* POST a new course */
router.post('/', (req, res) =>{
    let newCourse = new courseModel({
        name: req.body.name
    });
    courseModel.save( (err) =>{
        if(err) res.status(500).json({error: err});
        res.json({
            message: "Course Saved",
            success: true
        })
    })
});
/* DELETE a course */
router.delete('/:id', (req, res) => {
    if(req.params.id) {
        courseModel.findByIdAndRemove(req.params.id, (err, course) => {
            if(err) res.status(500).json({status:500, success: false, err})
            res.json({success: true, delete: course})
        })
    }
    res.status(400).json({status: 400, success: false});
})

/* UPDATE a course */
router.put('/:id', (req, res) => {
    if(req.params.id) {
        let {_update} = courseModel.findByIdAndUpdate(req.params.id,{name: req.body.name},  (err, course) => {
            if(err) res.status(500);
        });
        res.send({course:_update});
        
    }
    else{
        res.status(400);
    }
})

module.exports = router;