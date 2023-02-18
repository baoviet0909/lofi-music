import Draggable from 'react-draggable'; // The default
import { chillIcon, jazzyIcon, sleepyIcon } from '../../../assets/icons';
import './DraggebleSetting.scss'
function DraggebleSetting({ visible }) {
    return ( 
        <div className='parent' style={{display: `${visible ? 'block' : 'none'}`}}>
            <Draggable 
                handle=".handle"
            >
                   <div className='wrapperBox handle'>
                        <div className='wrapperBox__box'>
                            <span className='wrapperBox__box-close'>-</span>
                            <div className='wrapperBox__box-select'>
                                <div className='wrapperBox__box-select-selectType'>
                                    <h5>Music</h5>
                                    <div className='wrapperBox__box-select-selectTypeSelect'>
                                        <div className='wrapperBox__box-select-selectTypeSelect-item'>
                                            <img src={sleepyIcon}/>
                                            <span>Sleepy</span>
                                        </div>
                                        <div className='wrapperBox__box-select-selectTypeSelect-item'>
                                            <img src={jazzyIcon}/>
                                            <span>Jazzy</span>
                                        </div>
                                        <div className='wrapperBox__box-select-selectTypeSelect-item'>
                                            <img src={chillIcon}/>
                                            <span>Chill</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
            </Draggable>
        </div>
     );
}

export default DraggebleSetting ;