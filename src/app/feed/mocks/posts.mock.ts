import { Post } from '../types/post.type';

export const posts: Post[] = [
    {
        id: 1,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. I',
        avatar: '/assets/images/avatar.png',
        likes: [1, 3],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 2,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.t',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                createdOn: new Date(),
            },
            {
                id: 3,
                author: 'Robert Kruger',
                content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                createdOn: new Date(),
            },
            {
                id: 4,
                author: 'Robert Kruger',
                content: 'Nulla consequat massa quis enim.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 3,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: []
    },
    {
        id: 4,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. I',
        avatar: '/assets/images/avatar.png',
        likes: [1, 3],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 5,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.t',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                createdOn: new Date(),
            },
            {
                id: 3,
                author: 'Robert Kruger',
                content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                createdOn: new Date(),
            },
            {
                id: 4,
                author: 'Robert Kruger',
                content: 'Nulla consequat massa quis enim.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 6,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: []
    },
    {
        id: 7,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. I',
        avatar: '/assets/images/avatar.png',
        likes: [1, 3],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 8,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.t',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                createdOn: new Date(),
            },
            {
                id: 3,
                author: 'Robert Kruger',
                content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                createdOn: new Date(),
            },
            {
                id: 4,
                author: 'Robert Kruger',
                content: 'Nulla consequat massa quis enim.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 9,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: []
    },
    {
        id: 10,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. I',
        avatar: '/assets/images/avatar.png',
        likes: [1, 3],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'This is the content of the comment. It is extremely informative.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 11,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.t',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: [
            {
                id: 1,
                author: 'Robert Kruger',
                content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
                createdOn: new Date(),
            },
            {
                id: 2,
                author: 'Robert Kruger',
                content: 'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                createdOn: new Date(),
            },
            {
                id: 3,
                author: 'Robert Kruger',
                content: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                createdOn: new Date(),
            },
            {
                id: 4,
                author: 'Robert Kruger',
                content: 'Nulla consequat massa quis enim.',
                createdOn: new Date(),
            }
        ]
    },
    {
        id: 12,
        author: 'Robert Kruger',
        createdOn: new Date(),
        content: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        avatar: '/assets/images/avatar.png',
        likes: [],
        comments: []
    }
];