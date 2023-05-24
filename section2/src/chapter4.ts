// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
};

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "심지은",
  nickname: "심심해",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
};

let countryNumberCodes = {
  Korea: 410,
  UnitedStates: 1,
};
