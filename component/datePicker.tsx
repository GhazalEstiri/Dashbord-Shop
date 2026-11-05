import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
type props = {
  onDateChange: (date: DateObject | null) => void;
};
export default function DatingPicker({ onDateChange }: props) {
  return (
    <DatePicker
      animations={[opacity(), transition({ from: 35, duration: 800 })]}
      locale={persian_fa}
      calendar={persian}
      highlightToday
      type="Icon"
      onChange={(date) => onDateChange(date)}
    />
  );
}
