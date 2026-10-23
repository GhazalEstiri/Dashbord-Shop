type StatuUser = "Active" | "Inactive";
type Role = "admin" | "user" | "vendor";
type User = {
  id: number;
  email: string;
  name: string;
  status: StatuUser;
  role: Role;
};
export const mockUser: User[] = [
  {
    id: 1,
    email: "Ghazal@gmail.com",
    name: "Ghazal",
    status: "Active",
    role: "admin",
  },
  {
    id: 2,
    email: "Nazi@gmail.com",
    name: "Nazi",
    status: "Active",
    role: "vendor",
  },
  {
    id: 3,
    email: "Shaghayegh@gmail.com",
    name: "Shaghayegh",
    status: "Active",
    role: "vendor",
  },
  {
    id: 4,
    email: "Chalos@gmail.com",
    name: "Chalos",
    status: "Active",
    role: "user",
  },
  {
    id: 5,
    email: "Hamid@gmail.com",
    name: "Hamid",
    status: "Active",
    role: "user",
  },
  {
    id: 6,
    email: "Mina@gmail.com",
    name: "Mina",
    status: "Active",
    role: "vendor",
  },
  {
    id: 7,
    email: "Nima@gmail.com",
    name: "Nima",
    status: "Active",
    role: "user",
  },
  {
    id: 8,
    email: "Sepideh@gmail.com",
    name: "Sepideh",
    status: "Active",
    role: "user",
  },
  {
    id: 9,
    email: "Negin@gmail.com",
    name: "Negin",
    status: "Inactive",
    role: "user",
  },
  {
    id: 10,
    email: "Saeed@gmail.com",
    name: "Saeed",
    status: "Active",
    role: "user",
  },
  {
    id: 11,
    email: "Mehdi@gmail.com",
    name: "Mehdi",
    status: "Inactive",
    role: "user",
  },
  {
    id: 12,
    email: "Darya@gmail.com",
    name: "Darya",
    status: "Active",
    role: "user",
  },
  {
    id: 13,
    email: "Rozhina@gmail.com",
    name: "Rozhina",
    status: "Active",
    role: "user",
  },
  {
    id: 14,
    email: "Maedeh@gmail.com",
    name: "Rozhina",
    status: "Inactive",
    role: "user",
  },
  {
    id: 15,
    email: "Mohammad@gmail.com",
    name: "Mohammad",
    status: "Active",
    role: "user",
  },
];
