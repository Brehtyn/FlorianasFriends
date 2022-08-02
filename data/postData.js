exports.posts = [{
    uid: 1,
    userID: 123,
    userName: 'Floriana Hanna',
    userProfileURL: 'www.florianasfriends/floriana-hanna',
    userProfilePic: 'string to profile pic',
    petInformation: {
        petID: 1,
        animal: 'dog',
        name: 'Oliver',
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: false,
        pet_pictures: [1,2,3]
    },
    comments: [
        {
            commentID: 1,
            user_username: 'Daniel Ventura',
            userProfileURL: 'www.florianasfriends/daniel-ventura',
            userProfilePic: 'string to profile pic',
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes', 
            lead: false 
        },
        {
            commentID: 2,
            user_username: 'floriana Hanna',
            userProfileURL: 'www.florianasfriends/floriana-hanna',
            userProfilePic: 'string to profile pic',
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes', 
            lead: false 
        },
        {
            commentID: 3,
            user_username: 'Brentyn Hanna',
            userProfileURL: 'www.florianasfriends/brentyn-hanna',
            userProfilePic: 'string to profile pic',
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes', 
            lead: true 
        },
    ],
    likes: [
        {
            user_username: 'Floriana Hanna',
            userProfileURL: 'www.florianasfriends/floriana-hanna',
            userProfilePic: 'string to profile pic'
        },
        {
            user_username: 'Daniel Ventura',
            userProfileURL: 'www.florianasfriends/floriana-hanna',
            userProfilePic: 'string to profile pic'
        },
        {
            user_username: 'Brentyn Hanna',
            userProfileURL: 'www.florianasfriends/brentyn-hanna',
            userProfilePic: 'string to profile pic'
        }
    ]

},
{
    uid: 2, //this is the post id
    userID: 234,
    userName: 'Brentyn Hanna',
    userProfileURL: 'www.florianasfriends/brentyn-hanna',
    userProfilePic: 'string to profile pic',
    petInformation: {
        petID: 1,
        animal: 'bunny',
        name: "Phil",
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: false,
        pet_pictures: [1,2,3]
    },
    comments: [],
    likes: []

},
{
    uid: 3,
    userID: 345,
    userName: 'Daniel Ventura',
    userProfileURL: 'www.florianasfriends/daniel-ventura',
    userProfilePic: 'string to profile pic',
    petInformation: {
        petID: 1,
        animal: 'dog',
        name: "Basil",
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: true,
        pet_pictures: [1,2,3]
    },
    comments: [
        {
            commentID: 2,
            user_username: 'Daniel Ventura',
            userProfileURL: 'www.florianasfriends/daniel-ventura',
            userProfilePic: 'string to profile pic',
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes', 
            lead: false 
        },
        {
            commentID: 1,
            user_username: 'Brentyn Hanna',
            userProfileURL: 'www.florianasfriends/brentyn-hanna',
            userProfilePic: 'string to profile pic',
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes', 
            lead: true 
        },
    ],
    likes: [
        {
            user_username: 'Floriana Hanna',
            userProfileURL: 'www.florianasfriends/floriana-hanna',
            userProfilePic: 'string to profile pic'
        },
    ]

}
]