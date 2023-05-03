import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS_OF_YEAR = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  };

  const renderDaysOfWeek = () => {
    return DAYS_OF_WEEK.map((day) => (
      <Col key={day} className="text-center font-weight-bold">
        {day}
      </Col>
    ));
  };

  const renderDaysOfMonth = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth();
    const firstDay = firstDayOfMonth();

    for (let i = 0; i < firstDay; i++) {
      days.push(<Col key={`empty-${i}`}></Col>);
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push(<Col key={`day-${i}`} className="text-center">{i}</Col>);
    }

    return days;
  };

  const renderMonthAndYear = () => {
    return (
      <Row className="my-4">
        <Col>
          <Button variant="light" onClick={prevMonth}>&lt;</Button>
        </Col>
        <Col xs={8} className="text-center">
          {MONTHS_OF_YEAR[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Col>
        <Col className="text-right">
          <Button variant="light" onClick={nextMonth}>&gt;</Button>
        </Col>
      </Row>
    );
  };

  return (
    <Container>
      {renderMonthAndYear()}
      <Row>
        {renderDaysOfWeek()}
      </Row>
      <Row>
        {renderDaysOfMonth()}
      </Row>
    </Container>
  );
}

export default App;
