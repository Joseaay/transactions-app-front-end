import React, { Component } from 'react';
import { connect } from 'react-redux';
import Emotion from '../Emotion'
import '../../styles/transaction.css';
import BurgerKingIcon from '../../static/images/BurgerKing'
import PizzaHutIcon from '../../static/images/PizzaHut'
import JustEatIcon from '../../static/images/JustEat'
import DefaultIcon from '../../static/images/DefaultIcon'

class TransactionComponent extends Component {

    /**
     * Will calculate the day of the week
     *
     * @param {Date} date
     * @returns {string} the day of the week
     */
    getWeekDay = (date) => {
        var weekday = new Array(7)
        weekday[0] = "Sunday"
        weekday[1] = "Monday"
        weekday[2] = "Tuesday"
        weekday[3] = "Wednesday"
        weekday[4] = "Thursday"
        weekday[5] = "Friday"
        weekday[6] = "Saturday"

        return weekday[date.getDay()]
    }

    /**
     * Will calculate the month of the year
     *
     * @param {Date} date
     * @returns {string} the month of the year
     */
    getMonthText = (date) => {
        var month = []
        month[0] = "Jan"
        month[1] = "Feb"
        month[2] = "Mar"
        month[3] = "Apr"
        month[4] = "May"
        month[5] = "Jun"
        month[6] = "Jul"
        month[7] = "Aug"
        month[8] = "Sep"
        month[9] = "Oct"
        month[10] = "Nov"
        month[11] = "Dec"
        return month[date.getMonth()]
    }

    /**
     * Will return the correct icon for
     * a certain company
     *
     * @param {String} companyName
     * @returns {ReactDOM} React components with the company's logo
     */
    getCompanyIcon = (companyName) => {
        switch (companyName) {
            case 'Burger King':
                return <BurgerKingIcon />

            case 'Just Eat':
                return <JustEatIcon />

            case 'Pizza Hut':
                return <PizzaHutIcon />

            default:
                return <DefaultIcon />
        }
    }

    render() {
        return (
            <div className="transaction">
                <div className="transaction__title">
                    {`${this.getWeekDay(this.props.created)}, ${this.props.created.getDate()} ${this.getMonthText(this.props.created)}`}
                </div>
                <div className={`transaction__content transaction__content${
                    (this.props.credit === true) ? '--credit' : '--debit'
                    }`}>
                    <div className="icon">
                        {this.getCompanyIcon(this.props.description)}
                    </div>
                    <div className="title">
                        {this.props.description}
                    </div>
                    <Emotion
                        emotion={this.props.emotion}
                        setNewEmotion={(newEmotion) => this.props.setNewEmotion(newEmotion)}
                    />
                    <div className="amount">
                        £{this.props.amount}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionComponent);