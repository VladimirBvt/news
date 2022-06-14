export const user = {
  _id: "1",
  _name: "Admin",
  _password: "12345",

  passwordValidation: function (inputPwValue) {
    return this._password === inputPwValue;
  },

  usernameValidation: function (inputUsernameValue) {
    return this._name === inputUsernameValue;
  },
};

export const news = [
  {
    id: 1,
    title: "Новость 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta\n" +
      "            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum\n" +
      "            pariatur provident sed sequi vero?",
  },
  {
    id: 2,
    title: "Новость 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta\n" +
      "            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum\n" +
      "            pariatur provident sed sequi vero?",
  },
  {
    id: 3,
    title: "Новость 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta\n" +
      "            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum\n" +
      "            pariatur provident sed sequi vero?",
  },
  {
    id: 4,
    title: "Новость 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta\n" +
      "            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum\n" +
      "            pariatur provident sed sequi vero?",
  },
  {
    id: 4,
    title: "Новость 4",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
      "            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta\n" +
      "            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum\n" +
      "            pariatur provident sed sequi vero?",
  },
];
