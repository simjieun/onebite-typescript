// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

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
