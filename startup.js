if (Meteor.isServer) {
    Meteor.startup(() =>{
        System.import('collections')
        .then(() =>{
        })
    });
}

if (Meteor.isClient){
    Meteor.startup(() => {
        System.import('collections')
        .then(() =>{
            System.import('aurelia-bootstrapper')
                .then(() =>{
                })
                .catch( err => {
                    console.log(err);
                });            
        })
    });
}