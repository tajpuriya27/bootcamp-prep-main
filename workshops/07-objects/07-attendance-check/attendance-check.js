let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
/* Building logic */
// console.log(Array.isArray(classRoom[0]))
// for(student in classRoom[0]){
//     // console.log(student);
//     console.log(classRoom[0][student][0])
// }

function attendanceCheck(weekDay){  
    let returnArr = [];
    classRoom.forEach(element => {
        for(student in element){
            for(let i =0; i< element[student].length; i++){
                if(element[student][i][weekDay]){
                    returnArr.push(student);
                }
            }
        }
    })
    return returnArr;
}