export const solutionsOptions = [
    {
        name:'Option 1',
        description:'Lorem ipsum dolor'
    },
    {
        name:'Option 2',
        description:'Lorem ipsum dolor'
    },
    {
        name:'Option 3',
        description:'Lorem ipsum dolor'
    },
    {
        name:'Option 4',
        description:'Lorem ipsum dolor'
    },
]

export const solutionsDetails = [
    {
        aspects: [
            {
                name: 'Financial Aspect 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio quis ligula convallis commodo. Aliquam ac malesuada nunc. Vivamus dignissim, est eu mollis bibendum, sem arcu pharetra magna, eu faucibus arcu elit nec justo.'
            },
            {
                name: 'Financial Aspect 2',
                description: 'Suspendisse vel velit non mauris eleifend tincidunt. Nullam aliquam dolor in ligula suscipit, non dictum orci posuere. Donec vestibulum bibendum nisl, eget fringilla risus malesuada non. Morbi euismod finibus tortor id maximus.'
            }
        ],
        solutions: {
            name: 'Solutions 1 solutions',
            links: [
                {
                    name: 'Solution 1',
                    destination: 'Destination 1'
                },
                {
                    name: 'Solution 2',
                    destination: 'Destination 2'
                },
                {
                    name: 'Solution 3',
                    destination: 'Destination 3'
                }
            ]
        }
    },
    {
        aspects: [
            {
                name: 'Financial Aspect 2',
                description: 'Phasellus nec sapien libero. Nullam suscipit orci vitae arcu vestibulum, nec rhoncus odio convallis. Fusce aliquet eros eu mauris convallis, vel pulvinar urna sagittis. Duis at volutpat turpis.'
            },
            {
                name: 'Financial Aspect 2',
                description: 'Suspendisse vel velit non mauris eleifend tincidunt. Nullam aliquam dolor in ligula suscipit, non dictum orci posuere. Donec vestibulum bibendum nisl, eget fringilla risus malesuada non. Morbi euismod finibus tortor id maximus.'
            }
        ],
        solutions: {
            name: 'Solutions 2 solutions',
            links: [
                {
                    name: 'Solution 1',
                    destination: 'Destination 1'
                },
                {
                    name: 'Solution 2',
                    destination: 'Destination 2'
                }
            ]
        }
    },
    {
        aspects: [
            {
                name: 'Financial Aspect 3',
                description: 'Fusce et metus volutpat, fermentum erat ut, rutrum urna. Donec auctor semper enim, nec euismod nisi consectetur eu. Sed ultricies, elit quis consectetur finibus, libero elit euismod justo.'
            },
            {
                name: 'Financial Aspect 2',
                description: 'Suspendisse vel velit non mauris eleifend tincidunt. Nullam aliquam dolor in ligula suscipit, non dictum orci posuere. Donec vestibulum bibendum nisl, eget fringilla risus malesuada non. Morbi euismod finibus tortor id maximus.'
            }
        ],
        solutions: {
            name: 'Solutions 3 solutions',
            links: [
                {
                    name: 'Solution 1',
                    destination: 'Destination 1'
                }
            ]
        }
    },
    {
        aspects: [
            {
                name: 'Financial Aspect 4',
                description: 'Vivamus et erat nec lorem pulvinar interdum nec ac tortor. Duis vehicula, libero nec aliquet egestas, lorem sapien vehicula neque, vel faucibus elit justo nec nisi. Suspendisse a mi vel nisl iaculis fermentum.'
            },
            {
                name: 'Financial Aspect 2',
                description: 'Suspendisse vel velit non mauris eleifend tincidunt. Nullam aliquam dolor in ligula suscipit, non dictum orci posuere. Donec vestibulum bibendum nisl, eget fringilla risus malesuada non. Morbi euismod finibus tortor id maximus.'
            }
        ],
        solutions: {
            name: 'Solutions 4 solutions',
            links: [
                {
                    name: 'Solution 1',
                    destination: 'Destination 1'
                },
                {
                    name: 'Solution 2',
                    destination: 'Destination 2'
                },
                {
                    name: 'Solution 3',
                    destination: 'Destination 3'
                }
            ]
        }
    }
];


