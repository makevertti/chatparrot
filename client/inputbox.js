Template.footer.events({
  'keypress input': function(event) {
        if (event.which == 13) {
            event.stopPropagation();
            $('.message-history').append('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">party_parrot</a><span class="message_timestamp">1:31 AM</span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
            $('.input-box_text').val("");

            var history = document.getElementById("message-history");
            history.scrollTop = history.scrollHeight;
            return;
        }
    }
});