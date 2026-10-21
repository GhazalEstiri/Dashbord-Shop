import {
  Package,
  Handbag,
  Heart,
  ChevronLeft,
  UserRound,
  MapPin,
  CreditCard,
  Headset,
} from "lucide-react";
export default function UserDashbord() {
  return (
    <section className="md:mr-80 mt-10">
      <div className=" flex justify-between items-center px-10">
        <div className="flex flex-row items-center gap-3">
          <p className="bg-[#272B31] rounded-full text-foreground p-3">
            <UserRound size={40} />
          </p>
          <div>
            <p>شقایق مقیمی</p>
            <p>عضو ویترین از مهر ۱۴۰۰</p>
          </div>
        </div>
        <p className="text-green-ok bg-[#2780522f] p-2 rounded-2xl">
          حساب فعال
        </p>
      </div>
      <div className="flex flex-row w-full mt-10 gap-5 px-10">
        <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-1/2 text-gray-400 flex flex-col gap-3">
          <p className="text-foreground text-2xl">
            <Handbag />
          </p>
          <p>سفارش های من</p>
          <p className="text-white font-bold text-3xl">۲۵</p>
          <p>مجموع سفارش ها</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-1/2  text-gray-400 flex flex-col gap-3">
          <p className="text-foreground text-2xl">
            <Heart />
          </p>
          <p>علاقه مندی ها</p>
          <p className="text-white font-bold text-3xl">۵</p>
          <p>محصول ذخیره شده</p>
        </div>
      </div>
      <div className="rounded-2xl flex-col border border-white/10 bg-second-background flex p-5 mx-10 justify-between mt-5 gap-5 ">
        <div className="flex justify-between w-full flex-row px-10">
          <p>آخرین سفارش</p>
          <p className="text-foreground">مشاهده همه </p>
        </div>
        <div className=" flex justify-between items-center px-10 w-full ">
          <div className="flex flex-row items-center gap-3   w-full">
            <p className="bg-[#272B31] rounded-full text-foreground p-3 flex mb-15">
              <Package size={40} />
            </p>
            <div className="flex flex-col gap-2 w-full">
              <p>سفارش شماره ۲۰۵۱</p>
              <p>۳ محصول : ۲,۴۵۰,۰۰۰ تومان</p>
              <p className="text-foreground">در حال ارسال</p>
              <progress
                className="progress  [&::-webkit-progress-bar]:bg-[#272B31]
                [&::-webkit-progress-value]:bg-[#FABE2C]
                [&::-moz-progress-bar]:bg-[#FABE2C] w-full  color rounded-2xl mt-10"
                value="70"
                max="100"
              ></progress>
              <div className="flex justify-between text-gray-400">
                <p>ثبت سفارش</p>
                <p>ارسال</p>
                <p>تحویل</p>
              </div>
            </div>
          </div>
          <p className="text-green-ok bg-[#2780522f] p-2 rounded-full mb-15">
            <ChevronLeft />
          </p>
        </div>
      </div>
      <div className="rounded-2xl flex-col border border-white/10 bg-second-background flex p-5 mx-10 mt-5 gap-10">
        <div className="w-full flex flex-row justify-between ">
          <p className="text-xl">دسترسی سریع</p>
          <p>
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-[#272B31] rounded-full text-foreground p-2">
              <UserRound />
            </p>
            <div>
              <p>اطلاعات شخصی</p>
              <p className="text-gray-400">نام، ایمیل و شماره تماس</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-[#272B31] rounded-full text-foreground p-2">
              <MapPin />
            </p>
            <div>
              <p> آدرس‌های من</p>
              <p className="text-gray-400">مدیریت آدرس‌های ارسال</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>{" "}
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-[#272B31] rounded-full text-foreground p-2">
              <CreditCard />
            </p>
            <div>
              <p> پرداخت‌ها</p>
              <p className="text-gray-400"> سوابق پرداخت و خرید</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-[#272B31] rounded-full text-foreground p-2">
              <Headset />
            </p>
            <div>
              <p> پشتیبانی</p>
              <p className="text-gray-400"> پیگیری درخواست‌ها</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>
      </div>
    </section>
  );
}
