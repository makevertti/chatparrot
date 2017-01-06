Template.registerHelper("usernameFromId", function (userId) {
    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === "undefined") {
        return "Anonymous";
    }
    return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    minutes = minutes.substr(minutes.length-2);
    return hours + ':' + minutes + ' - ' + day + '/' + month + '/' + year;
});

Template.listings.helpers({
    channels: function () {
        return Channels.find();
    },
    status: function () {
        if (Meteor.user()) {
            return "Online";
        } else {
            return "Not signed in"
        }
    },
    connection_icon: function () {
        if (Meteor.user()) {
            return "online_icon";
        } else {
            return "not_signed_in_icon"
        }
    },
});

Template.channel.helpers({
    active: function () {
        if (Session.get('channel') === this.name) {
            return "active";
        } else {
            return "";
        }
    }
});

Template.header.helpers({
    currentChannel: function () {
        return Session.get('channel');
    }
});
