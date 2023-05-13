// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors



db.createCollection("users");

db.users.insertMany([
    {
        Id: 1,
        Name: "Virat Kohli",
        Email: "ViratKohli@gmail.com",
        Mobile: 8284868789
    },
    {
        Id: 2,
        Name: "Glenn Maxwell",
        Email: "GlennMaxwell@gmail.com",
        Mobile: 9898969696
    },
    {
        Id: 3,
        Name: "Mohammad Siraj",
        Email: "MohammadSiraj@gmail.com",
        Mobile: 7894561234
    },
    {
        Id: 4,
        Name: "Faf Du Plessis (c)",
        Email: "FafDuPlessis@gmail.com",
        Mobile: 8284868458
    },
    {
        Id: 5,
        Name: "Harshal Patel",
        Email: "HarshalPatel@gmail.com",
        Mobile: 8284788789
    },
    {
        Id: 6,
        Name: "Wanindu Hasaranga",
        Email: "WaninduHasaranga@gmail.com",
        Mobile: 9898868789
    },
    {
        Id: 7,
        Name: "Dinesh Karthik",
        Email: "DineshKarthik@gmail.com",
        Mobile: 8284862222
    },
    {
        Id: 8,
        Name: "Shahbaz Ahemad",
        Email: "ShahbazAhemad@gmail.com",
        Mobile: 8894868789
    },
    {
        Id: 9,
        Name: "Anuj Rawat",
        Email: "AnujRawat@gmail.com",
        Mobile: 9284868789
    },
    {
        Id: 10,
        Name: "AkashDeep",
        Email: "AkashDeep@gmail.com",
        Mobile: 7284868789
    },
    {
        Id: 11,
        Name: "Josh Hazlewood",
        Email: "JoshHazlewood@gmail.com",
        Mobile: 8294868789
    },
    {
        Id: 12,
        Name: "Mahipal Lomror",
        Email: "MahipalLomror@gmail.com",
        Mobile: 8285168789
    },
    {
        Id: 13,
        Name: "Finn Allen",
        Email: "FinnAllen@gmail.com",
        Mobile: 8281118789
    },
    {
        Id: 14,
        Name: "Suyash Prabhudessai",
        Email: "SuyashPrabhudessai@gmail.com",
        Mobile: 8284868333
    },
    {
        Id: 15,
        Name: "Karn Sharma",
        Email: "KarnSharma@gmail.com",
        Mobile: 8284868888
    },
    {
        Id: 16,
        Name: "Siddharth Kaul",
        Email: "SiddharthKaul@gmail.com",
        Mobile: 8284868666
    },
    {
        Id: 17,
        Name: "David Willey",
        Email: "DavidWilley@gmail.com",
        Mobile: 9684868789
    },
]);

db.createCollection("Codekata")

db.Codekata.insertMany([
    {
        Id: 1,
        Solved_testcases: 50,
    },
    {
        Id: 2,
        Solved_testcases: 100,
    },
    {
        Id: 3,
        Solved_testcases: 200,
    },
    {
        Id: 4,
        Solved_testcases: 250,
    },
    {
        Id: 5,
        Solved_testcases: 300,
    },
    {
        Id: 6,
        Solved_testcases: 350,
    },
    {
        Id: 7,
        Solved_testcases: 400,
    },
    {
        Id: 8,
        Solved_testcases: 450,
    },
    {
        Id: 9,
        Solved_testcases: 70,
    },
    {
        Id: 10,
        Solved_testcases: 90,
    },
    {
        Id: 11,
        Solved_testcases: 289,
    },
    {
        Id: 12,
        Solved_testcases: 66,
    },
    {
        Id: 13,
        Solved_testcases: 30,
    },
    {
        Id: 14,
        Solved_testcases: 70,
    },
    {
        Id: 15,
        Solved_testcases: 20,
    },
    {
        Id: 16,
        Solved_testcases: 500,
    },
    {
        Id: 17,
        Solved_testcases: 650,
    },
]);

db.createCollection("Attendance")

db.Attendance.insertMany([
    {
        Id: 1,
        Present: "y",
    },
    {
        Id: 2,
        Present: "y",
    },
    {
        Id: 3,
        Present: "y",
    },
    {
        Id: 4,
        Present: "N",
    },
    {
        Id: 5,
        Present: "y",
    },
    {
        Id: 6,
        Present: "N",
    },
    {
        Id: 7,
        Present: "N",
    },
    {
        Id: 8,
        Present: "N",
    },
    {
        Id: 9,
        Present: "y",
    },
    {
        Id: 10,
        Present: "y",
    },
    {
        Id: 11,
        Present: "y",
    },
    {
        Id: 12,
        Present: "y",
    },
    {
        Id: 13,
        Present: "y",
    },
    {
        Id: 14,
        Present: "N",
    },
    {
        Id: 15,
        Present: "N",
    },
    {
        Id: 16,
        Present: "N",
    },
    {
        Id: 17,
        Present: "y",
    },
]);

