/* The Judgment Seat of Affabel
   Data layer: images, Scripture (NABRE), and the eleven cases.
   Built from John Bevere, "Driven by Eternity," chapters 2, 3 and 8. */

const CDN = "https://upload.wikimedia.org/wikipedia/commons/thumb/";

function wm(path, file, width) {
  return CDN + path + "/" + file + "/" + width + "px-" + file;
}

const ART = {
  hero: {
    src: wm("5/50", "John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg", 1600),
    credit: "John Martin, The Great Day of His Wrath, 1851–53"
  },
  affabel: {
    src: wm("7/79", "John_Martin_-_The_Plains_of_Heaven_-_Google_Art_Project.jpg", 1600),
    credit: "John Martin, The Plains of Heaven, 1851–53"
  },
  lone: {
    src: wm("e/e1", "John_Martin_-_Sodom_and_Gomorrah.jpg", 1600),
    credit: "John Martin, The Destruction of Sodom and Gomorrah, 1852"
  },
  throne: {
    src: wm("d/d2", "Paradiso_Canto_31.jpg", 858),
    credit: "Gustave Doré, The Empyrean, from Dante's Paradiso, 1868"
  },
  abyss: {
    src: wm("4/44", "Gustave_Dore_Inferno34.jpg", 960),
    credit: "Gustave Doré, Inferno, Canto XXXIV, 1861"
  }
};

/* ---------------------------------------------------------------
   SCRIPTURE. New American Bible, Revised Edition (NABRE).
   Text retrieved from the USCCB (bible.usccb.org).
   --------------------------------------------------------------- */

