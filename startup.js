if (Meteor.isServer) {
    Meteor.startup(function() {
        System.import('collections')
    });
}

if (Meteor.isClient) {
    Meteor.startup(function() {
        System.import('collections')
            .then(function() {
                System.import('aurelia-bootstrapper')
            })
    });
}