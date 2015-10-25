var movies = App.require("data/movies").movies;

module.exports = function(request, response) {
    var movie = movies.find(function(m) {
        return m.id === request.params.id;
    });

    response.setHeader("Content-type", "application/json");
    response.end(JSON.stringify(movie));
};
