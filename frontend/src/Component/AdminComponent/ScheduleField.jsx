import React from "react";

function ScheduleField({ fields, register, append, errors }) {
  return (
    <>
      {/* SCHEDULE SECTION */}
      <h2 className="text-sm text-gray-800 font-semibold">
        Schedule & Time Slot
        <span className="text-sm text-red-500">*</span>
      </h2>

      {fields.map((day, dayIndex) => (
        <div
          key={day.id}
          className="border border-gray-300 bg-gray-50 p-4 rounded mt-4 space-y-3"
        >
          {/* Day */}
          <select
            {...register(`availability.${dayIndex}.day`, {
              required: "Schedule day is required"
            })}
            placeholder="Monday"
            className="border border-gray-300 p-1 rounded w-96"
          >
            <option value="Monday">Select Day</option>

            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            <option value="All days">All Days</option>



          </select>

          {errors?.availability?.[dayIndex]?.day && (
            <p className="text-red-500 text-sm">
              {errors.availability[dayIndex].day.message}
            </p>
          )}

          {/* Time Slot */}
          <div className="flex gap-3">
            <input
              {...register(`availability.${dayIndex}.timeSlots.0.time`, {
                required: "Time is required"
              })}
              placeholder="10:30 AM"
              className="border border-gray-300 p-1 rounded"
            />
          </div>

          {errors?.availability?.[dayIndex]?.timeSlots?.[0]?.time && (
            <p className="text-red-500 text-sm">
              {errors.availability[dayIndex].timeSlots[0].time.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ day: "", timeSlots: [{ time: "" }] })}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Another Day
      </button>
    </>
  );
}

export default ScheduleField;
