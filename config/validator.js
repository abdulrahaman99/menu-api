const yup = require("yup");

function validata(data) {

const userSchema = yup.object(). shape({
    userSchema: yup.string().required("username can't be null"). min(3).max(20),
    email: yup.string().email().required(""),
    password:yup.string().required("password can't be null").min.apply(8).max (20)
});

return userSchema.validate(data);




}
module.exports=validata;



