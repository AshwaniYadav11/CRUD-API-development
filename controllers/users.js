import { v4 as uuid } from 'uuid';
import { User } from '../models/User.js';

////////////////////////////////////


/////////////////////////////////
/*get all the users detail in the database*/
export const getUsers = async(req, res) => {
   try{
       const user = await User.find();
       res.send(user);

   }catch(Err){
       res.send(err);
   }
}
/**************add new user to the database****************** */
export const createUser = async (req, res) => {   
    //const User = req.body;

    const user = new User ({
        userName : req.body.userName,
        lastName : req.body.lastName,
        Age : req.body.Age
    });
    try{
        const createUser = await user.save();
        res.send(createUser);

    }catch(err){
       res.send(err);
    }
};
/**********get detail of a partcular user using the id************* */
export const getUser = async(req, res) => {
   try{
        const user = User.findById(req.params.id).exec();
       
        res.send( user);

   }catch(er){
       res.send(er);
   }

};
/**************delete user with given id**** */
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};
/**************update user eith given id********************* */
export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};