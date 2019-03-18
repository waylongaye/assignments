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
        const newBounty = new Bounty(req.body)
        console.log(newBounty)
        newBounty.save(err => {
            err && res.status(500).send(err)
            return res.status(200).send(newBounty._id)
        })
    })

    bountyRoute.route('/:_id')
        .put((req, res) => {
            // const {_id} = req.params
            // const database = req.body
            Bounty.findByIdAndUpdate
            (
                {_id: req.params.id},
                req.body,
                (err, bounty) => {
                    err && res.status(500).send(err)
                    return res.status(200).send("success!")
                }
            )
    })
    .delete((req, res) => {
        Bounty.findOneAndDelete(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("success!")
            }
        )
    })
    .get((req, res) => {
        Bounty.findById((err, bounties)=> {
            {_id: req.params.id},
            (err, bounty) => {
            if (err) res.status(500).send(err) // status(500) represents the status value inside of the response
            return res.status(200).send(bounties)
            }
        })
    })

    module.exports = bountyRoute