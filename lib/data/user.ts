// type StatuUser = "Active" | "Inactive";

type Role = "admin" | "user" | "vendor";

type User = {
  id: number;
  email: string;
  name: string;
  // status: StatuUser;
  role: Role;
};
export const mockUser: User[] = [
  {
    id: 1,
    email: "Ghazal@gmail.com",
    name: "Ghazal",
    // status: "Active",
    role: "admin",
  },
  {
    id: 2,
    email: "Nazi@gmail.com",
    name: "Nazi",
    // status: "Active",
    role: "vendor",
  },
  {
    id: 3,
    email: "Shaghayegh@gmail.com",
    name: "Shaghayegh",
    // status: "Active",
    role: "vendor",
  },
  {
    id: 4,
    email: "Chalos@gmail.com",
    name: "Chalos",
    // status: "Active",
    role: "user",
  },
];
