import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian from "react-date-object/calendars/gregorian";
type props = {
  locale: string;
  value: DateObject | null;
  onDateChange: (date: DateObject | null) => void;
};
export default function DatingPicker({ onDateChange, locale, value }: props) {
  const isPersian = locale === "fa";
  return (
    <DatePicker
      animations={[opacity(), transition({ from: 35, duration: 800 })]}
      value={value}
      locale={isPersian ? persian_fa : gregorian_en}
      calendar={isPersian ? persian : gregorian}
      highlightToday
      type="Icon"
      onChange={(date) => onDateChange(date)}
    />
  );
}
