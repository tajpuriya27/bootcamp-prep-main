// YOUR CODE BELOW
let me2 ={
    name: "Sunil",
    //using shorthand method
    getGreeting(friend){
        return `Hi ${friend.name}, my name is ${this.name}.`;
        
        // Simple to cheat testem:
        // return "Hi Jeff, my name is "+this.name +".";

        /*
        - Solution, so user can't bypass or cheat is to add, added test case in spec file.
        - I have added it for checking purpose.
        */
    }
}

