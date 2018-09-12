import React, {Component} from 'react';
import dateFns from 'date-fns';

class Calendar extends Component {
    state={
        currentMonth: new Date(),
        selectedDate: new Date()
    };
    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="Calendar-header">
                <div className="Calendar-title">
                    {dateFns.format(this.state.currentMonth, dateFormat)}
                </div>
            </div>
        )
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;

    }

    renderCells() {}

    onDateClick = day => {};

    nextMonth = () => {};

    prevMonth = () => {};

    render(){
        return(
            <div className="Calendar">
                {this.renderHeader()}
                {this.renderDays()}
            </div>
        );
    }
}

export default Calendar;