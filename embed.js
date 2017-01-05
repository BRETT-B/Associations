const   mongoose    =   require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

//POST - TITLE, CONTENT
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - EMAIL, NAME
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "john@doe.org",
//     name: "John Doe"
// });

// newUser.posts.push({
//     title: "Who am I?",
//     content: "A man without a face"
// });

// newUser.save((err, user) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });
// User.findOne({name: "John Doe"}, (err, user) => {
//     if(err){
//         console.log(err);
//     }else{
//         user.posts.push({
//             title: "Other names I go by",
//             content: "AKA, Annonymous, Unknown"
//         });
//         user.save((err, user) => {
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(user);
//             }
//         });
//     }
// });

