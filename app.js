//module

const inputCodeField = document.getElementById("inputCode");
const personNameElement = document.getElementById("attendantName");
const check = document.getElementById('present')
let list = document.getElementById('list')
const list_info = document.querySelector('.list_info')

const personData = [
    {
        name: "Emmanuel Tobechukwu",
        id: "3"
    },
    { name: "Eyedoude Esther Poweide", id: "4" },
    { name: "Izundu Ebubechukwu Favour", id: "5" },
    { name: "Iribhogbe Franca Mercy", id: "6" },
    { name: "Ojeabulu Joy", id: "7" },
    { name: "Richard Aghama Okundia", id: "8" },
    { name: "Happiness Idehen", id: "9" },
    { name: "Ehiabhile Miracle Ogbemudia", id: "10" },
    { name: "Momoh Taibat Praise", id: "11" },
    { name: "Uyigue Osariemen Osahenoma", id: "12" },
    { name: "Ojealaro Happiness", id: "13" },
    { name: "Emmanson Akaehomen", id: 14 },
    { name: "Usunobun Blessing", id: "15" },
    { name: "Iyen Monica", id: "16" },
    { name: "Zion Elijah", id: "17" },
    { name: "Abraham Aruna", id: "18" },
    { name: "Success Orungbe", id: "19" },
    { name: "Ehiabhile Miracle Ogbemudia", id: "20" },
    { name: "Jennifer Ikhinmwin Ms Chubby", id: "21" },
    { name: "Nwachukwu Faith Oluchi", id: "22" },
    { name: "Idahosa Egbe Amanda", id: "23" },
    { name: "Joy Uzama", id: "24" },
    { name: "Priscilla Dennis Essien", id: "25" },
    { name: "Nosakhare Blessing", id: "26" },
    { name: "Chioma Ogbe", id: "27" },
    { name: "Unity Ekeoba", id: "28" },
    { name: "Omorotionmwan Grace Esohe", id: "29" },
    { name: "Chelsea Laju Oweh", id: "30" },
    { name: "Ehigiator Ofure Sylvia", id: "31" },
    { name: "Omoijade Patience Emuataosose", id: "32" },
    { name: "Juliet Okechukwu", id: "33" },
    { name: "Victory Omozusi", id: "34" },
    { name: "Eyah Ruth Onyeche", id: "35" },
    { name: "Gift Onyiyechi Ani", id: "36" },
    { name: "Maureen Imuse", id: "37" },
    { name: "Truth Precious Y", id: "38" },
    { name: "Udemezue Maureen Uchechukwu", id: "39" },
    { name: "Ogamune Marvelous .T.", id: "40" },
    { name: "ORHUE PRECIOUS", id: "41" },
    { name: "Okunloye Femi Rex", id: "42" },
    { name: "Ogamune Marvelous", id: "43" },
    { name: "Favour Amuele", id: "44" },
    { name: "Osahon Evbuomwan", id: "45" },
    { name: "Chinedu Moses Ojimmadu", id: "46" },
    { name: "Rukky Williams-Bowoto", id: "47" },
    { name: "Miracle Iwinosa Edorisiagbon", id: "48" },
    { name: "Anadu Ginikachukwu Divine", id: "49" },
    { name: "Emmanuel Idiata", id: "50" },
    { name: "Ogbeiwi Israel Igbinosa", id: "51" },
    { name: "Michael", id: "52" },
    { name: "Iwinosa Omodia", id: "53" },
    { name: "Agibuwa Joy", id: "54" },
    { name: "Paula Akele", id: "55" },
    { name: "Iwinosa Omodia", id: "56" },
    { name: "Moses Faith Nwankego", id: "57" },
    { name: "Isede Elizabeth", id: "58" },
    { name: "Chisom Jerome", id: "59" },
    { name: "Egbon Osagiodagbon Faith", id: "60" },
    { name: "Olanrewaju Oluwadamilare", id: "61" },
    { name: "Avbuluimen Joshua", id: "62" },
    { name: "Raymond Ehis Okosun", id: "63" },
    { name: "Okonweze Chigozirim Blessing", id: "64" },
    { name: "Charles Nehizena", id: "65" },
    { name: "Okechukwu Juliet", id: "66" },
    { name: "OSARIEMEN DESTINY", id: "67" },
    { name: "Aiyowie Emmanuel Osahon", id: "68" },
    { name: "Humphrey Uwagboe Igbinore", id: "69" },
    { name: "IKECHUKWU-FRIDAY IFEOMA", id: "70" },
    { name: "AGBA Esther Chisom", id: "71" },
    { name: "Victor John", id: "72" },
    { name: "Osadolor God'slove OMOGIATE", id: "73" },
    { name: "Aguebor Owenosa", id: "74" },
    { name: "Aguebor Owenosa", id: "75" },
    { name: "Abigail Gold Amagada", id: "76" },
    { name: "Katherine Okotie", id: "77" },
    { name: "Osarieme Uhunmwangho", id: "78" },
    { name: "Olisedeme Overcomer", id: "79" },
    { name: "Idehen Davina", id: "80" },
    { name: "ESEKHILE GODSWILL TIMOTHY", id: "81" },
    { name: "Destiny Ikpotokin", id: "82" },
    { name: "Ogbeiwi Israel Igbinosa", id: "83" },
    { name: "EREOAH Emmanuel", id: "84" },
    { name: "Omokaro Loveth", id: "85" },
    { name: "Blessing Godwin", id: "86" },
    { name: "Osunde Precious Efosa", id: "87" },
    { name: "Favour Oghenerurie Ogheneroboh", id: "88" },
    { name: "Ojoka Lysa", id: "89" },
    { name: "Otubeje Uredo-ojo Faith", id: "90" },
    { name: "EFOSA EGHENAYAMOSE ILOWARE", id: "91" },
    { name: "Ruth Abam", id: "92" },
    { name: "Miracle Micheal", id: "93" },
    { name: "Ibhafidon Mercy Ose", id: "94" },
    { name: "Precious Ukana", id: "95" },
    { name: "Uka Gift Erinma", id: "96" },
    { name: "Amanokhai Zainab", id: "97" },
    { name: "Keolise Enebeli", id: "98" },
    { name: "Shaniel Oyenmwen", id: "99" },
    { name: "Katherine Okotie", id: "100" },
    { name: "Mary Ofomeh Ademola", id: "101" },
    { name: "Ochulor ThankGod", id: "102" },
    { name: "Ewah Ebose", id: "103" },
    { name: "Anyasi Nkechiyem Osamudiamen", id: "104" },
    { name: "Victor Powei Subor", id: "105" },
    { name: "Testimony Idaghe", id: "106" },
    { name: "Caleb Abhulimen", id: "107" },
    { name: "Daniel Ose Edwin", id: "108" },
    { name: "Oledo Richman Efemena", id: "109" },
    { name: "Nelson Aiwansedo", id: "110" },
    { name: "Blessing Amawhe", id: "111" },
    { name: "Michael Imoukhuede Asije", id: "112" },
    { name: "Emmanuel E.", id: "113" },
    { name: "Jikeme Daniella", id: "114" },
    { name: "Sarah Arianegbe", id: "115" },
    { name: "Precious Aghedo", id: "116" },
    { name: "Ehiosu Peter", id: "117" },
    { name: "Christopher Onuoha", id: "118" },
    { name: "Ezinwoke Mercy Dimma", id: "119" },
    { name: "Ezinwoke Mercy Dimma", id: "120" },
    { name: "Inusa Ahmed", id: "121" },
    { name: "Barnabas Ternyor Tor", id: "122" },
    { name: "Zainab Zuberu", id: "123" },
    { name: "Fisayo Dare", id: "124" },
    { name: "Solita Ogbemudia", id: "125" },
    { name: "OKORO JOSEPH ONYEMA", id: "126" },
    { name: "Ololo Emiko", id: "127" },
    { name: "Emmanuel-Jason Oluwadunsin Ebojere", id: "128" },
    { name: "Honest Omonfuegbe", id: "129" },
    { name: "Ebube Glory Mgbemena", id: "130" },
    { name: "Idris Latifah Oshioke", id: "131" },
    { name: "Osifo Afiangbeosa Anointed", id: "132" },
    { name: "Raymond Etiosa Itua", id: "133" },
    { name: "Omamoke Umukoro", id: "134" },
    { name: "Victory Nnaji", id: "135" },
    { name: "Udemezue Maureen Uchechukwu", id: "136" },
    { name: "Uyoyou Uwuseba", id: "137" },
    { name: "Gift Sunday", id: "138" },
    { name: "Soter Happy Aghayere", id: "139" },
    { name: "Omonigho Iyomon", id: "140" },
    { name: "Mabel Aigbata", id: "141" },
    { name: "Clinton Iyen", id: "142" },
    { name: "Ezra Isi", id: "143" },
    { name: "Kosonyeme Daniella", id: "144" },
    { name: "Olukoyi Joshua Ayomide", id: "145" },
    { name: "Jed Eromosele", id: "146" },
    { name: "Precious Fatai", id: "147" },
    { name: "Muyideen Iyabo Azumi", id: "148" },
    { name: "Chidimma Martha Anichukwu", id: "149" },
    { name: "Chukwudi Favour Chinyere", id: "150" },
    { name: "Aiyemonase Oreoluwa Abidemi", id: "151" },
    { name: "Yakubu Sylvia", id: "152" },
    {
        name: "Ehizojie Glory",
        id: "153"
    },
    {
        name: "Chidima Oberta",
        id: "154"
    },
    {
        name: "Benita Ebosele",
        id: "155"
    },
    {
        name: "Richard Chukwu",
        id: "156"
    },
    {
        name: "Akemu Rex",
        id: "157"
    },
    {
        name: "Aisaboluokpia Japheth",
        id: "158"
    },
    {
        name: "Raymond Ehis Okosun",
        id: "159"
    },
    {
        name: "Tovia Omoh Williams",
        id: "160"
    },
    {
        name: "Ibe Chinyere Gift",
        id: "161"
    },
    {
        name: "Gabriel Oghor",
        id: "162"
    },
    {
        name: "Christabel Onojasike",
        id: "163"
    },
    {
        name: "Patience Onah The",
        id: "164"
    },
    {
        name: "Patience Imuse",
        id: "165"
    },
    {
        name: "Umoru Osigbemhe",
        id: "166"
    },
    {
        name: "Amanokhai Zainab",
        id: "167"
    },
    {
        name: "Faith Ebosele",
        id: "168"
    },
    {
        name: "Dela Ogbemudia",
        id: "169"
    },
    {
        name: "Mary Abure",
        id: "170"
    },
    {
        name: "Naomi Jatto",
        id: "171"
    },
    {
        name: "Igbinigie Joy",
        id: "172"
    },
    {
        name: "Glory",
        id: "173"
    },
    { name: "EBOHON Timothy Uamai", id: "174" },
    {
        name: "Eniola Omolade",
        id: "175"
    },
    {
        name: "Eniola",
        id: "176"
    },
    {
        name: "John Okey",
        id: "177"
    },
    {
        name: "Oga Timothy",
        id: "178"
    },

];


