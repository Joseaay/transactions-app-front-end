/**
*     Import
*     - Libreries
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Emoji } from 'emoji-mart'

/**
*     Import
*     - CSS
*/
import '../../styles/emotion.css';

/**
*     Import
*     - Components
*/
import EmotionList from './components/EmotionList'

class EmotionComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showEmotionList: false,
        }
    }

    /**
     * Will close the Emoji PopUp
     *
     * @returns null
     */
    closePopUp = () => {
        this.setState({ showEmotionList: false })
    }

    /**
     * Will set the new emotion selected
     * 
     * @param {string} emotion
     *
     * @returns null
     */
    clickEmotion = (emotion) => {
        this.props.setNewEmotion(emotion)
    }

    render() {
        return (
            <div
                className={`emotion ${!this.props.emotion ? 'disabled' : ''} ${this.state.showEmotionList ? 'active' : ''}`}
                onClick={() => this.setState({ showEmotionList: !this.state.showEmotionList })}
            >
                <Emoji
                    emoji={!this.props.emotion ? 'slightly_smiling_face' : this.props.emotion}
                    set='emojione'
                    size={20}
                />
                <EmotionList
                    closePopUp={() => this.closePopUp()}
                    clickEmotion={(emotion) => this.clickEmotion(emotion)}
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

export default connect(mapStateToProps, mapDispatchToProps)(EmotionComponent);