db.createCollection("Topics")

db.Topics.insertMany([
    {
        Tid: 1,
        Topic: "JavaScript",
        Date: new ISODate("2021-10-01"),
    },
    {
        Tid: 2,
        Topic: "HTML",
        Date: new ISODate("2021-10-05"),
    },
    {
        Tid: 3,
        Topic: "CSS",
        Date: new ISODate("2021-10-10"),
    },
    {
        Tid: 4,
        Topic: "React",
        Date: new ISODate("2021-10-15"),
    },
    {
        Tid: 5,
        Topic: "MYSQL",
        Date: new ISODate("2021-10-31"),
    },
    {
        Tid: 6,
        Topic: "MongoDB",
        Date: new ISODate("2021-11-01"),
    },
    {
        Tid: 7,
        Topic: "NodeJS",
        Date: new ISODate("2021-10-28"),
    },
    {
        Tid: 8,
        Topic: "FSD DEMO",
        Date: new ISODate("2021-11-05"),
    },
    {
        Tid: 9,
        Topic: "Redux",
        Date: new ISODate("2021-10-08"),
    },
]);

db.createCollection("Tasks");

db.Tasks.insertMany([
    {
        Taskno: 1,
        Tid: 1,
        no_of_users_submitted: 17,
        task: "JavaScript task",
        due_date: new ISODate("2021-10-23"),
    },
    {
        Taskno: 2,
        Tid: 2,
        no_of_users_submitted: 12,
        task: "HTML task",
        due_date: new ISODate("2021-10-28"),
    },
    {
        Taskno: 3,
        Tid: 3,
        no_of_users_submitted: 9,
        task: "CSS task",
        due_date: new ISODate("2021-10-29"),
    },
    {
        Taskno: 4,
        Tid: 4,
        no_of_users_submitted: 5,
        task: "React task",
        due_date: new ISODate("2021-10-28"),
    },
    {
        Taskno: 5,
        Tid: 5,
        no_of_users_submitted: 16,
        task: "MYSQL",
        due_date: new ISODate("2021-11-05"),
    },
    {
        Taskno: 6,
        Tid: 6,
        no_of_users_submitted: 8,
        task: "MongoDB",
        due_date: new ISODate("2021-11-15"),
    },
    {
        Taskno: 7,
        Tid: 7,
        no_of_users_submitted: 10,
        task: "Nodejs",
        due_date: new ISODate("2021-10-31"),
    },
]);


db.createCollection("Company_drives")


db.Company_drives.insertMany([
    {
        Company_name: "GOOGLE",
        Drive_Date: new ISODate("2020-10-15"),
        Id: 8
    },
    {
        Company_name: "APPLE",
        Drive_Date: new ISODate("2020-10-18"),
        Id: 10
    },
    {
        Company_name: "MICROSOFT",
        Drive_Date: new ISODate("2020-10-25"),
        Id: 16
    },
    {
        Company_name: "AMAZON",
        Drive_Date: new ISODate("2020-10-30"),
        Id: 6
    },
    {
        Company_name: "ORACLE",
        Drive_Date: new ISODate("2020-11-01"),
        Id: 17
    },
    {
        Company_name: "IBM",
        Drive_Date: new ISODate("2023-05-24"),
        Id: 15
    },
    {
        Company_name: "ADOBE",
        Drive_Date: new ISODate("2023-05-30"),
        Id: 2
    },
    {
        Company_name: "CISCO",
        Drive_Date: new ISODate("2023-06-01"),
        Id: 9
    },
    {
        Company_name: "INTEL",
        Drive_Date: new ISODate("2023-05-20"),
        Id: 1
    },
]);

db.createCollection("Mentors");

