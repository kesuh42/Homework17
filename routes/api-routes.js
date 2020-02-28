module.exports = function(app) {
    app.get("/api/workouts", function(req, res){
        console.log("get")
    })

    app.put("/api/workouts/:id", function(req, res){
        console.log("put")
        console.log(req.params.id)
    })

    app.post("/api/workouts", function(req, res){
        console.log("post")
    })

    app.get("/api/workouts/range", function(req, res){
        console.log("other get")
    })
}