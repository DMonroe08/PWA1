/*
	* Mid Terms for PWA-1
	* Danielle Monroe
*/
var alum = function(){
    var button = document.getElementById(".buttonred");
    var i = 0;
    var studentData = document.querySelector("#form-box").querySelector("#output");
    //sets up student information
    var students = [

        {
            name: "John Lennon",
            address: {'street': "23 Abbey Lane", 'city': "London", 'state': "New York"},
            gpa: [2.3, 2.2, 3.5, 2.8]
        },

        {
            name: "Bruno Mars",
            address: {'street': "48 Empire Street", 'city': "Rome", 'state': "Kansas"},
            gpa: [3.5, 4.0, 2.6,3.4]



        }];

    //console.log (students[0].name + "." + students[0].address + "," + students[0].gpa);
    //console.log(students[1].name + "," + students[1].address + "," + students[1].gpa);
    //function to console out student information
    var studentInfo = function(){
        for (var i = 0, j= students.length; i < j; i++){
            console.log('Names:' + students[i].name);
            console.log('Address:' + students[i].address);
            console.log('GPA:' + students[i].gpa);
        }
        studentData.innerHTML = studentInfo[i];
    };

    //adds student
    var addData = function(){
        var newStudent = {
            name: "Audry Hepburn",
            address: {'street': "19 Tiffany Blvd", 'city': "Higgins", 'state': "California"},
            gpa: [3.4, 3.5, 2.4, 3.2]
        }
    };

    var person = document.querySelector("#form-box").querySelector("#output").querySelector("#name");
    person.innerHTML = students.name.address.gpa;


};



