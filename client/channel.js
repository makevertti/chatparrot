Template.channel.events({
    'click .channel': function (e) {
        Session.set('channel', this.name);
    }
});
