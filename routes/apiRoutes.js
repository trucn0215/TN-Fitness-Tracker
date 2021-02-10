const router = require("express").Router();

const { Workout } = require("../models")

// Get all workout
router.get("/api/workouts", (req, res) => {

    Workout.find({}).then((workout => {

        res.json(workout);

    })).catch((err) => {

        res.status(500).json(err);

    })
});

// Add workout
router.put("/api/workouts/:id", (req, res) => {
    const newExercise = req.body;
    
    console.log("newExercise: " + newExercise);

    Workout.findOneAndUpdate(req.params.id, {
        $push: {
            exercises: newExercise
        }
    }).then((workout => {
        res.json(workout);
    })).catch((err) => {
        res.status(500).json(err);
    })
});

// Create workout
router.post("/api/workouts", (req, res) => {

    Workout.create(req.body).then((workout => {

        res.json(workout);

    })).catch((err) => {

        res.status(500).json(err);
    })
});

// Get all range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((workout => {

        res.json(workout);

    })).catch((err) => {

        res.status(500).json(err);

    })
});

module.exports = router;