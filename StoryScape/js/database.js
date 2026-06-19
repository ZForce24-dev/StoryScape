const recommendations = [
{
id: "elden-ring",
title: "Elden Ring",
media: "Video Game",
image: "images/elden-ring.jpg",
description: "Explore a vast fantasy world filled with powerful enemies, hidden secrets, and legendary battles.",
longDescription: "Elden Ring combines the challenging combat of Dark Souls with an enormous open world designed for exploration. Players uncover hidden dungeons, defeat powerful bosses, and craft their own journey through the Lands Between while building unique character classes and playstyles.",
tags: ["Video Game", "Open World", "Souls-like", "Exploration", "Dark", "Very Long"]
},

{
id: "minecraft",
title: "Minecraft",
media: "Video Game",
image: "images/minecraft.jpg",
description: "Build, explore, and survive in an endlessly creative sandbox world.",
longDescription: "Minecraft gives players complete freedom to create, explore, and survive in procedurally generated worlds. Whether constructing massive cities, automating farms, exploring dangerous caves, or playing with friends, Minecraft offers one of the most creative experiences in gaming.",
tags: ["Video Game", "Sandbox", "Crafting", "Exploration", "Lighthearted", "Very Long"]
},

{
id: "valorant",
title: "Valorant",
media: "Video Game",
image: "images/valorant.jpg",
description: "A tactical hero shooter focused on teamwork, precision, and strategy.",
longDescription: "Valorant combines precise gunplay with unique character abilities in a highly competitive multiplayer environment. Players work together to attack or defend objectives while mastering maps, teamwork, and individual skill.",
tags: ["Video Game", "Shooter", "Multiplayer", "PvP", "Intense", "Long"]
},

{
id: "20-minutes-till-dawn",
title: "20 Minutes Till Dawn",
media: "Video Game",
image: "images/20-minutes-till-dawn.jpg",
description: "Survive endless waves of monsters while creating powerful character builds.",
longDescription: "20 Minutes Till Dawn is a fast-paced roguelike where players fight increasingly difficult waves of enemies while selecting upgrades that dramatically change their abilities. Every run offers new combinations and strategies.",
tags: ["Video Game", "Roguelike", "Loot", "Dark", "Intense", "Medium"]
},

{
id: "7-days-to-die",
title: "7 Days to Die",
media: "Video Game",
image: "images/7-days-to-die.jpg",
description: "Scavenge, craft, and survive against relentless zombie hordes.",
longDescription: "7 Days to Die blends survival, crafting, and base defense into a post-apocalyptic experience where players prepare for increasingly difficult zombie attacks. Resource management and long-term planning are essential for survival.",
tags: ["Video Game", "Survival", "Crafting", "Base Building", "Dark", "Very Long"]
},

{
id: "ark-survival-ascended",
title: "ARK: Survival Ascended",
media: "Video Game",
image: "images/ark-survival-ascended.jpg",
description: "Tame dinosaurs, build massive bases, and survive on mysterious islands.",
longDescription: "ARK: Survival Ascended challenges players to survive in a prehistoric world filled with dangerous creatures. By gathering resources, taming dinosaurs, and constructing elaborate bases, players can thrive alone or alongside friends.",
tags: ["Video Game", "Survival", "Crafting", "Base Building", "Multiplayer", "Very Long"]
},

{
id: "baldurs-gate-3",
title: "Baldur's Gate 3",
media: "Video Game",
image: "images/baldurs-gate-3.jpg",
description: "A massive role-playing adventure where every choice matters.",
longDescription: "Baldur's Gate 3 offers one of the deepest RPG experiences ever created. Players shape their own story through meaningful choices, develop relationships with companions, and overcome challenges through combat, diplomacy, or creativity.",
tags: ["Video Game", "RPG", "Story", "Exploration", "Emotional", "Very Long"]
},

{
id: "satisfactory",
title: "Satisfactory",
media: "Video Game",
image: "images/satisfactory.jpg",
description: "Build enormous automated factories across a beautiful alien world.",
longDescription: "Satisfactory combines exploration, resource management, and large-scale automation. Players design increasingly complex production chains while expanding across a vast open world filled with secrets and opportunities.",
tags: ["Video Game", "Sandbox", "Base Building", "Crafting", "Exploration", "Very Long"]
},

{
id: "arc-raiders",
title: "ARC Raiders",
media: "Video Game",
image: "images/arc-raiders.jpg",
description: "Scavenge resources and survive dangerous encounters in a hostile future.",
longDescription: "ARC Raiders is an extraction-focused multiplayer shooter where players explore dangerous environments, gather valuable resources, and fight both enemies and rival players. Every expedition balances risk and reward.",
tags: ["Video Game", "Shooter", "PvP", "Loot", "Multiplayer", "Intense"]
},

{
id: "subnautica",
title: "Subnautica",
media: "Video Game",
image: "images/subnautica.jpg",
description: "Explore a beautiful and dangerous alien ocean while fighting to survive.",
longDescription: "Subnautica is an underwater survival adventure where players gather resources, construct bases, uncover mysteries, and descend into increasingly dangerous depths. Combining exploration, crafting, and environmental storytelling, it delivers one of gaming's most immersive survival experiences.",
tags: ["Video Game", "Survival", "Exploration", "Crafting", "Story", "Long"]
},

{
id: "terraria",
title: "Terraria",
media: "Video Game",
image: "images/terraria.jpg",
description: "Dig, build, fight, and explore in a massive 2D sandbox adventure.",
longDescription: "Terraria combines exploration, crafting, base building, and boss battles into one of the deepest sandbox games ever created. Players progress from simple wooden tools to godlike equipment while uncovering secrets hidden throughout the world.",
tags: ["Video Game", "Sandbox", "Crafting", "Exploration", "Lighthearted", "Very Long"]
},

{
id: "no-mans-sky",
title: "No Man's Sky",
media: "Video Game",
image: "images/no-mans-sky.jpg",
description: "Explore an endless universe filled with planets, creatures, and mysteries.",
longDescription: "No Man's Sky offers nearly limitless exploration across a procedurally generated galaxy. Players can build bases, command fleets, discover alien worlds, and uncover the secrets of an ancient universe while forging their own path.",
tags: ["Video Game", "Open World", "Exploration", "Base Building", "Relaxing", "Very Long"]
},

{
id: "sea-of-thieves",
title: "Sea of Thieves",
media: "Video Game",
image: "images/sea-of-thieves.jpg",
description: "Become a pirate and sail the seas searching for treasure and adventure.",
longDescription: "Sea of Thieves is a multiplayer pirate sandbox where players command ships, hunt treasure, battle skeletons, and encounter rival crews. Its focus on emergent gameplay creates unforgettable stories with friends.",
tags: ["Video Game", "Open World", "Co-Op", "Multiplayer", "Lighthearted", "Long"]
},

{
id: "ready-or-not",
title: "Ready or Not",
media: "Video Game",
image: "images/ready-or-not.jpg",
description: "Lead elite tactical teams through dangerous hostage rescues and operations.",
longDescription: "Ready or Not emphasizes realism, teamwork, and careful planning. Players command SWAT teams through high-risk scenarios that reward communication, discipline, and tactical decision-making.",
tags: ["Video Game", "Shooter", "Co-Op", "Story", "Intense", "Long"]
},

{
id: "risk-of-rain-2",
title: "Risk of Rain 2",
media: "Video Game",
image: "images/risk-of-rain-2.jpg",
description: "Battle endless enemies while becoming increasingly powerful.",
longDescription: "Risk of Rain 2 is a roguelike action game where players collect powerful items that stack into absurd combinations. Each run becomes more chaotic and rewarding as difficulty continuously increases.",
tags: ["Video Game", "Roguelike", "Loot", "Co-Op", "Intense", "Medium"]
},

{
id: "sons-of-the-forest",
title: "Sons of the Forest",
media: "Video Game",
image: "images/sons-of-the-forest.jpg",
description: "Survive on a mysterious island inhabited by terrifying creatures.",
longDescription: "Sons of the Forest combines survival, crafting, exploration, and horror. Players construct shelters, gather resources, uncover secrets, and defend themselves against increasingly dangerous threats.",
tags: ["Video Game", "Survival", "Crafting", "Exploration", "Horror", "Long"]
},

{
id: "scrap-mechanic",
title: "Scrap Mechanic",
media: "Video Game",
image: "images/scrap-mechanic.jpg",
description: "Build incredible machines and automate complex creations.",
longDescription: "Scrap Mechanic gives players powerful building tools to design vehicles, factories, and engineering marvels. Creativity, problem-solving, and multiplayer collaboration are at the heart of the experience.",
tags: ["Video Game", "Sandbox", "Base Building", "Crafting", "Multiplayer", "Very Long"]
},

{
id: "hogwarts-legacy",
title: "Hogwarts Legacy",
media: "Video Game",
image: "images/hogwarts-legacy.jpg",
description: "Attend Hogwarts and uncover secrets hidden within the wizarding world.",
longDescription: "Hogwarts Legacy allows players to experience life as a student at Hogwarts while mastering spells, exploring magical locations, and uncovering ancient mysteries. The game combines exploration, character progression, and storytelling in an expansive magical world.",
tags: ["Video Game", "Open World", "RPG", "Story", "Lighthearted", "Long"]
},

{
id: "raft",
title: "Raft",
media: "Video Game",
image: "images/raft.jpg",
description: "Survive at sea while expanding a tiny raft into a floating fortress.",
longDescription: "Raft combines survival, crafting, exploration, and base building as players drift across a flooded world. Working alone or with friends, players gather resources, uncover lost civilizations, and transform a simple raft into a thriving home.",
tags: ["Video Game", "Survival", "Crafting", "Base Building", "Co-Op", "Long"]
},

{
id: "hunt-showdown-1896",
title: "Hunt: Showdown 1896",
media: "Video Game",
image: "images/hunt-showdown-1896.jpg",
description: "Track monsters, eliminate rival hunters, and escape with valuable bounties.",
longDescription: "Hunt: Showdown 1896 combines horror, PvP combat, and extraction gameplay into one of gaming's most intense experiences. Every match forces players to balance risk and reward while competing against both terrifying creatures and other hunters.",
tags: ["Video Game", "Shooter", "PvP", "Multiplayer", "Horror", "Intense"]
},

{
id: "marvel-rivals",
title: "Marvel Rivals",
media: "Video Game",
image: "images/marvel-rivals.jpg",
description: "Battle as iconic Marvel heroes and villains in team-based multiplayer combat.",
longDescription: "Marvel Rivals is a hero shooter featuring legendary Marvel characters with unique abilities and team synergies. Fast-paced objectives, dynamic maps, and spectacular powers create an action-packed multiplayer experience.",
tags: ["Video Game", "Shooter", "Multiplayer", "PvP", "Lighthearted", "Long"]
},

{
id: "sekiro-shadows-die-twice",
title: "Sekiro: Shadows Die Twice",
media: "Video Game",
image: "images/sekiro-shadows-die-twice.jpg",
description: "Master precision combat and overcome deadly enemies in feudal Japan.",
longDescription: "Sekiro challenges players with intense sword combat, demanding boss encounters, and a rewarding mastery curve. Success depends on timing, skill, and perseverance as players fight to protect their lord and uncover a gripping story.",
tags: ["Video Game", "Souls-like", "Story", "Dark", "Intense", "Long"]
},

{
id: "call-of-duty-black-ops-3",
title: "Call of Duty: Black Ops III",
media: "Video Game",
image: "images/call-of-duty-black-ops-3.jpg",
description: "Fight through a futuristic conflict with advanced weapons and technology.",
longDescription: "Black Ops III delivers fast-paced multiplayer combat, a science-fiction campaign, and one of the franchise's most beloved Zombies experiences. Players customize loadouts, master movement mechanics, and battle across futuristic battlefields.",
tags: ["Video Game", "Shooter", "PvP", "Multiplayer", "Intense", "Long"]
},

{
id: "call-of-duty-infinite-warfare",
title: "Call of Duty: Infinite Warfare",
media: "Video Game",
image: "images/call-of-duty-infinite-warfare.jpg",
description: "Take the fight into space in a large-scale futuristic military campaign.",
longDescription: "Infinite Warfare expands Call of Duty's formula into space, combining cinematic storytelling, dogfighting missions, and traditional first-person combat. The campaign places players at the center of an interplanetary war.",
tags: ["Video Game", "Shooter", "Story", "Intense", "Long", "Inspirational"]
},

{
id: "generation-zero",
title: "Generation Zero",
media: "Video Game",
image: "images/generation-zero.jpg",
description: "Explore a machine-occupied countryside and fight to survive.",
longDescription: "Generation Zero places players in an alternate Sweden overrun by hostile machines. Exploration, cooperative gameplay, and strategic combat combine to create a unique open-world survival shooter.",
tags: ["Video Game", "Open World", "Shooter", "Exploration", "Co-Op", "Dark"]
},

{
id: "crimson-desert",
title: "Crimson Desert",
media: "Video Game",
image: "images/crimson-desert.jpg",
description: "Explore a vast fantasy world filled with action, conflict, and adventure.",
longDescription: "Crimson Desert is an open-world action adventure set in a harsh fantasy land filled with danger, political conflict, and powerful enemies. Players explore sweeping environments, battle intense foes, and experience a cinematic journey shaped by war and survival.",
tags: ["Video Game", "Open World", "RPG", "Exploration", "Intense", "Very Long"]
},

{
id: "destiny-2",
title: "Destiny 2",
media: "Video Game",
image: "images/destiny-2.jpg",
description: "Become a Guardian and battle across the solar system for powerful loot.",
longDescription: "Destiny 2 blends first-person shooting, RPG progression, cooperative missions, and loot-driven gameplay. Players explore planets, complete raids, unlock abilities, and collect gear while defending humanity from cosmic threats.",
tags: ["Video Game", "Shooter", "Loot", "Co-Op", "Inspirational", "Very Long"]
},

{
id: "elden-ring-nightreign",
title: "Elden Ring Nightreign",
media: "Video Game",
image: "images/elden-ring-nightreign.jpg",
description: "Survive deadly nights and powerful enemies in a cooperative Elden Ring adventure.",
longDescription: "Elden Ring Nightreign builds on the world and combat style of Elden Ring with a stronger focus on cooperative survival and replayable encounters. Players face dangerous enemies, adapt their builds, and work together to endure intense challenges.",
tags: ["Video Game", "Souls-like", "Co-Op", "Loot", "Dark", "Long"]
},

{
id: "lords-of-the-fallen",
title: "Lords of the Fallen",
media: "Video Game",
image: "images/lords-of-the-fallen.jpg",
description: "Battle through two interconnected realms in a dark fantasy souls-like adventure.",
longDescription: "Lords of the Fallen challenges players to explore a grim fantasy world split between the realms of the living and the dead. With difficult combat, haunting environments, and powerful bosses, it delivers a demanding action RPG experience.",
tags: ["Video Game", "Souls-like", "Exploration", "Story", "Dark", "Long"]
},

// -------------------------------------------------------------------------------------
//
//                                   END OF VIDEO GAMES
//                                   Start of Books
//
// -------------------------------------------------------------------------------------

{
id: "harry-potter",
title: "Harry Potter",
media: "Book",
image: "images/harry-potter.jpg",
description: "A young wizard discovers his place in a magical world while attending Hogwarts.",
longDescription: "Harry Potter follows a young orphan who learns he is a wizard and is invited to attend Hogwarts School of Witchcraft and Wizardry. Alongside his friends Ron and Hermione, Harry uncovers secrets, faces powerful enemies, and grows into a hero destined to confront one of the darkest wizards in history.",
tags: ["Book", "Fantasy", "Novels", "Worldbuilding", "Lighthearted", "Very Long"]
},

{
id: "percy-jackson",
title: "Percy Jackson and the Olympians",
media: "Book",
image: "images/percy-jackson.jpg",
description: "A modern teenager discovers he is the son of a Greek god.",
longDescription: "Percy Jackson is thrust into a hidden world of mythology when he learns he is a demigod. As he trains alongside other heroes and embarks on dangerous quests, Percy battles monsters, uncovers ancient prophecies, and discovers what it truly means to be a hero.",
tags: ["Book", "Fantasy", "Novels", "Action & Adventure", "Fast-Paced", "Long"]
},

{
id: "mistborn",
title: "Mistborn",
media: "Book",
image: "images/mistborn.jpg",
description: "A group of rebels attempts to overthrow an immortal tyrant using a unique magic system.",
longDescription: "Mistborn follows Vin, a street thief who discovers she possesses incredible magical abilities. Joining a crew of rebels led by the charismatic Kelsier, she becomes part of a daring plan to overthrow the seemingly immortal Lord Ruler. The novel combines exceptional worldbuilding, unforgettable characters, and one of fantasy's most creative magic systems.",
tags: ["Book", "Fantasy", "Novels", "Worldbuilding", "Inspirational", "Long"]
},

{
id: "stormlight-archive",
title: "The Stormlight Archive",
media: "Book",
image: "images/stormlight-archive.jpg",
description: "Epic heroes struggle against ancient forces threatening their world.",
longDescription: "The Stormlight Archive is a massive fantasy series set on the storm-ravaged world of Roshar. Featuring deeply developed characters, rich worldbuilding, and interconnected storylines, it explores leadership, sacrifice, redemption, and the fate of civilizations.",
tags: ["Book", "Fantasy", "Novels", "Worldbuilding", "Emotional", "Very Long"]
},

{
id: "project-hail-mary",
title: "Project Hail Mary",
media: "Book",
image: "images/project-hail-mary-book.jpg",
description: "A lone astronaut awakens on a mission to save humanity.",
longDescription: "Ryland Grace wakes up alone aboard a spacecraft with no memory of who he is or why he is there. As his memories return, he discovers he may be humanity's last hope against extinction. Combining hard science, mystery, humor, and friendship, Project Hail Mary delivers one of modern science fiction's most compelling adventures.",
tags: ["Book", "Sci-Fi", "Novels", "Deep Story", "Inspirational", "Long"]
},

{
id: "red-rising",
title: "Red Rising",
media: "Book",
image: "images/red-rising.jpg",
description: "A young miner infiltrates society's elite to spark a revolution.",
longDescription: "In a future where humanity is divided by a strict caste system, Darrow risks everything to infiltrate the ruling class and bring down the society that oppressed his people. Red Rising combines science fiction, political intrigue, intense action, and powerful character growth.",
tags: ["Book", "Sci-Fi", "Novels", "Character Development", "Intense", "Long"]
},

{
id: "cradle",
title: "Cradle",
media: "Book",
image: "images/cradle.jpg",
description: "A powerless young man seeks strength in a world obsessed with advancement.",
longDescription: "Cradle follows Lindon, an underpowered outcast who refuses to accept the limits imposed on him. Through determination, training, and relentless self-improvement, he pursues power beyond what anyone thought possible. The series is known for its fast pacing, satisfying progression, and addictive storytelling.",
tags: ["Book", "Fantasy", "Novels", "Character Development", "Fast-Paced", "Very Long"]
},

{
id: "the-name-of-the-wind",
title: "The Name of the Wind",
media: "Book",
image: "images/the-name-of-the-wind.jpg",
description: "A gifted young man recounts his rise from tragedy to legend.",
longDescription: "The Name of the Wind follows Kvothe as he tells the story of his life, from a talented child in a traveling troupe to a brilliant student at the University. Blending music, magic, tragedy, and mystery, it is a character-driven fantasy novel with rich worldbuilding and a legendary feel.",
tags: ["Book", "Fantasy", "Novels", "Worldbuilding", "Emotional", "Long"]
},

{
id: "the-will-of-the-many",
title: "The Will of the Many",
media: "Book",
image: "images/the-will-of-the-many.jpg",
description: "A young man infiltrates an elite academy within a brutal empire.",
longDescription: "The Will of the Many follows Vis, an orphan hiding from a powerful empire built on hierarchy and control. Forced into an elite academy, he must navigate politics, secrets, and dangerous trials while uncovering truths that could reshape the world.",
tags: ["Book", "Fantasy", "Novels", "Deep Story", "Intense", "Long"]
},

{
id: "the-martian",
title: "The Martian",
media: "Book",
image: "images/the-martian-book.jpg",
description: "An astronaut stranded on Mars must use science and humor to survive.",
longDescription: "The Martian follows Mark Watney after he is accidentally left behind on Mars. With limited supplies and no easy way home, he relies on engineering, problem-solving, and determination to stay alive while NASA works to bring him back.",
tags: ["Book", "Sci-Fi", "Novels", "Fast-Paced", "Inspirational", "Long"]
},

{
id: "enders-game",
title: "Ender's Game",
media: "Book",
image: "images/enders-game.jpg",
description: "A brilliant child is trained to command humanity's war against an alien threat.",
longDescription: "Ender's Game follows Ender Wiggin, a gifted young strategist selected for Battle School to prepare for an interstellar war. The story blends military strategy, moral conflict, and psychological tension as Ender is pushed toward greatness at a terrible cost.",
tags: ["Book", "Sci-Fi", "Novels", "Character Development", "Intense", "Long"]
},

{
id: "dune",
title: "Dune",
media: "Book",
image: "images/dune.jpg",
description: "A noble family becomes entangled in politics, prophecy, and survival on a desert planet.",
longDescription: "Dune follows Paul Atreides as his family takes control of the desert world Arrakis, the only source of the most valuable substance in the universe. With political betrayal, ecological depth, prophecy, and sweeping worldbuilding, Dune is one of science fiction's most influential epics.",
tags: ["Book", "Sci-Fi", "Novels", "Worldbuilding", "Intense", "Very Long"]
},

{
id: "rangers-apprentice",
title: "Ranger's Apprentice",
media: "Book",
image: "images/rangers-apprentice.jpg",
description: "A young apprentice trains in stealth, archery, and courage.",
longDescription: "Ranger's Apprentice follows Will, a small but determined orphan chosen to train as a Ranger. Through missions, mentorship, and danger, he develops the skills and bravery needed to protect the kingdom.",
tags: ["Book", "Action & Adventure", "Novels", "Fast-Paced", "Lighthearted", "Long"]
},

{
id: "the-hunger-games",
title: "The Hunger Games",
media: "Book",
image: "images/the-hunger-games.jpg",
description: "A girl is forced into a deadly televised competition in a dystopian society.",
longDescription: "The Hunger Games follows Katniss Everdeen after she volunteers to take her sister's place in a brutal televised survival event. The story combines action, political tension, emotional stakes, and rebellion against an oppressive system.",
tags: ["Book", "Action & Adventure", "Novels", "Character Development", "Intense", "Long"]
},

// COMICS

{
id: "invincible-comic",
title: "Invincible",
media: "Book",
image: "images/invincible-comic.jpg",
description: "A young superhero discovers the truth behind his father's legacy.",
longDescription: "Invincible follows Mark Grayson as he develops superpowers and enters the world of heroes. What begins as a traditional superhero story quickly evolves into an epic saga filled with action, character growth, sacrifice, and some of the most shocking moments in comic book history.",
tags: ["Book", "Action & Adventure", "Comic Books", "Character Development", "Intense", "Very Long"]
},

{
id: "watchmen",
title: "Watchmen",
media: "Book",
image: "images/watchmen.jpg",
description: "A mystery surrounding a murdered hero exposes dark truths about society.",
longDescription: "Watchmen deconstructs the superhero genre through political intrigue, moral ambiguity, and unforgettable characters. It remains one of the most influential graphic novels ever created.",
tags: ["Book", "Comic Books", "Deep Story", "Dark", "Long"]
},

{
id: "batman-the-long-halloween",
title: "Batman: The Long Halloween",
media: "Book",
image: "images/batman-long-halloween.jpg",
description: "Batman investigates a serial killer targeting Gotham's criminals.",
longDescription: "The Long Halloween combines detective mystery, organized crime, and iconic Batman villains into one of the Dark Knight's most celebrated stories.",
tags: ["Book", "Comic Books", "Mystery & Thriller", "Dark", "Long"]
},

// MANGA

{
id: "solo-leveling",
title: "Solo Leveling",
media: "Book",
image: "images/solo-leveling-book.jpg",
description: "The world's weakest hunter gains a mysterious power that allows limitless growth.",
longDescription: "After surviving a deadly dungeon, Sung Jin-Woo acquires a unique system that lets him grow stronger without limits. Solo Leveling combines action, progression, and spectacular battles into one of the most popular modern fantasy series.",
tags: ["Book", "Manga", "Fantasy", "Fast-Paced", "Very Long"]
},

{
id: "one-piece",
title: "One Piece",
media: "Book",
image: "images/one-piece-book.jpg",
description: "A pirate crew searches for the legendary treasure known as the One Piece.",
longDescription: "One Piece follows Monkey D. Luffy and his crew across a vast world filled with adventure, mystery, humor, and unforgettable characters. It is one of the longest-running and most beloved stories ever created.",
tags: ["Book", "Manga", "Action & Adventure", "Worldbuilding", "Very Long"]
},

{
id: "frieren",
title: "Frieren: Beyond Journey's End",
media: "Book",
image: "images/frieren-book.jpg",
description: "An immortal elf reflects on life after the hero's journey has already ended.",
longDescription: "Frieren explores themes of time, friendship, memory, and loss through the eyes of an elf mage who outlives her companions. It combines beautiful worldbuilding with emotional storytelling.",
tags: ["Book", "Manga", "Fantasy", "Emotional", "Long"]
},

{
id: "attack-on-titan",
title: "Attack on Titan",
media: "Book",
image: "images/attack-on-titan-book.jpg",
description: "Humanity fights for survival against giant creatures beyond the walls.",
longDescription: "Attack on Titan combines mystery, action, political intrigue, and shocking twists as humanity struggles against extinction. Its story evolves far beyond its initial premise into one of the most ambitious manga narratives ever written.",
tags: ["Book", "Manga", "Action & Adventure", "Dark", "Very Long"]
},

{
id: "wistoria-wand-and-sword",
title: "Wistoria: Wand and Sword",
media: "Book",
image: "images/wistoria.jpg",
description: "A sword-wielding student strives to reach the top of a magic academy.",
longDescription: "Wistoria follows Will Serfort as he pursues his dream despite lacking magical ability in a world that values magic above all else. Combining academy life, action, friendship, and determination, it captures the spirit of classic fantasy adventures.",
tags: ["Book", "Manga", "Fantasy", "Character Development", "Long"]
},

// -------------------------------------------------------------------------------------
//
//                                   END OF BOOKS
//                                   Start of Movies
//
// -------------------------------------------------------------------------------------

{
id: "interstellar",
title: "Interstellar",
media: "Movies & TV",
image: "images/interstellar.jpg",
description: "A team of astronauts travels beyond the galaxy in search of a new home for humanity.",
longDescription: "As Earth becomes increasingly uninhabitable, a team of astronauts ventures through a wormhole in search of a new world. Interstellar combines hard science fiction, emotional storytelling, and breathtaking visuals to explore themes of love, sacrifice, and humanity's survival.",
tags: ["Live-Action Movies", "Sci-Fi", "Deep Story", "Space", "Emotional", "Long"]
},

{
id: "inception",
title: "Inception",
media: "Movies & TV",
image: "images/inception.jpg",
description: "A skilled thief enters dreams to steal secrets and plant ideas.",
longDescription: "Dom Cobb specializes in extracting information from people's dreams. Offered a chance at redemption, he must perform the impossible task of planting an idea into someone's mind. Inception blends action, mystery, and mind-bending concepts into a thrilling sci-fi experience.",
tags: ["Live-Action Movies", "Sci-Fi", "Mystery", "Intense", "Long"]
},

{
id: "the-martian-movie",
title: "The Martian",
media: "Movies & TV",
image: "images/the-martian-movie.jpg",
description: "An astronaut stranded on Mars must survive until rescue arrives.",
longDescription: "After being left behind during a mission, Mark Watney must use science, ingenuity, and determination to survive alone on Mars. The Martian delivers suspense, humor, and optimism while celebrating human problem-solving.",
tags: ["Live-Action Movies", "Sci-Fi", "Inspirational", "Space", "Fast-Paced", "Long"]
},

{
id: "lord-of-the-rings-fellowship",
title: "The Lord of the Rings: The Fellowship of the Ring",
media: "Movies & TV",
image: "images/fellowship-of-the-ring.jpg",
description: "A humble hobbit begins a journey to destroy a powerful evil artifact.",
longDescription: "Frodo Baggins inherits the One Ring and must leave home to prevent it from falling into the hands of evil. Joined by a diverse fellowship, he embarks on an epic quest through Middle-earth. The film is renowned for its worldbuilding, characters, and adventure.",
tags: ["Live-Action Movies", "Fantasy", "Worldbuilding", "Inspirational", "Long"]
},

{
id: "harry-potter-sorcerers-stone",
title: "Harry Potter and the Sorcerer's Stone",
media: "Movies & TV",
image: "images/harry-potter-sorcerers-stone.jpg",
description: "A young wizard discovers a hidden magical world and begins his education.",
longDescription: "Harry Potter learns he is a wizard and attends Hogwarts School of Witchcraft and Wizardry. There he forms friendships, learns magic, and uncovers secrets surrounding his past. The film launched one of the most beloved fantasy franchises of all time.",
tags: ["Live-Action Movies", "Fantasy", "Worldbuilding", "Lighthearted", "Long"]
},

{
id: "top-gun-maverick",
title: "Top Gun: Maverick",
media: "Movies & TV",
image: "images/top-gun-maverick.jpg",
description: "A legendary pilot returns to train a new generation for a dangerous mission.",
longDescription: "Decades after graduating Top Gun, Maverick must train elite pilots for a mission unlike any before. The film combines spectacular aerial action with themes of leadership, mentorship, and overcoming the past.",
tags: ["Live-Action Movies", "Action", "Inspirational", "Fast-Paced", "Long"]
},

{
id: "pirates-of-the-caribbean",
title: "Pirates of the Caribbean: The Curse of the Black Pearl",
media: "Movies & TV",
image: "images/pirates-of-the-caribbean.jpg",
description: "A blacksmith and a pirate team up to rescue a kidnapped governor's daughter.",
longDescription: "When Elizabeth Swann is kidnapped by cursed pirates, Will Turner joins forces with the eccentric Captain Jack Sparrow to rescue her. Filled with adventure, humor, sword fights, and supernatural mysteries, it remains a modern classic.",
tags: ["Live-Action Movies", "Action", "Fast-Paced", "Lighthearted", "Long"]
},

{
id: "spider-man-into-the-spider-verse",
title: "Spider-Man: Into the Spider-Verse",
media: "Movies & TV",
image: "images/spider-verse.jpg",
description: "Miles Morales discovers he is not the only Spider-Man in the multiverse.",
longDescription: "After gaining spider powers, Miles Morales meets alternate versions of Spider-Man from other dimensions. Together they must stop a threat to the multiverse. The film is celebrated for its groundbreaking animation, emotional storytelling, and memorable characters.",
tags: ["Animated Movies", "Action", "Character Development", "Inspirational", "Long"]
},



// -------------------------------------------------------------------------------------
//
//                                   END OF MOVIES
//                                   Start of Tv Shows
//
// -------------------------------------------------------------------------------------



{
id: "andor",
title: "Andor",
media: "Movies & TV",
image: "images/andor.jpg",
description: "A reluctant rebel becomes one of the most important figures in the fight against the Empire.",
longDescription: "Andor follows Cassian Andor's transformation from an ordinary survivor into a key member of the Rebel Alliance. Featuring mature storytelling, political intrigue, and excellent character development, it is widely regarded as one of Star Wars' strongest series.",
tags: ["Live-Action TV", "Sci-Fi", "Deep Story", "Intense", "Long"]
},

{
id: "the-expanse",
title: "The Expanse",
media: "Movies & TV",
image: "images/the-expanse.jpg",
description: "Political tensions and ancient mysteries threaten humanity's future in space.",
longDescription: "The Expanse combines hard science fiction, political conflict, and interplanetary exploration. As tensions rise between Earth, Mars, and the Belt, a small crew finds themselves at the center of events that could reshape humanity forever.",
tags: ["Live-Action TV", "Sci-Fi", "Worldbuilding", "Space", "Intense", "Very Long"]
},

{
id: "sherlock",
title: "Sherlock",
media: "Movies & TV",
image: "images/sherlock.jpg",
description: "A modern adaptation of Sherlock Holmes solving complex mysteries.",
longDescription: "Sherlock reimagines the legendary detective in modern-day London. Combining brilliant mysteries, sharp dialogue, and memorable characters, the series delivers some of television's most engaging detective stories.",
tags: ["Live-Action TV", "Mystery", "Deep Story", "Intense", "Long"]
},

{
id: "reacher",
title: "Reacher",
media: "Movies & TV",
image: "images/reacher.jpg",
description: "A former military investigator uncovers dangerous conspiracies.",
longDescription: "Reacher follows Jack Reacher as he travels across America solving crimes and exposing corruption. Combining action, mystery, and clever investigations, it captures the spirit of Lee Child's bestselling novels.",
tags: ["Live-Action TV", "Action", "Fast-Paced", "Intense", "Long"]
},

{
id: "wednesday",
title: "Wednesday",
media: "Movies & TV",
image: "images/wednesday.jpg",
description: "Wednesday Addams investigates supernatural mysteries at a unique academy.",
longDescription: "Wednesday follows the iconic Addams Family daughter as she attends Nevermore Academy. Mixing mystery, supernatural elements, humor, and character growth, the show became one of Netflix's most successful series.",
tags: ["Live-Action TV", "Fantasy", "Mystery", "Dark", "Long"]
},

{
id: "game-of-thrones",
title: "Game of Thrones",
media: "Movies & TV",
image: "images/game-of-thrones.jpg",
description: "Noble families battle for power in a brutal fantasy world.",
longDescription: "Game of Thrones follows multiple families competing for control of the Iron Throne while ancient threats emerge beyond the Wall. Known for political intrigue, large-scale battles, and unpredictable storytelling, it became one of television's most influential series.",
tags: ["Live-Action TV", "Fantasy", "Worldbuilding", "Dark", "Very Long"]
},

// Animated Tv

{
id: "transformers-prime",
title: "Transformers Prime",
media: "Movies & TV",
image: "images/transformers-prime.jpg",
description: "A small team of Autobots protects Earth from the Decepticons.",
longDescription: "Transformers Prime follows Optimus Prime and his Autobots as they battle Megatron's forces while protecting humanity. Featuring strong character development, impressive action, and surprisingly mature storytelling, it is considered one of the best Transformers series ever made.",
tags: ["Animated TV", "Action", "Character Development", "Inspirational", "Long"]
},

{
id: "ben-10",
title: "Ben 10",
media: "Movies & TV",
image: "images/ben-10.jpg",
description: "A young boy gains the ability to transform into powerful alien heroes.",
longDescription: "After discovering the Omnitrix, Ben Tennyson gains access to dozens of alien transformations. Alongside his family, he travels the world fighting villains, protecting Earth, and growing into a hero while learning responsibility and teamwork.",
tags: ["Animated TV", "Action", "Character Development", "Lighthearted", "Long"]
},

{
id: "avatar-the-last-airbender",
title: "Avatar: The Last Airbender",
media: "Movies & TV",
image: "images/avatar-the-last-airbender.jpg",
description: "The last Airbender must master all four elements to save the world.",
longDescription: "Avatar follows Aang and his friends as they journey across a richly developed world to stop the Fire Nation. Combining incredible worldbuilding, memorable characters, humor, and emotional storytelling, it remains one of the most beloved animated series ever created.",
tags: ["Animated TV", "Fantasy", "Worldbuilding", "Character Development", "Inspirational", "Very Long"]
},

{
id: "the-legend-of-korra",
title: "The Legend of Korra",
media: "Movies & TV",
image: "images/legend-of-korra.jpg",
description: "The next Avatar faces new threats in a rapidly changing world.",
longDescription: "Set decades after Avatar: The Last Airbender, Korra explores a world undergoing technological and political change. The series tackles complex themes while delivering strong action, character growth, and expanded lore.",
tags: ["Animated TV", "Fantasy", "Worldbuilding", "Character Development", "Intense", "Long"]
},

{
id: "arcane",
title: "Arcane",
media: "Movies & TV",
image: "images/arcane.jpg",
description: "Two sisters become caught in a conflict between progress and power.",
longDescription: "Arcane follows Vi and Jinx as tensions rise between the wealthy city of Piltover and the oppressed undercity of Zaun. Featuring stunning animation, emotional storytelling, and incredible worldbuilding, Arcane is widely considered one of the greatest animated series ever created.",
tags: ["Animated TV", "Fantasy", "Drama", "Deep Story", "Character Development", "Emotional", "Long"]
},

// -------------------------------------------------------------------------------------
//
//                                   END OF TV SHOWS
//                                   Start of Anime
//
// -------------------------------------------------------------------------------------

{
id: "sword-art-online",
title: "Sword Art Online",
media: "Movies & TV",
image: "images/sword-art-online.jpg",
description: "Players become trapped inside a virtual reality game where death is real.",
longDescription: "Sword Art Online follows Kirito as he fights to survive inside immersive virtual worlds. Beginning with the deadly SAO incident, the series explores friendship, romance, adventure, and the relationship between technology and humanity across multiple virtual worlds.",
tags: ["Anime", "Fantasy", "Sci-Fi", "Deep Story", "Emotional", "Long"]
},

{
id: "jujutsu-kaisen",
title: "Jujutsu Kaisen",
media: "Movies & TV",
image: "images/jujutsu-kaisen.jpg",
description: "A high school student enters a hidden world of curses and sorcerers.",
longDescription: "Jujutsu Kaisen follows Yuji Itadori after he becomes entangled in the dangerous world of Jujutsu Sorcerers. Alongside powerful allies and teachers, he battles terrifying curses while uncovering the truth behind the legendary curse Ryomen Sukuna. The series combines fast-paced action, memorable characters, and emotional storytelling.",
tags: ["Anime", "Action", "Fantasy", "Character Development", "Intense", "Long"]
},

{
id: "solo-leveling",
title: "Solo Leveling",
media: "Movies & TV",
image: "images/solo-leveling.jpg",
description: "The world's weakest hunter gains a mysterious power that allows limitless growth.",
longDescription: "After surviving a deadly dungeon, Sung Jin-Woo acquires a unique system that lets him grow stronger without limits. Solo Leveling combines incredible action, satisfying progression, and spectacular battles into one of the most popular modern fantasy series.",
tags: ["Anime", "Fantasy", "Action", "Fast-Paced", "Character Development", "Long"]
},

{
id: "frieren",
title: "Frieren: Beyond Journey's End",
media: "Movies & TV",
image: "images/frieren.jpg",
description: "An immortal elf reflects on life after the hero's journey has ended.",
longDescription: "Frieren explores friendship, loss, memory, and the passage of time through the eyes of an elf mage who outlives her companions. Combining beautiful worldbuilding with emotional storytelling, it is widely regarded as one of the best fantasy anime of recent years.",
tags: ["Anime", "Fantasy", "Worldbuilding", "Emotional", "Deep Story", "Long"]
},

{
id: "attack-on-titan",
title: "Attack on Titan",
media: "Movies & TV",
image: "images/attack-on-titan.jpg",
description: "Humanity fights for survival against giant creatures beyond the walls.",
longDescription: "Attack on Titan begins as a desperate struggle for survival but evolves into a complex story of war, politics, freedom, and morality. Filled with shocking twists, intense action, and memorable characters, it became one of the most influential anime series of all time.",
tags: ["Anime", "Action", "Mystery", "Dark", "Deep Story", "Very Long"]
},

{
id: "one-piece",
title: "One Piece",
media: "Movies & TV",
image: "images/one-piece.jpg",
description: "A pirate crew searches for the legendary treasure known as the One Piece.",
longDescription: "One Piece follows Monkey D. Luffy and his crew across a vast world filled with adventure, mystery, humor, and unforgettable characters. Known for its incredible worldbuilding and emotional storytelling, it remains one of the most beloved series ever created.",
tags: ["Anime", "Action", "Fantasy", "Worldbuilding", "Character Development", "Very Long"]
},

{
id: "wistoria-wand-and-sword",
title: "Wistoria: Wand and Sword",
media: "Movies & TV",
image: "images/wistoria-anime.jpg",
description: "A sword-wielding student strives to reach the top of a world dominated by magic.",
longDescription: "Wistoria: Wand and Sword follows Will Serfort, a determined young man who dreams of becoming a Magia Vander despite lacking the magical talent expected in his world. While his classmates rely on powerful spells, Will fights with extraordinary physical skill and unwavering determination. Combining academy life, intense battles, strong friendships, and an inspiring underdog journey, Wistoria delivers a modern fantasy adventure that appeals to fans of both magic schools and action-packed hero stories.",
tags: ["Anime", "Fantasy", "Action", "Character Development", "Inspirational", "Long"]
},

// -------------------------------------------------------------------------------------
//
//                                   END OF ANIME
//
// -------------------------------------------------------------------------------------


];