import React, { Component } from 'react';
import { speakers as speakerImages } from '../../constants/images'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './SpeakerDetails.css';
import c from './content.json';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';

const MODAL_OPEN_CLASS = "modalOpen";

class SpeakerDetails extends Component {
    
    componentDidMount() {
        document.body.classList.add(MODAL_OPEN_CLASS);
      }
    
      componentWillUnMount() {
        document.body.classList.remove(MODAL_OPEN_CLASS);
      }
    
    constructor (props) {
        super(props)
        this.name = props.speakerName
        this.state = {
            speakers: [
                'alicia', 'jennifer', 'linda', 'caren',
                'murat', 'minko', 'sneha', 'vikram', 'rupali'
            ],
        }
      }

    render() {
        const { speakers } = this.state
        return (
        <section className={classNames('is-bold', 'is-light', 'has-text-centered')}>
            <div className={classNames('colomns')}>
                <div className={classNames('colomn', 'is-narrow', 'is-half', "is-offset-one-quarter")}>
                    <div className={'speakerDetailWrapper'}>
                        <div className={'speakerDetailPhoto'} >
                            { speakerImages[this.name]
                                ? <img alt={speakers} src={[speakerImages[this.name]]} />
                                : <img alt={speakers} src={[speakerImages['android']]} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p>{ c.speakerInfo[this.name].firstName } { c.speakerInfo[this.name].lastName }</p>
            <br/>
            <p>{ c.speakerInfo[this.name].profession } at { c.speakerInfo[this.name].employer }</p>
            <br/>
            <div className={classNames('columns')}>
                <p className={classNames('column')}>{ c.speakerInfo[this.name].bio }</p>
            </div>
            <br/>
            <div className={classNames('columns', 'is-flex-mobile', 'is-centered')}>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].twitter
                    ? <a href={ c.speakerInfo[this.name].twitter }> 
                        <div style={{ color: "#00aced"}}>
                            <Twitter size={44} />
                        </div>
                    </a>
                    : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].linkedIn
                        ? <a href={ c.speakerInfo[this.name].linkedIn }> 
                            <div style={{ color: "#007bb6"}}>
                                <LinkedIn size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].github
                        ? <a href={ c.speakerInfo[this.name].github }> 
                            <div style={{ color: "#000000"}}>
                                <Github size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].portfolio
                        ? <a href={ c.speakerInfo[this.name].portfolio }> 
                            <div style={{ color: "#CC0000"}}>
                                <LinkIcon size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
            </div>
        </section>
        );
    }
}

export default SpeakerDetails;