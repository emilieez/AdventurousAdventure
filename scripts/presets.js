windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

if (windowHeight / windowWidth < 0.625) {
    GLOBAL_WIDTH = window.innerHeight * 1.6;
    GLOBAL_HEIGHT = window.innerHeight
} else {
    GLOBAL_WIDTH = window.innerWidth;
    GLOBAL_HEIGHT = window.innerWidth * 0.625
}

fontSize = window.innerHeight * window.innerWidth * 0.00003
if (fontSize < 14) {
    STANDARD_FONT_SIZE = '14px'
} else if (fontSize > 50) {
    STANDARD_FONT_SIZE = '50px'
} else {
    STANDARD_FONT_SIZE = fontSize + 'px'
}


BEDROOM_MORNING_2 = {
    "story": "Energized by the bean, she contemplates her outfit of the day. What should she wear today?",
    "option1": "Shirt, leggings and a cardigan.The usual.",
    "option2": "A cute frilly dress, perfect for frolicking in meadows.",
    "option3": "A bikini. (you gotta seduce Howl somehow).",
    "option4": "Completely, irrevocably naked.",
    "resultFail": "You try to wear the clothes, but they slip off of your stick-thin body onto the floor.",
    "resultPass": "You are a stick (wo)man. You do not need clothes. Perfect.",
    "resultPass-button": "Lets YEET"
}

BEDROOM_MORNING_3 = {
    "story1": "As Sarah finishes choosing her outfit, she notices something amiss… Her cat seems to be gone!",
    "story2": "Panicking, she searches around the house, but can not even find a single trace of her cat."
}

OUTSIDE_SCENE = {
    "story": "Realizing that her cat isn’t anywhere inside, Sarah leaves her house and decides to search…",
    "option1": "In Howl’s Moving Castle",
    "option1-result": "You can’t seem to enter the vicinity. The magic has warded you off. The cat has probably not entered here either.",
    "option2": "In the Cat Bus",
    "option2-result": "The Cat Bus lets you search the seats for your cat but you do not find anything.",
    "option3": "Behind the No-Face",
    "option3-result": "You find a few dustballs behind him, but no cat. The dustballs are quite cute though.",
    "option4": "In the random, dark alleyway that has no relation whatsoever to the ghibli-verse",
    "option4-result": "You decide to venture into the alleyway."
}

ALLEY_SCENE = {
    "story": "Inside the alleyway, Sarah sees a faint grey blur behind one of the boxes. She decides to take a closer look."
}

ALLEY_CLOSEUP = {
    "story1": "Sarah comes closer and finds a grey creature that is not her cat.",
    "story2": "Cat? Cat? Where are you? … Where am I?",
    "story3": "Disappointed, Sarah decides to search elsewhere, but where should she go?"
}

ALLEY_SCENE_2 = {
    "story": "Just when all seemed lost, a blur of green and white flew past above her and landed behind her."
}

HAKU_SCENE = {
    "story1": "Haku seems to have heard from the rest about the search for Sarah’s cat and noted that he has seen her cat up in Daylight Prairie.",
    "story2": "Sarah hopped on Haku’s back and soared into the skies."
}

LIFTOFF = {
    "story": "Lifting off she activates her cape and soars through the sky passing by islands and landing her eye on the island which reminds her of a cat "
}

SKY_SCENE_1 = {
    "story": "Still on the mission to find her cat, Sarah searches one island and finds nothing. She decides to explore the islands in hopes of finding her cat."
}

CAT_MOUNTAIN = {
    "story": "Arriving near the cat mountain, she looks around for a decent place to land"
}

CAT_MOUNTAIN_LANDING = {
    "story": "After spotting the cave hidden in the mountains, she makes her way there and lands."
}

FOREST_1 = {
    "story1": "Sarah finds herself in the midst of a foreign land shrouded in silver fog. An eerie violet glow looms behind the grove of trees full of spikes and needles.",
    "story2": "She steps towards the oddly shaped archway, only to be welcomed with a series of unearthly whispers and a spine-chilling breeze.",
    "story3": "With a deep, deep breath, Sarah cautiously ventures into the Dark Forest."
}


FOREST_2 = {
    "story1": "The path leads Sarah into an enchanted clearing full of twinkling fireflies and strange, shimmering plants",
    "story2": "Perhaps there could be clues hidden around as to where Cat might’ve gone? Sarah decides to examine…",
    "feather": "the pretty blue feather",
    "feather-result": "Looks like it may be from a Wockingbird (not to be confused with the Mockingbird). Maybe it dropped the feather while frantically fleeing from a certain furry predator...with claws...",
    "mushrooms": "the fat \'n juicy red mushrooms",
    "mushrooms-result": "They look absolutely delicious and completely untouched—though probably for a good reason.",
    "beetle": "the possibly radioactive rare golden beetle",
    "beetle-result": "Upon closer inspection, it looks like it's just...covered in paint.",
    "nani": "what...even is that?",
    "nani-result": "K then.",
    "story3": "Well, there are definitely traces left by Cat here. But the question is where did it go next...?"
}
