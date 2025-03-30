const express = require('express');
const {handleMessages,handleSentMessage} = require('../Controllers/message')
const router = express.Router();


router.get('/allmessages',handleMessages)
router.post('/message',handleSentMessage);

module.exports={
router
}
