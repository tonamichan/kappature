<template>
  <div>ここにタスクリストを出すよ～</div>
  <ul id="example-1">
    <li v-for="tasks in task" :key="task.id">{{ task.id }}: {{ task.name }}</li>
  </ul>
</template>

<script>
module.exports = {
  data() {
    return {
      tasks: [
        {
          name: "Debut",
          owner: 1,
          id: 1,
        },
        {
          name: "Search Mission",
          owner: 1,
          id: 2,
        },
        {
          name: "Checking",
          owner: 1,
          id: 3,
        },
        {
          name: "Shootout Picnic",
          owner: 1,
          id: 4,
        },
        {
          name: "Delivery from the past",
          owner: 1,
          id: 5,
        },
        {
          name: "BP Depot",
          owner: 1,
          id: 6,
        },
        {
          name: "The Bunker - Part 1",
          owner: 1,
          id: 7,
        },
        {
          name: "The Bunker - Part 2",
          owner: 1,
          id: 8,
        },
        {
          name: "Bad Rep Evidence",
          owner: 1,
          id: 9,
        },
        {
          name: "Ice Cream Cones",
          owner: 1,
          id: 10,
        },
        {
          name: "No Place for Renegades",
          owner: 1,
          id: 11,
        },
        {
          name: "Documents",
          owner: 1,
          id: 12,
        },
        {
          name: "Postman Pat - Part 1",
          owner: 1,
          id: 13,
        },
        {
          name: "You've Got Mail",
          owner: 1,
          id: 14,
        },
        {
          name: "Glory to CPSU - Part 1",
          owner: 1,
          id: 15,
        },
        {
          name: "Glory to CPSU - Part 2",
          owner: 1,
          id: 16,
        },
        {
          name: "Shaking up the Teller",
          owner: 1,
          id: 17,
        },
        {
          name: "The Punisher - Part 1",
          owner: 1,
          id: 18,
        },
        {
          name: "The Punisher - Part 2",
          owner: 1,
          id: 19,
        },
        {
          name: "The Punisher - Part 3",
          owner: 1,
          id: 20,
        },
        {
          name: "The Punisher - Part 4",
          owner: 1,
          id: 21,
        },
        {
          name: "The Punisher - Part 5",
          owner: 1,
          id: 22,
        },
        {
          name: "Kings of the Rooftops",
          owner: 1,
          id: 23,
        },
        {
          name: "Best Job in the World",
          owner: 1,
          id: 24,
        },
        {
          name: "The Punisher - Part 6",
          owner: 1,
          id: 25,
        },
        {
          name: "Green Corridor",
          owner: 1,
          id: 26,
        },
        {
          name: "Anesthesia",
          owner: 1,
          id: 27,
        },
        {
          name: "Grenadier",
          owner: 1,
          id: 28,
        },
        {
          name: "Test Drive - Part 1",
          owner: 1,
          id: 29,
        },
        {
          name: "Test Drive - Part 2",
          owner: 1,
          id: 30,
        },
        {
          name: "Test Drive - Part 3",
          owner: 1,
          id: 31,
        },
        {
          name: "Perfect Mediator",
          owner: 1,
          id: 32,
        },
        {
          name: "Polikhim Hobo",
          owner: 1,
          id: 33,
        },
        {
          name: "Regulated Materials",
          owner: 1,
          id: 34,
        },
        {
          name: "Big Customer",
          owner: 1,
          id: 35,
        },
        {
          name: "No Offence",
          owner: 1,
          id: 36,
        },
        {
          name: "Capturing Outposts",
          owner: 1,
          id: 37,
        },
        {
          name: "Intimidator",
          owner: 1,
          id: 38,
        },
        {
          name: "Escort",
          owner: 1,
          id: 39,
        },
        {
          name: "Easy Job - Part 1",
          owner: 1,
          id: 40,
        },
        {
          name: "Easy Job - Part 2",
          owner: 1,
          id: 41,
        },
        {
          name: "Our Own Land",
          owner: 1,
          id: 42,
        },
        {
          name: "Reconnaissance",
          owner: 1,
          id: 43,
        },
        {
          name: "Gendarmerie - Mall Cop",
          owner: 1,
          id: 44,
        },
        {
          name: "Gendarmerie - District Patrol",
          owner: 1,
          id: 45,
        },
        {
          name: "Shortage",
          owner: 2,
          id: 46,
        },
        {
          name: "Operation Aquarius - Part 1",
          owner: 2,
          id: 47,
        },
        {
          name: "Operation Aquarius - Part 2",
          owner: 2,
          id: 48,
        },
        {
          name: "Sanitary Standards - Part 1",
          owner: 2,
          id: 49,
        },
        {
          name: "Sanitary Standards - Part 2",
          owner: 2,
          id: 50,
        },
        {
          name: "Painkiller",
          owner: 2,
          id: 51,
        },
        {
          name: "Pharmacist",
          owner: 2,
          id: 52,
        },
        {
          name: "Population Census",
          owner: 2,
          id: 53,
        },
        {
          name: "Urban Medicine",
          owner: 2,
          id: 54,
        },
        {
          name: "Car Repair",
          owner: 2,
          id: 55,
        },
        {
          name: "Hippocratic Oath",
          owner: 2,
          id: 56,
        },
        {
          name: "Disease History",
          owner: 2,
          id: 57,
        },
        {
          name: "Supply Plans",
          owner: 2,
          id: 58,
        },
        {
          name: "Dangerous Road",
          owner: 2,
          id: 59,
        },
        {
          name: "Health Care Privacy - Part 1",
          owner: 2,
          id: 60,
        },
        {
          name: "Health Care Privacy - Part 2",
          owner: 2,
          id: 61,
        },
        {
          name: "Health Care Privacy - Part 3",
          owner: 2,
          id: 62,
        },
        {
          name: "An Apple a Day Keeps the Doctor Away",
          owner: 2,
          id: 63,
        },
        {
          name: "Health Care Privacy - Part 4",
          owner: 2,
          id: 64,
        },
        {
          name: "Athlete",
          owner: 2,
          id: 65,
        },
        {
          name: "Private Clinic",
          owner: 2,
          id: 66,
        },
        {
          name: "Health Care Privacy - Part 5",
          owner: 2,
          id: 67,
        },
        {
          name: "Decontamination Service",
          owner: 2,
          id: 68,
        },
        {
          name: "General Wares",
          owner: 2,
          id: 69,
        },
        {
          name: "Colleagues - Part 1",
          owner: 2,
          id: 70,
        },
        {
          name: "Colleagues - Part 2",
          owner: 2,
          id: 71,
        },
        {
          name: "Colleagues - Part 3",
          owner: 2,
          id: 72,
        },
        {
          name: "Postman Pat - Part 2",
          owner: 2,
          id: 73,
        },
        {
          name: "Out of Curiosity",
          owner: 2,
          id: 74,
        },
        {
          name: "Trust Regain",
          owner: 2,
          id: 75,
        },
        {
          name: "Crisis",
          owner: 2,
          id: 76,
        },
        {
          name: "Seaside Vacation",
          owner: 2,
          id: 77,
        },
        {
          name: "Lost Contact",
          owner: 2,
          id: 78,
        },
        {
          name: "Drug Trafficking",
          owner: 2,
          id: 79,
        },
        {
          name: "Pets Won't Need It",
          owner: 2,
          id: 80,
        },
        {
          name: "Ambulances Again",
          owner: 2,
          id: 81,
        },
        {
          name: "Collector",
          owner: 3,
          id: 82,
        },
        {
          name: "The Choice",
          owner: 3,
          id: 83,
        },
        {
          name: "SkierFullRes.jpg",
          owner: 4,
          id: 84,
        },
        {
          name: "Supplier",
          owner: 4,
          id: 85,
        },
        {
          name: "The Extortionist",
          owner: 4,
          id: 86,
        },
        {
          name: "Stirrup",
          owner: 4,
          id: 87,
        },
        {
          name: "What’s on the Flash Drive?",
          owner: 4,
          id: 88,
        },
        {
          name: "Golden Swag",
          owner: 4,
          id: 89,
        },
        {
          name: "Chemical - Part 1",
          owner: 4,
          id: 90,
        },
        {
          name: "Chemical - Part 2",
          owner: 4,
          id: 91,
        },
        {
          name: "Chemical - Part 3",
          owner: 4,
          id: 92,
        },
        {
          name: "Chemical - Part 4",
          owner: 4,
          id: 93,
        },
        {
          name: "Loyalty Buyout",
          owner: 4,
          id: 94,
        },
        {
          name: "Vitamins - Part 1",
          owner: 4,
          id: 95,
        },
        {
          name: "Vitamins - Part 2",
          owner: 4,
          id: 96,
        },
        {
          name: "Friend from the West - Part 1",
          owner: 4,
          id: 97,
        },
        {
          name: "Friend from the West - Part 2",
          owner: 4,
          id: 98,
        },
        {
          name: "Informed Means Armed",
          owner: 4,
          id: 99,
        },
        {
          name: "Chumming",
          owner: 4,
          id: 100,
        },
        {
          name: "Debtor",
          owner: 4,
          id: 101,
        },
        {
          name: "House Arrest - Part 1",
          owner: 4,
          id: 102,
        },
        {
          name: "House Arrest - Part 2",
          owner: 4,
          id: 103,
        },
        {
          name: "Silent Caliber",
          owner: 4,
          id: 104,
        },
        {
          name: "Bullshit",
          owner: 4,
          id: 105,
        },
        {
          name: "Setup",
          owner: 4,
          id: 106,
        },
        {
          name: "Flint",
          owner: 4,
          id: 107,
        },
        {
          name: "Lend-Lease - Part 1",
          owner: 4,
          id: 108,
        },
        {
          name: "Kind of Sabotage",
          owner: 4,
          id: 109,
        },
        {
          name: "Rigged Game",
          owner: 4,
          id: 110,
        },
        {
          name: "Safe Corridor",
          owner: 4,
          id: 111,
        },
        {
          name: "Night Sweep",
          owner: 4,
          id: 112,
        },
        {
          name: "Long Road",
          owner: 4,
          id: 113,
        },
        {
          name: "Missing Cargo",
          owner: 4,
          id: 114,
        },
        {
          name: "Top Secret",
          owner: 4,
          id: 115,
        },
        {
          name: "Beyond the Red Meat - Part 1",
          owner: 4,
          id: 116,
        },
        {
          name: "Beyond the Red Meat - Part 2",
          owner: 4,
          id: 117,
        },
        {
          name: "Fishing Gear",
          owner: 5,
          id: 118,
        },
        {
          name: "Tigr Safari",
          owner: 5,
          id: 119,
        },
        {
          name: "Scrap Metal",
          owner: 5,
          id: 120,
        },
        {
          name: "Eagle Eye",
          owner: 5,
          id: 121,
        },
        {
          name: "Humanitarian Supplies",
          owner: 5,
          id: 122,
        },
        {
          name: "The Cult - Part 1",
          owner: 5,
          id: 123,
        },
        {
          name: "The Cult - Part 2",
          owner: 5,
          id: 124,
        },
        {
          name: "Spa Tour - Part 1",
          owner: 5,
          id: 125,
        },
        {
          name: "Spa Tour - Part 2",
          owner: 5,
          id: 126,
        },
        {
          name: "Spa Tour - Part 3",
          owner: 5,
          id: 127,
        },
        {
          name: "Spa Tour - Part 4",
          owner: 5,
          id: 128,
        },
        {
          name: "Spa Tour - Part 5",
          owner: 5,
          id: 129,
        },
        {
          name: "Spa Tour - Part 6",
          owner: 5,
          id: 130,
        },
        {
          name: "Spa Tour - Part 7",
          owner: 5,
          id: 131,
        },
        {
          name: "Road Closed",
          owner: 5,
          id: 132,
        },
        {
          name: "Cargo X - Part 1",
          owner: 5,
          id: 133,
        },
        {
          name: "Cargo X - Part 2",
          owner: 5,
          id: 134,
        },
        {
          name: "Cargo X - Part 3",
          owner: 5,
          id: 135,
        },
        {
          name: "Cargo X - Part 4",
          owner: 5,
          id: 136,
        },
        {
          name: "Insomnia",
          owner: 5,
          id: 137,
        },
        {
          name: "Your Car Needs a Service",
          owner: 5,
          id: 138,
        },
        {
          name: "Wet Job - Part 1",
          owner: 5,
          id: 139,
        },
        {
          name: "Wet Job - Part 2",
          owner: 5,
          id: 140,
        },
        {
          name: "Wet Job - Part 3",
          owner: 5,
          id: 141,
        },
        {
          name: "Wet Job - Part 4",
          owner: 5,
          id: 142,
        },
        {
          name: "Wet Job - Part 5",
          owner: 5,
          id: 143,
        },
        {
          name: "Worst Job in the World",
          owner: 5,
          id: 144,
        },
        {
          name: "Mentor",
          owner: 5,
          id: 145,
        },
        {
          name: "Wet Job - Part 6",
          owner: 5,
          id: 146,
        },
        {
          name: "The Guide",
          owner: 5,
          id: 147,
        },
        {
          name: "Samples",
          owner: 5,
          id: 148,
        },
        {
          name: "TerraGroup Employee",
          owner: 5,
          id: 149,
        },
        {
          name: "Lend-Lease - Part 2",
          owner: 5,
          id: 150,
        },
        {
          name: "Peacekeeping Mission",
          owner: 5,
          id: 151,
        },
        {
          name: "Classified Technologies",
          owner: 5,
          id: 152,
        },
        {
          name: "Revision - Reserve",
          owner: 5,
          id: 153,
        },
        {
          name: "Revision - Lighthouse",
          owner: 5,
          id: 154,
        },
        {
          name: "Revision - Streets of Tarkov",
          owner: 5,
          id: 155,
        },
        {
          name: "The Cleaner",
          owner: 5,
          id: 156,
        },
        {
          name: "Special Equipment",
          owner: 5,
          id: 157,
        },
        {
          name: "Counteraction",
          owner: 5,
          id: 158,
        },
        {
          name: "Overpopulation",
          owner: 5,
          id: 159,
        },
        {
          name: "Trophies",
          owner: 5,
          id: 160,
        },
        {
          name: "Introduction",
          owner: 6,
          id: 161,
        },
        {
          name: "Gunsmith - Part 1",
          owner: 6,
          id: 162,
        },
        {
          name: "Gunsmith - Part 2",
          owner: 6,
          id: 163,
        },
        {
          name: "Gunsmith - Part 3",
          owner: 6,
          id: 164,
        },
        {
          name: "Gunsmith - Part 4",
          owner: 6,
          id: 165,
        },
        {
          name: "Gunsmith - Part 5",
          owner: 6,
          id: 166,
        },
        {
          name: "Gunsmith - Part 6",
          owner: 6,
          id: 167,
        },
        {
          name: "Gunsmith - Part 7",
          owner: 6,
          id: 168,
        },
        {
          name: "Gunsmith - Part 8",
          owner: 6,
          id: 169,
        },
        {
          name: "Gunsmith - Part 9",
          owner: 6,
          id: 170,
        },
        {
          name: "Gunsmith - Part 10",
          owner: 6,
          id: 171,
        },
        {
          name: "Gunsmith - Part 11",
          owner: 6,
          id: 172,
        },
        {
          name: "Gunsmith - Part 12",
          owner: 6,
          id: 173,
        },
        {
          name: "Gunsmith - Part 13",
          owner: 6,
          id: 174,
        },
        {
          name: "Gunsmith - Part 14",
          owner: 6,
          id: 175,
        },
        {
          name: "Gunsmith - Part 15",
          owner: 6,
          id: 176,
        },
        {
          name: "Gunsmith - Part 16",
          owner: 6,
          id: 177,
        },
        {
          name: "Gunsmith - Part 17",
          owner: 6,
          id: 178,
        },
        {
          name: "Gunsmith - Part 18",
          owner: 6,
          id: 179,
        },
        {
          name: "Gunsmith - Part 19",
          owner: 6,
          id: 180,
        },
        {
          name: "Gunsmith - Part 20",
          owner: 6,
          id: 181,
        },
        {
          name: "Gunsmith - Part 21",
          owner: 6,
          id: 182,
        },
        {
          name: "Gunsmith - Part 22",
          owner: 6,
          id: 183,
        },
        {
          name: "Gunsmith - Part 23",
          owner: 6,
          id: 184,
        },
        {
          name: "Gunsmith - Part 24",
          owner: 6,
          id: 185,
        },
        {
          name: "Signal - Part 1",
          owner: 6,
          id: 186,
        },
        {
          name: "Insider",
          owner: 6,
          id: 187,
        },
        {
          name: "Signal - Part 2",
          owner: 6,
          id: 188,
        },
        {
          name: "Scout",
          owner: 6,
          id: 189,
        },
        {
          name: "Surplus Goods",
          owner: 6,
          id: 190,
        },
        {
          name: "Back Door",
          owner: 6,
          id: 191,
        },
        {
          name: "Signal - Part 3",
          owner: 6,
          id: 192,
        },
        {
          name: "Signal - Part 4",
          owner: 6,
          id: 193,
        },
        {
          name: "Farming - Part 1",
          owner: 6,
          id: 194,
        },
        {
          name: "Farming - Part 2",
          owner: 6,
          id: 195,
        },
        {
          name: "Farming - Part 3",
          owner: 6,
          id: 196,
        },
        {
          name: "Farming - Part 4",
          owner: 6,
          id: 197,
        },
        {
          name: "Bad Habit",
          owner: 6,
          id: 198,
        },
        {
          name: "Psycho Sniper",
          owner: 6,
          id: 199,
        },
        {
          name: "A Shooter Born in Heaven",
          owner: 6,
          id: 200,
        },
        {
          name: "Fertilizers",
          owner: 6,
          id: 201,
        },
        {
          name: "Import",
          owner: 6,
          id: 202,
        },
        {
          name: "Chemistry Closet",
          owner: 6,
          id: 203,
        },
        {
          name: "Calibration",
          owner: 6,
          id: 204,
        },
        {
          name: "The Courier",
          owner: 6,
          id: 205,
        },
        {
          name: "Corporate Secrets",
          owner: 6,
          id: 206,
        },
        {
          name: "Energy Crisis",
          owner: 6,
          id: 207,
        },
        {
          name: "Broadcast - Part 1",
          owner: 6,
          id: 208,
        },
        {
          name: "Broadcast - Part 2",
          owner: 6,
          id: 209,
        },
        {
          name: "Watching You",
          owner: 6,
          id: 210,
        },
        {
          name: "Surveillance",
          owner: 6,
          id: 211,
        },
        {
          name: "Network Provider - Part 1",
          owner: 6,
          id: 212,
        },
        {
          name: "Network Provider - Part 2",
          owner: 6,
          id: 213,
        },
        {
          name: "Assessment - Part 1",
          owner: 6,
          id: 214,
        },
        {
          name: "Assessment - Part 2",
          owner: 6,
          id: 215,
        },
        {
          name: "Assessment - Part 3",
          owner: 6,
          id: 216,
        },
        {
          name: "Key to the Tower",
          owner: 6,
          id: 217,
        },
        {
          name: "Knock-Knock",
          owner: 6,
          id: 218,
        },
        {
          name: "Getting Acquainted",
          owner: 6,
          id: 219,
        },
        {
          name: "Make Amends - Buyout",
          owner: 6,
          id: 220,
        },
        {
          name: "Make Amends - Equipment",
          owner: 6,
          id: 221,
        },
        {
          name: "Make Amends - Security",
          owner: 6,
          id: 222,
        },
        {
          name: "Make Amends - Sweep Up",
          owner: 6,
          id: 223,
        },
        {
          name: "Make Amends",
          owner: 6,
          id: 224,
        },
        {
          name: "Only Business",
          owner: 7,
          id: 225,
        },
        {
          name: "Audit",
          owner: 7,
          id: 226,
        },
        {
          name: "Ballet Lover",
          owner: 7,
          id: 227,
        },
        {
          name: "Audiophile",
          owner: 7,
          id: 228,
        },
        {
          name: "Harley Forever",
          owner: 7,
          id: 229,
        },
        {
          name: "Make ULTRA Great Again",
          owner: 7,
          id: 230,
        },
        {
          name: "Big Sale",
          owner: 7,
          id: 231,
        },
        {
          name: "A Fuel Matter",
          owner: 7,
          id: 232,
        },
        {
          name: "Inventory Check",
          owner: 7,
          id: 233,
        },
        {
          name: "The Blood of War - Part 1",
          owner: 7,
          id: 234,
        },
        {
          name: "Dressed to Kill",
          owner: 7,
          id: 235,
        },
        {
          name: "Gratitude",
          owner: 7,
          id: 236,
        },
        {
          name: "Hot Delivery",
          owner: 7,
          id: 237,
        },
        {
          name: "Scavenger",
          owner: 7,
          id: 238,
        },
        {
          name: "Out of Time",
          owner: 7,
          id: 239,
        },
        {
          name: "Sales Night",
          owner: 7,
          id: 240,
        },
        {
          name: "Database - Part 1",
          owner: 7,
          id: 241,
        },
        {
          name: "Database - Part 2",
          owner: 7,
          id: 242,
        },
        {
          name: "Minibus",
          owner: 7,
          id: 243,
        },
        {
          name: "Sew it Good - Part 1",
          owner: 7,
          id: 244,
        },
        {
          name: "The Blood of War - Part 2",
          owner: 7,
          id: 245,
        },
        {
          name: "The Blood of War - Part 3",
          owner: 7,
          id: 246,
        },
        {
          name: "Living High is Not a Crime - Part 2",
          owner: 7,
          id: 247,
        },
        {
          name: "Sew it Good - Part 2",
          owner: 7,
          id: 248,
        },
        {
          name: "The Key to Success",
          owner: 7,
          id: 249,
        },
        {
          name: "No Fuss Needed",
          owner: 7,
          id: 250,
        },
        {
          name: "The Stylish One",
          owner: 7,
          id: 251,
        },
        {
          name: "Supervisor",
          owner: 7,
          id: 252,
        },
        {
          name: "Sew it Good - Part 3",
          owner: 7,
          id: 253,
        },
        {
          name: "Living High is Not a Crime - Part 1",
          owner: 7,
          id: 254,
        },
        {
          name: "Sew it Good - Part 4",
          owner: 7,
          id: 255,
        },
        {
          name: "Charisma Brings Success",
          owner: 7,
          id: 256,
        },
        {
          name: "Textile - Part 1",
          owner: 7,
          id: 257,
        },
        {
          name: "Textile - Part 2",
          owner: 7,
          id: 258,
        },
        {
          name: "Long Line",
          owner: 7,
          id: 259,
        },
        {
          name: "Booze",
          owner: 7,
          id: 260,
        },
        {
          name: "Acquaintance",
          owner: 8,
          id: 261,
        },
        {
          name: "The Survivalist Path - Unprotected but Dangerous",
          owner: 8,
          id: 262,
        },
        {
          name: "The Survivalist Path - Thrifty",
          owner: 8,
          id: 263,
        },
        {
          name: "The Delicious Sausage",
          owner: 8,
          id: 264,
        },
        {
          name: "Cease Fire!",
          owner: 8,
          id: 265,
        },
        {
          name: "The Survivalist Path - Zhivchik",
          owner: 8,
          id: 266,
        },
        {
          name: "The Survivalist Path - Wounded Beast",
          owner: 8,
          id: 267,
        },
        {
          name: "The Survivalist Path - Tough Guy",
          owner: 8,
          id: 268,
        },
        {
          name: "Courtesy Visit",
          owner: 8,
          id: 269,
        },
        {
          name: "Nostalgia",
          owner: 8,
          id: 270,
        },
        {
          name: "The Survivalist Path - Cold Blooded",
          owner: 8,
          id: 271,
        },
        {
          name: "The Survivalist Path - Junkie",
          owner: 8,
          id: 272,
        },
        {
          name: "The Survivalist Path - Eagle-Owl",
          owner: 8,
          id: 273,
        },
        {
          name: "The Survivalist Path - Combat Medic",
          owner: 8,
          id: 274,
        },
        {
          name: "Ambulance",
          owner: 8,
          id: 275,
        },
        {
          name: "The Huntsman Path - Secured Perimeter",
          owner: 8,
          id: 276,
        },
        {
          name: "Reserve",
          owner: 8,
          id: 277,
        },
        {
          name: "The Huntsman Path - Forest Cleaning",
          owner: 8,
          id: 278,
        },
        {
          name: "The Huntsman Path - Administrator",
          owner: 8,
          id: 279,
        },
        {
          name: "Slaughterhouse",
          owner: 8,
          id: 280,
        },
        {
          name: "The Huntsman Path - Controller",
          owner: 8,
          id: 281,
        },
        {
          name: "The Huntsman Path - Evil Watchman",
          owner: 8,
          id: 282,
        },
        {
          name: "Fishing Place",
          owner: 8,
          id: 283,
        },
        {
          name: "The Huntsman Path - Trophy",
          owner: 8,
          id: 284,
        },
        {
          name: "The Huntsman Path - Justice",
          owner: 8,
          id: 285,
        },
        {
          name: "The Huntsman Path - Sellout",
          owner: 8,
          id: 286,
        },
        {
          name: "The Huntsman Path - Woods Keeper",
          owner: 8,
          id: 287,
        },
        {
          name: "Hunting Trip",
          owner: 8,
          id: 288,
        },
        {
          name: "The Huntsman Path - Factory Chief",
          owner: 8,
          id: 289,
        },
        {
          name: "The Huntsman Path - Eraser - Part 1",
          owner: 8,
          id: 290,
        },
        {
          name: "The Huntsman Path - Eraser - Part 2",
          owner: 8,
          id: 291,
        },
        {
          name: "The Tarkov Shooter - Part 1",
          owner: 8,
          id: 292,
        },
        {
          name: "The Tarkov Shooter - Part 2",
          owner: 8,
          id: 293,
        },
        {
          name: "The Tarkov Shooter - Part 3",
          owner: 8,
          id: 294,
        },
        {
          name: "The Tarkov Shooter - Part 4",
          owner: 8,
          id: 295,
        },
        {
          name: "The Tarkov Shooter - Part 5",
          owner: 8,
          id: 296,
        },
        {
          name: "The Tarkov Shooter - Part 6",
          owner: 8,
          id: 297,
        },
        {
          name: "The Tarkov Shooter - Part 7",
          owner: 8,
          id: 298,
        },
        {
          name: "The Tarkov Shooter - Part 8",
          owner: 8,
          id: 299,
        },
        {
          name: "Shady Business",
          owner: 8,
          id: 300,
        },
        {
          name: "The Huntsman Path - Sadist",
          owner: 8,
          id: 301,
        },
        {
          name: "Hunter",
          owner: 8,
          id: 302,
        },
        {
          name: "Pest Control",
          owner: 8,
          id: 303,
        },
        {
          name: "Swift One",
          owner: 8,
          id: 304,
        },
        {
          name: "The Huntsman Path - Relentless",
          owner: 8,
          id: 305,
        },
        {
          name: "The Hermit",
          owner: 8,
          id: 306,
        },
        {
          name: "The Huntsman Path - Outcasts",
          owner: 8,
          id: 307,
        },
        {
          name: "Stray Dogs",
          owner: 8,
          id: 308,
        },
        {
          name: "Broadcast - Part 3",
          owner: 8,
          id: 309,
        },
        {
          name: "Broadcast - Part 4",
          owner: 8,
          id: 310,
        },
        {
          name: "Broadcast - Part 5",
          owner: 8,
          id: 311,
        },
        {
          name: "The Huntsman Path - Big Game",
          owner: 8,
          id: 312,
        },
      ],
    };
  },
};
</script>
