const person = {
    Trevor: {
        name : "Trevor", // String
        role: "Prof",
        nickname: "Snape",
        desc: "all about me blah blah blah",
        avatar: "trevor.jpg",
        sayHello : function() { console.log('hi!') }
    },

    Justin: {
        name : "Justin", // String
        role: "Coordinator",
        nickname: "Justin",
        desc: "all about me blah blah blah",
        avatar: "justin.jpg",
        sayHello : function() { console.log('hi!') }
    },

    Joe: {
        name : "Joe", // String
        role: "Prof",
        nickname: "Pooh",
        desc: "all about me blah blah blah",
        avatar: "joe.jpg",
        sayHello : function() { console.log('hi!') }
    },

    John: {
        name : "John", // String
        role: "Prof",
        nickname: "Morpheus",
        desc: "all about me blah blah blah",
        avatar: "john.jpg",
        sayHello : function() { console.log('hi!') }
    },

    Jarrod: {
        name : "Jarrod", // String
        role: "Prof",
        nickname: "Zoolander",
        desc: "all about me blah blah blah",
        avatar: "jarrod.jpg",
        sayHello : function() { console.log('hi!') }
    }
    
}

// make this file public in whichever file i import it
export { person };