import { useState } from "react";

export default function Calendar({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  };

  const handleDateClick = (day) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const formattedDate = selected.toLocaleDateString("ru-RU");
    setSelectedDate(formattedDate);

    if (onDateSelect) {
      onDateSelect(formattedDate);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayIndex = getFirstDayOfMonth(currentDate);
    const days = [];

    // Добавляем дни из предыдущего месяца
    const prevMonthDays = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    for (let i = prevMonthDays - firstDayIndex + 1; i <= prevMonthDays; i++) {
      days.push(
        <div key={`prev-${i}`} className="calendar__cell _other-month">
          {i}
        </div>
      );
    }

    // Добавляем дни текущего месяца
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const cellDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      const isSelected =
        selectedDate &&
        i === new Date(selectedDate).getDate() &&
        currentDate.getMonth() === new Date(selectedDate).getMonth() &&
        currentDate.getFullYear() === new Date(selectedDate).getFullYear();

      const isWeekend = cellDate.getDay() === 0 || cellDate.getDay() === 6;

      days.push(
        <div
          key={i}
          className={`calendar__cell _cell-day ${isWeekend ? "_weekend" : ""} ${
            isToday ? "_current" : ""
          } ${isSelected ? "_active-day" : ""}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    // Добавляем дни следующего месяца
    const totalCells = 42;
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push(
        <div key={`next-${i}`} className="calendar__cell _other-month">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          <div className="nav__actions">
            <div className="nav__action" onClick={goToPreviousMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" onClick={goToNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className={`calendar__day-name ${
                  day === "сб" || day === "вс" ? "-weekend-" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="calendar__cells">{renderCalendarDays()}</div>
        </div>
        <div className="calendar__period">
          <p className="calendar__p date-end">
            {selectedDate
              ? `Выбранная дата: ${selectedDate}`
              : "Выберите срок исполнения"}
          </p>
        </div>
      </div>
    </div>
  );
}
