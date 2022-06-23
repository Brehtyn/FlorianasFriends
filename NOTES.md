


These are going to be notes for how the DB is structured and what the models might look like. This is just for internal use so it's not for any use for anyone else and will probably get deleted once I get the DB done


NoSQL we care about speed of query
- Keep data shallow
- Only query for actual data we need


For a Feed (such as a Twitter feed)
    User Query's - nesting users items under their user ID
    - |items
        -|userID
            -|itemID

Notes: Use this for the petPosts probably, we will possibly have to seperate pets vs posts

Item Query (useful for comments on a blog post)
    User UID on items
    Need association but not querying by user
    -|items
        -|itemID
            -|userID


Data Currently in place (Fake Data)

-|pet
    -|pet info (general such as dateLost, datePosted,locationLost,locationHome,found)
    -|comments
        -|all comments (objects)
    -|leads (array of strings which are the leads/comments)
    -|likes_users_id (array of indices)


-|user
    -|id
    -|etc etc 
    -|posts (array of indices of posts)
    -|posts_liked: (array of indices of posts)
    -|posts_saved: (array of indices of posts)
    -|posts_commented: (array of indices of posts)
    -|posts_leads: (array of indices of posts)
    -|settings: (array of strings that equat to settings)


Why the Data Model with Comments in the Posts?
For example, in your application a post can have about 10 to 20 comments, with each comment has a few (about 10 lines) of text. This will help think about storing all the comment data within each post itself. Then the design and the queries like will be simple as all the related data is stored together.

db.post.find( { postId: "My Data Model" } )

The query will fetch post related data like title, content, date, etc., and also all the comments associated with the post. You can use projection to control the fields required in a particular page of the application. You can also, query for specific comment. Both the postId and commentId fields can be indexed for fast access.

But, if the number of comments is very large, and ever growing (only some extraordinary posts have many comments - an unlikely scenario), then store commentId values within the post as an array field. The comments are stored within a separate collection.

Then, you can always query a post for its information with a simple query. To find a specific comment information you will need to do a “join” operation - the $lookup aggregation query to access details of comments. Note that even the lookup operations can use indexes. Ideally, you use lookup queries where the performance may not be very important.

An option, would be to store the postId value (and even the post title) in the comments collection. This will help query the comments collection using the postId (or post title), without a $lookup of the post collection.

Note that, for each option you will also have to take into consideration the other operations on the collection like - inserts, updates and deletes.

Some relevant questions that can help in modeling the data:

How many comments you think a post will have? How much content is likely to be in each comment? This will help determine whether to include all comment details within a post or use another collection for comments.
Can you identify 2 to 3 important queries in your application? What are application’s main functions (for example, the web pages and the kind of data you want to show in a particular page, etc.).


We shall keep the comments in the comments section because of the above.



What about the two models we have now? What are the benefits and downsides or possible alternatives?

What can be seperated out into multiple collections?
Can we put objects instead of indices for less queries?
    - This depends on the amount of data that will be placed, see above explanation ^
Number one thing is to keep data shallow


-|pet
    -|pet info (general such as dateLost, datePosted,locationLost,locationHome,found)
    -|comments
        -|all comments (objects)
    -|leads (array of strings which are the leads/comments)
    -|likes_users_id (array of indices)


-|user
    -|id
    -|etc etc 
    -|posts (array of indices of posts)
    -|posts_liked: (array of indices of posts)
    -|posts_saved: (array of indices of posts)
    -|posts_commented: (array of indices of posts)
    -|posts_leads: (array of indices of posts)
    -|settings: (array of strings that equat to settings)

What info do we need for what pages?

Posts we need the following information
- Who posted
- The pet information (object)
- Comments (array of objects - Probably not many comments)
- Likes (array of user objects with not much info just name, picture, link to their profile)
- Leads (array of objects as well - this will be direct to user)

SAMPLE POST MODEL

-|post
    -|postID
    -|UserID
    -|petInformation (object)
        -|petID
        -|petURL (points to individual pet page)
        -|date_lost
        -|Owner Name or Username
        -|ProfileUser URL(URL string, attach to name in above)
        -|pet_pictures
    -|Comments/Leads (array of objects)
        -[{
            -|commentId
            -|Lead or Comment (maybe a string)
            -|Username
            -|ProfileUser URL
            -|Profile Picture
            -|Comment (string)
        }]
    -|Likes (array of objects again)
        -[{
            -|Username
            -|ProfileUser URL
            -|Profile Picture
        }]
    -|Number of Likes

SAMPLE USER MODEL - Don't need post ID, we will query posts using User ID
- Look for all posts that have same userID so we only run through it once instead of querying all the Post ID's in an array

-|user
    -|userID
    -|Name (first and last)
    -|Username
    -|Email
    -|Profile Picture (probably ID or some reference)
    -|Posts Saved/Posts Liked (can make this an object)
        -|Posts Snippet (object)
            -|Pet Name
            -|Pet Picture
            -|Lost On
            -|Found Status
            -|URL to it's own page
    -|Settings (object with it's own properties for settings)
    