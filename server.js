require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
const fs = require('fs');
var bills = require('./billsObjs');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get('/', (req, res) => {
	var content = [ 'Mr. Carrasco has been serving as the Superintendent of Seattle City Light since 2004 and as you know, Seattle City Light is one of the city’s most capital intensive departments with an annual billion dollar budget, 1,800 employees, and billions of dollars of critical physical assets. Energy reliability, predictability and costs are inherent in Seattle’s economic development, public safety and quality of life.', 
'Section 1. Seattle will consider the sale of certain water system facilities and transfer of responsibility for water service to the City of Shoreline in 2020 in the area defined as City of Shoreline retail water service area and shown in Attachment 1, attached and incorporated herein (Transfer Area) with the understanding of the following major terms: 1. The base purchase price for the water system facilities and related real property owned in fee is expected to be at least $26.6 million (in year 2020 dollars) to be paid prior to transfer in 2020, which may be adjusted according to the terms of any final agreement to address certain changes in circumstances, including but not limited to, additions or deletions to the inventory of water system facilities or real property included in the base purchase price due to operational needs in the Transfer Area up to the date of transfer.',
'AN ORDINANCE relating to the Technology Matching Fund Program; making allocations and authorizing implementation of certain Technology Matching Fund projects in 2012; providing that 2012 appropriations for the Technology Matching Fund from the Cable Television Franchise Subfund and from the Information Technology Fund shall automatically carry forward into the 2013 fiscal year; that any unspent funds from an individual project may be applied to another Technology Matching Fund project; and ratifying and confirming certain prior acts.',
'Lorem Khaled Ipsum is a major key to success. In life there will be road blocks but we will over come it. The key to more success is to have a lot of pillows. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. You smart, you loyal, you a genius. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. The key to more success is to have a lot of pillows.'];
	res.render('index', {bills: bills, content: content});
});





app.get('/signup', (req, res) => {
	res.render('signup');
});

app.get('/login', (req, res) => {
	res.render('login');
})

app.get('/account', (req, res) => {
	res.render('account');
})





app.listen(port, function() {console.log('Hooked on ' + port)});
