var express = require('express');
var _ = require('lodash');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    // Fallback
    let msg = "I can't seem to find a dispensary in your area!";
    let reqBody = JSON.stringify(req.body);
    let city = reqBody['CurrentInput'];
    console.log(reqBody['CurrentInput']);
    console.log(_.get(reqBody, 'CurrentInput'));
    console.log(reqBody);

    if(city.includes("toronto") || city.includes("Toronto") || city.includes("GTA") || city.includes("gta")) {
        msg = "You have a few options. If you're near YorkVille. you can choose Ameri at 20 Cumberland St. If you're near the U of T, you can choose Canna Cabana Toronto at 435 (B) Yonge St. or Tokyo Smoke at 333 Yonge St. If you're downtown you can stop by The Hunny Pot Cannabis Co. at 202 Queens St. W or check out Nova Cannabis at 499 Queen St. W. Do you want help finding a product or are you good?";
        city = "toronto";
    } else if(city.includes("ottawa") || city.includes("Ottawa")) {
        msg = "Well, you have a couple options depending where in Ottawa you are. You can choose from Fire and Flower at 129 York St, or head down to Hobo Recreational Cannabis at 321A Bank St. You can even stop by Superette at 1306 Wellington St W. Do you want help finding a product or are you good?";
        city = "ottawa";
    } else if(city.includes("london") || city.includes("London")) {
        msg = "You have a few options. If you're in the west end, go check out Central Cannabis at 666 Wonderland Rd N. If you're close to downtown you can stop by J. London at 691 Richmond St. Suite 5. If you're in the south end, go see Tweed at 1025 Wellington Rd. Unit A-2. Do you want help finding a product or are you good?";
        city = "london";
    }
    let respObj = {
        "actions": [
            {
                "say": msg
            },{
                "remember": {
                    "city": city
                }
            }
        ]
    };
    res.send(respObj);
});

router.get('/:id', function(req, res, next) {
    console.log('hi');
    console.log(req);
    res.send('respond with a strain');
});

module.exports = router;
