// import {v4 as uuid } from "uuid";

// let users = [];

// export const GetTours = (req,res) => {
//     res.send(users);

// }
// export const CreateTours = (req,res) => {
//     const user = req.body;
//     users.push({ ...user, id: uuid() });
//     res.send("Added success")
// }
// export const GetTour = (req,res) =>
// {
//     const singleTour = users.filter((user)=>user.id === req.params.id);
//     res.send(singleTour);
// }
// export const DeleteTour = (req,res) =>
// {
//     users = users.filter((user)=>user.id !== req.params.id);
//     res.send("Delete success!!! ");
// }
// export const UpdateTour = (req,res) =>
// {
//     const user = users.find((user)=>user.id === req.params.id)

//     user.name=req.body.name;
//     res.send("updated ")

// }