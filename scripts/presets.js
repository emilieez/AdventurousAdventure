windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

if (windowHeight / windowWidth < 0.625) {
    GLOBAL_WIDTH = window.innerHeight * 1.6;
    GLOBAL_HEIGHT = window.innerHeight
} else {
    GLOBAL_WIDTH = window.innerWidth;
    GLOBAL_HEIGHT = window.innerWidth * 0.625
}

fontSize = window.innerHeight * window.innerWidth * 0.000025
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
    "story": "Lifting off she activates her cape and soars through the sky passing by islands and landing her eye on <b><em>the island which reminds her of a cat</em></b> "
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

CAVE_WATER = {
    "story": "Thinking that her cat probably fell into the water, Sarah frantically doggy paddles in all directions looking for anything that resembles a cat.",
    "swimRight-option": "Press &#8594; to <b><em>keep going further into the cave.</em></b>",
    "swimRight-result": "Crash, you have crashed into the cave wall, please turn around.",
    "swimLeft-option": "Press &#8592; to <b><em>leave the cave area and enter open waters.</em> </b>",
    "swimLeft-result": "There seem to be no sign of Cat here.",
    "swimUp-option": "Press &#8593; to the surface to <b><em>inspect the mysterious shadow</em></b>",
    "swimUp-result": "The fuzzy shadow looks a bit like Catto. You swim up to the surface and walk further into the dark cave."
}

CAVE_SURFACE = {
    "story1": "After inspecting the mass, Sarah realizes it\’s just a giant plush cat.",
    "story2": "Disappointed, she pulls herself out of the water.",
    "story3": "Sarah walks deeper into the dark and empty cave."
}


FOREST_1 = {
    "story1": "Sarah finds herself in the midst of a foreign land shrouded in silver fog. An eerie violet glow looms behind the grove of trees full of spikes and needles.",
    "story2": "She steps towards the oddly shaped archway, only to be welcomed with a series of unearthly whispers and a spine-chilling breeze.",
    "story3": "With a deep, deep breath, Sarah cautiously ventures into the Dark Forest."
}


FOREST_2 = {
    "story1": "The path leads Sarah into an enchanted clearing full of twinkling fireflies and strange, shimmering plants",
    "story2": "Perhaps there could be clues hidden around as to where Cat might’ve gone? Sarah decides to examine...",
    "feather": "the pretty blue feather",
    "feather-result": "Looks like it may be from a Wockingbird (not to be confused with the Mockingbird). Maybe it dropped the feather while frantically fleeing from a certain furry predator...with claws...",
    "mushrooms": "the fat \'n juicy red mushrooms",
    "mushrooms-result": "They look absolutely delicious and completely untouched - though probably for a good reason.",
    "beetle": "the possibly radioactive rare golden beetle",
    "beetle-result": "Upon closer inspection, it looks like it's just...covered in paint.",
    "nani": "what...even is that?",
    "nani-result": "K then.",
    "story3": "Well, there are definitely traces left by Cat here. But the question is where did it go next...?"
}

FOREST_3 = {
    "story1": "Wondering just how far Cat could\'ve ventured, Sarah glances up at the bleak cerulean night sky, veiled under a flawless sheet of ivory clouds.",
    "story2": "Suddenly, a blinding burst of lightning flashes across the sky, and heavy chains of raindrops come plummeting down."
}

FOREST_BRIDGE = {
    "story1": "Having lost her sense of direction, Sarah wanders deeper into the Dark Forest and finds herself at a lone, fragile-looking wooden bridge.",
    "story2": "A chorus of low-pitched growling echoes through the woods. Drifting along the river is a distinctly...<em>rusty</em> scent.",
    "story3": "Then, Sarah hears an ever-so-dainty meowing noise coming from the other side. Without hesitation, she hurries across the river."
}

DEMONIC_CIRCLE = {
    "story1": "Sarah finds herself at a dead end. Lying in the center of the stark, lifeless trees is a luminescent magic circle, and at the end stands what looks like a...<em>cat shrine?</em>",
    "story2": "An exhausted Sarah carefully approaches the shrine and sighs. She's travelled alone across the entire world searching for her beloved Cat. If only Cat would just magically appear ...",
    "story3": "Out of nowhere, the circle begins radiating a brilliant shade of gold ...",
    "story4": "And in the center, a Cat begins to take form!",
    "story5": "Yay! There you are!” Having found her lost pet at last, Sarah can finally return home with Cat. "
}


REFLECTION = {
    "story1": "Sarah recounts her adventures along the way home to Cat, who carefreely hops between the rain puddles.",
    "story2": "She can\'t wait for everything to return to normal tomorrow with Cat back by her side, doing things all cats love to do &#8212; like playing with yarn balls, chasing birds, and pushing stuff off the table.",
    "story3": "Though <em>something</em> seems a bit off ... what could it be?"
}


BEDROOM_NIGHT = {
    "story1": "Finally back home in her room, Sarah places Cat on its bed before snuggling into her own.",
    "story2": "After whispering good night to the lovely Catto, Sarah drifts off to sleep with a content smile on her face.",
    "story3": "But when the lights have been snuffed out, <b>two stark yellow eyes</b> pierce through the darkness.",
    "ending": "Happy <del> Birth </del> Death Day, Sarah He"
}
