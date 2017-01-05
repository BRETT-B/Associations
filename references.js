const   mongoose    =   require("mongoose"),
        Post        =   require("./models/posts"),
        User        =   require("./models/users");

mongoose.connect("mongodb://localhost/blog_demo_2");


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });
// 586d35cf28d21e0fbf1564d7 -- first

// Post.create({
//     title: "How to cook the best burger part 4",
//     content: "Use charcoal grill...gas blows!"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//       if(err){
//           console.log(err);
//       }else{
//           foundUser.posts.push(post);
//           foundUser.save((err, data) => {
//               if(err){
//                   console.log(err);
//               }else{
//                   console.log(data);
//               }
//           });
//       }
//     });
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });
