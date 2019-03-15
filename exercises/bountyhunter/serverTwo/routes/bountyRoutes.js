const express = require("express");
const bountyRoute = express.Router();
const Bounty = require("../models/bountyModel");

bountyRoute.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties)=> {
            if (err) res.status(500).send(err) // status(500) represents the status value inside of the response
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        // const newBountyInfo = req.body // pull out the body and saved in to newBountyInfo
        // newBounty = new Bounty(newBountyInfo) // body is matched to your schema(?)
        const newBounty = new Bounty(req.body)
    })

    module.exports = bountyRoute