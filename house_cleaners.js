let id = 1
let houseCleaners = [
    {
        name: "Bright-Leaf the Tidy-Druid",
        pic: "https://imgur.com/YNMMppQ.jpg",
        motto: "The mystical forces of nature will balance out these dust bunnies...",
        id: 0
    },

    {
        name: "Gunnar Grimduster",
        pic: "https://imgur.com/NQ11Qs6.jpg",
        motto: "OI! Ye cannae use me Swiffer Sweeper!!!",
        id: 1
    },

    {
        name: "Mr. Pugsley",
        pic: "https://i.imgur.com/b66nUJw.jpg",
        motto: "*Heavy breathing*",
        id: 2
    },

    {
        name: "Captain William MacDishwater",
        pic: "https://imgur.com/ycupeRF.jpg",
        motto: "I'll swab yer decks (arrr!).",
        id: 3
    },

    {
        name: "Heironymous the Bathroom Tech",
        pic: "https://imgur.com/6DYx27l.jpg",
        motto: "Hard water? Poo stains? Enough explosives will solve your problem ;)",
        id: 4
    },

    {
        name: "Amelia Witchwood",
        pic: "https://imgur.com/hlD4zpm.jpg",
        motto: "A little hazel and wormwood can clean almost anything. Almost...",
        id: 5  
    },
    {
        name: "Hangus Plegdelauncher",
        pic: "https://imgur.com/ksiqsfv.jpg",
        motto: "Behold the power of unbridled Lemon Pledge.",
        id: 6
    },
    {
        name: "Lady Aurelia",
        pic: "https://imgur.com/ALweQSE.jpg",
        motto: "Fire is bright, fire is clean.", 
        id: 7
    },
    {
        name: "Barnabus the Drunk",
        pic: "https://imgur.com/oveVPcR.jpg",
        motto: "I'll *hic*...clean yer...",
        id: 8
    },
    {
        name: "Mort the Footpad",
        pic: "https://imgur.com/ddZTuD0.jpg",
        motto: "No shoes in the house please *evil laugh*",
        id: 9
    },
    {
        name: "Ostro Maysorum",
        pic: "https://imgur.com/QZfpLuU.jpg",
        motto: "I can clean anything, I'm a clever girl!",
        id: 10
    },
    {
        name: "Jessica.",
        pic: "https://imgur.com/4ZpcQM6.jpg",
        motto: "I can quit [cleaning?] any time I want.",
        id: 11
    },
    {
        name: "Tavern Troll",
        pic: "https://imgur.com/K08Mdn9.jpg",
        motto: "*Earth-shaking burps, no dialogue*...(he'll probably clean your house if you buy him alcohol)",
        id: 12
    },
    {
        name: "'Saxa' Clause",
        pic: "https://imgur.com/qO4E2yE.jpg",
        motto: "He'll polish the sh*t out of your brass and silver. Also delivers toys to children.",
        id: 13
    },
    {
        name: "T-Wreck Mech-Cleaner 7000",
        pic: "https://imgur.com/gaXsf4I.jpg",
        motto: "0111011011010101.....RAAAAAAAAAAWRRR!!!...MOW LAWN? EXECUTE.",
        id: 14
    },
    {
        name: "Catzilla",
        pic: "https://imgur.com/AGBv9oN.jpg",
        motto: "I will clean your soul, once I've consumed it.",
        id: 15
    },
    {
        name: "Oldman O' the Sea",
        pic: "https://imgur.com/sCRdjeD.jpg",
        motto: "Nothin' like cleanin' barnacles off a briny bathtub!",
        id: 16
    },
    {
        name: "'Squeaky Clean' Carl",
        pic: "https://imgur.com/Iwq8jxO.jpg",
        motto: "I clean up all your incriminating evidence for a modest fee.",
        id: 17
    },
    {
        name: "Goretoof da Furious Butler",
        pic: "https://imgur.com/fSfkvzj.jpg",
        motto: "I clean yer fings again, and again, until they's storp movin' *hur hur*",
        id: 18
    }

    

];

module.exports = {
    get: function(req, res){
        res.status(200).send(houseCleaners);
    },
    search: function(req, res){
        let words = req.query.search;
        let newList = [];
        for(let i = 0; i < houseCleaners.length; i++){
            if (houseCleaners[i].name.includes(words)){
                newList.push(houseCleaners[i]);
            }
            res.status(200).send(newList);
        }
    }
}