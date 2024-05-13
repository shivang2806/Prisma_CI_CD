
const getContacts = ((req, res) => {
    console.log('hello');
    // const contacts = Contact.find({user_id : req.user.id});
    // res.status(200).json(contacts);
});

const createContact = ( async (req, res) => {
    // const {name, email, phone} = req.body;
    // if(!name || !email || !phone){
    //     res.status(400);
    //     throw new Error("All fields are required");
    // }
    // const contact =  Contact.create({
    //     name, email, phone, user_id : req.user.id
    // }); 

    // // res.status(201).json({message : req.body});
    // res.status(201).json(contact);
});


module.exports = { 
    getContacts,
    createContact, 
};

