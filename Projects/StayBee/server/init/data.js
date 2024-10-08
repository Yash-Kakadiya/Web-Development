const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Boston",
        country: "United States",
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Miami",
        country: "United States",
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1100,
        location: "Montana",
        country: "United States",
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
    },
    {
        title: "Mountain View Cabin",
        description: "Cozy cabin with breathtaking mountain views, perfect for a peaceful retreat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1558329876-208cbb15ab67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBWaWV3JTIwQ2FiaW58ZW58MHx8MHx8fDA%3D"
        },
        price: 1200,
        location: "Aspen",
        country: "United States"
    },
    {
        title: "Lakeside Villa",
        description: "Relax in this lakeside villa with stunning views and private dock access.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1692192813001-67e53be6c690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFrZXNpZGUlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 1600,
        location: "Lake Tahoe",
        country: "United States"
    },
    {
        title: "Luxury Penthouse",
        description: "Modern penthouse with panoramic city views, located in the heart of downtown.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEx1eHVyeSUyMFBlbnRob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 3000,
        location: "New York City",
        country: "United States"
    },
    {
        title: "Rustic Farmhouse",
        description: "Stay at this rustic farmhouse surrounded by nature and fresh air.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1635386052832-6d60e968e055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJ1c3RpYyUyMEZhcm1ob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 900,
        location: "Nashville",
        country: "United States"
    },
    {
        title: "Tropical Island Bungalow",
        description: "A serene bungalow on a tropical island with crystal clear waters and white sand beaches.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1697730270201-bdfc5b81a675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJvcGljYWwlMjBJc2xhbmQlMjBCdW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 2000,
        location: "Bora Bora",
        country: "French Polynesia"
    },
    {
        title: "Charming City Apartment",
        description: "A cozy, centrally located apartment in the heart of the city's bustling center.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1664266386277-2789b93c8b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhcm1pbmclMjBDaXR5JTIwQXBhcnRtZW50fGVufDB8fDB8fHww"
        },
        price: 1200,
        location: "Paris",
        country: "France"
    },
    {
        title: "Countryside Cottage",
        description: "Escape to the countryside with this quaint cottage surrounded by nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q291bnRyeXNpZGUlMjBDb3R0YWdlfGVufDB8fDB8fHww"
        },
        price: 800,
        location: "Oxford",
        country: "United Kingdom"
    },
    {
        title: "Modern Seaside Villa",
        description: "Luxury villa with sleek designs and a stunning view of the ocean.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1697730288131-6684ca63584b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwU2Vhc2lkZSUyMFZpbGxhfGVufDB8fDB8fHww"
        },
        price: 2500,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Forest Treehouse",
        description: "A treehouse nestled in the forest, perfect for a magical and adventurous stay.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1513517147916-e77dd158b0a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9yZXN0JTIwVHJlZWhvdXNlfGVufDB8fDB8fHww"
        },
        price: 1300,
        location: "Portland",
        country: "United States"
    },
    {
        title: "Desert Adobe House",
        description: "Stay in this desert adobe house for a unique experience surrounded by the stunning desert landscape.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1699533135101-124e59ed5565?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGVzZXJ0JTIwQWRvYmUlMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 1100,
        location: "Santa Fe",
        country: "United States"
    },
    {
        title: "Historic Loft",
        description: "This historic loft offers a blend of modern comfort and old-world charm.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGlzdG9yaWMlMjBMb2Z0fGVufDB8fDB8fHww"
        },
        price: 1800,
        location: "Boston",
        country: "United States"
    },
    {
        title: "Secluded Beach Shack",
        description: "A secluded beach shack, perfect for those who seek privacy and tranquility.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2VjbHVkZWQlMjBCZWFjaCUyMFNoYWNrfGVufDB8fDB8fHww"
        },
        price: 900,
        location: "Hawaii",
        country: "United States"
    },
    {
        title: "Urban Studio",
        description: "A small yet stylish studio in the heart of a bustling urban area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VXJiYW4lMjBTdHVkaW98ZW58MHx8MHx8fDA%3D"
        },
        price: 1000,
        location: "Berlin",
        country: "Germany"
    },
    {
        title: "Cliffside Villa",
        description: "A villa perched on the cliffs with sweeping views of the sea and coastline.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528228953047-fb292ecb300f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENsaWZmc2lkZSUyMFZpbGxhfGVufDB8fDB8fHww"
        },
        price: 2700,
        location: "Amalfi Coast",
        country: "Italy"
    },
    {
        title: "Cozy Mountain Chalet",
        description: "A traditional mountain chalet surrounded by snow-covered peaks, perfect for a winter retreat.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1577138565420-9780b78b0ee1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q296eSUyME1vdW50YWluJTIwQ2hhbGV0fGVufDB8fDB8fHww"
        },
        price: 1400,
        location: "Chamonix",
        country: "France"
    },
    {
        title: "Oceanfront Condo",
        description: "A modern oceanfront condo offering uninterrupted views of the beach and sea.",
        image: {
            filename: "listingimage",
            url: "https://media.istockphoto.com/id/1430186635/photo/oceanfront-condos-with-palm-trees-on-an-empty-sandy-beach-along-the-quiet-and-uncrowded.webp?a=1&b=1&s=612x612&w=0&k=20&c=kKHAAR6IrdS39BppyVvdtN22P-N8TbhL90QtzeDEiFg="
        },
        price: 2200,
        location: "Miami",
        country: "United States"
    },
    {
        title: "Country Manor House",
        description: "A luxurious manor house surrounded by rolling countryside and lush gardens.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1724774033112-a6b5d60b6e3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q291bnRyeSUyME1hbm9yJTIwSG91c2V8ZW58MHx8MHx8fDA%3D"
        },
        price: 3200,
        location: "Cotswolds",
        country: "United Kingdom"
    },
    {
        title: "Modern Urban Loft",
        description: "Stylish loft in the heart of the city, perfect for a chic getaway with plenty of amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520608421741-68228b76b6df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW9kZXJuJTIwVXJiYW4lMjBMb2Z0fGVufDB8fDB8fHww"
        },
        price: 1500,
        location: "Los Angeles",
        country: "United States"
    },
    {
        title: "Mediterranean Villa",
        description: "Luxurious Mediterranean-style villa with ocean views, surrounded by lush gardens.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1547227639-a6a8d77434e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaXRlcnJhbmVhbiUyMFZpbGxhfGVufDB8fDB8fHww"
        },
        price: 2700,
        location: "Mallorca",
        country: "Spain"
    },
    {
        title: "Hilltop Retreat",
        description: "An isolated hilltop retreat with breathtaking panoramic views and cozy interiors.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1719035589510-067e78972998?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlsbHRvcCUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D"
        },
        price: 1300,
        location: "Tuscany",
        country: "Italy"
    },
    {
        title: "Modern Desert Oasis",
        description: "A sleek, modern home in the desert, complete with a private pool and serene views.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1678335449247-92f0ab1d2f02?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9kZXJuJTIwRGVzZXJ0JTIwT2FzaXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
        },
        price: 2000,
        location: "Palm Springs",
        country: "United States"
    },
    {
        title: "Waterfront Cabin",
        description: "Charming waterfront cabin with a private dock, surrounded by peaceful nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1725246597309-f2dd92a00ad6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0ZXJmcm9udCUyMENhYmlufGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 1200,
        location: "British Columbia",
        country: "Canada"
    },
    {
        title: "Private Beach Villa",
        description: "Exclusive beachfront villa with a pool and private access to the shore.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1628870571248-4f5db428986c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJpdmF0ZSUyMEJlYWNoJTIwVmlsbGF8ZW58MHwwfDB8fHww"
        },
        price: 3200,
        location: "Phuket",
        country: "Thailand"
    },
    {
        title: "Mountain Log Cabin",
        description: "Rustic log cabin in the mountains with stunning views and nearby hiking trails.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3VudGFpbiUyMExvZyUyMENhYmlufGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 1500,
        location: "Rocky Mountains",
        country: "United States"
    },
    {
        title: "Historic City Home",
        description: "Stay in a beautiful historic home, with updated amenities and close to major attractions.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1475754073691-4423e1368422?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGlzdG9yaWMlMjBDaXR5JTIwSG9tZXxlbnwwfDB8MHx8fDA%3D"
        },
        price: 1800,
        location: "Charleston",
        country: "United States"
    },
    {
        title: "Island Overwater Bungalow",
        description: "Private overwater bungalow on a tropical island with direct lagoon access.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1699580787279-4c7e818c027d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SXNsYW5kJTIwT3ZlcndhdGVyJTIwQnVuZ2Fsb3d8ZW58MHwwfDB8fHww"
        },
        price: 3500,
        location: "Maldives",
        country: "Maldives"
    },
    {
        title: "Scandinavian Cabin",
        description: "A cozy Scandinavian-style cabin, nestled in the woods with beautiful surroundings.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1709413400511-34243a6a932e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2NhbmRpbmF2aWFuJTIwQ2FiaW58ZW58MHwwfDB8fHww"
        },
        price: 1300,
        location: "Lapland",
        country: "Finland"
    },
    {
        title: "Boutique City Hotel",
        description: "Chic boutique hotel located in the heart of the city, offering luxury amenities and style.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1661963123153-5471a95b7042?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm91dGlxdWUlMjBDaXR5JTIwSG90ZWx8ZW58MHwwfDB8fHww"
        },
        price: 2500,
        location: "Tokyo",
        country: "Japan"
    },
    {
        title: "Cozy Alpine Chalet",
        description: "A rustic alpine chalet, perfect for a winter escape with skiing and snowboarding nearby.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1713365860516-256d20dbb7e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q296eSUyMEFscGluZSUyMENoYWxldHxlbnwwfDB8MHx8fDA%3D"
        },
        price: 1800,
        location: "Swiss Alps",
        country: "Switzerland"
    },
    {
        title: "Riverside Cottage",
        description: "Stay in this charming riverside cottage, ideal for a relaxing retreat by the water.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1707044093117-970e52b649aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Uml2ZXJzaWRlJTIwQ290dGFnZXxlbnwwfDB8MHx8fDA%3D"
        },
        price: 1000,
        location: "Cotswolds",
        country: "United Kingdom"
    },
    {
        title: "Penthouse with Ocean View",
        description: "Luxurious penthouse with floor-to-ceiling windows and stunning ocean views.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1675419760325-7aa3ac5f1fcc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVudGhvdXNlJTIwd2l0aCUyME9jZWFuJTIwVmlld3xlbnwwfDB8MHx8fDA%3D0"
        },
        price: 4000,
        location: "Dubai",
        country: "United Arab Emirates"
    },
    {
        title: "Tropical Beach Hut",
        description: "A charming beach hut located on a tropical island, perfect for a laid-back holiday.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470093717298-580960d32547?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJvcGljYWwlMjBCZWFjaCUyMEh1dHxlbnwwfDB8MHx8fDA%3D"
        },
        price: 900,
        location: "Koh Samui",
        country: "Thailand"
    },
    {
        title: "Clifftop Mansion",
        description: "A grand mansion set on a cliff with sweeping views of the ocean.",
        image: {
            filename: "https://plus.unsplash.com/premium_photo-1697730152499-dfb766ea949d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xpZmZ0b3AlMjBNYW5zaW9ufGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 5000,
        location: "Big Sur",
        country: "United States"
    },
    {
        title: "Safari Lodge",
        description: "Stay in a luxury safari lodge, offering views of the savannah and wildlife.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2FmYXJpJTIwTG9kZ2V8ZW58MHwwfDB8fHww"
        },
        price: 2800,
        location: "Serengeti",
        country: "Tanzania"
    },
    {
        title: "Snowy Mountain Chalet",
        description: "A cozy and warm chalet in the mountains, perfect for a snowy winter getaway.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1517280505364-812954fffdbb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U25vd3klMjBNb3VudGFpbiUyMENoYWxldHxlbnwwfDB8MHx8fDA%3D"
        },
        price: 1900,
        location: "Whistler",
        country: "Canada"
    },
    {
        title: "Jungle Treehouse",
        description: "A unique treehouse surrounded by lush jungle, ideal for adventurers and nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1685305380695-90e58a33d4e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SnVuZ2xlJTIwVHJlZWhvdXNlfGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 1600,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Luxury Yacht Stay",
        description: "Stay aboard a luxury yacht with private cabins and beautiful views of the open sea.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEx1eHVyeSUyMFlhY2h0JTIwU3RheXxlbnwwfDB8MHx8fDA%3D"
        },
        price: 4500,
        location: "Monaco",
        country: "Monaco"
    },
    {
        title: "Desert Dome House",
        description: "A futuristic dome house in the middle of the desert, offering unique architecture and stunning views.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1699669359390-18fabebcebdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVzZXJ0JTIwRG9tZSUyMEhvdXNlfGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 1800,
        location: "Joshua Tree",
        country: "United States"
    },
    {
        title: "Mountain Ski Lodge",
        description: "A luxurious ski lodge at the foot of the mountains, offering easy access to ski slopes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1519659735554-4afcd5fb6bc6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBTa2klMjBMb2RnZXxlbnwwfDB8MHx8fDA%3D"
        },
        price: 3500,
        location: "Zermatt",
        country: "Switzerland"
    },
    {
        title: "Historic Castle Stay",
        description: "Stay in an ancient castle and experience a touch of royalty with all modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1544939514-aa98d908bc47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGlzdG9yaWMlMjBDYXN0bGUlMjBTdGF5fGVufDB8MHwwfHx8MA%3D%3D"
        },
        price: 5000,
        location: "Edinburgh",
        country: "United Kingdom"
    }
];

module.exports = { data: sampleListings };