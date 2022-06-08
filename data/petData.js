// needs some protocol that retrieves and stores users profile pic when username is called
// database for posts and their info
exports.pets = [{
    id: 1,
    animal: 'dog',
    date_lost: '1580901774643',
    date_posted: '1580901774643',
    location_lost: 'Coordinates',
    location_home: 'Coordinates',
    found: false,
    comments: [
        {
            user_id: 2,
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes'}, 
        {
            user_id: 1,
            comment: '2nd comment'
        }],
    leads: ['first lead', 'second lead', 'third lead'],
    likes_total: 3,
    likes_users_id: [1,2,3],
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
    comments: [
        {
            user_id: 2,
            comment: 'Example Comments go here! This is a really long example comment just for styling purposes'}, 
        {
            user_id: 1,
            comment: '2nd comment'
        },
        {
            user_id: 3,
            comment: '2nd comment'
        }],
    leads: [],
    likes_total: 0,
    likes_users_id: [],
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
    comments: [],
    leads: ['first lead', 'second lead', 'third lead'],
    likes_total: 100,
    likes_users_id: [1,2],
    pet_name: 'Phil & Tena',
    user_name: 'Brent',
    pet_pictures: ['img1', 'img2', 'img3']
}]