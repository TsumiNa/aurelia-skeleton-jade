if (Meteor.isClient){
    Meteor.startup(function() {
        System.import('aurelia-bootstrapper')
            .catch(function(err) {
                console.log(err);
            });
    })
}