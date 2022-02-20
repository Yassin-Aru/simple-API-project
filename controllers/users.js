//For creating unique ids
import { v4 as uuidv4 } from 'uuid';

//Create an  Array
let users = [];


export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {

    //The POSTed data are exist in request called body
    const user = req.body;

    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

    // const userWithId = {...user, id: userId};

    // users.push(userWithId);
    // => all the prev line (36, 38, 40) it can be write in one single line
    users.push({...user, id: uuidv4()}); 

    res.send(`The user: "${user.firstName}" added successfuly to data base`);
};

export const userInfo = (req, res) => {
    // localhost:5000/users/test => params in this situation is test so its to thing that come up after the /
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

export const deleteUser =(req, res) => {
    const { id } = req.params;


    // the filter func is removing to result that output false
    users = users.filter((user) => user.id != id );

    // res.send(`user ${users[i]}, has been deleted from the database`);
    const foundUser = users.filter((user) => user.id !== id);
    res.send(`user ${foundUser}, has been deleted from the database`);

};

export const updateUser = (req, res) => {
    const { id } = req.params;

    // let us put the element that the user can change
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with ${id} has been modified`)


};