var express = require('express');
var _ = require('lodash');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    // Fallback
    let msg = "Thanks!";
    let reqBody = JSON.parse(JSON.stringify(req.body));
    let input = (reqBody['CurrentInput']).toLowerCase();
    let age_verified = false;
    let redirection = "task://planter_start";
    // console.log(event);

    if(input.includes("yes") || input.includes("yeah") || input.includes("ye") || input.includes("ya") || input.includes("yup") || input.includes("course")) {
        msg = "Thanks!";
        age_verified = true;
        redirection = "task://planter_start";
    } else if(input.includes("no") || input.includes("nah")) {
        msg = "Sorry, you have to be at least 19. 😞";
        age_verified = false;
        redirection = "task://goodbye";
    }
    let respObj = {
        "actions": [
            {
                "say": msg
            },{
                "remember": {
                    "age-verified": age_verified
                }
            },{
                "redirect": redirection
            }
        ]
    };
    res.send(respObj);
});

module.exports = router;
