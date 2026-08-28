/* The Judgment Seat of Affabel — the eleven cases.
   Built from John Bevere, "Driven by Eternity," chapters 2, 3 and 8.

   Each case carries a `texts` pool. Every text in every pool is genuinely in
   play for that case: the ones Jalyn cited, and the ones a reasonable student
   would reach for and be wrong about. There are no filler options.

   texts[].cited  — did Jalyn actually use this text on this person
   texts[].note   — shown at the reveal, explaining why he did or did not
   texts[].just   — three readings of the text. For a cited text exactly one is
                    the reading Jalyn used (sound: true). For an uncited text
                    none is sound; all three are the misreadings that lead a
                    student to select it.
*/

const CASES = [

/* ============================================================ 1 */
{
  id: "independent",
  name: "Independent",
  trade: "Car dealer and investor",
  hall: "justice",
  art: { src: wm("a/a1", "Rembrandt_-_The_Parable_of_the_Rich_Fool.jpg", 960),
         credit: "Rembrandt, The Parable of the Rich Fool, 1627" },
  approach: "He walks in smiling. He winks at a guard, who does not smile back. Halfway down the aisle the smile is gone, and by the time he reaches the platform he is shaking.",
  intro: "He questioned whether Affabel existed at all. He refused to attend class, called the teachings a scheme to control young lives, and mocked those who believed. He intended to live as he saw fit.",
  review: [
    "Refused to attend the School of Endel. Ridiculed classmates who believed.",
    "Received fifty-five thousand dollars at graduation, more than any of his friends, and read it as proof the kingdom was a fraud.",
    "Built a successful car lot, then expanded into other ventures. Genuinely good at the work.",
    "Used his wealth to attract women and buy influence. Never attended a weekly gathering.",
    "Supported community projects and was considered a good citizen by most of Endel."
  ],
  says: [
    "Obviously I was wrong. The city is real and so is the king.",
    "I have been a good citizen. I supported the community's volunteer services and paid for half the projects in Endel.",
    "I remember being told he is loving and merciful. That is the part I remember.",
    "I recognize half the people in this room. Thieves and drunkards, most of them. If they are here, I have nothing to fear."
  ],
  saysNote: "Drawn from his thoughts in the waiting hall. The parable gives him no formal plea before the ruling.",
  response: [
    "Lord, why?",
    "But what about my good works? Didn't they outweigh my evil?",
    "How then can anyone be saved?",
    "Yes, what you have said is all true, but, Jalyn, you are a merciful king! How can you send me away if this is so?"
  ],
  verdict: "lone", measure: "lower",
  ruling: "Independent, you are guilty of choosing an evil nature and are to be taken to the forsaken land of Lone.",
  reason: "“You did not believe in me,” Jalyn answered. Good works were never the currency. Independent had assumed his ledger would balance, and Jalyn told him the ledger was not the question: “It is not a matter of how little or much you break the law.” Then Jalyn added the thing Independent had counted on most: “I am a merciful king, and that is exactly why I'm sending you away. By choosing to spend your time in Endel the way you did, you permanently chose your nature.”",
  measureReason: "Independent knew the least. He had skipped the very classes that would have told him, so his ignorance was self-inflicted, but it was still real and it still counted. He was placed in the lower portion of the structure, with those who did not know the truth and yet did what deserved exile. The measure of a sentence in this parable tracks what a person actually understood.",
  lesson: "Start here because it is the easy one. Almost everyone rules correctly and almost everyone feels certain doing it. Notice what that certainty feels like now, at the beginning, while it is cheap.",
  texts: [
    { v: "jn8_24", cited: true,
      note: "Jalyn's first answer to “Lord, why?” He did not begin with the man's conduct. He began with his unbelief.",
      just: [
        { t: "He was told the truth and refused it. Unbelief is not one missing item on a checklist. It is the whole verdict.", sound: true },
        { t: "He never heard the message clearly, so this cannot fairly be laid on him.", sound: false },
        { t: "He dies in his sins because his sins were unusually severe.", sound: false }
      ]},
    { v: "jas2_10", cited: true,
      note: "Jalyn's direct answer to “didn't my good outweigh my evil?” He quoted this to say the scale was never the instrument.",
      just: [
        { t: "He asked for his ledger to be weighed. This is the answer that the ledger was never the standard, because one breach is enough.", sound: true },
        { t: "It proves his good deeds were worthless and helped nobody in Endel.", sound: false },
        { t: "It makes everyone equally guilty, so every sentence handed down today should be identical.", sound: false }
      ]},
    { v: "acts4_12", cited: true,
      note: "Jalyn's answer immediately after John 8:24, and part of the same sentence: his teachers had taught that there is salvation in no one else, and no other name given by which anyone is saved.",
      just: [
        { t: "There was one name that could have saved him and he spent his life refusing it. No amount of civic good supplies a second one.", sound: true },
        { t: "He simply picked the wrong religion and should have been told more clearly.", sound: false },
        { t: "It means salvation is narrow, so very few people can ever be saved.", sound: false }
      ]},
    { v: "mt25_34_40", cited: false,
      note: "The deeds line up at a distance. He did support the community's projects and he was thought a good citizen for it. But this text describes service done to the King himself, recognised as such only afterward, by people whose lives were pointed at him. Independent's giving was real and it was never for Jalyn. When he asked for it to be weighed, Jalyn did not weigh it.",
      just: [
        { t: "He fed and clothed his community through the projects he funded, so he did it for Jalyn.", sound: false },
        { t: "He was a good citizen and this text rewards good citizens.", sound: false },
        { t: "His civic generosity should count as service to the least of these.", sound: false }
      ]}
  ]
},

/* ============================================================ 2 */
{
  id: "reconciled",
  name: "Ruthless",
  trade: "Known as the most wicked man in Endel",
  hall: "life",
  art: { src: wm("9/91", "Rembrandt_Harmensz._van_Rijn_-_The_Return_of_the_Prodigal_Son.jpg", 960),
         credit: "Rembrandt, The Return of the Prodigal Son, c. 1669" },
  approach: "He does not look like the others. He never went to school. He opposed you more openly than anyone in Endel, and everyone in the hall knows his name.",
  intro: "A notorious wicked man. He never attended a single class, never heard the teachings, and opposed Jalyn more loudly than anyone else in the community. He oppressed people. He stole.",
  review: [
    "Never attended the School of Endel. Never heard Jalyn's word taught.",
    "Known throughout the community as a thief and an oppressor.",
    "Opposed Jalyn publicly and more fiercely than any other citizen.",
    "One week before Judgment Day he ate at a restaurant in Endel. The owner paid for his dinner on one condition, that he stay and talk, and then spent two hours telling him about Jalyn.",
    "He hated who he was and what he had done. He pledged the rest of his life to Jalyn's lordship.",
    "In the seven days remaining he went to everyone he had oppressed or stolen from, asked their forgiveness, and gave back more than he had taken."
  ],
  says: [
    "I was known as Ruthless. Anyone in Endel could tell you what that meant.",
    "I never attended a single class. I never heard his word taught until seven days ago.",
    "Someone paid for my dinner and would not let me leave until I had heard about him. I had two hours.",
    "I hated who I was and what I did.",
    "I went back to everyone I had oppressed or stolen from. I gave back more than I took."
  ],
  response: [
    "I was once known as Ruthless, but Lord Jalyn changed my name at his Judgment Seat to Reconciled.",
    "She explained it was not too late for me to give my life to this great leader. I had assumed it was.",
    "Though I was only able to serve him for a week in Endel, I did so with all my heart.",
    "I'm one who was shown possibly the greatest mercy before our king."
  ],
  verdict: "affabel", measure: "unspecified",
  ruling: "Lord Jalyn changed his name at the Judgment Seat to Reconciled.",
  reason: "He entered Affabel as a regal citizen. When Jalyn was later challenged about this very case, he answered with Ezekiel: if a wicked person turns away from his wickedness and does right, he shall save his soul. Reconciled himself said he was “shown possibly the greatest mercy before our king.” Seven days of real obedience outweighed a lifetime of the other thing.",
  measureReason: "The parable never names his station. He appears later among the citizens of the city, and he says of himself that he was rewarded handsomely for his labour even though it was brief. Any placement inside Affabel is defensible here, so this case is scored on the verdict alone.",
  lesson: "The first trap. If you sent him to Lone, ask yourself what you were actually judging: his record, or his final direction. Jalyn judges the direction.",
  texts: [
    { v: "ezek18_27", cited: true,
      note: "This is the text Jalyn invokes for exactly this case, and he invokes it more than once during the day's judgments. It is the hinge the whole ruling turns on.",
      just: [
        { t: "He turned from the wickedness he had done and did what is right and just. This text describes his case precisely.", sound: true },
        { t: "He balanced his old crimes against a week of good deeds and came out ahead.", sound: false },
        { t: "He was spared because his restitution repaid what he had stolen.", sound: false }
      ]},
    { v: "eph2_8_9", cited: true,
      note: "Salvation is a gift, not a wage. Reconciled had seven days. Nothing about that week could have purchased a kingdom, and nothing about it needed to.",
      just: [
        { t: "Seven days could not earn a kingdom. What he received was a gift, and that is the only reason a week was enough.", sound: true },
        { t: "His good works in that final week were enough to qualify him.", sound: false },
        { t: "His record was overlooked because he felt genuinely terrible about it.", sound: false }
      ]},
    { v: "jas2_14_19", cited: true,
      note: "The same passage that convicts a merely professed faith reads the other way here. His faith was seven days old and it had already sent him back to every person he had robbed.",
      just: [
        { t: "His faith was real, and the proof is that within days it sent him back to everyone he had wronged.", sound: true },
        { t: "He performed enough good works in a week to be counted righteous.", sound: false },
        { t: "Since he believed, the works were optional extras he happened to add.", sound: false }
      ]},
    { v: "jas2_10", cited: false,
      note: "Jalyn used this on the man judged before him, who asked to have his record weighed on a scale. Reconciled never asked for that. He did not argue that his good outweighed his bad; he asked to be forgiven, which is a different request and gets a different answer.",
      just: [
        { t: "He broke the whole law repeatedly, so he is guilty in respect to all of it.", sound: false },
        { t: "One slip is as serious as many, so his crimes were no worse than anyone else's.", sound: false },
        { t: "He kept the law in his final week, so this verse clears him.", sound: false }
      ]},
  ]
},

/* ============================================================ 3 */
{
  id: "deceived",
  name: "Deceived",
  trade: "Homebuilder and land developer",
  hall: "justice",
  art: { src: wm("3/34", "Frans_Hals_023.jpg", 960),
         credit: "Frans Hals, The Laughing Cavalier, 1624" },
  approach: "He jokes with the others as the guards call his name. “Well guys, my number's up!” He is the most confident believer in the room, and his confidence has been keeping everyone else calm all morning.",
  intro: "He never doubted that Affabel existed. He believed in Jalyn, delighted in his promises, celebrated his allegiance publicly, and rarely missed a meeting at the school. Large portions of his life contradicted every word of it.",
  review: [
    "Believed in Jalyn sincerely and said so often and loudly. Almost never missed a school function.",
    "Sexually loose with two girls during his schooling, and promiscuous afterward. Saw no conflict with his faith.",
    "Built homes with materials below the promised grade, some in violation of code, after lowering prices to win buyers.",
    "Developed land he knew to be a flood plain, and persuaded a councilman friend to approve it without geological testing.",
    "Habitual slander and gossip, used to get what he wanted. Slandered his own brother.",
    "Reasoned: 'As long as I affirm my allegiance to Jalyn and do not hurt anyone too severely, I will remain in good standing.'"
  ],
  says: [
    "Well guys, my number's up!",
    "I believed in him. I said so, loudly, for years, and I almost never missed a meeting.",
    "As long as I affirm my allegiance and do not hurt anyone too severely, I remain in good standing. That is how it works.",
    "His mercy must be even vaster than we knew. Look how freely he has forgiven people I never imagined could make it."
  ],
  saysNote: "The first line is his; the rest is his own reasoning as the parable records it.",
  response: [
    "How have I denied you!",
    "But, great king, I attended your school. I was faithful to not miss classes. I was involved in many activities. I even called you lord!",
    "But I had faith. I believed in you, so according to your word I should be saved!",
    "But what about this evil man, Ruthless? I was better than him! How could you let him in and keep me out? You are not being fair!"
  ],
  verdict: "lone", measure: "upper",
  ruling: "Deceived, you are guilty of denying me, and are to be taken to the forsaken land of Lone.",
  reason: "Deceived heard the charge as a clerical error. He had faith. Jalyn's answer was that faith which never changes the life was never faith: “Those who truly believe will exhibit a changed nature.” When Deceived protested that he was better than Ruthless, Jalyn read him Ezekiel, the same passage that had acquitted the other man. The standard had not moved. Deceived had simply assumed it was pointed somewhere else.",
  measureReason: "He knew. He sat in the classes, and he built his life against what he heard there. That places him with those who knew the truth and refused it, not with Independent below.",
  lesson: "Set this case beside Ruthless. Same courtroom, same morning, opposite outcomes, and the man with the better résumé lost. Deceived's problem was not that he sinned. It was that he had built a private theology in which his sin did not count.",
  texts: [
    { v: "mt7_21_23", cited: true,
      note: "Jalyn read this to him almost in full, including the line about many saying “Lord, Lord” on that day.",
      just: [
        { t: "He said Lord and he meant it. The text says meaning it is not the test. Doing the Father's will is.", sound: true },
        { t: "He never really believed at all, so the text fits him.", sound: false },
        { t: "He failed to perform enough mighty deeds in Jalyn's name.", sound: false }
      ]},
    { v: "ti1_16", cited: true,
      note: "Jalyn asked whether he had listened when his teachers warned of those who claim to know God but deny him by the way they live.",
      just: [
        { t: "He knew Jalyn and said so constantly. His deeds were the denial, and they were louder than the profession.", sound: true },
        { t: "He did not know Jalyn well enough because he had studied too little.", sound: false },
        { t: "His claim to know Jalyn was a deliberate lie he told to others.", sound: false }
      ]},
    { v: "jas2_14_19", cited: true,
      note: "Jalyn had a former teacher of the school stand and read this aloud to him from the sacred writings.",
      just: [
        { t: "He asked to be saved on faith alone. This is the text that says a faith producing nothing had already died.", sound: true },
        { t: "It proves faith is worthless and that only works matter.", sound: false },
        { t: "He did have works, they were simply bad ones, so the text does not apply.", sound: false }
      ]},
    { v: "eph2_8_9", cited: false,
      note: "This is Deceived's own argument, nearly word for word. Jalyn never disputed the text. He disputed whether Deceived possessed the faith it describes. Note that the very same verse had already worked in a man's favour earlier that morning: Ruthless could not have earned anything in seven days, and did not need to.",
      just: [
        { t: "He believed, and salvation comes by faith and not works, so he should be saved.", sound: false },
        { t: "Since no one can boast, his lifestyle could not have disqualified him.", sound: false },
        { t: "Grace covers what he did, because he could never have earned it anyway.", sound: false }
      ]}
  ]
},

/* ============================================================ 4 */
{
  id: "patient",
  name: "Patient",
  trade: "Secretary to a city council member",
  hall: "life",
  art: { src: wm("d/d7", "Meisje_met_de_parel.jpg", 960),
         credit: "Johannes Vermeer, Girl with a Pearl Earring, c. 1665" },
  approach: "She graduated a year ahead of most of this cohort and almost nobody here knows her. She was quiet, reserved, and never once stood out in anything.",
  intro: "A secretary. No title, no platform, no public role of any kind in the community. Anyone asked to summarise her contribution to Endel would have struggled to name one.",
  review: [
    "Worked as a secretary to one of the city council members. Held no leadership role in the community.",
    "Gave cheerfully to the School of Endel, both financially and through service.",
    "Treated everyone kindly out of a pure heart of love. Generous to those in need.",
    "Resolute in her stance for truth, in a community where that cost something.",
    "Led one man to Jalyn's service. He went on to influence more than a thousand lives himself."
  ],
  says: [
    "I worked as a secretary to one of the city council members. I held no office.",
    "I gave to the school, and I served there when I could.",
    "I tried to be kind to people. I do not know what else to tell you.",
    "There was a man nobody else would talk to. I talked to him about the king."
  ],
  saysNote: "Composed from the record. The parable narrates her judgment only in retrospect, through what she says to a citizen afterward.",
  response: [
    "Deception cannot hide within this hall or the great city.",
    "In Endel, you were concerned with both image and reputation. This trains many to speak deceptively while unaware of their folly.",
    "Here words are very important, but even weightier are our motives and intentions, as they are always apparent here.",
    "My dear brother, you will receive a just reward for your life in Endel."
  ],
  verdict: "affabel", measure: "throne",
  ruling: "She sits on one of the thrones. She is an underruler in Affabel, and Jalyn has her speak to citizens on his behalf before they reach the throne.",
  reason: "Jalyn explained her total by the multiplication principle. Everyone the school served was credited to her because she funded and served the school. Every life reached by the man she brought to Jalyn's service was credited to her as well, because she reached him first. Nothing she did looked like much on the day she did it.",
  revealed: [
    "Jalyn asked an underruler how many citizens Patient had influenced for the kingdom. The answer was just over five thousand."
  ],
  measureReason: "A throne in the Regal Center, working directly alongside the king. She is one of the seventy-eight rulers of the city.",
  lesson: "Ask the class what they would have written on her performance review in Endel. Then ask what changed between that review and this one. Nothing about her life changed. Only the light it was read in.",
  texts: [
    { v: "cor2_9_10", cited: true,
      note: "Jalyn named this the multiplication principle and used it to explain how a secretary reached five thousand people.",
      just: [
        { t: "Her five thousand is not a count of what she did. It is the harvest of seed she scattered and never saw land.", sound: true },
        { t: "She was rewarded because she gave money, and money multiplies.", sound: false },
        { t: "The text promises that anyone who gives will become influential.", sound: false }
      ]},
    { v: "mt25_21", cited: true,
      note: "The wage of a servant who was faithful in small matters. Every single thing she did was a small matter.",
      just: [
        { t: "She was faithful in things too small for anyone to notice, and the text says that is exactly what great responsibility is given for.", sound: true },
        { t: "She was given a throne because she achieved great things in Endel.", sound: false },
        { t: "Her reward was scaled to match her job as a secretary.", sound: false }
      ]},
    { v: "mt6_1_4", cited: true,
      note: "She gave where nobody was watching, and the second half of this text is about precisely that: the Father who sees in secret is the one who repays. Read the first half too, and notice that it is the same verse. It cuts one way for the giver who performs and the other way for the giver who hides.",
      just: [
        { t: "She gave where nobody was watching. The text says the Father who sees in secret is the one who repays, and he did.", sound: true },
        { t: "She avoided public giving because giving in public is always sinful.", sound: false },
        { t: "She gave secretly in order to collect a larger reward later.", sound: false }
      ]},
    { v: "cor1_3_12_15", cited: false,
      note: "Her work survived the fire. This text describes a builder whose materials do not, which is a real category and not hers. Applying it to Patient inverts her case exactly: it would make the woman whose small deeds multiplied into thousands into the one who has almost nothing left.",
      just: [
        { t: "Most of what she built burned, so she was saved only as through fire.", sound: false },
        { t: "Her small deeds were straw rather than gold.", sound: false },
        { t: "The fire tested her work and destroyed the hidden parts of it.", sound: false }
      ]}
  ]
},

/* ============================================================ 5 */
{
  id: "faintheart",
  name: "Faint Heart",
  trade: "Salon owner, formerly a teacher's assistant",
  hall: "justice",
  art: { src: wm("3/37", "Dante_Gabriel_Rossetti_-_Proserpine_-_Google_Art_Project.jpg", 960),
         credit: "Dante Gabriel Rossetti, Proserpine, 1874" },
  approach: "In school she was the most enthusiastic student of them all. Independent spotted her in the waiting hall and felt relief: if she was here, things would turn out fine.",
  intro: "The most passionate follower of Jalyn in her class. She spoke up constantly, earned some of the best grades, and organized the students' community work. Anyone assessing the class would have named her the most devoted.",
  review: [
    "Outstanding student. Constant volunteer work, extra study, class leadership. All of it real.",
    "A friend named Slander told the headmaster she had slept with a male student. It was an outright lie. She was innocent.",
    "She got the job anyway. She never let the offense go. She vowed to make Slander pay.",
    "Her supervising teacher, one of the most gifted men in the school, pursued her for weeks. She resisted, then relented, and they began an affair.",
    "After four months he discarded her. She resigned, opened a salon, and stopped attending the weekly gatherings.",
    "She never repented of the affair. She held herself the victim and laid the whole weight on Slander and on the teacher.",
    "In her heart she blamed Jalyn for allowing a corrupt man to teach in his school. Asked directly, she would still confess allegiance to him.",
    "She spent the rest of her days trying to get even with the people who had hurt her."
  ],
  says: [
    "I spoke up in every class. I organized the students. I had some of the best grades in my year.",
    "Anyone who assessed our class would have named me the most passionate for his cause.",
    "What was done to me was done by Slander and by that teacher. I was the one who was wronged.",
    "I expect a scolding. I do not expect more than that."
  ],
  saysNote: "Drawn from her record and from her state of mind entering the hall, which the parable describes directly.",
  response: [
    "Jalyn, did you say I am to be taken to the dreaded land of Lone?",
    "How can this be, lord Jalyn? I believe in you. This was clearly shown in my life review.",
    "I know my heart became hardened and the love within me died, but that wasn't my fault. It was the fault of Slander and of that teacher. They caused me to grow cold.",
    "But what about all the good I did?",
    "You said if I confessed you as my Savior my name would be written in the Book of Life. Why can't your scribe find my name? How could it have been erased?"
  ],
  verdict: "lone", measure: "upper",
  ruling: "Faint Heart, you are guilty of falling away from righteousness and denying me by treason, and are to be taken to the forsaken land of Lone.",
  reason: "This is the hardest ruling in the parable, and Jalyn does not soften it. She was genuinely wronged. He does not dispute that for a moment. What he disputes is the conclusion she drew from it. “Such will be the spread of evil that many people's love will grow cold. But whoever holds out to the end will be saved. You did not endure to the end.” When she argued that no one could pluck her from his hand, he answered: “No one can pluck you out of my hand, but I never said you couldn't walk away. You alone hold that power.”",
  measureReason: "She had every advantage of knowledge. She was the best student in the class. That places her among those who knew.",
  lesson: "Handle this one carefully. Faint Heart is a victim, and the parable says so plainly. The question it presses is not whether her wound was real but what she did with it for the rest of her life. Worth asking the class: what would it have cost her to forgive Slander in that first week, and what did it cost her not to?",
  texts: [
    { v: "mt24_12_13", cited: true,
      note: "Jalyn's first answer to her. He had warned her teachers of exactly this, and she had heard the warning as a student.",
      just: [
        { t: "Her love did grow cold, exactly as the warning said it would. The half she failed is the second: she did not persevere.", sound: true },
        { t: "The evildoing around her caused her love to die, so the text excuses her.", sound: false },
        { t: "She endured a great deal of pain, so she satisfied the text.", sound: false }
      ]},
    { v: "ezek33_12_13", cited: true,
      note: "Jalyn's answer to “But what about all the good I did?” He quoted the prophet on the just who turn from justice.",
      just: [
        { t: "She asked what happened to all the good she did. This is the answer: relying on it while doing wrong, none of it is remembered.", sound: true },
        { t: "Her early righteousness should have been enough to cover her later sin.", sound: false },
        { t: "It shows that God forgets good deeds arbitrarily.", sound: false }
      ]},
    { v: "rev3_5", cited: true,
      note: "Her last argument was that a name in the Book of Life cannot be erased. Jalyn answered from this verse: promising never to erase it presumes erasure is possible.",
      just: [
        { t: "She asked how a name could be erased. Jalyn's answer was that promising never to erase it presumes erasure is possible.", sound: true },
        { t: "The text guarantees that no name can ever be removed under any circumstance.", sound: false },
        { t: "The white garments are handed out for good behavior.", sound: false }
      ]},
    { v: "jas2_10", cited: false,
      note: "This governs someone asking for a favorable balance on a ledger, which is Independent's case, not hers. Faint Heart's problem was never a single breach. It was a bitterness she nursed for years and never once repented of.",
      just: [
        { t: "She broke one law, and one breach makes her guilty of all of them.", sound: false },
        { t: "Her unforgiveness was one slip, and one slip is enough.", sound: false },
        { t: "Everyone is guilty of everything, so her sentence is essentially arbitrary.", sound: false }
      ]}
  ]
},

/* ============================================================ 6 */
{
  id: "content",
  name: "Social",
  trade: "Restaurant owner",
  hall: "life",
  art: { src: wm("6/64", "Massysm_Quentin_%E2%80%94_The_Moneylender_and_his_Wife_%E2%80%94_1514.jpg", 960),
         credit: "Quentin Matsys, The Moneylender and His Wife, 1514" },
  approach: "An old friend to half of Endel. His restaurant was the one everybody ate at, and his name came up whenever the community needed something paid for.",
  intro: "He owned a well-regarded restaurant. He sponsored community events, contributed money and free meals to fundraising campaigns, and gave up whole evenings of revenue to do it. Ask anyone in Endel and they would tell you he was a good man.",
  review: [
    "Ran one of the best restaurants in Endel. Sponsored numerous community events.",
    "Contributed finances and free meals to fundraising campaigns, sacrificing evenings of revenue.",
    "His own account of his motive: 'I did those things to gain recognition and acceptance. I also knew it would draw more patrons. My motive was not to bless but to insure my success.'",
    "Gave to the School of Endel, but only a small percentage of his profits. He hoarded the rest out of fear of failing, and out of a desire to live well.",
    "'The little I gave was to ease my conscience.' He gave out of guilt and compulsion rather than compassion and love.",
    "He had the time to serve at the school and did not. The load was carried by the few who did."
  ],
  says: [
    "I ran one of the best restaurants in Endel.",
    "I sponsored the community's events. I gave free meals to the fundraising campaigns and gave up whole evenings of revenue to do it.",
    "I contributed to the School of Endel every year.",
    "Ask anyone in that community what kind of man I was."
  ],
  saysNote: "Composed from the record. He tells the truth about his own motives only after his judgment, and not before.",
  response: [
    "I did those things to gain recognition and acceptance. I also knew it would draw more patrons. My motive was not to bless but to insure my success.",
    "I actually only gave a small percentage. I hoarded much of the profits because I was afraid of failing.",
    "The little I gave I did to ease my conscience of my lack of commitment to his kingdom.",
    "I really didn't deserve anything I received from him. I am in debt to his extravagant kindness for the rest of my life."
  ],
  verdict: "affabel", measure: "flatlands",
  ruling: "His name is no longer Social. Jalyn renamed him Content. He lives in the flatlands and works as a plumber. He is one of the least citizens of Affabel.",
  reason: "The deeds were real and the community benefited. But Jalyn judged what the deeds were for, and by that measure most of them had already been paid out in Endel, in the form of recognition and customers. He is in the kingdom. He is also in the back row, and he is not bitter about it: “I am in debt to his extravagant kindness for the rest of my life.”",
  measureReason: "The back rows of the Great Hall, the flatlands of the city, labor-intensive work. The least in the kingdom.",
  lesson: "Everything on his file is true and everything on it was admired. He is in the kingdom and he is in the back row, and he is the first person in this docket for whom the gap between the deed and the reason behind it decided the whole outcome. Keep his file in mind. You will meet its mirror image before the docket is finished.",
  texts: [
    { v: "mt6_1_4", cited: true,
      note: "The governing text. He describes his own motive in almost the words of the verse: he gave to gain recognition and to draw patrons.",
      just: [
        { t: "He said it himself. He gave for recognition and for customers, and the text says that reward was already paid out in Endel.", sound: true },
        { t: "He gave publicly, and public giving forfeits the reward automatically.", sound: false },
        { t: "He gave too little, and small gifts earn nothing.", sound: false }
      ]},
    { v: "lk14_12_14", cited: true,
      note: "Content quotes this passage himself, unprompted, as the thing he wishes he had listened to. His dinners were full of people who could repay him.",
      just: [
        { t: "His dinners drew exactly the people who could repay him. The text says the reward attaches to the guest who cannot.", sound: true },
        { t: "Hosting friends and relatives is forbidden by this text.", sound: false },
        { t: "He should have charged the poor less at his restaurant.", sound: false }
      ]},
    { v: "cor1_3_12_15", cited: true,
      note: "The mechanism behind every reduced station in this parable. The foundation is the lordship of Jalyn, and where it holds a person is in the city. What gets built on top of it is what the fire tests, and straw does not survive testing.",
      just: [
        { t: "The foundation held, so he is in the city. Almost everything he built on it was straw, so he is in the back row.", sound: true },
        { t: "He was saved through fire, meaning he barely escaped being condemned.", sound: false },
        { t: "The fire destroyed him along with his works.", sound: false }
      ]},
    { v: "mt25_34_40", cited: false,
      note: "His deeds match this text almost line for line: he fed people, he welcomed people, he gave. What the text describes, though, is service rendered to the King without knowing it, discovered only when he names it. Social knew exactly what he was doing and exactly why, and said so himself. The deeds match; the astonishment does not.",
      just: [
        { t: "He fed the hungry with free meals, so he did it for Jalyn.", sound: false },
        { t: "His community events welcomed the stranger.", sound: false },
        { t: "He clothed and cared for people through his fundraising.", sound: false }
      ]}
  ]
},

/* ============================================================ 7 */
{
  id: "humbled",
  name: "Motivator",
  trade: "Teacher at the School of Endel",
  hall: "life",
  art: { src: wm("d/d6", "Pieter_Bruegel_the_Elder_-_The_Parable_of_the_Blind_Leading_the_Blind_-_WGA3511.jpg", 960),
         credit: "Pieter Bruegel the Elder, The Parable of the Blind, 1568" },
  approach: "By common account the most admired teacher in the School of Endel. Informative, articulate, inspiring. Students left his classroom feeling good about themselves, which was not always true of the others.",
  intro: "A gifted and beloved instructor of Jalyn's ways. He taught the principles faithfully. He simply never taught the warnings.",
  review: [
    "One of the most admired teachers at the School of Endel. Genuinely gifted.",
    "Taught the principles of Jalyn accurately, and emphasized only the positive aspects of serving him.",
    "'I motivated many of my students to only pursue success without considering the long-term effects. I didn't teach them that the truest goal of life was to please Jalyn. I taught them how to use his ways to succeed in life.'",
    "Never warned students of the pitfalls of their society, though he was charged to preach the whole counsel.",
    "'I gave them what they wanted, not what they needed. I didn't want to lose their acceptance or my popularity.'",
    "He saw the flimsy walls in his students' lives and covered them with whitewash rather than tearing them down.",
    "A good number of his former students are now in the forsaken land of Lone."
  ],
  says: [
    "I taught his principles for years, and I taught them accurately.",
    "My students left my classroom encouraged. They came back. They liked me.",
    "The other teachers were uplifting too, but they could be stern, and their words brought painful conviction. Mine did not.",
    "I never told a student anything that was untrue."
  ],
  saysNote: "Composed from the record and from how his former students remembered his classroom. His own confession comes only after his judgment.",
  response: [
    "I failed as a teacher in so many ways. First, my teachings were unbalanced. I emphasized only the positive aspects of serving Jalyn.",
    "I didn't give the students what they needed. I gave them what they wanted. I didn't want to lose their acceptance or my popularity.",
    "I knew deep in my conscience that these were flimsy walls, but I didn't warn them. I said all was well when it wasn't.",
    "Though some made it to Affabel, I yet grieve for those at Lone.",
    "My name is Humbled."
  ],
  verdict: "affabel", measure: "flatlands",
  ruling: "His name is no longer Motivator. Jalyn renamed him Humbled. He is in the back rows, one of the least citizens of the city.",
  reason: "He is in Affabel. He believed, and the foundation held. Everything he built on top of it burned. He describes it himself: “When measured by the ancient writings, my life fell short of his expectations and I failed in the area of my influence on those I taught. I lost my reward.”",
  measureReason: "The back rows. The flatlands. He is one of the least citizens of the city, and he grieves the students he lost.",
  lesson: "Almost everyone sends this man to Lone. Students of his are in Lone because of what he taught them, and he is saved. Sit in that before you move on, because the reason is not that the damage was small. It was not small. He grieves it for the rest of his life.",
  texts: [
    { v: "ezek13_10_11", cited: true,
      note: "He quotes this against himself. It is the sharpest thing said about him in the parable, and he is the one who says it.",
      just: [
        { t: "He saw the flimsy walls in his students' lives and painted over them. He said peace where there was no peace, and the rain came.", sound: true },
        { t: "He built the walls himself and they collapsed on the people inside.", sound: false },
        { t: "He taught false doctrine and led his people into error.", sound: false }
      ]},
    { v: "cor1_3_12_15", cited: true,
      note: "He quotes this at length to explain why a famous teacher is standing in the back rows. It is the text that holds his salvation and his loss together in one sentence: the work burns, the builder is saved.",
      just: [
        { t: "The foundation was Jalyn's lordship and it held, which is why he is in the city. What he built on it was wood and hay, which is why he is in the back.", sound: true },
        { t: "He is saved as through fire, which shows his teaching did no lasting harm.", sound: false },
        { t: "The text describes his students' works burning, not his own.", sound: false }
      ]},
    { v: "jas3_1", cited: true,
      note: "The warning given to instructors, which he acknowledges he knew when he began teaching.",
      just: [
        { t: "He took the teacher's chair and with it the stricter judgment. The severity of his loss is measured by what he accepted.", sound: true },
        { t: "It means teachers are always condemned in the end.", sound: false },
        { t: "It means he should never have taught in the first place.", sound: false }
      ]},
    { v: "mt18_6", cited: false,
      note: "This is the reasoning most students use to send him to Lone, and Jalyn did not use it. The millstone is spoken over someone who causes a little one to sin. Motivator's students were failed, flattered and left unwarned, which is a grave thing and a different thing. The parable is careful about that distinction even when it is painful, and so is the text.",
      just: [
        { t: "His students fell into Lone because of what he taught them, so the millstone applies.", sound: false },
        { t: "He caused little ones to stumble by covering over their faults.", sound: false },
        { t: "The sea would have been better for him than what he actually received.", sound: false }
      ]}
  ]
},

/* ============================================================ 8 */
{
  id: "doublelife",
  name: "Double Life",
  trade: "Teacher at the School of Endel",
  hall: "justice",
  art: { src: wm("e/e6", "Caravaggio_-_Taking_of_Christ_-_Dublin.jpg", 960),
         credit: "Caravaggio, The Taking of Christ, 1602" },
  approach: "He is the last person called. He already knows the writings better than anyone else in the room, and he has to be helped up the steps by the guards.",
  intro: "One of the most gifted teachers of Jalyn in the school, and one of the best-looking men in the community. He lived one way in the classroom and another way in private. Because he was a teacher he had been privileged to see Jalyn in person.",
  review: [
    "A dynamic and knowledgeable teacher. Personally acquainted with Jalyn, a privilege given to teachers alone.",
    "Made a pass at his own assistant, Faint Heart. She refused and left. He persisted for weeks until she gave in.",
    "Carried on a four-month affair with her, then dropped her when he lost interest, lying about the reason.",
    "He was already pursuing another young woman in the community. He was known for it.",
    "Faint Heart resigned, stopped attending the gatherings, hardened, and has been sentenced to Lone.",
    "He knew and taught the ancient writings, including every passage now being read against him."
  ],
  says: [
    "I was one of his teachers. I was permitted to see him in person, which few in Endel ever were.",
    "I gave my life to his school and to his cause.",
    "I know the writings. I taught them.",
    "I was not like Independent. I never had nothing to do with him."
  ],
  saysNote: "Composed from the record and from the defense he makes at the seat.",
  response: [
    "Lord, but I was a teacher in your school. I gave my life for your cause.",
    "How was I a stumbling block?",
    "But Jalyn, why am I to receive the greatest torment? Why are you so hard on me? I was one of your servants, not an unbeliever. I wasn't like Independent, who would have nothing to do with you. Why?",
    "(As the Chief Guard approached, he spewed profanities at Jalyn, at the guards, and at the citizens of Affabel, and tried to break free to attack the king.)"
  ],
  verdict: "lone", measure: "blackest",
  ruling: "Double Life, you are guilty of treason, falling away from righteousness, and being a stumbling block, and are to be taken to the forsaken land of Lone, where you will receive the greatest punishment and torments.",
  reason: "He asked why his sentence was heavier than Independent's when Independent had rejected Jalyn outright. Jalyn answered from the writings Double Life himself had taught: the servant who knew his master's will and did not do it is beaten severely, while the one who did not know is beaten lightly. “Independent was far less aware of his transgressions, but you had both awareness and knowledge. His punishment, though severe, will be lighter than your own.”",
  measureReason: "Not the metal building at all. A dungeon underground near the hot sulfur rocks, unvented, hotter than anywhere else, and alone. “For you, I've reserved a place in the deepest darkness.” He will never again see light of any kind.",
  lesson: "Now go back to Motivator. Two teachers. Both harmed students. One is in the flatlands of Affabel and one is in the deepest hole in Lone. The difference is not the size of the damage. Push the class to name what it actually is.",
  texts: [
    { v: "lk12_47_48", cited: true,
      note: "Jalyn's direct answer to “why am I to receive the greatest torment?” This is the text that grades punishment by knowledge.",
      just: [
        { t: "He asked why his sentence was heavier than Independent's. This is the answer: the servant who knew and did not act is beaten severely, and much was entrusted to him.", sound: true },
        { t: "It means all servants receive an identical punishment.", sound: false },
        { t: "It excuses Independent entirely.", sound: false }
      ]},
    { v: "mt18_6", cited: true,
      note: "Jalyn quoted the millstone warning directly, immediately after naming Faint Heart as the one he was given authority to protect.",
      just: [
        { t: "Faint Heart was entrusted to his care and he used her. He was given authority to protect and used it to prey. That is the millstone.", sound: true },
        { t: "He caused her to stumble by teaching her badly in the classroom.", sound: false },
        { t: "The text applies because she ended up in Lone.", sound: false }
      ]},
    { v: "jude_13", cited: true,
      note: "Jalyn's words were “For you, I've reserved a place in the deepest darkness.” This is the text behind the measure, not the verdict.",
      just: [
        { t: "This is the text behind the measure rather than the verdict. The gloom is reserved, and reserved means prepared in advance for someone specific.", sound: true },
        { t: "It describes everyone who is sent to Lone.", sound: false },
        { t: "The darkness described here is temporary.", sound: false }
      ]},
    { v: "ezek13_10_11", cited: false,
      note: "Motivator's text, not his. Motivator's sin was what he left out of the classroom. Double Life's sin was what he did outside it. Reading Double Life as merely an unbalanced teacher misses the charge Jalyn actually brought: he was a stumbling block who shipwrecked a faith he had been given authority to protect.",
      just: [
        { t: "He whitewashed the flimsy walls in the lives of his students.", sound: false },
        { t: "He said peace when there was no peace.", sound: false },
        { t: "He led the people astray by what he taught them.", sound: false }
      ]}
  ]
},

/* ============================================================ 9 */
{
  id: "evangelist",
  name: "Brutal",
  trade: "Newspaper columnist",
  hall: "life",
  art: { src: wm("4/4d", "Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg", 960),
         credit: "Caravaggio, Saint Jerome Writing, c. 1605" },
  approach: "The men of standing in Endel knew him and disliked him. After his conversion he was, in their judgment, far too zealous about the whole business.",
  intro: "A convert who would not shut up about it. He wrote a column in the community newspaper and used it to call out the citizens' lack of commitment to the kingdom. People found him abrasive.",
  review: [
    "Came to Jalyn's service through Patient, the council secretary.",
    "Wrote for the community newspaper and repeatedly used his column to name the citizens' lack of commitment toward the kingdom.",
    "Rallied Endelites to phone and email council members supporting the school's expansion.",
    "Made his displeasure public when the mayor swayed a council vote and denied the school the land it needed.",
    "Widely regarded as too zealous. The men of standing in Endel disliked him for it."
  ],
  says: [
    "I wrote a column in the community paper and I used it to say what nobody wanted said.",
    "I told this community it was not serious about the kingdom, and I named names.",
    "When the mayor swayed the vote and denied the school its land, I made my displeasure public.",
    "People found me difficult. I am aware of that."
  ],
  saysNote: "Composed from the record. He has not yet been called when Jalyn speaks about him, so the parable gives him no plea of his own.",
  response: [
    "Jalyn: 'He will be renamed Evangelist because he became a great communicator of my ways.'",
    "Jalyn: 'He personally influenced over a thousand lives for the kingdom.'",
    "Jalyn: 'All those lives he built were credited to Patient's account, because she led him to my service and supported the school that trained him.'"
  ],
  verdict: "affabel", measure: "unspecified",
  ruling: "He will be renamed Evangelist. Every life he built was also credited to Patient, because she led him to Jalyn and supported the school that trained him.",
  reason: "The citizens of Endel read him as obnoxious. Jalyn read him as a great communicator of his ways. The parable makes the point through the reaction of a man who had disliked him for years and who realised, hearing Jalyn speak, that everything Brutal had stood for was in line with the kingdom's advancement, and that he had been blind to it the entire time.",
  revealed: [
    "Jalyn states that Brutal personally influenced more than a thousand lives for the kingdom, and that every one of them was also credited to Patient."
  ],
  measureReason: "The parable does not narrate his sentencing. He is still waiting to be called when Jalyn speaks about him, so his verdict is certain and his station is never stated. This case is scored on the verdict alone.",
  lesson: "The one nobody liked. Ask whether any student docked him for being annoying, and where in the Book that criterion appears. Then note the multiplication: his thousand lives also went onto Patient's account. Nobody's ledger is only their own.",
  texts: [
    { v: "sam1_16_7", cited: true,
      note: "The principle the whole case turns on. Endel judged Brutal by how he came across, and the community's verdict on him was close to unanimous. Jalyn reports what he found in the heart instead, and it is not what anyone expected.",
      just: [
        { t: "Endel judged him by how he came across. Jalyn looked into the heart and found a great communicator of his ways.", sound: true },
        { t: "It means appearance never matters at all in how we treat one another.", sound: false },
        { t: "It means those who disliked him were right to, and only wrong to say so out loud.", sound: false }
      ]},
    { v: "mt25_21", cited: true,
      note: "He had a short window between his conversion and the judgment, and he spent all of it. The wage attaches to the faithfulness, not the length of service.",
      just: [
        { t: "He had one short window and used all of it. Faithful in small matters is what the great responsibility is given for.", sound: true },
        { t: "He was rewarded for the size of his audience as a columnist.", sound: false },
        { t: "He was rewarded because he happened to write well.", sound: false }
      ]},
    { v: "prov30_12", cited: false,
      note: "Deceived's text, and the most natural verse to reach for if you found Brutal insufferable. Jalyn read the same behavior as faithfulness. Worth asking what evidence in the file would actually support a charge of self-righteousness against him. There is none. There is only the fact that he was disliked.",
      just: [
        { t: "He was pure in his own eyes while publicly criticizing everyone else.", sound: false },
        { t: "His zeal was self-righteousness dressed up as conviction.", sound: false },
        { t: "He judged the citizens while not being cleansed of his own filth.", sound: false }
      ]}
  ]
},

/* ============================================================ 10 */
{
  id: "selfish",
  name: "Selfish",
  trade: "Mayor of Endel",
  hall: "life",
  art: { src: wm("0/01", "Hans_Holbein_der_J%C3%BCngere_-_Der_Kaufmann_Georg_Gisze_-_Google_Art_Project.jpg", 960),
         credit: "Hans Holbein the Younger, The Merchant Georg Gisze, 1532" },
  approach: "He is called first, and assumes it is because he was mayor. He notices a few unoccupied thrones near the front and his heart skips. He feels certain one of them is his.",
  intro: "He believed in Jalyn, never doubted Affabel, and said so publicly. He also believed Jalyn was so gracious that anyone who professed allegiance and avoided the major laws would get in. He had forgotten that Jalyn is just and holy as well as merciful.",
  review: [
    "Received seventy-five thousand dollars at graduation, the largest sum of any of the five.",
    "Invested well, multiplied it quickly, bought a house in the best neighborhood, and hosted the influential and powerful.",
    "Elected mayor after three years on the strength of his financial clout and connections.",
    "Gave just under one thousand dollars to the school's fundraising drive during his term.",
    "Cast the deciding vote to give the contested land to a department store rather than the school. The store's owners had funded his campaign and been guests in his home.",
    "Justified the vote publicly as being for the good of Endel, and recommended the school expand its current facility, which he knew was not feasible.",
    "Facing reelection and feeling remorseful, gave the school five thousand dollars and promised to find them other land. It restored the confidence of many.",
    "Often motivated by compassion. When it mattered, he looked out for himself."
  ],
  says: [
    "I was mayor. I led that community for two years and it thrived under me.",
    "I believed in him and I never doubted the city existed. I said so publicly and often.",
    "I steered clear of the drinking. I broke none of the major laws.",
    "I have seen the thrones near the front, and I have seen that two of them are empty. I expect one of them."
  ],
  saysNote: "Drawn from his own reasoning and from his thoughts as he entered, which the parable states plainly.",
  response: [
    "I deserve to be punished the rest of my life. I deserve Lone. I've wasted so much and produced so little in return for the talents and responsibilities I had.",
    "(He braced himself to hear the sentence, and wept when he heard something else.)",
    "Rule with you in the outer realms?",
    "(He bowed his head and wept. The kindness of the king was overwhelming.)"
  ],
  verdict: "affabel", measure: "flatlands",
  ruling: "Selfish, you are my servant. You believed in me and submitted to my lordship even though you wasted so much. I love and welcome you into my kingdom for the rest of your life.",
  reason: "He watched nearly everything he had done burn, and still heard those words. Jalyn renamed him Unpretentious, gave him a home in the flatlands and work as a landscaper, and then added something he had not expected: he would train the landscapers of twenty cities on the continent of Bengilla. “All who live in this city are rulers.”",
  revealed: [
    "Jalyn asked how many citizens Selfish had impacted for the kingdom. Very few were named."
  ],
  measureReason: "The flatlands. A landscaper. Not a ruler in the city of Affabel itself, though he assists in administering the outer realms.",
  lesson: "Selfish passed his own sentence before Jalyn spoke, and he got it wrong in the harsh direction. Worth asking: was he wrong about what he deserved, or only about what he would receive? The parable seems to say he was right about the first and had no idea about the second.",
  texts: [
    { v: "cor1_3_12_15", cited: true,
      note: "The governing text of his case and its clearest illustration anywhere in the parable: almost total loss, and salvation never actually in doubt for a moment. He watched the fire take nearly everything and then heard himself welcomed.",
      just: [
        { t: "He watched nearly everything burn and still heard “I welcome you.” Saved, yet suffering loss, is the exact shape of this text.", sound: true },
        { t: "Because his work burned, his salvation was genuinely in doubt until the last moment.", sound: false },
        { t: "He was saved because a small part of his work survived the fire.", sound: false }
      ]},
    { v: "cor1_4_5", cited: true,
      note: "Endel applauded the department store vote. Jalyn's review showed the campaign money and the dinner invitations underneath it.",
      just: [
        { t: "Endel applauded the department store vote. The motive underneath it was campaign money and hospitality, and that is what came to light.", sound: true },
        { t: "It means nobody should have criticized his vote at the time.", sound: false },
        { t: "His motives were hidden even from himself, so he is not responsible for them.", sound: false }
      ]},
    { v: "lk14_11", cited: true,
      note: "He walked in scanning the empty thrones for the one he assumed was his. Patient, who expected nothing, was already sitting on one.",
      just: [
        { t: "He walked in scanning the empty thrones for his own. He was seated in the flatlands. The exalting and the humbling are both in the text.", sound: true },
        { t: "It means leaders are always demoted in the kingdom.", sound: false },
        { t: "It means he should have run for a lower office.", sound: false }
      ]},
    { v: "mt7_21_23", cited: false,
      note: "The most common wrong ruling on this case sends Selfish to Lone, and this is the text students reach for. Jalyn's actual words were “you are my servant, you believed in me and submitted to my lordship even though you wasted so much.” Deceived got this text. Selfish did not. The difference is not the amount of waste. It is whether there was a real submission underneath it.",
      just: [
        { t: "He called Jalyn lord without doing his will, so “I never knew you” applies to him.", sound: false },
        { t: "He sounded religious without being godly.", sound: false },
        { t: "He should hear “depart from me, you evildoer.”", sound: false }
      ]}
  ]
},

/* ============================================================ 11 */
{
  id: "charity",
  name: "Charity",
  trade: "Restaurant owner",
  hall: "life",
  art: { src: wm("1/10", "William-Adolphe_Bouguereau_%281825-1905%29_-_Charity_%281878%29.jpg", 960),
         credit: "William-Adolphe Bouguereau, Charity, 1878" },
  approach: "She is the last one left in her hall, reading alone, when the Chief Guard comes for her. She walks the long aisle with her eyes fixed on the distant throne.",
  intro: "She took Jalyn's laws to heart and searched out the reasoning behind each one. She received the smallest sum of the five at graduation, twenty-five thousand dollars, and gave three of it away the same week.",
  review: [
    "Gave three thousand of her twenty-five thousand to the school's land drive on graduation, before starting anything.",
    "Built a successful restaurant. Won awards, and credited Jalyn, her teachers, and her employees in every interview.",
    "Committed 25 percent of all restaurant profits to the school. Over five years she gave more than two hundred thousand dollars.",
    "Contributed food to the school's soup kitchen and regularly worked the food line herself.",
    "Helped citizens who were working hard and could not make ends meet, and told each of them where her own success came from.",
    "Never included in the socials at Selfish's home. Never asked into any leadership role. Considered too radical, and a woman.",
    "Paid for a meal for a man named Ruthless one week before Judgment Day and spent two hours telling him about Jalyn."
  ],
  says: [
    "I received twenty-five thousand at graduation, less than anyone I knew. I gave three of it to the school that same week.",
    "I built a restaurant. When it did well I gave a quarter of everything it made back to the school.",
    "I worked the food line at the soup kitchen when I could.",
    "I was never invited to the socials at the mayor's house, and I was never asked into any leadership role. I did not mind."
  ],
  saysNote: "Composed from the record. Her only words at the seat come after Jalyn has already spoken.",
  response: [
    "Sir, it is I who've greatly longed for this moment. You are my king.",
    "When, Lord, did I ever see you hungry and feed you, or thirsty and give you a drink? When did I ever see you a stranger and welcome you in my home?",
    "Lord, I'm not worthy to rule. I was simply a restaurant owner. There are so many who are more gifted than I.",
    "Please give me a job that just serves you or your people."
  ],
  verdict: "affabel", measure: "throne",
  ruling: "Well done. You are a trustworthy servant. You have been faithful with the little I entrusted to you, so you will be governor of ten districts and twenty cities as your reward.",
  reason: "Jalyn greeted her with Matthew 25 word for word, and she gave the same answer the righteous give in the Gospel: when did I ever see you hungry? He crowned her with the Crown of the Overcomer, renamed her Cherished Overcomer, seated her on a throne near his own, made her governor of ten districts and prime minister of the continent of Bengilla, and gave her a home on the coast of the Great Sea because he knew she loved the sound of waves.",
  revealed: [
    "Jalyn asked how many lives Charity had influenced for his kingdom. The answer was 5,183, a little more than one sixth of the population of Endel.",
    "Some of her works were burned up as well, and it brought her real sorrow. Only a small fraction of her labors was lost."
  ],
  measureReason: "A throne beside his. One of seventy-eight rulers of the city. She reports to no one but him.",
  lesson: "End here. She had the least money, the least status, the least invitation, and she asked for a smaller job when the throne was offered. Then set her next to Social, the other restaurant owner, and let the class argue about what the actual difference was.",
  texts: [
    { v: "mt25_34_40", cited: true,
      note: "Jalyn opened her judgment by quoting this text at her, and she answered it with the exact words the righteous use in the Gospel.",
      just: [
        { t: "Jalyn greeted her with this text and she gave the Gospel's own answer: when did I ever see you hungry? She did not know she had been doing it for him.", sound: true },
        { t: "She earned the kingdom by feeding people.", sound: false },
        { t: "The text rewards charitable giving in general.", sound: false }
      ]},
    { v: "lk14_11", cited: true,
      note: "Jalyn quoted this to her directly when she protested that she was not worthy to rule and asked for a smaller job.",
      just: [
        { t: "She asked for a smaller job while the throne was being offered. Jalyn quoted this back to her and gave her the throne anyway.", sound: true },
        { t: "She was exalted because she deliberately acted humble.", sound: false },
        { t: "It means the poor are automatically ranked above the wealthy.", sound: false }
      ]},
    { v: "rev2_26_27", cited: true,
      note: "Jalyn quoted this as he handed her the scepter and gave her the name Cherished Overcomer.",
      just: [
        { t: "She kept to his ways to the end while being excluded for it. The authority over cities is what this text promises the victor.", sound: true },
        { t: "It rewards those who intend to rule harshly.", sound: false },
        { t: "It means she won a contest against the other citizens.", sound: false }
      ]},
    { v: "lk12_47_48", cited: false,
      note: "A text about servants who failed, which Jalyn used on Double Life. Charity received the smallest startup sum of the five graduates. The parable's point about her runs the opposite direction: she was given the least and returned the most.",
      just: [
        { t: "She was entrusted with much, and much was therefore required of her.", sound: false },
        { t: "She knew her master's will and acted on it, so she avoids the beating.", sound: false },
        { t: "More was demanded of her because she understood more than the others.", sound: false }
      ]}
  ]
}

];
