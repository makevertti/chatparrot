//Channels.remove({});

if (!Channels.findOne({name: "general"})) {
  Channels.insert({
    name: "general"
  });
}

if (!Channels.findOne({name: "test"})) {
  Channels.insert({
    name: "test"
  });
}
