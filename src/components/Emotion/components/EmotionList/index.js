/**
*     Import
*     - Libreries
*/
import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside'
import { Emoji } from 'emoji-mart'

/**
*     Import
*     - CSS
*/
import '../../../../styles/emotion.css';

class EmotionListComponent extends Component {

    /**
     * Will close the Emoji PopUp
     *
     * @returns null
     */
    handleClickOutside = () => {
        this.props.closePopUp()
    }

    render() {
        return (
            <div className={`emotion-list`}>
                <Emoji
                    emoji='heart_eyes'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('love')}
                />
                <Emoji
                    emoji='thumbsdown'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('hate')}
                />
                <Emoji
                    emoji='confused'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('confusion')}
                />
                <Emoji
                    emoji='disappointed'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('sadness')}
                />
                <Emoji
                    ji emoji='astonished'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('surprise')}
                />
                <Emoji
                    emoji='smile'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('joy')}
                />
                <Emoji
                    emoji='x'
                    set='emojione'
                    size={25}
                    onClick={() => this.props.clickEmotion('')}
                />

            </div>
        );
    }

}


export default onClickOutside(EmotionListComponent);