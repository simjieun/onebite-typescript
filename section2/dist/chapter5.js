// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "심지은",
    role: Role.ADMIN,
    language: Language.KOREAN,
};
const user2 = {
    name: "심지은",
    role: Role.USER,
    language: Language.ENGLISH,
};
const user3 = {
    name: "심지은",
    role: Role.GUEST,
    language: Language.KOREAN,
};
export {};
