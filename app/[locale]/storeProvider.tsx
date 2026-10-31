// "use client";
// import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { store } from "@/lib/store";
// // import { authSlice } from "@/faeture/auth/authSlice";
// import { localUser } from "@/faeture/auth/authSlice";
// const STORAGE_KEY = "user-dashbord-app";

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     try {
//       const savedUser = localStorage.getItem(STORAGE_KEY);
//       if (savedUser) {
//         const data = JSON.parse(savedUser);

//           store.dispatch(localUser(data.authSlice));

//       }
//     } catch {
//       console.error("Failed to load saved data");
//     }
//     const unsubscribe = store.subscribe(() => {
//       const state = store.getState();
//       localStorage.setItem(
//         STORAGE_KEY,
//         JSON.stringify({ authSlice: state.auth.user }),
//       );
//     });
//     return unsubscribe;
//   }, []);

//   return <Provider store={store}>{children}</Provider>;
// }

"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { localUser, setInitialized } from "@/faeture/auth/authSlice";
import { mockUser } from "@/lib/data/user";
import { restoreAdress } from "@/faeture/product/productSlice";
import { restoreComment } from "@/faeture/product/productSlice";
import { restoreProduct } from "@/faeture/product/productSlice";
const STORAGE_KEY = "user-dashbord-app";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY);

      if (savedUser) {
        const data = JSON.parse(savedUser);
        const oldUser = data.auth?.user;

        if (oldUser) {
          const currentUser = mockUser.find((item) => item.id === oldUser.id);

          if (currentUser) {
            const updatedUser = {
              ...currentUser,
              adress: {
                ...currentUser.adress,
                phoneNumber:
                  oldUser.adress?.phoneNumber ?? currentUser.adress.phoneNumber,
                postcode:
                  oldUser.adress?.postcode ?? currentUser.adress.postcode,
              },
            };

            store.dispatch(localUser(updatedUser));
          }
        }

        if (data.addAdress) {
          store.dispatch(restoreAdress(data.addAdress));
        }
        if (data.addComment) {
          store.dispatch(restoreComment(data.addComment));
        }
        if (data.productSlicing) {
          store.dispatch(restoreProduct(data.productSlicing));
        }
      }
    } catch {
      console.error("Failed to load saved user");
    }
    // اعلام پایان بازیابی اطلاعات
    store.dispatch(setInitialized());
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    });

    return unsubscribe;
  }, []);

  return <Provider store={store}>{children}</Provider>;
}

// const a = {
//   box: {
//     items: [{ n: 1 }]
//   }
// };

// const b = {
//   ...a,
//   box: {
//     ...a.box,
//     items: [...a.box.items]
//   }
// };

// const c = {
//   ...b,
//   box: {
//     ...b.box,
//     items: [{ ...b.box.items[0] }]
//   }
// };

// b.box.items[0].n = 2;
// c.box.items.push({ n: 3 });
// b.box.items = [...c.box.items];
// b.box.items[0].n = 4;

// console.log(a.box.items[0].n);
// console.log(b.box.items[0].n);
// console.log(c.box.items[0].n);
// console.log(b.box.items === c.box.items);
// console.log(b.box.items[0] === c.box.items[0]);
