export var Users = new Mongo.Collection('Users');

if (Meteor.isServer) {
    Meteor.publish('AllUsers', ()=>{
        return Users.find();
    })
};

if (Meteor.isClient) {
    
};

Meteor.methods({
    addUser(fn: String, ln: String){
        Users.insert({fn: fn, ln: ln});
    }
})