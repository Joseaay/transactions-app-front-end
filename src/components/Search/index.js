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
import '../../styles/search.css';

/**
*     Import
*     - Images
*/
import Magnifier from '../../static/images/Magnifier'


class SearchComponent extends Component {

    render() {
        return (
            <div className="search">
                <Magnifier />
                <input
                    placeholder="Search transactions"
                    onChange={(event) => { this.props.changeInput(event.target.value) }}
                />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);