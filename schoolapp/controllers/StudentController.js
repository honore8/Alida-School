const Student = require("../models/Student")

const studentAdd = (req, res) => {
    const msg = req.session.mgs ? req.session.mgs : {}
    const errors = req.session.errors ? req.session.errors : {}
    delete req.session.mgs;
    delete req.session.errors;
    return res.render('new-student', {errors} )

}


const studentSave = (req, res) => {
    const newStudent = new Student(req.body);
    console.log(req.body);
    newStudent.save()
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'New student added.';
            res.redirect('/new-student');

        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                let errors = {};

                Object.keys(err.errors).forEach((key) => {
                    errors[key] = err.errors[key].message;
                });
                let sessionDatas = req.session;
                sessionDatas.errors = errors;
                return res.redirect('/new-student');
            }
            return res.redirect('/');
        })
}


const studentList = (req, res) => {
    Student.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            const msg = req.session.mgs
            const errors = req.session.errors ? req.session.errors : {}
            delete req.session.mgs;
            delete req.session.errors;
            res.render('student-list', { title: 'All student', activeB: true, tasks: result, msg, errors })
        })
        .catch((err) => {
            console.log(err);
        })
}


const updateStudent = (req, res) => {
    Student.findByIdAndUpdate(req.body.student_id, req.body)
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'Student infos updated';
            return res.redirect('/student-list');
        })
        .catch((err) => {
            console.log(err);
            return res.redirect('/student-list');

        })
}


const studentDelete = (req, res) => {
    const id = req.query.id
    Student.findByIdAndDelete(id)
        .then((result) => {
            let sessionDatas = req.session;
            sessionDatas.mgs = 'Student removed.';
            return res.redirect('/student-list');
        })
        .catch((err) => {
            console.log(err);
            return res.redirect('/student-list');

        })
}


module.exports = {
    studentAdd,
    studentSave,
    studentList,
    updateStudent,
    studentDelete,
}