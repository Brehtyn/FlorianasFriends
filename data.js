// needs some protocol that retrieves and stores users profile pic when username is called
// database for posts and their info
exports.pets = {
        id: 1,
        animal: 'dog',
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: false,
        comments: ['first comment', '2nd comment'],
        leads: ['first lead', 'second lead', 'third lead'],
        likes_total: 3,
        likes_users: ['user_name_1', 'user_name_2', 'user_name_3'],
        pet_name: 'Oliver',
        user_name: 'Floriana',
        pet_pictures: ['img1', 'img2', 'img3']
    }, 
    {
        id: 2,
        animal: 'cat',
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: true,
        comments: ['first comment', '2nd comment'],
        leads: [null],
        likes_total: 0,
        likes_users: [null],
        pet_name: 'Basil',
        user_name: 'Daniel',
        pet_pictures: ['img1', 'img2', 'img3']
    },
    {
        id: 3,
        animal: 'bunny',
        date_lost: '1580901774643',
        date_posted: '1580901774643',
        location_lost: 'Coordinates',
        location_home: 'Coordinates',
        found: false,
        comments: [null],
        leads: ['first lead', 'second lead', 'third lead'],
        likes_total: 100,
        likes_users: [...(user_names)],
        pet_name: 'Phil & Tena',
        user_name: 'Brent',
        pet_pictures: ['img1', 'img2', 'img3']
    }
//database for users and their information
exports.users = {
        id: 1,
        name: 'Floriana Hanna',
        profile_pic: 'img1',
        location_home: 'World Wide',
        posts: [1],
        posts_liked: [1, 2, 3],
        posts_saved: [],
        posts_commented: [1, 2, 3],
        posts_leads: [2,3],
        settings: ['option1 = ect', 'option2 = ect']
    },
    {
        id: 2,
        name: 'Daniel Ventura',
        profile_pic: 'img1',
        location_home: 'Tempe, Arizona',
        posts: [2],
        posts_liked: [],
        posts_saved: [1, 2, 3],
        posts_commented: [2],
        posts_leads: [3],
        settings: ['option1 = ect', 'option2 = ect']
    },
    {
        id: 3,
        name: 'Brentyn Hanna',
        profile_pic: 'img1',
        location_home: 'Las Vegas, Nevada',
        posts: [3],
        posts_liked: [2],
        posts_saved: [2],
        posts_commented: [],
        posts_leads: [],
        settings: ['option1 = ect', 'option2 = ect']
    }
    

