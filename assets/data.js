/* The Judgment Seat of Affabel
   Data layer: images, Scripture (NABRE), and the eleven cases.
   Built from John Bevere, "Driven by Eternity," chapters 2, 3 and 8. */

const CDN = "https://upload.wikimedia.org/wikipedia/commons/thumb/";

/* Wikimedia only serves a fixed set of pre-rendered thumbnail widths for these
   files. 960 and 1280 are reliable; other widths 404. Where the original is
   already small enough, link the original file directly. */
function wm(path, file, width) {
  return CDN + path + "/" + file + "/" + width + "px-" + file;
}

function wmOriginal(path, file) {
  return "https://upload.wikimedia.org/wikipedia/commons/" + path + "/" + file;
}

const ART = {
  /* The title screen. Vasnetsov's Christ sits enthroned across roughly the top
     third of a square canvas, with the fires of the lower half well beneath. The
     size below zooms onto that top third and the max() keeps it covering on a
     short wide window, where a plain 300vh would leave a gap at the edges.
     Alternatives are mocked up on /hero-options.html. */
  hero: {
    src: wm("5/58", "Vasnetsov_Last_Judgment.jpg", 1280),
    credit: "Viktor Vasnetsov, The Last Judgment, 1904",
    size: "max(100vw, 300vh) max(100vw, 300vh)",
    focus: "center 5%"
  },

  /* previously on the title screen, kept as a one-line swap */
  beaune: {
    src: wm("4/4a", "Rogier_van_der_Weyden_-_The_Last_Judgment_Polyptych_-_WGA25625.jpg", 1280),
    credit: "Rogier van der Weyden, The Last Judgment (Beaune Altarpiece), c. 1450",
    size: "auto 210%",
    focus: "center 9%"
  },

  /* no longer on the title screen, kept because it is the companion panel to
     The Plains of Heaven and may be wanted again */
  wrath: {
    src: wm("5/50", "John_Martin_-_The_Great_Day_of_His_Wrath_-_Google_Art_Project.jpg", 1280),
    credit: "John Martin, The Great Day of His Wrath, 1851\u201353"
  },
  affabel: {
    src: wm("7/79", "John_Martin_-_The_Plains_of_Heaven_-_Google_Art_Project.jpg", 1280),
    credit: "John Martin, The Plains of Heaven, 1851–53"
  },
  lone: {
    src: wm("e/e1", "John_Martin_-_Sodom_and_Gomorrah.jpg", 1280),
    credit: "John Martin, The Destruction of Sodom and Gomorrah, 1852"
  },
  throne: {
    src: wmOriginal("d/d2", "Paradiso_Canto_31.jpg"),
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

  jn3_18:       { ref: "John 3:18", text: "Whoever believes in him will not be condemned, but whoever does not believe has already been condemned, because he has not believed in the name of the only Son of God." },
  jn14_21:      { ref: "John 14:21", text: "Whoever has my commandments and observes them is the one who loves me. And whoever loves me will be loved by my Father, and I will love him and reveal myself to him." },
  cor1_8_3:     { ref: "1 Corinthians 8:3", text: "But if one loves God, one is known by him." },
  ezek18_24:    { ref: "Ezekiel 18:24", text: "And if the just turn from justice and do evil, like all the abominations the wicked do, can they do this evil and still live? None of the justice they did shall be remembered, because they acted treacherously and committed these sins; because of this, they shall die." },
  jn1_1_9:      { ref: "1 John 1:9", text: "If we acknowledge our sins, he is faithful and just and will forgive our sins and cleanse us from every wrongdoing." },
  rom8_38_39:   { ref: "Romans 8:38-39", text: "For I am convinced that neither death, nor life, nor angels, nor principalities, nor present things, nor future things, nor powers, nor height, nor depth, nor any other creature will be able to separate us from the love of God in Christ Jesus our Lord." },
  lk12_45_48:   { ref: "Luke 12:45-48", text: "But if that servant says to himself, 'My master is delayed in coming,' and begins to beat the menservants and the maidservants, to eat and drink and get drunk, then that servant's master will come on an unexpected day and at an unknown hour and will punish him severely and assign him a place with the unfaithful. That servant who knew his master's will but did not make preparations nor act in accord with his will shall be beaten severely; and the servant who was ignorant of his master's will but acted in a way deserving of a severe beating shall be beaten only lightly. Much will be required of the person entrusted with much, and still more will be demanded of the person entrusted with more." },
  jude_12_13:   { ref: "Jude 12-13", text: "These are blemishes on your love feasts, as they carouse fearlessly and look after themselves. They are waterless clouds blown about by winds, fruitless trees in late autumn, twice dead and uprooted. They are like wild waves of the sea, foaming up their shameless deeds, wandering stars for whom the gloom of darkness has been reserved forever." },
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
  ezek13_10_11: { ref: "Ezekiel 13:10-11", text: "Because they led my people astray, saying, 'Peace!' when there is no peace, and when a wall is built, they cover it with whitewash, say then to the whitewashers: I will bring down a flooding rain; hailstones shall fall, and a stormwind shall break forth." },

  cor1_3_12_15: { ref: "1 Corinthians 3:12-15", text: "If anyone builds on this foundation with gold, silver, precious stones, wood, hay, or straw, the work of each will come to light, for the Day will disclose it. It will be revealed with fire, and the fire itself will test the quality of each one's work. If the work stands that someone built upon the foundation, that person will receive a wage. But if someone's work is burned up, that one will suffer loss; the person will be saved, but only as through fire." },
  mt6_1_4:      { ref: "Matthew 6:1-4", text: "Take care not to perform righteous deeds in order that people may see them; otherwise, you will have no recompense from your heavenly Father. When you give alms, do not blow a trumpet before you, as the hypocrites do in the synagogues and in the streets to win the praise of others. Amen, I say to you, they have received their reward. But when you give alms, do not let your left hand know what your right is doing, so that your almsgiving may be secret. And your Father who sees in secret will repay you." },
  lk16_10:      { ref: "Luke 16:10", text: "The person who is trustworthy in very small matters is also trustworthy in great ones; and the person who is dishonest in very small matters is also dishonest in great ones." },
  cor1_4_5:     { ref: "1 Corinthians 4:5", text: "Therefore, do not make any judgment before the appointed time, until the Lord comes, for he will bring to light what is hidden in darkness and will manifest the motives of our hearts, and then everyone will receive praise from God." },
  gal6_7_9:     { ref: "Galatians 6:7-9", text: "Make no mistake: God is not mocked, for a person will reap only what he sows, because the one who sows for his flesh will reap corruption from the flesh, but the one who sows for the spirit will reap eternal life from the spirit. Let us not grow tired of doing good, for in due time we shall reap our harvest, if we do not give up." },
  heb6_10:      { ref: "Hebrews 6:10", text: "For God is not unjust so as to overlook your work and the love you have demonstrated for his name by having served and continuing to serve the holy ones." },
  mt10_42:      { ref: "Matthew 10:42", text: "And whoever gives only a cup of cold water to one of these little ones to drink because he is a disciple\u2014amen, I say to you, he will surely not lose his reward." },
  prov16_2:     { ref: "Proverbs 16:2", text: "All one\u2019s ways are pure in one\u2019s own eyes, but the measurer of motives is the LORD." },
  sam1_16_7:    { ref: "1 Samuel 16:7", text: "But the LORD said to Samuel: Do not judge from his appearance or from his lofty stature, because I have rejected him. God does not see as a mortal, who sees the appearance. The LORD looks into the heart." },
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

