Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.startup(function() {
    Session.set('channel', 'general');
});

alertify.set({ labels: {
    ok     : "Create",
    cancel : "Cancel"
} });