const VERSES = {
  rev2_23:      { ref: "Revelation 2:23", text: "I am the searcher of hearts and minds and I will give each of you what your works deserve." },
  lk16_2:       { ref: "Luke 16:2", text: "Prepare a full account of your stewardship, because you can no longer be my steward." },
  heb4_13:      { ref: "Hebrews 4:13", text: "No creature is concealed from him, but everything is naked and exposed to the eyes of him to whom we must render an account." },
  cor2_5_10:    { ref: "2 Corinthians 5:10", text: "For we must all appear before the judgment seat of Christ, so that each one may receive recompense, according to what he did in the body, whether good or evil." },
  rev20_12:     { ref: "Revelation 20:12", text: "I saw the dead, the great and the lowly, standing before the throne, and scrolls were opened. Then another scroll was opened, the book of life. The dead were judged according to their deeds, by what was written in the scrolls." },
  rev22_12:     { ref: "Revelation 22:12", text: "Behold, I am coming soon. I bring with me the recompense I will give to each according to his deeds." },

  jn8_24:       { ref: "John 8:24", text: "That is why I told you that you will die in your sins. For if you do not believe that I AM, you will die in your sins." },
  acts4_12:     { ref: "Acts 4:12", text: "There is no salvation through anyone else, nor is there any other name under heaven given to the human race by which we are to be saved." },
  jas2_10:      { ref: "James 2:10", text: "For whoever keeps the whole law, but falls short in one particular, has become guilty in respect to all of it." },
  eph2_8_9:     { ref: "Ephesians 2:8-9", text: "For by grace you have been saved through faith, and this is not from you; it is the gift of God; it is not from works, so no one may boast." },
  mt22_13_14:   { ref: "Matthew 22:13-14", text: "Then the king said to his attendants, 'Bind his hands and feet, and cast him into the darkness outside, where there will be wailing and grinding of teeth.' Many are invited, but few are chosen." },
  rev22_14_15:  { ref: "Revelation 22:14-15", text: "Blessed are they who wash their robes so as to have the right to the tree of life and enter the city through its gates. Outside are the dogs, the sorcerers, the unchaste, the murderers, the idol-worshipers, and all who love and practice deceit." },

  ti1_16:       { ref: "Titus 1:16", text: "They claim to know God, but by their deeds they deny him. They are vile and disobedient and unqualified for any good deed." },
  lk6_46:       { ref: "Luke 6:46", text: "Why do you call me, 'Lord, Lord,' but not do what I command?" },
  mt7_21_23:    { ref: "Matthew 7:21-23", text: "Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only the one who does the will of my Father in heaven. Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name?' Then I will declare to them solemnly, 'I never knew you. Depart from me, you evildoers.'" },
  jas2_14_19:   { ref: "James 2:14, 17, 19", text: "What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him? So also faith of itself, if it does not have works, is dead. You believe that God is one. You do well. Even the demons believe that and tremble." },
  ezek18_27:    { ref: "Ezekiel 18:27", text: "But if the wicked turn from the wickedness they did and do what is right and just, they save their lives." },
  ezek18_24:    { ref: "Ezekiel 18:24", text: "And if the just turn from justice and do evil, like all the abominations the wicked do, can they do this evil and still live? None of the justice they did shall be remembered, because they acted treacherously and committed these sins; because of this, they shall die." },
  ps50_16_21:   { ref: "Psalm 50:16-17, 21", text: "But to the wicked God says: “Why do you recite my commandments and profess my covenant with your mouth? You hate discipline; you cast my words behind you! … When you do these things should I be silent? Do you think that I am like you? I accuse you, I lay out the matter before your eyes.”" },
  prov30_12:    { ref: "Proverbs 30:12", text: "There are some pure in their own eyes, yet not cleansed of their filth." },

  mt24_12_13:   { ref: "Matthew 24:12-13", text: "And because of the increase of evildoing, the love of many will grow cold. But the one who perseveres to the end will be saved." },
  pt2_2_20_21:  { ref: "2 Peter 2:20-21", text: "For if they, having escaped the defilements of the world through the knowledge of our Lord and savior Jesus Christ, again become entangled and overcome by them, their last condition is worse than their first. For it would have been better for them not to have known the way of righteousness than after knowing it to turn back from the holy commandment handed down to them." },
  pt2_2_17:     { ref: "2 Peter 2:17", text: "These people are waterless springs and mists driven by a gale; for them the gloom of darkness has been reserved." },
  ezek33_12_13: { ref: "Ezekiel 33:12-13", text: "The justice of the just will not save them on the day they sin. Even though I say to the just that they shall surely live, if they, relying on their justice, do wrong, none of their just deeds shall be remembered; because of the wrong they have done, they shall die." },
  rev3_5:       { ref: "Revelation 3:5", text: "The victor will thus be dressed in white, and I will never erase his name from the book of life but will acknowledge his name in the presence of my Father and of his angels." },
  prov21_16:    { ref: "Proverbs 21:16", text: "Whoever strays from the way of good sense will abide in the assembly of the shades." },
  heb10_26_27:  { ref: "Hebrews 10:26-27", text: "If we sin deliberately after receiving knowledge of the truth, there no longer remains sacrifice for sins but a fearful prospect of judgment and a flaming fire that is going to consume the adversaries." },

  jas3_1:       { ref: "James 3:1", text: "Not many of you should become teachers, my brothers, for you realize that we will be judged more strictly." },
  mt18_6:       { ref: "Matthew 18:6", text: "Whoever causes one of these little ones who believe in me to sin, it would be better for him to have a great millstone hung around his neck and to be drowned in the depths of the sea." },
  lk12_47_48:   { ref: "Luke 12:47-48", text: "That servant who knew his master's will but did not make preparations nor act in accord with his will shall be beaten severely; and the servant who was ignorant of his master's will but acted in a way deserving of a severe beating shall be beaten only lightly. Much will be required of the person entrusted with much, and still more will be demanded of the person entrusted with more." },
  jude_13:      { ref: "Jude 13", text: "They are like wild waves of the sea, foaming up their shameless deeds, wandering stars for whom the gloom of darkness has been reserved forever." },
  ezek13_10_11: { ref: "Ezekiel 13:10-11", text: "Because they led my people astray, saying, 'Peace!' when there is no peace, and when a wall is built, they cover it with whitewash, say then to the whitewashers: I will bring down a flooding rain; hailstones shall fall, and a stormwind shall break forth." },

  cor1_3_12_15: { ref: "1 Corinthians 3:12-15", text: "If anyone builds on this foundation with gold, silver, precious stones, wood, hay, or straw, the work of each will come to light, for the Day will disclose it. It will be revealed with fire, and the fire itself will test the quality of each one's work. If the work stands that someone built upon the foundation, that person will receive a wage. But if someone's work is burned up, that one will suffer loss; the person will be saved, but only as through fire." },
  mt6_1_2:      { ref: "Matthew 6:1-2", text: "Take care not to perform righteous deeds in order that people may see them; otherwise, you will have no recompense from your heavenly Father. When you give alms, do not blow a trumpet before you, as the hypocrites do in the synagogues and in the streets to win the praise of others. Amen, I say to you, they have received their reward." },
  lk14_12_14:   { ref: "Luke 14:12-14", text: "When you hold a lunch or a dinner, do not invite your friends or your brothers or your relatives or your wealthy neighbors, in case they may invite you back and you have repayment. Rather, when you hold a banquet, invite the poor, the crippled, the lame, the blind; blessed indeed will you be because of their inability to repay you. For you will be repaid at the resurrection of the righteous." },
  mt12_36_37:   { ref: "Matthew 12:36-37", text: "I tell you, on the day of judgment people will render an account for every careless word they speak. By your words you will be acquitted, and by your words you will be condemned." },
  lk14_11:      { ref: "Luke 14:11", text: "For everyone who exalts himself will be humbled, but the one who humbles himself will be exalted." },

  mt25_21:      { ref: "Matthew 25:21", text: "His master said to him, 'Well done, my good and faithful servant. Since you were faithful in small matters, I will give you great responsibilities. Come, share your master's joy.'" },
  mt25_34_40:   { ref: "Matthew 25:34-36, 40", text: "Then the king will say to those on his right, 'Come, you who are blessed by my Father. Inherit the kingdom prepared for you from the foundation of the world. For I was hungry and you gave me food, I was thirsty and you gave me drink, a stranger and you welcomed me, naked and you clothed me, ill and you cared for me, in prison and you visited me.' … 'Amen, I say to you, whatever you did for one of these least brothers of mine, you did for me.'" },
  cor2_9_10:    { ref: "2 Corinthians 9:10", text: "The one who supplies seed to the sower and bread for food will supply and multiply your seed and increase the harvest of your righteousness." },
  rev2_26_27:   { ref: "Revelation 2:26-27", text: "To the victor, who keeps to my ways until the end, I will give authority over the nations. He will rule them with an iron rod." }
};

