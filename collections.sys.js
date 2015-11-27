export const Users = new Mongo.Collection('Users');

Meteor.methods({
    addUser(fn: String, ln: String){
        Users.insert({fn: fn, ln: ln});
    }
})

if (Meteor.isServer) {
    Meteor.publish('AllUsers', ()=>{
        return Users.find();
    })
};

if (Meteor.isClient) {
    
};
