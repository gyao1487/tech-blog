const User = require("./User");
const Blogpost = require("./BlogPost");
const Comment = require("./Comment");

User.hasMany(Blogpost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogpost.belongsTo(User, {
  foreignKey: "user_id",
});

Blogpost.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "commenter_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "commenter_id",
});