// ======view=====

function getAttendantNameByCode(id) {
    const person = personData.find((person) => person.id === id);
    Error = "❌can't find your name SORRY❌ please confirm your code or type in a code";
    if (person) {
        return person.name;
    } else {
        return Error
    }
}

/*/////////
*********
////////*/

// ======view=====

let listData;

const savedList = JSON.parse(localStorage.getItem('list'));
if (Array.isArray(savedList)) {
    listData = savedList;
} else {
    listData = [];
}

// Function to populate the list from the stored data
function populateList() {
    list.innerHTML = ''; // Clear existing list
    listData.forEach(name => {
        let namePrint = document.createElement('p');
        namePrint.innerText = name;
        list.appendChild(namePrint);
    });
}

// Call the function to populate the list initially
populateList();

// Rest of your code remains the same


/*/////////
*********
////////*/
function checkL() {


    console.log(`${personNameElement.textContent} is present `);
    console.log(`there are ${personData.length} number of persons who registered and ${listData.length} are present`);


    save_list()
    list_info.innerText = `${personData.length} persons registered and ${listData.length} is/are present`
}



//controller

inputCodeField.addEventListener("input", function () {
    const inputCode = inputCodeField.value;
    const attendantName = getAttendantNameByCode(inputCode);
    personNameElement.textContent = attendantName;

});

const addToList = (personName) => {
    let namePrint = document.createElement('p')
    namePrint.innerText = personName
    list.appendChild(namePrint)
    listData.push(namePrint.innerText)
}

check.addEventListener('click', () => {
    addToList(personNameElement.textContent)
    console.log();
    checkL()
})

function save_list() {
    console.log(listData);
    localStorage.setItem('list', JSON.stringify(listData))
    return
}