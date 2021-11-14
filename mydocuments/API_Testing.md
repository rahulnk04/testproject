<!-- Create New Employee -->
<!-- API POST METHOD -->
http://localhost:6000/myproj/api/v1/employee/new

<!-- BODY START-->
{
    "empName": "Rahul Nayak",
    "empAge": 26,
    "empSalary": 45000,
    "empRole": "Mern Stack Developer",
    "attrId": "rahul",
    "attrClass": "rahul_class",
    "attrSize": "30",
    "attrName": "rahul"
}
<!-- BODY END -->

<!-- get ALL Employee -->
<!-- API GET METHOD -->
http://localhost:6000/myproj/api/v1/allemployee
<!--  -->

<!-- Update Employee -->
<!-- Put Method -->
http://localhost:6000/myproj/api/v1/employee/6190aa0e8a087d5400689e93
<!-- Body Start -->
{
    "empName": "Rahul Nayak",
    "empAge": 26,
    "empSalary": 45000,
    "empRole": "Mern Stack Developer",
    "attrId": "rahul",
    "attrClass": "rahul_class",
    "attrSize": "30",
    "attrName": "rahul"

}
<!-- Body End -->

