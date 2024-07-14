import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import fs from 'fs';
import https from 'https';
import http from 'http';

Meteor.startup(() => {
    
    /********* create Admin User **********/
    /*let admin = {
        email: "hemantsinghmehar@gmail.com",
        username: "admin",
        password: "Test123!",
        profile: {
            email: "hemantsinghmehar@gmail.com",
            first_name: "Ipay Admin",
            last_name: "",
            status: "A",
            password_change_req: "NO",
            usertype: "CUSTOMER",
            company_code:1000,
            mobile:'9804199921'
        },
    }
    try {Accounts.createUser(admin)}
    catch (err) {}*/
});
