Template.new_channel_button.events({
    'click .new_channel_button': function () {
        showNewChannelDialog("Create new Channel");

        function showNewChannelDialog(message) {
            alertify.prompt(message, function (e, input) {
                if (e) {
                    if (input.length < 22 && input.length > 0) {
                        Meteor.call('newChannel', {
                            name: input
                        });

                        Session.set('channel', input);
                    } else {
                        showNewChannelDialog("Create new Channel (1-21 characters)");
                    }
                }
            }, "Channel name");
        }
    }
});
