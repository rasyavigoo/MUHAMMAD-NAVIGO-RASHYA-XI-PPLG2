import DefaultLayout from "../layouts/default";

const Schedule = () => {
  const days = ["Rabu", "Kamis"];
  const hours = ["19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00"];

  const isTrainingTime = (day: string) => {
    return day === "Rabu" || day === "Kamis";
  };

  return (
    <DefaultLayout>
      <main className="pt-4 text-black">
        <section>
          <h1 className="text-2xl font-semibold text-center py-3">Jadwal Latihan</h1>
          <div className="flex justify-center overflow-x-auto px-4 pt-5">
            <table className="table-auto w-[90%] border-collapse border border-gray-300 text-black">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Waktu</th>
                  {days.map((day) => (
                    <th key={day} className="border border-gray-300 px-4 py-2">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hours.map((hour) => (
                  <tr key={hour}>
                    <td className="border border-gray-300 px-4 py-2">{hour}</td>
                    {days.map((day) => (
                      <td key={day + hour} className="border border-gray-300 px-4 py-2">
                        {isTrainingTime(day) ? "Latihan" : "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Schedule;
