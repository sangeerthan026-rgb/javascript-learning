const employes = [
    {
        name : "srini",
        age : "28",
        location :"chennai",
        address : {
        temp : "2nd cross st, 4th ave west chennai 22",
        parmanent : "Shivan kovil st, Tanjore"
        },
    isWorking : true,
    salary : 52453.56,
    skillset : ["java","python","react","angular"]
    },

    {
        name : "hari",
        age : "24",
        location : "chennai",
        address :{
        temp : "2nd cross st, 4th ave west chennai",
        parmanent : "Shivan kovil st, Tanjore"
        },
    isWorking : true,
    salary : 30002.25,
    skillset : ["html","css","bs"]

    },
    {
        name : "kandish",
         age : "35",
        location : "chennai",
        isWorking : true,
        address: {
            temp : "No. 123, Main Street, City, State, ZIP ",
            parmanent : "Shivan kovil st, Tanjore"
        },
        salary : 30002.25,
        skillset : ["html","css","bs",".net","devops"]
    }

]

console.log("employes------>",employes[2].skillset[4])
