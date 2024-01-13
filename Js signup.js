function emailsend(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "albayzanzy@gmail.com",
    Password : "15852E9D1BD6F00A810663F6DC09D6A82F3E",
    To : 'hengnarong393@gmail.com',
    From : "albayzanzy@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}