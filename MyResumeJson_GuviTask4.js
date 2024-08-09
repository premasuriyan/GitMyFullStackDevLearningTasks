var resumeJson = {
      "name": "ANBUPARITHI T",
      "email": "anbuparithi@gamil.com",
      "phone": 1234567,
      "degree": "BSc",
      "address": "15 Vivekanandhar Street",
        "postalCode": 678903,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India",
        "company": "The CodeSkill PVT",
        "position": "Software Engineer",
        "startDate": "2012-11-04",
        "endDate": "224-08-15",
        "summary": "I am a software engineer having 16 years of experience"
};
//for loop
console.log("for loop");
var resumeArray = Object.keys(resumeJson);
console.log(resumeArray);
for(var i = 0; i < resumeArray.length; i++) {    
    console.log(resumeJson[resumeArray[i]]);
}
//for Each
console.log("for Each");
resumeArray.forEach(function(val,index) { 
    console.log(resumeJson[val]);
}
)

//for In
console.log("for In");
for (var key in resumeJson) {
if (resumeJson.hasOwnProperty(key)) {
  console.log(resumeJson[key]); 
}
}
//for Of
console.log("for Of");

for (let val of resumeArray) {
    console.log(resumeJson[val]);
}