db.Mentors.insertMany([
    {
        Mentor_id: 01,
        Mentor_name: "Rohit Sharma",
        Mentor_github: "https://github.com/RohitSharma",
        mentee_count: 6
    },
    {
        Mentor_id: 02,
        Mentor_name: "MS Dhoni",
        Mentor_github: "https://github.com/MSDhoni",
        mentee_count: 5
    },
    {
        Mentor_id: 03,
        Mentor_name: "Faf du Plessis",
        Mentor_github: "https://github.com/FafduPlessis",
        mentee_count: 8
    },
    {
        Mentor_id: 04,
        Mentor_name: "David Warner",
        Mentor_github: "https://github.com/DavidWarner",
        mentee_count: 10
    },
    {
        Mentor_id: 05,
        Mentor_name: "Sanju Samson",
        Mentor_github: "https://github.com/SanjuSamson",
        mentee_count: 2
    },
    {
        Mentor_id: 06,
        Mentor_name: "Shikhar Dhawan",
        Mentor_github: "https://github.com/ShikharDhawan",
        mentee_count: 9
    },
    {
        Mentor_id: 07,
        Mentor_name: "Aiden Markram",
        Mentor_github: "https://github.com/AidenMarkram",
        mentee_count: 12
    },
    {
        Mentor_id: 08,
        Mentor_name: "KL Rahul",
        Mentor_github: "https://github.com/KLRahul",
        mentee_count: 3
    },
    {
        Mentor_id: 09,
        Mentor_name: "Hardik Pandya",
        Mentor_github: "https://github.com/HardikPandya",
        mentee_count: 2
    },
]);



// Find all the topics and tasks which are thought in the month of October
db.Topics.find({ $and: [{ Date: { $gte: new ISODate("2021-10-01") } }, { Date: { $lte: new ISODate("2021-10-31") } }] }).pretty();
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf28"),
// "Tid" : 1, "Topic" : "JavaScript",
// "Date" : ISODate("2021-10-01T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf29"),
// "Tid" : 2,
// "Topic" : "HTML",
// "Date" : ISODate("2021-10-05T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf2a"),
// "Tid" : 3,
// "Topic" : "CSS",
// "Date" : ISODate("2021-10-10T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf2b"),
// "Tid" : 4,
// "Topic" : "React",
// "Date" : ISODate("2021-10-15T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf2c"),
// "Tid" : 5,
// "Topic" : "MYSQL",
// "Date" : ISODate("2021-10-31T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf2e"),
// "Tid" : 7,
// "Topic" : "NodeJS",
// "Date" : ISODate("2021-10-28T00:00:00Z")
// }
// {
// "_id" : ObjectId("645bc00fe83377fc1da0bf30"),
// "Tid" : 9,
// "Topic" : "Redux",
// "Date" : ISODate("2021-10-08T00:00:00Z")
// }


db.Tasks.find({ $and: [{ due_date: { $gte: new ISODate("2021-10-05") } }, { due_date: { $lte: new ISODate("2021-10-30") } }] }).pretty();

// { 
//     "_id" : ObjectId("645a90e15f1435f87f0768b4"), 
//     "Taskno" : 1, 
//     "Tid" : 1, 
//     "no_of_users_submitted" : 17, 
//     "task" : "JavaScript task", 
//     "due_date" : ISODate("2021-10-23T00:00:00Z") 
// } 
// { 
//     "_id" : ObjectId("645a90e15f1435f87f0768b5"), 
//     "Taskno" : 2, 
//     "Tid" : 2, 
//     "no_of_users_submitted" : 12, 
//     "task" : "HTML task", 
//     "due_date" : ISODate("2021-10-28T00:00:00Z") 
// } 
// { 
//     "_id" : ObjectId("645a90e15f1435f87f0768b6"), 
//     "Taskno" : 3, 
//     "Tid" : 3, 
//     "no_of_users_submitted" : 9, 
//     "task" : "CSS task", 
//     "due_date" : ISODate("2021-10-29T00:00:00Z") 
// } 
// { 
//     "_id" : ObjectId("645a90e15f1435f87f0768b7"), 
//     "Taskno" : 4, 
//     "Tid" : 4, 
//     "no_of_users_submitted" : 5, 
//     "task" : "React task", 
//     "due_date" : ISODate("2021-10-28T00:00:00Z") 
// }

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020


db.Company_drives.find({ $and: [{ Drive_Date: { $lte: new ISODate("2021-10-31") } }, { Drive_Date: { $gte: new ISODate("2021-10-15") } }] }).pretty();

// {
// "_id" : ObjectId("645fd3623addc2243a6c6829"),
// "Company_name" : "GOOGLE",
// "Drive_Date" : ISODate("2020-10-15T00:00:00Z"),
// "Id" : 8
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682a"),
// "Company_name" : "APPLE",
// "Drive_Date" : ISODate("2020-10-18T00:00:00Z"),
// "Id" : 10
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682b"),
// "Company_name" : "MICROSOFT",
// "Drive_Date" : ISODate("2020-10-25T00:00:00Z"),
// "Id" : 16
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682c"),
// "Company_name" : "AMAZON",
// "Drive_Date" : ISODate("2020-10-30T00:00:00Z"),
// "Id" : 6
// }

