let id = 1
let houseCleaners = [
    {
        name: "Bright-Leaf the Tidy-Druid",
        pic: "https://imgur.com/YNMMppQ.jpg",
        motto: "The mystical forces of nature will balance out these dust bunnies...",
        id: 1
    },

    {
        name: "Gunnar Grimduster",
        pic: "https://imgur.com/NQ11Qs6.jpg",
        motto: "OI! Ye cannae use me Swiffer Sweeper!!!",
        id: 2
    },

    {
        name: "Mr. Pugsley",
        pic: "https://i.imgur.com/b66nUJw.jpg",
        motto: "*Heavy breathing*",
        id: 3
    },

    {
        name: "T-Wreck Mech-Cleaner 7000",
        pic: "https://imgur.com/gaXsf4I.jpg",
        motto: "0111011011010101.....RAAAAAAAAAAWRRR!!!...MOW LAWN? EXECUTE.",
        id: 4
    },

    {
        name: "Heironymous the Bathroom Tech",
        pic: "https://imgur.com/6DYx27l.jpg",
        motto: "Hard water? Poo stains? Enough explosives will solve your problem ;)",
        id: 5
    },

    {
        name: "Amelia Witchwood",
        pic: "https://imgur.com/hlD4zpm.jpg",
        motto: "A little hazel and wormwood can clean almost anything. Almost...",
        id: 6  
    },
    {
        name: "Oldman O' the Sea",
        pic: "https://imgur.com/sCRdjeD.jpg",
        motto: "Nothin' like cleanin' barnacles off a briny bathtub!",
        id: 7
    },
    {
        name: "Lady Aurelia",
        pic: "https://imgur.com/ALweQSE.jpg",
        motto: "Fire is bright, fire is clean.", 
        id: 8
    },
    {
        name: "Barnabus the Drunk",
        pic: "https://imgur.com/oveVPcR.jpg",
        motto: "I'll *hic*...clean yer...",
        id: 9
    },
    {
        name: "Mort the Footpad",
        pic: "https://imgur.com/ddZTuD0.jpg",
        motto: "No shoes in the house please *evil laugh*",
        id: 10
    },
    {
        name: "Ostro Maysorum",
        pic: "https://imgur.com/QZfpLuU.jpg",
        motto: "I can clean anything, I'm a clever girl!",
        id: 11
    },
    {
        name: "Jessica.",
        pic: "https://imgur.com/4ZpcQM6.jpg",
        motto: "I can quit [cleaning?] any time I want.",
        id: 12
    },
    {
        name: "Tavern Troll",
        pic: "https://imgur.com/K08Mdn9.jpg",
        motto: "*Earth-shaking burps, no dialogue*...(he'll probably clean your house if you buy him alcohol)",
        id: 13
    },
    {
        name: "'Saxa' Clause",
        pic: "https://imgur.com/qO4E2yE.jpg",
        motto: "He'll polish the sh*t out of your brass and silver. Also delivers toys to children.",
        id: 14
    },
   
    {
        name: "Captain William MacDishwater",
        pic: "https://imgur.com/ycupeRF.jpg",
        motto: "I'll swab yer decks (arrr!).",
        id: 15
    },
    {
        name: "Drain-O Alien",
        pic: "https://imgur.com/78GTzpJ.jpg",
        motto: "Your pipes will be probed clean.",
        id: 16
    },
    {
        name: "Catzilla",
        pic: "https://imgur.com/AGBv9oN.jpg",
        motto: "I will clean your soul, once I've consumed it.",
        id: 17
    },
    {
        name: "Hangus Pledgehammer",
        pic: "https://imgur.com/ksiqsfv.jpg",
        motto: "Behold the power of unbridled Lemon Pledge.",
        id: 18
    },
    {
        name: "'Squeaky Clean' Carl",
        pic: "https://imgur.com/Iwq8jxO.jpg",
        motto: "I clean up all your incriminating evidence for a modest fee.",
        id: 19
    },
    {
        name: "Goretoof the Fearsome Butler",
        pic: "https://imgur.com/fSfkvzj.jpg",
        motto: "I clean yer fings again, and again, until they's storp movin' *hur hur*",
        id: 20
    }

    

];

module.exports = {
    get: function(req, res){
        res.status(200).send(houseCleaners);
    },
    search: function(req, res){
        let words = req.params.search;
        let newList = houseCleaners.filter((e, i, a)=>{
            if(e.name.includes(words)){
                return true;
            }else{
                return false;
            }
        });
        res.status(200).send(newList);
    },
    add: function(req, res){
        let {name, motto, pic} = req.body; /// Play with this 
        let newObj = {
            name: name,
            pic: pic,
            motto: motto,
            id: houseCleaners.length + 1
        }
        houseCleaners.push(newObj);
        res.status(200).send(houseCleaners)
    },
    delete: function(req, res){
        let hire = Number(req.params.id);
        let index = null;
        houseCleaners.forEach((cleaner, i) =>{
            if (cleaner.id === hire){
                index = i
            }
        })
        houseCleaners.splice(index, 1);
        res.status(200).send(houseCleaners)
    },
    update: function(req, res){
        let {id, name, pic, motto} = req.body;
        let index = null;
        houseCleaners.forEach((cleaner, i) => {
            if(cleaner.id === Number(id)){
                index = i;
            }
        })
        houseCleaners[index] = {
            name: name || houseCleaners[index].name,
            motto: motto || houseCleaners[index].motto,
            pic: pic || houseCleaners[index].pic,
            id: Number(id)
        }
        res.status(200).send(houseCleaners)
    }
}