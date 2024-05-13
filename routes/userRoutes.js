const express = require('express');
const router = express.Router();

const { 
    getUsers,
    registerUser,
    loginuser,
    currentUsers ,
    getUserChatList,
    saveMessageData,
    getmessageList
} = require('../controllers/userControllers');



router.get('/',  getUsers);
router.get('/chatList',  getUserChatList);

module.exports = router;