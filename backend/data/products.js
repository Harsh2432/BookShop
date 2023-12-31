const products = [
  {
    name: "Diary Of A Wimpy Kid: The Deep End",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/DWK-The-Deep-End_znhfxr.jpg",
    description: "\"Diary of a Wimpy Kid: The Deep End\" follows Greg Heffley and his family as they embark on a disastrous tropical vacation. From getting stranded on an island to surviving in a water park, Greg's hilarious and relatable adventures will leave readers laughing out loud and eagerly flipping the pages.",
    author: "Anthony Tejada",
    genre: "Children, Humour",
    price: 400,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "And Then There Was None",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/And-Then-There-Was-None_bvd11e.jpg",
    description: "\"And Then There Were None\" is a classic mystery novel by Agatha Christie. Ten strangers are lured to an isolated island, only to discover that their host is mysteriously absent. As they are gradually killed off one by one, suspicion and paranoia grow, leading to a chilling revelation that shocks them all.",
    author: "Agatha Christie",
    genre: "Classic, Crime",
    price: 700,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: "Go Set A Watchman",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553887/atticus-literature/dev/Go-Set-A-Watchman_idipcx.jpg",
    description: "\"Go Set a Watchman\" is a novel written by Harper Lee and serves as a sequel to her famous work, \"To Kill a Mockingbird.\" Set in the 1950s, it follows an adult Scout Finch as she returns to her hometown of Maycomb, Alabama, and confronts the racial tensions and personal conflicts that challenge her perception of her father, Atticus Finch.",
    author: "Harper Lee",
    genre: "Politic",
    price: 300,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Philosopher's Stone",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P1_ujlysr.jpg",
    description: "\"Harry Potter and the Philosopher's Stone\" is a captivating fantasy novel by J.K. Rowling, introducing young Harry as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry, where he uncovers the mystery of the Philosopher's Stone while facing dangerous adversaries and forging lifelong friendships.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 900,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Chamber Of Secret",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553889/atticus-literature/dev/Harry-Potter-P2_d1eaea.jpg",
    description: "\"Harry Potter and the Chamber of Secrets\" is the second book in J.K. Rowling's magical series. As Harry returns to Hogwarts School of Witchcraft and Wizardry, he uncovers a mysterious chamber holding a deadly secret. With friends by his side, he must confront dark forces and face his own inner demons to save the school from ancient evil.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 700,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Prison Of Azkaban",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P3_iz0jgs.jpg",
    description: "\"Harry Potter and the Prison of Azkaban\" is the third installment in J.K. Rowling's iconic fantasy series. As Harry enters his third year at Hogwarts School of Witchcraft and Wizardry, he must confront the dangerous convict Sirius Black and unravel the mysteries surrounding the infamous prison while discovering the power of friendship and facing his own inner demons.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 600,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Goblet Of Fire",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P4_g0taql.jpg",
    description: "\"Harry Potter and the Goblet of Fire\" is the fourth installment in J.K. Rowling's iconic fantasy series. As Harry navigates his fourth year at Hogwarts School of Witchcraft and Wizardry, he unexpectedly becomes a champion in the dangerous Triwizard Tournament, facing daunting tasks and dark forces that threaten his life and the wizarding world. The book delves deeper into the growing complexity of Harry's world and introduces thrilling twists, uncovering secrets and challenges that will test his courage and loyalty.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 800,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Order Of The Phoenix",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553890/atticus-literature/dev/Harry-Potter-P5_npllbe.jpg",
    description: "\"Harry Potter and the Order of the Phoenix\" is the fifth book in J.K. Rowling's beloved Harry Potter series. As Voldemort's power grows, Harry faces new challenges at Hogwarts, including oppressive Ministry interference and the formation of a secret society known as the Order of the Phoenix. Filled with thrilling adventures, friendship, and the resurgence of dark forces, this book explores themes of rebellion, loyalty, and the resilience of the wizarding world.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 500,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Half-Blood Prince",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P6-2_oxjz4o.jpg",
    description: "\"Harry Potter and the Half-Blood Prince\" is the sixth installment in J.K. Rowling's magical series. As Voldemort's power grows, Harry uncovers the truth about the mysterious Half-Blood Prince and delves deeper into the dark secrets of the wizarding world, leading to a devastating climax that forever changes the course of the battle between good and evil.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 900,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Harry Potter And The Deathly Hallows",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553891/atticus-literature/dev/Harry-Potter-P7_uen2jb.jpg",
    description: "\"Harry Potter and the Deathly Hallows\" is the thrilling conclusion to J.K. Rowling's beloved series. Harry, Ron, and Hermione embark on a dangerous quest to destroy Voldemort's Horcruxes and bring an end to the dark wizard's reign. Filled with heart-wrenching sacrifices, epic battles, and surprising revelations, this book is a gripping finale that will keep readers on the edge of their seats.",
    author: "J.K Rowling",
    genre: "Fantasy, Teenage",
    price: 400,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "The Fountainhead",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Fountainhead_c0euxz.jpg",
    description: "\"The Fountainhead\" is a renowned novel by Ayn Rand that explores the struggle between individualism and societal conformity through the story of an ambitious architect named Howard Roark, who defies traditional conventions and fights for his creative vision in a world that seeks to suppress his genius.",
    author: "Ayn Rand",
    genre: "Classic, Fiction",
    price: 600,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "The Hobbit",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/The-Hobbit_oed7ax.jpg",
    description: "\"The Hobbit\" is a captivating adventure tale by J.R.R. Tolkien, following the journey of Bilbo Baggins, a hobbit who embarks on a quest to reclaim a stolen treasure from the fearsome dragon Smaug. Filled with magical creatures, treacherous encounters, and unexpected bravery, it is a timeless story of courage, friendship, and the power of an ordinary individual.",
    author: "J.R.R Tolkien",
    genre: "Classic, Fantasy",
    price: 700,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "To Kill A Mocking Bird",
    image: "https://res.cloudinary.com/atticusfinchiph/image/upload/v1612553892/atticus-literature/dev/To-Kill-A-Mocking-Bird-2_b49cmc.jpg",
    description: "\"To Kill a Mockingbird\" is a classic novel by Harper Lee that explores racial prejudice and injustice in a small Southern town. Through the eyes of Scout, a young girl, the story delves into themes of compassion, morality, and the power of empathy in the face of deep-seated social divisions.",
    author: "Harper Lee",
    genre: "Classic, Politic",
    price: 800,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "The Power of Your Subconscious Mind",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/839/9788194790839.jpg",
    description: "\"The Power of Your Subconscious Mind\" is a transformative self-help book that explores the immense potential of the subconscious mind and provides practical techniques to harness its power. By understanding and directing the subconscious, the book teaches readers how to overcome obstacles, achieve goals, and create positive change in their lives.",
    author: "Joseph Murphy",
    genre: "History, Humanity",
    price: 900,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Love Hypothesis ",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/823/9780593336823.jpg",
    description: "\"Love Hypothesis\" is a captivating romantic novel that follows the story of two brilliant scientists who embark on an experiment to prove or disprove the existence of love. As they navigate the complexities of their experiment, unexpected emotions and undeniable chemistry start to blur the lines between science and matters of the heart. With witty banter, intellectual sparks, and heartfelt moments, this book explores the fascinating intersection of love and logic in a charming and captivating way.",
    author: "Ali Hazelwood",
    genre: "Romance",
    price: 400,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Ikigai",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/895/9781786330895.jpg",
    description: "\"Ikigai\" is a thought-provoking book that explores the Japanese concept of finding purpose and fulfillment in life. With a blend of philosophy, psychology, and personal anecdotes, it guides readers on a journey to discover their own ikigai, a combination of passion, mission, vocation, and profession. This concise and inspiring read offers valuable insights and practical advice for leading a more meaningful and balanced life.",
    author: "Francesc Miralles, Hector Garcia, Héctor Fracesc García Miralles",
    genre: "History, Humanity",
    price: 300,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Think And Grow Rich ",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/152/9789353338152.jpg",
    description: "\"Think and Grow Rich\" is a timeless self-help classic that unveils the secrets to achieving financial success and personal fulfillment. Through powerful anecdotes and practical principles, the book emphasizes the importance of mindset, persistence, and visualization in realizing one's dreams and accumulating wealth. It provides a roadmap for transforming thoughts into tangible riches and serves as a motivational guide for those seeking prosperity in all areas of life.",
    author: "Napoleon Hill",
    genre: "Children, Teenage",
    price: 1000,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Naruto, Vol. 1 ",
    image: "https://www.bookswagon.com/productimages/images200/000/9781569319000.jpg",
    description: "\"Naruto, Vol. 1\" is the beginning of the epic manga series by Masashi Kishimoto, introducing readers to the young ninja Naruto Uzumaki and his quest to become the strongest ninja in his village while facing formidable challenges and uncovering the secrets of his own past.",
    author: "Masashi Kishimoto",
    genre: "Fiction",
    price: 500,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "The Silent Patient ",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/637/9781409181637.jpg",
    description: "\"The Silent Patient\" is a gripping psychological thriller that follows the mysterious story of Alicia Berenson, a famous painter who inexplicably stops speaking after being convicted of murdering her husband. The book delves into the dark secrets and complex psychology of its characters, keeping readers on the edge of their seats as they try to unravel the truth behind Alicia's silence and the shocking events that led to her husband's death.",
    author: " Alex Michaelides",
    genre: "Art, Photography",
    price: 600,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Linchpin",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/652/9780749953652.jpg",
    description: "\"Linchpin\" is a transformative book by Seth Godin that explores the importance of becoming indispensable in the modern workplace. It encourages readers to harness their unique talents, embrace creativity, and cultivate their own value to stand out and thrive in a rapidly changing world.",
    author: "Seth Godin",
    genre: "Parenting, Family, Health",
    price: 700,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Reminders of Him ",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/607/9781542025607.jpg",
    description: "\"Reminders of Him\" is a poignant novel that explores the enduring power of love and loss. Through vivid storytelling, it follows the journey of a woman as she grapples with the memories and reminders of a past relationship, navigating the complexities of heartbreak, healing, and the transformative nature of moving forward. This introspective tale delves into themes of self-discovery, resilience, and the profound impact that one person can have on our lives.",
    author: "Colleen Hoover",
    genre: "Romance",
    price: 900,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Chainsaw Man, Vol. 4",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/279/9781974717279.jpg",
    description: "\"Chainsaw Man, Vol. 4\" continues the thrilling and action-packed journey of Denji, a demon hunter who has merged with a chainsaw demon. In this volume, Denji faces new enemies, uncovers dark secrets about his past, and navigates complex relationships with his allies. With intense battles, unexpected twists, and emotional depth, this volume delivers a gripping and enthralling experience for fans of the series.",
    author: "Tatsuki Fujimoto",
    genre: "Fiction",
    price: 1000,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Archer's Voice",
    image: "https://www.bookswagon.com/productimages/images200/355/9781538727355.jpg",
    description: "\"Archer's Voice\" is a heartwarming romance novel that follows the journey of a mute man named Archer Hale, who finds solace and love in the small town of Pelion, Maine, when a woman named Bree Prescott enters his life. Their emotional connection transcends words as they navigate past traumas and discover the power of trust and healing together.",
    author: "Mia Sheridan",
    genre: "Romance",
    price: 400,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Why I am an Atheist and Other Works",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/812/9789387022812.jpg",
    description: "\"Why I am an Atheist and Other Works\" is a thought-provoking collection of essays and writings by an individual who explores their personal journey towards atheism. With intellectual rigor and personal reflections, the book delves into the author's skepticism towards religious beliefs, their examination of evidence and logic, and the moral framework they have constructed as a non-believer. It offers an insightful and compelling perspective on the subject of atheism and its impact on one's worldview.",
    author: "Bhagat Singh",
    genre: "Biography",
    price: 800,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "A Man Called Ove",
    image: "https://www.bookswagon.com/productimages/images200/815/9781444775815.jpg",
    description: "\"A Man Called Ove\" is a heartwarming novel by Fredrik Backman that tells the story of Ove, a grumpy and solitary man who finds unexpected friendship and purpose when a new family moves in next door.",
    author: "Fredrik Backman",
    genre: "Fiction",
    price: 600,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Chainsaw Man, Vol. 1",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/939/9781974709939.jpg",
    description: "\"Chainsaw Man, Vol. 1\" is a gripping and darkly humorous manga that follows Denji, a young man who merges with a chainsaw-devil to become a devil hunter. Packed with intense action, supernatural elements, and unexpected twists, this volume sets the stage for an exhilarating and thrilling series.",
    author: "Tatsuki Fujimoto",
    genre: "Fiction",
    price: 800,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "You are the Best Wife",
    image: "https://www.bookswagon.com/productimages/images200/540/9789382665540.jpg",
    description: "\"You Are the Best Wife\" is a heartfelt memoir written by a husband who recounts his extraordinary journey with his wife, capturing their love, strength, and unwavering commitment in the face of adversity. It is a touching tribute that celebrates the power of love and the profound impact a partner can have on one's life.",
    author: "Ajay K. Pandey",
    genre: "Romance",
    price: 1000,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "10x Rule",
    image: "https://www.bookswagon.com/productimages/images200/600/9780470627600.jpg",
    description: "The \"10x Rule\" is a motivational book written by Grant Cardone that encourages readers to set massive goals and take massive action to achieve extraordinary success. It emphasizes the importance of multiplying your efforts and expectations by ten, aiming for levels of achievement far beyond what is considered average or conventional. The book offers strategies and mindset shifts to overcome obstacles, increase productivity, and create a mindset of abundance and limitless potential.",
    author: "Grant Cardone",
    genre: "Business, Economics",
    price: 500,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "One-Punch Man, Vol. 1",
    image: "https://www.bookswagon.com/productimages/images200/642/9781421585642.jpg",
    description: "\"One-Punch Man, Vol. 1\" is a thrilling manga that follows the life of Saitama, a seemingly average guy who becomes the world's strongest superhero with a single punch. Combining humor, action, and stunning artwork, this volume introduces readers to a world filled with quirky heroes, monstrous villains, and Saitama's quest for an opponent who can truly challenge him.",
    author: "Yusuke Murata",
    genre: "Fiction",
    price: 700,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Your Name",
    image: "https://www.bookswagon.com/productimages/images200/862/9780316471862.jpg",
    description: "\"Your Name\" is a captivating novel that explores the extraordinary connection between two strangers, Mitsuha and Taki, who mysteriously swap bodies. As they navigate this peculiar phenomenon and strive to unravel its secrets, their lives become entwined in unexpected ways, ultimately leading to a poignant tale of love, fate, and the power of memories.",
    author: "Makoto Shinkai",
    genre: "Romance",
    price: 900,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "How To Do The Work",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/744/9781409197744.jpg",
    description: "\"How to Do the Work\" is a transformative self-help book that offers practical guidance and tools to help you overcome personal obstacles, heal from trauma, and create positive change in your life. With a compassionate approach, the book empowers readers to understand their patterns, break free from self-sabotaging behaviors, and embrace their true potential for growth and happiness.",
    author: "Nicole Lepera",
    genre: "Parenting, Family, Health",
    price: 600,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Chainsaw Man, Vol. 2",
    image: "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/946/9781974709946.jpg",
    description: "\"Chainsaw Man, Vol. 2\" continues the thrilling and gory adventures of Denji, a demon hunter with a chainsaw for a head. Packed with intense action, dark humor, and unexpected twists, this volume delves deeper into Denji's past and reveals shocking secrets that threaten to consume him. Get ready for another wild ride in the twisted world of Chainsaw Man.",
    author: "Tatsuki Fujimoto",
    genre: "Fiction",
    price: 1000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  }
]

export default products