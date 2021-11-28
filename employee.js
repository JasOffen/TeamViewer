//Class Definition
class employee {
    //init obj
    constructor(answers) {
        //'This' keyword to set the current object
        this.title = answers.title;
        this.name = answers.name;
        this.id = answers.id;
        this.email = answers.email;
        this.username = answers.username;
        this.officeNum = answers.officeNum;
    }
}
module.exports = employee;