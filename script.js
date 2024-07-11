// Main Section
document.querySelector('.monkey-gif').addEventListener('click', generateFunFact);

document.getElementById('scroll-down').addEventListener('click', function() {
    document.getElementById('fun-fact-container').scrollIntoView({ behavior: 'smooth' });
});

// Fun Fact Section
const monkeyFacts = [
    "Monkeys are as smart as a 7-year-old child.",
    "The smallest monkey in the world is the pygmy marmoset, with a body as little as 5 inches (12 cm) and a tail length of about 7 inches (17 cm).",
    "Capuchin monkeys are named after the Capuchin friars because their faces look like the monks’ hoods.",
    "Squirrel monkeys are very smart and can even count.",
    "Spider monkeys are the biggest monkeys with the longest arms and legs."
];

function generateFunFact() {
    const randomFact = monkeyFacts[Math.floor(Math.random() * monkeyFacts.length)];
    const speechBubble = document.getElementById('speech-bubble');
    speechBubble.textContent = randomFact;
}

// Helpful Links Section
document.getElementById('random-link-button').addEventListener('click', function() {
    const links = [
        'https://www.mandai.com/en/bird-paradise.html',
        'https://www.mandai.com/en/night-safari.html',
        'https://www.mandai.com/en/river-wonders.html',
        'https://www.mandai.com/en/singapore-zoo.html',
        'https://www.mandai.com/en/mandai-wildlife-west.html',
        'https://www.mandai.com/en/things-to-do/whats-on/promotions.html',
        'https://www.mandai.com/en/things-to-do/whats-on/events.html',
        'https://www.mandai.com/en/saving-wildlife/animals-under-our-care.html',
        'https://www.mandai.com/en/get-involved/partner-with-us/become-a-wildlife-partner.html'
    ];
    
    const randomIndex = Math.floor(Math.random() * links.length);
    window.location.href = links[randomIndex];
});
