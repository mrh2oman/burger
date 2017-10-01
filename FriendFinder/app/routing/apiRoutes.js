var pool = require("../data/friends.js");

module.exports = function(app) {
    app.get('/api/friends', function(request, results) {
        results.json(pool);
    })

    app.post("/api/friends", function(request, results) {
        var newPool = request.body;

        for (var i = 0; i < newPool.lenght; i++) {
            if (newPool.scores[i] == "1 (Strongly Disagree)") {
                newPool.scores[i] = 1;
            } else if (newPool.scores[i] == "5 (Strongly Agree)") {
                newPool.scores[i] = 5;
            } else {
                newPool.scores[i] = parseInt(newPool.scores[i]);
            }
        }

        var listArray = [];

        for (var i = 0; i < pool.length; i++) {

            var comparedFriend = pool[i];
            var totalDifference = 0;

            for (var k = 0; k < comparedFriend.scores.length; k++) {
                var differenceOneScore = Math.abs(comparedFriend.scores[k] - newPool.scores[k]);
                totalDifference += differenceOneScore;
            }

            listArray[i] = totalDifference;

        }

        var bestFriendNum = listArray[0];
        var bestFriendIndex = 0;

        for (var i = 1; i < listArray.length; i++) {
            if (listArray[i] < bestFriendNum) {
                bestFriendNum = listArray[i];
                bestFriendIndex = i;
            }
        }

        pool.push(newPool);

        results.json(pool[bestFriendIndex]);

    })
}