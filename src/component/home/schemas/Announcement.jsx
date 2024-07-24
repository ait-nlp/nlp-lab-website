const { Text, DateTime } = require('@keystonejs/fields');

const AnnouncementSchema = {
  fields: {
    title: { type: Text },
    description: { type: Text },
    date: { type: DateTime, default: Date.now },
  },
};

module.exports = AnnouncementSchema;
