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
        const oldUser = data.authSlice;

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
      }
    } catch {
      console.error("Failed to load saved user");
    }
    // اعلام پایان بازیابی اطلاعات
    store.dispatch(setInitialized());
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ authSlice: state.auth.user }),
      );
    });

    return unsubscribe;
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