db.Company_drives.find().pretty();

// {
// "_id" : ObjectId("645fd3623addc2243a6c6829"),
// "Company_name" : "GOOGLE",
// "Drive_Date" : ISODate("2020-10-15T00:00:00Z"),
// "Id" : 8
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682a"),
// "Company_name" : "APPLE",
// "Drive_Date" : ISODate("2020-10-18T00:00:00Z"),
// "Id" : 10
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682b"),
// "Company_name" : "MICROSOFT",
// "Drive_Date" : ISODate("2020-10-25T00:00:00Z"),
// "Id" : 16
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682c"),
// "Company_name" : "AMAZON",
// "Drive_Date" : ISODate("2020-10-30T00:00:00Z"),
// "Id" : 6
// }
// {
// "_id" : ObjectId("645fd3623addc2243a6c682d"),
// "Company_name" : "ORACLE",
// "Drive_Date" : ISODate("2020-11-01T00:00:00Z"),
// "Id" : 17
// }
// { 
// "_id" : ObjectId("645fd3623addc2243a6c682e"), 
// "Company_name" : "IBM", 
// "Drive_Date" : ISODate("2023-05-24T00:00:00Z"), 
// "Id" : 15 
// } 
// { 
// "_id" : ObjectId("645fd3623addc2243a6c682f"), 
// "Company_name" : "ADOBE", 
// "Drive_Date" : ISODate("2023-05-30T00:00:00Z"), 
// "Id" : 2 
// } 
// { 
// "_id" : ObjectId("645fd3623addc2243a6c6830"), 
// "Company_name" : "CISCO", 
// "Drive_Date" : ISODate("2023-06-01T00:00:00Z"), 
// "Id" : 9 
// } 
// { 
// "_id" : ObjectId("645fd3623addc2243a6c6831"), 
// "Company_name" : "INTEL", 
// "Drive_Date" : ISODate("2023-05-20T00:00:00Z"), 
// "Id" : 1 
// }

//Find the number of problems solved by the user in codekata

db.Codekata.find({}).pretty();

// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf06"), 
// "Id" : 1, 
// "Solved_testcases" : 50 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf07"), 
// "Id" : 2, 
// "Solved_testcases" : 100 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf08"), 
// "Id" : 3, 
// "Solved_testcases" : 200 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf09"), 
// "Id" : 4, 
// "Solved_testcases" : 250 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0a"), 
// "Id" : 5, 
// "Solved_testcases" : 300 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0b"), 
// "Id" : 6, 
// "Solved_testcases" : 350 
// }
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0c"), 
// "Id" : 7, 
// "Solved_testcases" : 400 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0d"), 
// "Id" : 8, 
// "Solved_testcases" : 450 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0e"), 
// "Id" : 9, 
// "Solved_testcases" : 70 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf0f"), 
// "Id" : 10, 
// "Solved_testcases" : 90 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf10"), 
// "Id" : 11, 
// "Solved_testcases" : 289 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf11"), 
// "Id" : 12, 
// "Solved_testcases" : 66 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf12"), 
// "Id" : 13, 
// "Solved_testcases" : 30 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf13"), 
// "Id" : 14, 
// "Solved_testcases" : 70 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf14"), 
// "Id" : 15, 
// "Solved_testcases" : 20 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf15"), 
// "Id" : 16, 
// "Solved_testcases" : 500 
// } 
// { 
// "_id" : ObjectId("645bbfc3e83377fc1da0bf16"), 
// "Id" : 17, 
// "Solved_testcases" : 650 
// }

// Find all the mentors with who has the mentee's count more than 15
db.Mentors.find({ mentee_count: { $gte: 15 } }).pretty();

// { 
//     "_id" : ObjectId("645bd99be83377fc1da0bf59"), 
//     "Mentor_id" : 7, 
//     "Mentor_name" : "Aiden Markram", 
//     "Mentor_github" : "https://github.com/AidenMarkram", 
//     "mentee_count" : 15 
// }



// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.Attendance.find({ Present: { $eq: "N" } }).pretty();

// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf5f"), 
//     "Id" : 4, "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf61"), 
//     "Id" : 6, "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf62"), 
//     "Id" : 7, 
//     "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf63"), 
//     "Id" : 8, "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf69"), 
//     "Id" : 14, "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf6a"), 
//     "Id" : 15, 
//     "Present" : "N" 
// } 
// { 
//     "_id" : ObjectId("645bdb59e83377fc1da0bf6b"), 
//     "Id" : 16, 
//     "Present" : "N" 
// }  