/* ---------------------------------------------------------------
   THE SENTENCING OPTIONS
   --------------------------------------------------------------- */

const STATIONS = {
  throne: {
    label: "A throne beside mine",
    detail: "Underruler in the Regal Center. Governing authority in the city and over the outer realms."
  },
  mountains: {
    label: "The mountains",
    detail: "The midsection of the city. Creative work, a good home, a real place in the kingdom."
  },
  flatlands: {
    label: "The flatlands",
    detail: "The least in the kingdom. Labor-intensive work, the back rows of the Great Hall."
  }
};

const MEASURES = {
  lower: {
    label: "The lower level",
    detail: "For those who never truly knew the truth, yet still did what deserves exile."
  },
  upper: {
    label: "The upper level",
    detail: "Where the heat is greatest. For those who knew the truth and refused it."
  },
  blackest: {
    label: "The dungeon beneath",
    detail: "Alone, near the sulfur rocks, where no light ever comes. The blackness of darkness, reserved forever."
  }
};

/* ---------------------------------------------------------------
   THE DOCKET
   Ordered so that no two lookalike cases sit side by side.
   --------------------------------------------------------------- */

const CASES = [
  /* 1 */ {
    id: "independent",
    name: "Independent",
    trade: "Car dealer and investor",
    hall: "justice",
    art: {
      src: wm("a/a1", "Rembrandt_-_The_Parable_of_the_Rich_Fool.jpg", 960),
      credit: "Rembrandt, The Parable of the Rich Fool, 1627"
    },
    approach: "He walks in smiling. He winks at a guard, who does not smile back. Halfway down the aisle the smile is gone, and by the time he reaches the platform he is shaking.",
    intro: "He questioned whether Affabel existed at all. He refused to attend class, called the teachings a scheme to control young lives, and mocked those who believed. He intended to live as he saw fit.",
    review: [
      "Refused to attend the School of Endel. Ridiculed classmates who believed.",
      "Received fifty-five thousand dollars at graduation, more than any of his friends, and read it as proof the kingdom was a fraud.",
      "Built a successful car lot, then expanded into other ventures. Genuinely good at the work.",
      "Used his wealth to attract women and buy influence. Never attended a weekly gathering.",
      "Supported community projects and was considered a good citizen by most of Endel."
    ],
    pleas: [
      "Lord, why?",
      "But what about my good works? Didn't they outweigh my evil?",
      "How then can anyone be saved?",
      "You are a merciful king! How can you send me away if this is so?"
    ],
    verdict: "lone",
    measure: "lower",
    verse: "jn8_24",
    options: ["jn8_24", "eph2_8_9", "mt25_21", "jas3_1"],
    ruling: "Independent, you are guilty of choosing an evil nature and are to be taken to the forsaken land of Lone.",
    reason: "“You did not believe in me,” Jalyn answered. Good works were never the currency. Independent had assumed his ledger would balance, and Jalyn told him the ledger was not the question: “It is not a matter of how little or much you break the law.” Then Jalyn added the thing Independent had counted on most: “I am a merciful king, and that is exactly why I'm sending you away. By choosing to spend your time in Endel the way you did, you permanently chose your nature.”",
    measureReason: "Independent knew the least. He had skipped the classes that would have told him. Jalyn later told Double Life that Independent “was far less aware of his transgressions” and that his punishment, though severe, would be lighter. He was placed in the lower portion of the structure, with those who did not know the truth but still did what deserved exile.",
    alsoCited: ["acts4_12", "jas2_10", "eph2_8_9", "mt22_13_14"],
    lesson: "Start here because it is the easy one. Almost everyone rules correctly. Notice what that confidence feels like, and then watch what happens to it over the next ten cases."
  },

  /* 2 */ {
    id: "reconciled",
    name: "Ruthless",
    trade: "Known as the most wicked man in Endel",
    hall: "life",
    art: {
      src: wm("9/91", "Rembrandt_Harmensz._van_Rijn_-_The_Return_of_the_Prodigal_Son.jpg", 960),
      credit: "Rembrandt, The Return of the Prodigal Son, c. 1669"
    },
    approach: "He does not look like the others. He never went to school. He opposed you more openly than anyone in Endel, and everyone in the hall knows his name.",
    intro: "A notorious wicked man. He never attended a single class, never heard the teachings, and opposed Jalyn more loudly than anyone Deceived had ever known. He oppressed people. He stole.",
    review: [
      "Never attended the School of Endel. Never heard Jalyn's word taught.",
      "Known throughout the community as a thief and an oppressor.",
      "Opposed Jalyn publicly and more fiercely than any other citizen.",
      "One week before Judgment Day, he ate at Charity's restaurant. She paid for his dinner on the condition that he stay and talk. She spent two hours telling him about Jalyn.",
      "He hated who he was and what he had done. He pledged the rest of his life to Jalyn's lordship.",
      "In the seven days remaining he went to everyone he had oppressed or stolen from, asked their forgiveness, and gave back more than he had taken."
    ],
    pleas: [
      "I was once known as Ruthless.",
      "I hated who I was and what I did.",
      "Though I was only able to serve him for a week in Endel, I did so with all my heart."
    ],
    verdict: "affabel",
    measure: "unspecified",
    verse: "ezek18_27",
    options: ["ezek18_27", "jas2_10", "prov21_16", "heb10_26_27"],
    ruling: "Lord Jalyn changed his name at the Judgment Seat to Reconciled.",
    reason: "He entered Affabel as a regal citizen. When Jalyn was later challenged about this very case, he answered with Ezekiel: if a wicked person turns away from his wickedness and does right, he shall save his soul. Reconciled himself said he was “shown possibly the greatest mercy before our king.” Seven days of real obedience outweighed a lifetime of the other thing.",
    measureReason: "The parable does not name his station. He is among the citizens Charity passes on her way to the throne, and he tells her he has been “rewarded handsomely for my labor, even though it was brief.” Any placement inside Affabel is defensible here, so this case is scored on the verdict alone.",
    alsoCited: ["ezek18_27", "rev22_12"],
    lesson: "The first trap. If you sent him to Lone, ask yourself what you were actually judging: his record, or his final direction. Jalyn judges the direction."
  },

  /* 3 */ {
    id: "deceived",
    name: "Deceived",
    trade: "Homebuilder and land developer",
    hall: "justice",
    art: {
      src: wm("3/34", "Frans_Hals_023.jpg", 960),
      credit: "Frans Hals, The Laughing Cavalier, 1624"
    },
    approach: "He jokes with the others as the guards call his name. “Well guys, my number's up!” He is the most confident believer in the room, and his confidence has been keeping everyone else calm all morning.",
    intro: "He never doubted that Affabel existed. He believed in Jalyn, delighted in his promises, celebrated his allegiance publicly, and rarely missed a meeting at the school. Large portions of his life contradicted every word of it.",
    review: [
      "Believed in Jalyn sincerely and said so often and loudly. Almost never missed a school function.",
      "Sexually loose with two girls during his schooling, and promiscuous afterward. Saw no conflict with his faith.",
      "Built homes with materials below the promised grade, some of them in violation of code, after lowering prices to win buyers.",
      "Developed land he knew to be a flood plain, and persuaded a councilman friend to approve it without geological testing.",
      "Habitual slander and gossip, used to get what he wanted. Slandered his own brother.",
      "Reasoned: 'As long as I affirm my allegiance to Jalyn and do not hurt anyone too severely, I will remain in good standing.'"
    ],
    pleas: [
      "How have I denied you?",
      "But, great king, I attended your school. I was faithful to not miss classes. I even called you lord!",
      "But I had faith. I believed in you, so according to your word I should be saved!",
      "But what about this evil man, Ruthless? I was better than him! You are not being fair!"
    ],
    verdict: "lone",
    measure: "upper",
    verse: "mt7_21_23",
    options: ["mt7_21_23", "ezek18_27", "cor1_3_12_15", "mt25_21"],
    ruling: "Deceived, you are guilty of denying me, and are to be taken to the forsaken land of Lone.",
    reason: "Deceived heard the charge as a clerical error. He had faith. Jalyn's answer was that faith which never changes the life was never faith: “Those who truly believe will exhibit a changed nature.” When Deceived protested that he was better than Ruthless, Jalyn read him Ezekiel, the same passage that had acquitted the other man. The standard had not moved. Deceived had simply assumed it was pointed somewhere else.",
    measureReason: "He knew. He sat in the classes, he taught nothing but he heard everything, and he built his life against what he heard. That places him with those who knew the truth and refused it, not with Independent below.",
    alsoCited: ["ti1_16", "lk6_46", "mt7_21_23", "jas2_14_19", "ps50_16_21", "prov30_12", "mt22_13_14"],
    lesson: "Set this case beside Ruthless. Same courtroom, same morning, opposite outcomes, and the man with the better résumé lost. Deceived's problem was not that he sinned. It was that he had built a private theology in which his sin did not count."
  },

  /* 4 */ {
    id: "patient",
    name: "Patient",
    trade: "Secretary to a city council member",
    hall: "life",
    art: {
      src: wm("d/d7", "Meisje_met_de_parel.jpg", 960),
      credit: "Johannes Vermeer, Girl with a Pearl Earring, c. 1665"
    },
    approach: "She graduated a year ahead of Selfish. He barely knew her. She was quiet, reserved, and never stood out in anything.",
    intro: "A secretary. No title, no platform, no public role in the community. Selfish, who was mayor, would later blurt out to her face: 'You never did anything in Endel.'",
    review: [
      "Worked as a secretary to one of the city council members. Held no leadership role in the community.",
      "Gave cheerfully to the School of Endel, both financially and through service.",
      "Treated everyone kindly out of a pure heart of love. Generous to those in need.",
      "Resolute in her stance for truth, in a community where that cost something.",
      "Led a man named Brutal to Jalyn's service. He went on to influence more than a thousand lives.",
      "Total lives influenced for the kingdom: just over five thousand."
    ],
    pleas: [
      "Deception cannot hide within this hall.",
      "In Endel, you were concerned with both image and reputation. This trains many to speak deceptively while unaware of their folly.",
      "Here words are very important, but even weightier are our motives and intentions."
    ],
    verdict: "affabel",
    measure: "throne",
    verse: "cor2_9_10",
    options: ["cor2_9_10", "mt6_1_2", "eph2_8_9", "prov30_12"],
    ruling: "She sits on one of the thrones. She is an underruler in Affabel, and Jalyn sends her to meet Selfish before he reaches the throne.",
    reason: "Jalyn explained her five thousand by the multiplication principle. Everyone the school served was credited to her because she funded and served the school. Every life Brutal reached was credited to her because she reached Brutal. Nothing she did looked like much on the day she did it.",
    measureReason: "A throne in the Regal Center, working directly alongside the king. She is one of the seventy-eight rulers of the city.",
    alsoCited: ["cor2_9_10", "lk14_11", "mt25_21"],
    lesson: "Ask the class what they would have written on her performance review in Endel. Then ask what changed between that review and this one. Nothing about her life changed. Only the light it was read in."
  },

  /* 5 */ {
    id: "faintheart",
    name: "Faint Heart",
    trade: "Salon owner, formerly a teacher's assistant",
    hall: "justice",
    art: {
      src: wm("3/37", "Dante_Gabriel_Rossetti_-_Proserpine_-_Google_Art_Project.jpg", 960),
      credit: "Dante Gabriel Rossetti, Proserpine, 1874"
    },
    approach: "In school she was the most enthusiastic student of them all. Independent spotted her in the waiting hall and felt relief: if she was here, things would turn out fine.",
    intro: "The most passionate follower of Jalyn in her class. She spoke up constantly, earned some of the best grades, and organized the students' community work. Anyone assessing the class would have named her the most devoted.",
    review: [
      "Outstanding student. Constant volunteer work, extra study, class leadership. All of it real.",
      "A friend named Slander told the headmaster she had slept with a male student. It was an outright lie. She was innocent.",
      "She got the job anyway. She never let the offense go. She vowed to make Slander pay.",
      "Her supervising teacher, Double Life, pursued her for weeks. She resisted, then relented, and they began an affair.",
      "After four months he discarded her. She resigned, opened a salon, and stopped attending the weekly gatherings.",
      "She never repented of the affair. She held herself the victim and laid the whole weight on Slander and Double Life.",
      "In her heart she blamed Jalyn for allowing a corrupt man to teach in his school. Asked directly, she would still confess allegiance to him.",
      "She spent the rest of her days trying to get even with the people who had hurt her."
    ],
    pleas: [
      "Jalyn, did you say I am to be taken to the dreaded land of Lone?",
      "I believe in you. This was clearly shown in my life review.",
      "My heart became hardened and the love within me died, but that wasn't my fault. It was the fault of Slander and Double Life. They caused me to grow cold.",
      "But what about all the good I did?",
      "You said if I confessed you as my Savior my name would be written in the Book of Life. How could it have been erased?"
    ],
    verdict: "lone",
    measure: "upper",
    verse: "mt24_12_13",
    options: ["mt24_12_13", "ezek18_27", "cor1_3_12_15", "acts4_12"],
    ruling: "Faint Heart, you are guilty of falling away from righteousness and denying me by treason, and are to be taken to the forsaken land of Lone.",
    reason: "This is the hardest ruling in the parable, and Jalyn does not soften it. She was genuinely wronged. He does not dispute that for a moment. What he disputes is the conclusion she drew from it. “Such will be the spread of evil that many people's love will grow cold. But whoever holds out to the end will be saved. You did not endure to the end.” When she argued that no one could pluck her from his hand, he answered: “No one can pluck you out of my hand, but I never said you couldn't walk away. You alone hold that power.”",
    measureReason: "She had every advantage of knowledge. She was the best student in the class. That places her among those who knew.",
    alsoCited: ["mt24_12_13", "pt2_2_20_21", "ezek33_12_13", "rev3_5", "prov21_16", "heb10_26_27", "mt22_13_14"],
    lesson: "Handle this one carefully. Faint Heart is a victim, and the parable says so plainly. The question it presses is not whether her wound was real but what she did with it for the rest of her life. Worth asking the class: what would it have cost her to forgive Slander in that first week, and what did it cost her not to?"
  },

  /* 6 */ {
    id: "content",
    name: "Social",
    trade: "Restaurant owner",
    hall: "life",
    art: {
      src: wm("6/64", "Massysm_Quentin_%E2%80%94_The_Moneylender_and_his_Wife_%E2%80%94_1514.jpg", 960),
      credit: "Quentin Matsys, The Moneylender and His Wife, 1514"
    },
    approach: "Selfish recognized him at once. An old friend, a man whose restaurant he ate at constantly, one of the most generous citizens in Endel.",
    intro: "He owned a well-regarded restaurant. He sponsored community events, contributed money and free meals to fundraising campaigns, and gave up whole evenings of revenue to do it. Ask anyone in Endel and they would tell you he was a good man.",
    review: [
      "Ran one of the best restaurants in Endel. Sponsored numerous community events.",
      "Contributed finances and free meals to fundraising campaigns, sacrificing evenings of revenue.",
      "His own account of his motive: 'I did those things to gain recognition and acceptance. I also knew it would draw more patrons. My motive was not to bless but to insure my success.'",
      "Gave to the School of Endel, but only a small percentage of his profits. He hoarded the rest out of fear of failing, and out of a desire to live well.",
      "'The little I gave was to ease my conscience.' He gave out of guilt and compulsion rather than compassion and love.",
      "He had the time to serve at the school and did not. The load was carried by the few who did."
    ],
    pleas: [
      "If I had known in Endel what I know now, I would have lived differently.",
      "I would have focused more on pleasing the king.",
      "Anything he gives you will be a reward. None of us would have a life such as this had it not been for him."
    ],
    verdict: "affabel",
    measure: "flatlands",
    verse: "mt6_1_2",
    options: ["mt6_1_2", "mt25_34_40", "ezek18_24", "acts4_12"],
    ruling: "His name is no longer Social. Jalyn renamed him Content. He lives in the flatlands and works as a plumber. He is one of the least citizens of Affabel.",
    reason: "The deeds were real and the community benefited. But Jalyn judged what the deeds were for, and by that measure most of them had already been paid out in Endel, in the form of recognition and customers. He is in the kingdom. He is also in the back row, and he is not bitter about it: “I am in debt to his extravagant kindness for the rest of my life.”",
    measureReason: "The back rows of the Great Hall, the flatlands of the city, labor-intensive work. The least in the kingdom.",
    alsoCited: ["mt6_1_2", "lk14_12_14", "cor1_3_12_15"],
    lesson: "Hold this case until after they have judged Charity, or bring Charity back up here. Two restaurant owners. Both generous, both publicly good, both in Affabel. One is a plumber in the flatlands and one is a governor. The externals were nearly identical. Ask what actually separated them."
  },

  /* 7 */ {
    id: "humbled",
    name: "Motivator",
    trade: "Teacher at the School of Endel",
    hall: "life",
    art: {
      src: wm("d/d6", "Pieter_Bruegel_the_Elder_-_The_Parable_of_the_Blind_Leading_the_Blind_-_WGA3511.jpg", 960),
      credit: "Pieter Bruegel the Elder, The Parable of the Blind, 1568"
    },
    approach: "Selfish's favorite teacher, by a wide margin. Informative, articulate, inspiring. Students left his class feeling good about themselves, which was not always true of the others.",
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
    pleas: [
      "This is my position and place. I am one of the least of the citizens of Affabel.",
      "I failed as a teacher in so many ways. My teachings were unbalanced.",
      "Though some made it to Affabel, I yet grieve for those at Lone.",
      "Much of what we considered great there is considered least here."
    ],
    verdict: "affabel",
    measure: "flatlands",
    verse: "ezek13_10_11",
    options: ["ezek13_10_11", "mt18_6", "jn8_24", "rev3_5"],
    ruling: "His name is no longer Motivator. Jalyn renamed him Humbled. He is in the back rows, one of the least citizens of the city.",
    reason: "He is in Affabel. He believed, and the foundation held. Everything he built on top of it burned. He describes it himself: “When measured by the ancient writings, my life fell short of his expectations and I failed in the area of my influence on those I taught. I lost my reward.”",
    measureReason: "The back rows. The flatlands. He works as a plumber's neighbor in the least part of the city, and he grieves the students he lost.",
    alsoCited: ["ezek13_10_11", "cor1_3_12_15", "jas3_1"],
    lesson: "Almost everyone sends this man to Lone. Students of his are in Lone because of what he taught. Ask the class to sit in that: his failure genuinely damned other people, and he is still saved. Then hold the question until the next case."
  },

  /* 8 */ {
    id: "doublelife",
    name: "Double Life",
    trade: "Teacher at the School of Endel",
    hall: "justice",
    art: {
      src: wm("e/e6", "Caravaggio_-_Taking_of_Christ_-_Dublin.jpg", 960),
      credit: "Caravaggio, The Taking of Christ, 1602"
    },
    approach: "He is the last person called out of the Hall of Justice. He already knows the judgment will not be favorable. He faints on the way in, and the guards have to carry him to the seat.",
    intro: "One of the most gifted teachers of Jalyn in the school, and one of the best-looking men in the community. He lived one way in the classroom and another way in private. Because he was a teacher he had been privileged to see Jalyn in person.",
    review: [
      "A dynamic and knowledgeable teacher. Personally acquainted with Jalyn, a privilege given to teachers alone.",
      "Made a pass at his own assistant, Faint Heart. She refused and left. He persisted for weeks until she gave in.",
      "Carried on a four-month affair with her, then dropped her when he lost interest, lying about the reason.",
      "He was already pursuing another young woman in the community. He was known for it.",
      "Faint Heart resigned, stopped attending the gatherings, hardened, and has been sentenced to Lone.",
      "He knew and taught the ancient writings, including every passage now being read against him."
    ],
    pleas: [
      "Lord, but I was a teacher in your school. I gave my life for your cause.",
      "How was I a stumbling block?",
      "But Jalyn, I know I'm to be banned to Lone, but why am I to receive the greatest torment? Why are you so hard on me? I was one of your servants, not an unbeliever. I wasn't like Independent, who would have nothing to do with you. Why?"
    ],
    verdict: "lone",
    measure: "blackest",
    verse: "lk12_47_48",
    options: ["lk12_47_48", "ezek13_10_11", "mt24_12_13", "eph2_8_9"],
    ruling: "Double Life, you are guilty of treason, falling away from righteousness, and being a stumbling block, and are to be taken to the forsaken land of Lone, where you will receive the greatest punishment and torments.",
    reason: "He asked why his sentence was heavier than Independent's when Independent had rejected Jalyn outright. Jalyn answered from the writings Double Life himself had taught: the servant who knew his master's will and did not do it is beaten severely, while the one who did not know is beaten lightly. “Independent was far less aware of his transgressions, but you had both awareness and knowledge. His punishment, though severe, will be lighter than your own.”",
    measureReason: "Not the metal building at all. A dungeon underground near the hot sulfur rocks, unvented, hotter than anywhere else, and alone. “For you, I've reserved a place in the deepest darkness.” He will never again see light of any kind.",
    alsoCited: ["jas3_1", "mt18_6", "lk12_47_48", "jude_13", "mt22_13_14"],
    lesson: "Now go back to Motivator. Two teachers. Both harmed students. One is in the flatlands of Affabel and one is in the deepest hole in Lone. The difference is not the size of the damage. Push the class to name what it actually is."
  },

  /* 9 */ {
    id: "evangelist",
    name: "Brutal",
    trade: "Newspaper columnist",
    hall: "life",
    art: {
      src: wm("4/4d", "Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg", 960),
      credit: "Caravaggio, Saint Jerome Writing, c. 1605"
    },
    approach: "Selfish knew him and disliked him. After his conversion he was, in Selfish's judgment, far too zealous about the whole thing.",
    intro: "A convert who would not shut up about it. He wrote a column in the community newspaper and used it to call out the citizens' lack of commitment to the kingdom. People found him abrasive.",
    review: [
      "Came to Jalyn's service through Patient, the council secretary.",
      "Wrote for the community newspaper and repeatedly used his column to name the citizens' lack of commitment toward the kingdom.",
      "Rallied Endelites to phone and email council members supporting the school's expansion.",
      "Made his displeasure public when Selfish swayed the vote and denied the school its land.",
      "Widely regarded as too zealous. Selfish disliked him for it.",
      "Personally influenced more than a thousand lives for the kingdom."
    ],
    pleas: [
      "(He is still waiting in the Hall of Life when Selfish is judged. Jalyn speaks of him in his absence.)",
      "Jalyn: 'He will be renamed Evangelist because he became a great communicator of my ways.'",
      "Jalyn: 'He personally influenced over a thousand lives for the kingdom.'"
    ],
    verdict: "affabel",
    measure: "unspecified",
    verse: "mt25_21",
    options: ["mt25_21", "prov30_12", "mt6_1_2", "ti1_16"],
    ruling: "He will be renamed Evangelist. Every life he built was also credited to Patient, because she led him to Jalyn and supported the school that trained him.",
    reason: "Selfish had read him as obnoxious. Jalyn read him as a great communicator of his ways. The parable's point lands in Selfish's own reaction: “Now he felt ashamed as he realized all Brutal stood for was in line with the kingdom's advancement. How could Selfish have been so blind?”",
    measureReason: "The parable does not narrate his sentencing. He is still in the Hall of Life awaiting judgment when Selfish is called, so his verdict is certain but his station is not stated. This case is scored on the verdict alone.",
    alsoCited: ["mt25_21", "rev2_26_27", "cor2_9_10"],
    lesson: "The one nobody liked. Ask whether any student docked him for being annoying, and where in the Book that criterion appears. Then note the multiplication: his thousand lives also went onto Patient's account. Nobody's ledger is only their own."
  },

  /* 10 */ {
    id: "selfish",
    name: "Selfish",
    trade: "Mayor of Endel",
    hall: "life",
    art: {
      src: wm("0/01", "Hans_Holbein_der_J%C3%BCngere_-_Der_Kaufmann_Georg_Gisze_-_Google_Art_Project.jpg", 960),
      credit: "Hans Holbein the Younger, The Merchant Georg Gisze, 1532"
    },
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
    pleas: [
      "I deserve to be punished the rest of my life.",
      "I deserve Lone. I've wasted so much and produced so little in return for the talents and responsibilities I had.",
      "(He braces himself to hear the sentence to Lone.)"
    ],
    verdict: "affabel",
    measure: "flatlands",
    verse: "cor1_3_12_15",
    options: ["cor1_3_12_15", "mt7_21_23", "jude_13", "rev3_5"],
    ruling: "Selfish, you are my servant. You believed in me and submitted to my lordship even though you wasted so much. I love and welcome you into my kingdom for the rest of your life.",
    reason: "He watched nearly everything he had done burn, and still heard those words. Jalyn renamed him Unpretentious, gave him a home in the flatlands and work as a landscaper, and then added something he had not expected: he would train the landscapers of twenty cities on the continent of Bengilla. “All who live in this city are rulers.”",
    measureReason: "The flatlands. A landscaper. Not a ruler in the city of Affabel itself, though he assists in administering the outer realms.",
    alsoCited: ["cor1_3_12_15", "mt12_36_37", "lk14_11", "mt6_1_2"],
    lesson: "Selfish passed his own sentence before Jalyn spoke, and he got it wrong in the harsh direction. Worth asking: was he wrong about what he deserved, or only about what he would receive? The parable seems to say he was right about the first and had no idea about the second."
  },

  /* 11 */ {
    id: "charity",
    name: "Charity",
    trade: "Restaurant owner",
    hall: "life",
    art: {
      src: wm("1/10", "William-Adolphe_Bouguereau_%281825-1905%29_-_Charity_%281878%29.jpg", 960),
      credit: "William-Adolphe Bouguereau, Charity, 1878"
    },
    approach: "She is the last one left in the Hall of Life, reading alone. As she walks the aisle, the regal citizens of Affabel bow to her as she passes, and she cannot understand why.",
    intro: "She took Jalyn's laws to heart and searched out the reasoning behind each one. She received the smallest sum of the five at graduation, twenty-five thousand dollars, and gave three of it away the same week.",
    review: [
      "Gave three thousand of her twenty-five thousand to the school's land drive on graduation, before starting anything.",
      "Built a successful restaurant. Won awards, and credited Jalyn, her teachers, and her employees in every interview.",
      "Committed 25 percent of all restaurant profits to the school. Over five years she gave more than two hundred thousand dollars.",
      "Contributed food to the school's soup kitchen and regularly worked the food line herself.",
      "Helped citizens who were working hard and could not make ends meet, and told each of them where her own success came from.",
      "Never included in the socials at Selfish's home. Never asked into any leadership role. Considered too radical, and a woman.",
      "Paid for a meal for a man named Ruthless one week before Judgment Day and spent two hours telling him about Jalyn.",
      "Some of her works were burned up as well, and she grieved them. Only a small fraction of her labors was lost.",
      "Total lives influenced for the kingdom: 5,183. A little more than one sixth of Endel."
    ],
    pleas: [
      "Sir, it is I who've greatly longed for this moment.",
      "When, Lord, did I ever see you hungry and feed you, or thirsty and give you a drink?",
      "Lord, I'm not worthy to rule. I was simply a restaurant owner. There are so many who are more gifted than I.",
      "Please give me a job that just serves you or your people."
    ],
    verdict: "affabel",
    measure: "throne",
    verse: "mt25_34_40",
    options: ["mt25_34_40", "cor1_3_12_15", "mt6_1_2", "lk12_47_48"],
    ruling: "Well done. You are a trustworthy servant. You have been faithful with the little I entrusted to you, so you will be governor of ten districts and twenty cities as your reward.",
    reason: "Jalyn greeted her with Matthew 25 word for word, and she gave the same answer the righteous give in the Gospel: when did I ever see you hungry? He crowned her with the Crown of the Overcomer, renamed her Cherished Overcomer, seated her on a throne near his own, made her governor of ten districts and prime minister of the continent of Bengilla, and gave her a home on the coast of the Great Sea because he knew she loved the sound of waves.",
    measureReason: "A throne beside his. One of seventy-eight rulers of the city. She reports to no one but him.",
    alsoCited: ["mt25_34_40", "lk14_11", "rev2_26_27", "cor2_9_10", "mt25_21"],
    lesson: "End here. She had the least money, the least status, the least invitation, and she asked for a smaller job when the throne was offered. Then set her next to Social, the other restaurant owner, and let the class argue about what the actual difference was."
  }
];
