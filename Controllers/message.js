const { Message } = require('../Model/dataModel')

async function handleMessages(req, res) {
    try {
        const messages = await Message.find();  // Fetch all messages from the database
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching messages', error: err });
    }
}




async function handleSentMessage(req, res) {

    let body = req.body
    try {
        if (
            !body ||
            !body.name ||
            !body.email ||
            !body.message

        ) {
            return res.status(400).json({ msg: "All Fields Are Required..." });
        }


        const result = await Message.create({
            name: body.name,
            email: body.email,
            message: body.message,
        });
        console.log('Result: ', result);
        return res.status(201).json({ msg: "Success" });
    } catch (error) {
        return res.status(500).json({ msg: "Error creating user", error: error.message });
    }
}

module.exports = {
    handleMessages,
    handleSentMessage
}