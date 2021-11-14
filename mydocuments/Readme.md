<!-- Test Project -->

MERN STACK APPLICATION 

Backend is build with NodeJS and necessary Dependencies.
Database used here is MongoDb
FrontEnd is made with React - Redux 
Styling Components - Material UI and React Bootstrap

Setup Backend : 
    cd mybackend
    1.  inside configuration folder we have a file called config.env
            PORT=6000
            DB_URL=mongodb://localhost:27017/mytestproject
            we have to provide these two information there.
    
    2.  Then we can run command npm i --save , This will install all the rfequired node Modules for         Backend Application.

    3. npm run dev ( Once Backend is Up and Running )
Setup Frontend :
    cd myfrontend
    1. in package.json change the proxy ip example http://192.168.1.8:3000 for your backend application.
    2. npm i --save
    3. npm start


Backend Description : -

    Backend entry path is server.js that redirects to app.js where express is used as server.
    in server.js all the necessary connectivity and error handling is done.

    In configuration folder we have the connectDatabase method which is called in server.js for connecting to database.

    in utils folder we have a file arrorHandler.js which extends to class Error of ES6 Standard. we are capturing the stackTrace there with message and statuscode.

    In Middleware we have two files error.js and catchAsyncerrors.
        in error.js i tried to catch the mongo db errors such as duplicate key , or cast error.

        in catchAsyncErrors what i did is a promise to resolve or reject. so that in controller i do not need to write promise again and again.

    In model - as we know db structure is defined and exported for controller.

    In controller i have did the CRUD operation Create , Read, Update and Delete Operations.
    API testnig results are in API_Testing.md file

    In Routes all the routes are been defined. 

    Status Post man all working 

FrontEnd Description : -

    Front end with React Hooks and Redux

    Inside src folder we have Components Folder , inside components we have all the views and screens for Data.

    Redux - Constants are been declared in contstants folder , Ihis its action/service is defined inside actions folder , and the reduser is define inside reduser folder.

    then the store imports all the reducer and keeps update of states.

    Redux dev tool is enabled in case you wnat to see live data changes.
    a loding Screen has been Provided untill data loads.
    
    Frontend has Read all data as a table, View single data details and finally a modal to update the respective data.

    Create Screen is not prepared , it will be done in the same process as edit screen.



