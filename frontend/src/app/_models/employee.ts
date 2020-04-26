export interface Employee {
        "_id": String;
        "index" : Number;
        "guid": String;
        "isActive": false,
        "balance": String;
        "picture": String;
        "age": Number;
        "eyeColor": String;
        "name": Name;
        "fullName"?: String;
        "gender": String;
        "company": String;
        "email": String;
        "phone": String;
        "address": String;
        "about": String;
        "latitude": Number;
        "longitude": Number;
        "tags"?: Array<String>;
        "friends"?: Friend[],
        "greeting": String;
        "favoriteFruit": String
}
export interface Name {
    "first" : String;
    "last": String
}
export interface Friend {
    "id" : Number;
    "name": String
}