export const solutionsCardDetails = [
    {
        image:{
            src:'src/media/wealth-management-1.jpeg',
            alt:'A picture of people managing their wealth'
        },
        link:{
            destination:'link-destination',
            name:'Link to your article Here'
        },
        description:'Give your article a very compelling description!'
    },
    {
        image:{
            src:'src/media/wealth-management-2.jpeg',
            alt:'A picture of people managing Suceeding with money'
        },
        link:{
            destination:'link-destination',
            name:'Why wealth management is extremley important'
        },
        description:'Money makes the world go around'
    },
    {
        image:{
            src:'src/media/gemeni-dessert-money.jpg',
            alt:'Money in the desert'
        },
        link:{
            destination:'link-destination',
            name:'View why wealth managment is as essential as water'
        },
        description:'Money is as essential as having water in a dessert!'
    },
    {
        image:{
            src:'src/media/gemeni-coins.jpg',
            alt:'A picture of people managing their wealth'
        },
        link:{
            destination:'link-destination',
            name:'Wealth management and cryptocurrency'
        },
        description:'Crypto is growing bigger and bigger everyday, do you know why?'
    },
    

]

// data.ts

export const serviceGridData = [
    {
        name: 'Wealth Management',
        serviceOptions: [
            {
                name: 'Portfolio Management',
                description: 'Experts manage tailored investment portfolios for financial goals.',
                image: 'src/media/wealth-management-1.jpeg',
                halfImage: true
            },
            {
                name: 'Retirement Planning',
                description: 'Navigate retirement options, optimize savings, plan financially comfortable retirement.',
                image: 'src/media/futuristic-money-ball-removebg-preview.png',
                halfImage: false
            },
            {
                name: 'Estate Planning',
                description: 'Preserve legacy, ensure assets distributed, minimize taxes with planning.',
                image: 'src/media/futuristic-money-ball-removebg-preview.png',
                halfImage: false
            },
            {
                name: 'Tax Optimization',
                description: 'Minimize tax burden, maximize savings with tax optimization strategies.',
                image: 'src/media/futuristic-money-ball-removebg-preview.png',
                halfImage: false
            }
        ]
    },
    {
        name: 'Investment Advisory',
        serviceOptions: [
            {
                name: 'Investment Advisory',
                description: 'Get personalized advice, make informed decisions, optimize portfolio.',
                image: 'src/media/wealth-management-2.jpeg',
                halfImage: true
            },
            {
                name: 'Education Planning',
                description: 'Secure children\'s future, save tuition, navigate financial aid options.',
                image: 'src/media/gemeni-coins.jpg',
                halfImage: false
            },
            {
                name: 'Wealth Transfer',
                description: 'Plan future wealth, ensure smooth transition, minimize tax implications.',
                image: 'src/media/gemeni-coins.jpg',
                halfImage: false
            },
            {
                name: 'Risk Management',
                description: 'Protect assets, minimize risks, implement effective risk mitigation measures.',
                image: 'src/media/gemeni-coins.jpg',
                halfImage: false
            }
        ]
    },
    {
        name: 'Financial Planning',
        serviceOptions: [
            {
                name: 'Financial Planning',
                description: 'Achieve financial goals, create roadmap, manage investments, plan future.',
                image: 'src/media/gemeni-dessert-money.jpg',
                halfImage: true
            },
            {
                name: 'Debt Management',
                description: 'Manage debt efficiently, reduce interest payments, achieve financial freedom.',
                image: 'src/media/gemeni-dessert-money.jpg',
                halfImage: false
            },
            {
                name: 'Insurance Planning',
                description: 'Protect assets, mitigate risks, secure financial future with insurance.',
                image: 'src/media/gemeni-dessert-money.jpg',
                halfImage: false
            },
            {
                name: 'Being a real one',
                description: 'Hustlers dont stop they keep going',
                image: 'src/media/gemeni-dessert-money.jpg',
                halfImage: false
            },

            // Add more options for Financial Planning here if needed
        ]
    }
];






export const optionsGridServiceBar = [
    {
        name: 'Option One',
        description: 'Lorem ipsum'
    },
    {
        name: 'Option Two',
        description: 'Dolor sit amet'
    },
    {
        name: 'Option Three',
        description: 'Consectetur adipiscing'
    },
    {
        name: 'Option Four',
        description: 'Sed do eiusmod'
    }
]













//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatum maxime impedit saepe quis repellendus odit optio dolore ipsa fuga, commodi quam sint veritatis temporibus a itaque nemo numquam quia. Cumque expedita fuga nemo sint officia, minus dolorem ullam.