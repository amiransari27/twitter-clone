const users = [
    {
      "_id": "5f36e43232a43084accdc477",
      "displayName": "Maricela",
      "username": "Maricela394",
      "verified": false
    },
    {
      "_id": "5f36e432aa1ef7b1ba5cca6a",
      "displayName": "Marsh",
      "username": "Marsh480",
      "verified": false
    },
    {
      "_id": "5f36e4320e61f5fcb5eca9a7",
      "displayName": "Fleming",
      "username": "Fleming186",
      "verified": false
    },
    {
      "_id": "5f36e432f9eb3feeb5332d7e",
      "displayName": "House",
      "username": "House565",
      "verified": true
    },
    {
      "_id": "5f36e43261f3d1d686b53544",
      "displayName": "Veronica",
      "username": "Veronica449",
      "verified": false
    },
    {
      "_id": "5f36e432f3ae619307e1a5f8",
      "displayName": "Rodriguez",
      "username": "Rodriguez272",
      "verified": false
    },
    {
      "_id": "5f36e4324ea0a2fad548772e",
      "displayName": "Alvarez",
      "username": "Alvarez488",
      "verified": false
    },
    {
      "_id": "5f36e43268d627be3becd35b",
      "displayName": "Vincent",
      "username": "Vincent333",
      "verified": false
    },
    {
      "_id": "5f36e432377174b33403cd78",
      "displayName": "Edwina",
      "username": "Edwina426",
      "verified": true
    },
    {
      "_id": "5f36e4323e3b9d2417356069",
      "displayName": "Schwartz",
      "username": "Schwartz464",
      "verified": true
    },
    {
      "_id": "5f36e4324817808210a38ec3",
      "displayName": "Roberta",
      "username": "Roberta432",
      "verified": false
    },
    {
      "_id": "5f36e4326884422a6f380cba",
      "displayName": "Elvira",
      "username": "Elvira853",
      "verified": false
    },
    {
      "_id": "5f36e432668d80d8e8e79741",
      "displayName": "Cecile",
      "username": "Cecile203",
      "verified": false
    },
    {
      "_id": "5f36e432be0361c8ecccbc7d",
      "displayName": "Sims",
      "username": "Sims637",
      "verified": true
    },
    {
      "_id": "5f36e432ead75be49db175c0",
      "displayName": "Haney",
      "username": "Haney356",
      "verified": false
    },
    {
      "_id": "5f36e4322097d217023ac7df",
      "displayName": "Jody",
      "username": "Jody861",
      "verified": true
    },
    {
      "_id": "5f36e43269e819a1e2ec1cfb",
      "displayName": "Rowland",
      "username": "Rowland421",
      "verified": true
    },
    {
      "_id": "5f36e43295c5d0a9ceb8fe88",
      "displayName": "Goldie",
      "username": "Goldie939",
      "verified": true
    },
    {
      "_id": "5f36e4325a70bdd1a18f06f5",
      "displayName": "Lopez",
      "username": "Lopez842",
      "verified": true
    },
    {
      "_id": "5f36e432d6d59b0e3ddbbcac",
      "displayName": "Brown",
      "username": "Brown780",
      "verified": false
    },
    {
      "_id": "5f36e4324c5b6eba89a5e2f9",
      "displayName": "Todd",
      "username": "Todd450",
      "verified": false
    },
    {
      "_id": "5f36e4324e393539da14a506",
      "displayName": "Mclaughlin",
      "username": "Mclaughlin611",
      "verified": true
    },
    {
      "_id": "5f36e432fe139139b36527c2",
      "displayName": "Hale",
      "username": "Hale984",
      "verified": true
    },
    {
      "_id": "5f36e43298d3753242ff8b15",
      "displayName": "Fitzgerald",
      "username": "Fitzgerald563",
      "verified": true
    }
  ]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const getRandomUser = () => {
    return users[getRandomInt(users.length - 1)]
}