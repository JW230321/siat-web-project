import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../css/MyCalendar.css";

const MyCalendar = () => {
  
  const events = [
    {
        title: "JDBC",
        start: "2023-05-08",
        end: '2023-05-10',
        color: 'sandybrown',
        specialTitleColor: "black",
    },
    {
        title: "MyBatis",
        start: "2023-05-10",
        end: '2023-05-13',
        color: 'darkgreen',
    },
    {
      title: "MyBatis",
      start: "2023-05-15",
      end: '2023-05-16',
      color: 'darkgreen',
    },
    {
      title: "CSTS 이론",
      start: "2023-05-22",
      end: '2023-05-25',
      color: 'cornflowerblue',
      specialTitleColor: "black"
    },
    {
      title: "CSTS 실습",
      start: "2023-05-25",
      end: '2023-05-27',
      color: 'cornflowerblue',
      specialTitleColor: "black"
    },
    {
      title: "JavaORM(JPA)",
      start: "2023-05-16",
      end: '2023-05-20',
      color: 'yellowgreen',
      specialTitleColor: "black"
    },
    {
      title: "JavaORM(JPA)",
      start: "2023-05-29",
      end: '2023-06-03',
      color: 'yellowgreen',
      specialTitleColor: "black"
    },
    {
      title: "직업기초능력",
      start: "2023-06-05",
      color: 'yellow',
      specialTitleColor: "black",
    },
    {
      title: "JS ES6",
      start: "2023-06-07",
      end: '2023-06-09',
      color: 'violet',
      specialTitleColor: "black",
    },
    {
      title: "React",
      start: "2023-06-09",
      color: 'white',
      specialTitleColor: "black",
    },
    {
      title: "Servlet&JSP",
      start: "2023-06-12",
      end: '2023-06-17',
      color: 'blue',
    },
    {
      title: "React",
      start: "2023-06-19",
      end: '2023-06-24',
      color: 'white',
      specialTitleColor: "black",
    },
    {
        title: "React",
        start: "2023-06-26",
        end: '2023-06-30',
        color: 'white',
        specialTitleColor: "black",
    },
    {
        title: "노동법",
        start: "2023-06-30",
        color: 'silver',
        specialTitleColor: "black",
    },
    {
        title: "SpringBoot",
        start: "2023-07-03",
        end: '2023-07-08',
        color: 'gray',
    },
    {
      title: "SpringBoot",
      start: "2023-07-10",
      end: '2023-07-15',
      color: 'gray',
    },
    {
      title: "이력서&면접(SK)",
      start: "2023-07-17",
      color: 'peachpuff',
      specialTitleColor: "black"
    },
    {
      title: "최종Project",
      start: "2023-07-18",
      end: '2023-07-22',
      color: 'green',
    },
    {
      title: "최종Project",
      start: "2023-07-24",
      end: '2023-07-29',
      color: 'green',
    },
    {
      title: "최종Project",
      start: "2023-07-31",
      end: '2023-08-05',
      color: 'green',
    },
    {
      title: "최종Project",
      start: "2023-08-07",
      end: '2023-08-12',
      color: 'green', 
    },
    // 추가적인 이벤트 데이터들...
  ];

  const eventContent = (eventInfo) => {
    return (
      <div
        style={{
          backgroundColor: eventInfo.event.backgroundColor,
          color: eventInfo.event.extendedProps.specialTitleColor || "white", // 특정 이벤트의 제목 색상을 지정하거나, 기본값으로 검은색 지정
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {eventInfo.event.title}
      </div>
    );
  };
  return (
    <div className="container" style={{ height: "auto", marginTop: "80px" }}>
      <h1>SW개발 A반</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
      />
    </div>
  );
};

export default MyCalendar;