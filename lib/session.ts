import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

//محیط اجرای برنامه متغیرهایی دارد که می‌توانیم از طریق
//process.env
//به آن‌ها دسترسی پیدا کنیم.
const secretKey = process.env.SESSION_SECRET;

if (!secretKey) {
  throw new Error("SESSION_SECRET is not defined");
}

//TextEncoder
//یک API استاندارد JavaScript است
//که متن را به آرایه‌ای از بایت‌ها تبدیل می‌کند.
const encodedKey = new TextEncoder().encode(secretKey);

//چون jose برای امضای JWT به کلید در قالب بایت نیاز دارد، نه رشته متنی معمولی.

//secretKey  رشته متنی
//encodedKey  آرایه بایت موردنیاز کتابخانه جوز

type SessionPayload = {
  userId: number;
};

const COOKIE_NAME = "session";
const EXPIRATION_TIME = "7d";

//ساخت JWT
export async function encrypt(payload: SessionPayload) {
  //یک نمونه جدید از کلاس SignJWT ایجاد می‌کنیم و اطلاعات کاربر را به آن می‌دهیم.
  return (
    new SignJWT(payload)
      //این قسمت Header توکن را تنظیم می‌کند.
      //یعنی از الگوریتم HMAC-SHA256 برای امضای توکن استفاده کن.
      //این الگوریتم با یک کلید مشترک کار می‌کند؛ یعنی برای ساخت و اعتبارسنجی امضا از همان Secret استفاده می‌کنیم.
      .setProtectedHeader({ alg: "HS256" })
      //یعنی زمان صدور توکن را ثبت کن.
      //این زمان با Claim استاندارد iat داخل Payload قرار می‌گیرد.
      //iat مخفف Issued At است.

      //iat: زمان صدور
      //exp: زمان انقضا
      .setIssuedAt()
      .setExpirationTime(EXPIRATION_TIME)

      // توکن را با کلید محرمانه امضا می‌کند.
      .sign(encodedKey)
  );
}

//خروجی تابع encrypt یک رشته JWT است.
//این رشته را بعداً داخل Cookie قرار می‌دهیم.

export async function decrypt(session: string | undefined) {
  try {
    if (!session) return null;


    //این JWT را بررسی کن، امضایش را با کلید من اعتبارسنجی کن و فقط الگوریتم HS256 را قبول کن.
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    if (typeof payload.userId !== "number") return null;

    return payload as SessionPayload;
  } catch {
    return null;
  }
}

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const session = await encrypt({ userId });

  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}

export async function verifySession() {
  const cookieStore = await cookies();

  const cookie = cookieStore.get(COOKIE_NAME)?.value;

  const session = await decrypt(cookie);

  if (!session) return null;

  return session;
}
