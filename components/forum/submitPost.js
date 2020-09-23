//post through forumQA API
//do not forget to manually add timestamp to each post.
//have a submit component that displays a submit form with form validation included.

//DATABASE CALLS:
//Organizing by relevance/time is handled in frontend hooks

    //FORUM HOME
    //  20 latest posts
    //  db.forum.find().sort( { timestamp : -1 } ).limit(10)

    //THEMES:
    //Query for specific theme(s): 
    //  db.forum.find( { postTags: { $in: [ "Hydroponics", "agro" ]} } )
    //      postTags is the target and $in, finds within document the required filter (will be an array so users can add and reduce filters.)


    //POPULARITY
    //  20 latest posts
    //  db.forum.find().sort( { timestamp : -1 } ).limit(20)
    //      sorts by time and limits db response



