/**
*     Import
*     - Libreries
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
*     Import
*     - CSS
*/
import './styles/transactions.css';

/**
*     Import
*     - Helpers
*/
import { parseEmotion } from './helpers'

/**
*     Import
*     - Actions
*/
import {
  getTransactionsList,
  updateTransactionsList
} from './redux/actions'

/**
*     Import
*     - Components
*/
import Search from './components/Search'
import Transaction from './components/Transaction'

class TransactionsApp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      transactionsList: [],
      filteredText: "",
    }
  }

  componentWillMount() {
    this.props.getTransactionsList()
  }

  /**
   * Will update the searching text in the state
   * 
   * @param {string} text
   *
   * @returns null
   */
  searchTrigger = (text) => {
    this.setState({
      filteredText: text,
    })
  }

  /**
   * Will filter and sort the data with the searching
   * text provided
   * 
   * @param {string} textToFilter
   *
   * @returns {Object[]} the transactions list filtered and sorted
   */
  filterResults = (textToFilter) => {
    return this.props.transactionsList.response
      .sort(function (a, b) {
        return new Date(b.created) - new Date(a.created);
      })
      .filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(textToFilter.toLowerCase()) ||
          transaction.emotion.toLowerCase().includes(textToFilter.toLowerCase())
      )
  }

  /**
   * Will update the specified item emotion
   * 
   * @param {string} id
   * @param {string} newEmotion
   *
   * @returns null
   */
  updateTransacitionEmotion = (id, newEmotion) => {
    let newTransactionsList = Object.assign([], this.props.transactionsList.response)
    let objIndex = this.props.transactionsList.response.findIndex((obj => obj.id === id))
    newTransactionsList[objIndex].emotion = newEmotion
    this.props.updateTransactionsList(newTransactionsList)
  }

  render() {
    return (
      <div className="main">
        <div className="transactions">
          <div className="transactions__title">
            Transactions
          </div>
          <div className="transactions__content">
            <Search changeInput={(text) => this.searchTrigger(text)} />
            {this.props.transactionsList.response &&
              this.filterResults(this.state.filteredText)
                .map((transaction) => {
                  return <Transaction
                    key={transaction.id}
                    credit={parseFloat(transaction.amount.value, 10) >= 0}
                    amount={parseFloat(transaction.amount.value, 10) < 0 ?
                      transaction.amount.value.substr(1) :
                      transaction.amount.value
                    }
                    description={transaction.description}
                    emotion={parseEmotion(transaction.emotion)}
                    created={new Date(transaction.created)}
                    setNewEmotion={
                      (newEmotion) =>
                        this.updateTransacitionEmotion(transaction.id, newEmotion)
                    }
                  />

                })}
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
  getTransactionsList: () => dispatch(getTransactionsList()),
  updateTransactionsList: (data) => dispatch(updateTransactionsList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsApp);