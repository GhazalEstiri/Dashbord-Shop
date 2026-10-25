type StatuUser = "Active" | "Inactive";
type Role = "admin" | "user" | "vendor";
type User = {
  id: number;
  email: string;
  name: string;
  status: StatuUser;
  role: Role;
  adress: {
    name: string;
    Path: string;
    phoneNumber: number;
    postcode: number;
  };
};
export const mockUser: User[] = [
  {
    id: 1,
    email: "Ghazal@gmail.com",
    name: "Ghazal",
    status: "Active",
    role: "admin",
    adress: {
      name: "خونه غزل",
      Path: " فرمانیه، بلوار اندرزگو، خیابان سلیمی شمالی، پلاک ۱۴۵ (باغ انجمن خوشنویسان)",
      phoneNumber: 3136548,
      postcode: 45461461,
    },
  },
  {
    id: 2,
    email: "Nazi@gmail.com",
    name: "Nazi",
    status: "Active",
    role: "vendor",
    adress: {
      name: "خونه نازی",
      Path: " خیابان نجات‌الهی، خیابان اراک، کوچه مهر، پلاک ۳",
      phoneNumber: 546146,
      postcode: 51251253,
    },
  },
  {
    id: 3,
    email: "Shaghayegh@gmail.com",
    name: "Shaghayegh",
    status: "Active",
    role: "vendor",
    adress: {
      name: " خونه شقایق",
      Path: "خیابان ولیعصر، ابتدای خیابان زعفرانیه، نبش خیابان بغدادی، داخل محوطه موزه زمان",
      phoneNumber: 54641154,
      postcode: 2536861,
    },
  },
  {
    id: 4,
    email: "Chalos@gmail.com",
    name: "Chalos",
    status: "Active",
    role: "user",
    adress: {
      name: "خونه چلوس",
      Path: "خیابان فرشته (فیاضی)، مجتمع تجاری سام سنتر، طبقه اول",
      phoneNumber: 331339565,
      postcode: 4466232,
    },
  },
  {
    id: 5,
    email: "Hamid@gmail.com",
    name: "Hamid",
    status: "Active",
    role: "user",
    adress: {
      name: "خونه حمید",
      Path: "خیابان انقلاب، خیابان نجات‌اللهی (ویلا)، خیابان فلاح‌پور، پلاک ۳۳",
      phoneNumber: 7952326,
      postcode: 56464169,
    },
  },
  {
    id: 6,
    email: "Mina@gmail.com",
    name: "Mina",
    status: "Active",
    role: "vendor",
    adress: {
      name: "خونه مینا ",
      Path: " الهیه، آفریقای شمالی، مجتمع مدرن الهیه، رویال فلور، پلاک ۴",
      phoneNumber: 4462656610,
      postcode: 236649622,
    },
  },
  {
    id: 7,
    email: "Nima@gmail.com",
    name: "Nima",
    status: "Active",
    role: "user",
    adress: {
      name: "خونه نیما",
      Path: "میدان بهارستان، خیابان دانشسرا، خیابان شریعتمدار رفیع، داخل باغ موزه نگارستان",
      phoneNumber: 4161212521,
      postcode: 15795232.3,
    },
  },
  {
    id: 8,
    email: "Sepideh@gmail.com",
    name: "Sepideh",
    status: "Active",
    role: "user",
    adress: {
      name: "خونه سپیده",
      Path: "کریمخان، حسینی، نرسیده به میدان سنائی، پلاک ۵۱",
      phoneNumber: 5342685,
      postcode: 1434965,
    },
  },
  {
    id: 9,
    email: "Negin@gmail.com",
    name: "Negin",
    status: "Inactive",
    role: "user",
    adress: {
      name: "خونه نگین",
      Path: "خیابان انقلاب، بین رازی و خارک، انتهای بن‌بست انجمن کتاب",
      phoneNumber: 41515177,
      postcode: 5454545,
    },
  },
  {
    id: 10,
    email: "Saeed@gmail.com",
    name: "Saeed",
    status: "Active",
    role: "user",
    adress: {
      name: "خونه سعید",
      Path: "خیابان ولیعصر، ابتدای خیابان زعفرانیه، نبش خیابان بغدادی، داخل محوطه موزه زمان",
      phoneNumber: 13256567,
      postcode: 44152125,
    },
  },
  // {
  //   id: 11,
  //   email: "Mehdi@gmail.com",
  //   name: "Mehdi",
  //   status: "Inactive",
  //   role: "user",
  //    adress:{
  // name:"",
  // Path: "",
  // phoneNumber: ,
  // postcode: ,
  // }
  // },
  // {
  //   id: 12,
  //   email: "Darya@gmail.com",
  //   name: "Darya",
  //   status: "Active",
  //   role: "user",
  //    adress:{
  // name:"",
  // Path: "",
  // phoneNumber: ,
  // postcode: ,
  // }
  // },
  // {
  //   id: 13,
  //   email: "Rozhina@gmail.com",
  //   name: "Rozhina",
  //   status: "Active",
  //   role: "user",
  //    adress:{
  // name:"",
  // Path: "",
  // phoneNumber: ,
  // postcode: ,
  // }
  // },
  // {
  //   id: 14,
  //   email: "Maedeh@gmail.com",
  //   name: "Rozhina",
  //   status: "Inactive",
  //   role: "user",
  //    adress:{
  // name:"",
  // Path: "",
  // phoneNumber: ,
  // postcode: ,
  // }
  // },
  // {
  //   id: 15,
  //   email: "Mohammad@gmail.com",
  //   name: "Mohammad",
  //   status: "Active",
  //   role: "user",
  //    adress:{
  // name:"",
  // Path: "",
  // phoneNumber: ,
  // postcode: ,
  // }
  // },
];
