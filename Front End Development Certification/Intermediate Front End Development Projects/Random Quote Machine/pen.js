var quotes = [
  ["Beware that, when fighting monsters, you yourself do not become a monster... for when you gaze long into the abyss. The abyss gazes also into you.", "Friedrich Nietzsche"],
  ["If you could be either God’s worst enemy or nothing, which would you choose?", "Chuck Palahniuk, Fight Club"],
  ["Why do we argue? Life's so fragile, a successful virus clinging to a speck of mud, suspended in endless nothing.", "Alan Moore, Watchmen"],
  ["The point is there ain't no point.", "Cormac McCarthy, No Country for Old Men"],
  ["The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.", "Mark Twain"],
  ["I think we are just insects, we live a bit and then die and that’s the lot. There’s no mercy in things. There’s not even a Great Beyond. There’s nothing.", "John Fowles, The Collector"],
  ["If we believe in nothing, if nothing has any meaning and if we can affirm no values whatsoever, then everything is possible and nothing has any importance.", "Albert Camus, The Rebel: An Essay on Man in Revolt"],
  ["The only true wisdom is in knowing you know nothing.", "Socrates"],
  ["I was gratified to be able to answer promptly, and I did. I said I didn’t know.", "Mark Twain"],
  ["Any fool can know. The point is to understand.", "Albert Einstein"],
  ["The man of knowledge must be able not only to love his enemies but also to hate his friends.", "Friedrich Nietzsche"],
  ["The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "Stephen Hawking"],
  ["There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.", "Patrick Rothfuss, The Wise Man's Fear"],
  ["Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", "Marie Curie"],
  ["The eye sees only what the mind is prepared to comprehend.", "Robertson Davies, Tempest-Tost"],
  ["To know that you do not know is the best. To think you know when you do not is a disease. Recognizing this disease as a disease is to be free of it.", "Lao Tzu"],
  ["Always forgive, but never forget, else you will be a prisoner of your own hatred, and doomed to repeat your mistakes forever.", "Wil Zeus, Sun Beyond the Clouds"],
  ["It's hard to believe in coincidence, but it's even harder to believe in anything else.", "John Green, Will Grayson, Will Grayson"],
  ["[Horror fiction] shows us that the control we believe we have is purely illusory, and that every moment we teeter on chaos and oblivion.", "Clive Barker"],
  ["I wonder if being sane means disregarding the chaos that is life, pretending only an infinitesimal segment of it is reality.", "Rabih Alameddine, Koolaids: The Art of War"],
  ["I became insane, with long intervals of horrible sanity.", "Edgar Allan Poe"],
  ["A casual stroll through the lunatic asylum shows that faith does not prove anything.", "Friedrich Nietzsche"],
  ["The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.", "Nikola Tesla"],
  ["The road that is built in hope is more pleasant to the traveler than the road built in despair, even though they both lead to the same destination.", "Marion Zimmer"],
  ["Life ... is a tale told by an idiot, full of sound and fury, signifying nothing.", "William Shakespeare, Macbeth"],
  ["Despair is the price one pays for self-awareness. Look deeply into life, and you'll always find despair.", "Irvin D. Yalom, When Nietzsche Wept"],
  ["Life is pain, highness. Anyone who says differently is selling something.", "William Goldman, William Goldman: Four Screenplays"],
  ["Pain is temporary. Quitting lasts forever.", "Lance Armstrong, Every Second Counts"],
  ["You only live twice: Once when you are born and once when you look death in the face", "Ian Fleming, You Only Live Twice"],
  ["I can calculate the motion of heavenly bodies but not the madness of people.", "Isaac Newton"],
  ["A dead dog is more quiet than a house on the steppes, a chair in a empty room.", "Per Petterson, Jeg forbanner tidens elv"],
  ["The road to creativity passes so close to the madhouse and often detours or ends there.", "Ernest Becker, The Denial of Death"],
  ["Whether we like it or not, the one justification for the existence of all religions is death, they need death as much as we need bread to eat.", "José Saramago, Death with Interruptions"],
  ["No, our science is no illusion. But an illusion it would be to suppose that what science cannot give us we can get elsewhere.", "Sigmund Freud, The Future of an Illusion"],
  ["Do as you will, for there is nothing to be done.", "Andrew Deaville"],
  ["Life is pleasant. Death is peaceful. It's the transition that's troublesome.", "Isaac Asimov"],
  ["Many people die at twenty five and aren't buried until they are seventy five.", "Benjamin Franklin"],
  ["One must not let oneself be misled: they say 'Judge not!' but they send to Hell everything that stands in their way.", "Friedrich Nietzsche, The Anti-Christ"],
  ["Believe only half of what you see and nothing that you hear.", "Edgar Allan Poe"],
  ["I know always that I am an outsider; a stranger in this century and among those who are still men.", "H.P. Lovecraft, The Outsider"],
  ["I have seen the dark universe yawning. Where the black planets roll without aim, where they roll in their horror unheeded, without knowledge, or lustre, or name.", "H.P. Lovecraft, Nemesis"],
  ["Which is the true nightmare, the horrific dream that you have in your sleep or the dissatisfied reality that awaits you when you awake?", "Justin Alcala"],
  ["Demons are like obedient dogs; they come when they are called.", "Rémy de Gourmont"],
  ["The world outside had its own rules, and those rules were not human.", "Michel Houellebecq, The Elementary Particles"],
  ["The world is indeed comic, but the joke is on mankind.", "H.P. Lovecraft"],
  ["The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.", "H.P. Lovecraft, Supernatural Horror in Literature"],
  ["If I am mad, it is mercy! May the gods pity the man who in his callousness can remain sane to the hideous end!", "H.P. Lovecraft, The Temple"],
  ["You're an idealist, and I pity you as I would the village idiot.", "Stanley Kubrick"]
];

function randomQuote() {
  return Math.floor(Math.random() * quotes.length);
}

function summonQuote(first) {
  n = randomQuote();
  if (first) {
    $("#quoteBox").html(quotes[n][0]);
    $("#authorBox").html(quotes[n][1]);
  } else {
    $(".quote").fadeOut('slow', function() {
      $("#quoteBox").html(quotes[n][0]);
      $("#authorBox").html(quotes[n][1]);
    });
    $(".quote").fadeIn('slow');
  }
  return quotes[n][0] + " - " + quotes[n][1];
}
$(document).ready(function() {
  var quote = summonQuote(true);
  $("#nextQuote").on("click", function() {
    quote = summonQuote(false);
  });
  $("#twitterButton").attr("href", 'https://twitter.com/intent/tweet?text=' + quote + '#quotes');
});
