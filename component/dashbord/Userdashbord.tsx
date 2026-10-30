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
import { useTranslations } from "next-intl";
export default function UserDashbord() {
  const t = useTranslations("UserDashbord");
  return (
    <section className=" mt-10 mb-10">
      <div className=" flex justify-between items-center px-10">
        <div className="flex flex-row items-center gap-3">
          <p className="bg-bg-secondTitle  text-title-in-circle rounded-full p-3">
            <UserRound size={40} />
          </p>
          <div>
            <p>{t("userName")}</p>
            {/* <p>عضو ویترین از مهر ۱۴۰۰</p> */}
          </div>
        </div>
        <p className="text-green-ok bg-[#2780522f] p-2 rounded-2xl">
          {t("accountActive")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-10 gap-5 px-10">
        <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2 text-text-title flex flex-col gap-3">
          <p className="text-foreground text-2xl">
            <Handbag />
          </p>
          <p>{t("myOrders")}</p>
          <p className="text-text-base font-bold text-3xl">
            {t("ordersCount")}
          </p>
          <p>{t("totalOrders")}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full md:w-1/2  text-text-title flex flex-col gap-3">
          <p className="text-foreground text-2xl">
            <Heart />
          </p>
          <p>{t("favorites")}</p>
          <p className="text-text-base font-bold text-3xl">
            {t("favoritesCount")}
          </p>
          <p>{t("savedProducts")}</p>
        </div>
      </div>
      <div className="rounded-2xl flex-col border border-white/10 bg-second-background flex py-5 mx-10 justify-between mt-5 gap-5 ">
        <div className="flex justify-between w-full flex-row px-10">
          <p> {t("latestOrder")}</p>
          <p className="text-foreground">{t("viewAll")}</p>
        </div>
        <div className=" flex justify-between items-center px-10 w-full ">
          <div className="flex flex-row items-center gap-3   w-full">
            <p className="bg-bg-secondTitle  text-title-in-circle hidden  rounded-full  p-3 md:flex mb-15">
              <Package size={40} />
            </p>
            <div className="flex flex-col gap-2 w-full">
              <p>{t("orderNumber")}</p>
              <p>{t("orderProducts")}</p>
              <p className="text-foreground">{t("shipping")}</p>
              <progress
                className="progress  [&::-webkit-progress-bar]:bg-[#272B31]
                [&::-webkit-progress-value]:bg-[#FABE2C]
                [&::-moz-progress-bar]:bg-[#FABE2C] w-full  color rounded-2xl mt-10"
                value="70"
                max="100"
              ></progress>
              <div className="flex justify-between text-text-title">
                <p>{t("orderSteps.registered")}</p>
                <p>{t("orderSteps.shipped")}</p>
                <p>{t("orderSteps.delivered")}</p>
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
          <p className="text-xl">{t("quickAccess")}</p>
          <p>
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-bg-secondTitle  text-title-in-circle rounded-full p-2">
              <UserRound />
            </p>
            <div>
              <p>{t("personalInfo")}</p>

              <p className="text-text-title">{t("personalInfoDescription")}</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-bg-secondTitle  text-title-in-circle rounded-full  p-2">
              <MapPin />
            </p>
            <div>
              <p>{t("myAddresses")}</p>
              <p className="text-text-title">{t("myAddressesDescription")}</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>{" "}
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-bg-secondTitle  text-title-in-circle rounded-full p-2">
              <CreditCard />
            </p>
            <div>
              <p>{t("payments")}</p>
              <p className="text-text-title">{t("paymentsDescription")}</p>
            </div>
          </div>
          <p className="">
            <ChevronLeft />
          </p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <p className="bg-bg-secondTitle  text-title-in-circle rounded-full  p-2">
              <Headset />
            </p>
            <div>
              <p>{t("support")}</p>
              <p className="text-text-title"> {t("supportDescription")} </p>
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
