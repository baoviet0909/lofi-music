import { LogoGif } from '../../assets/images/index';
import Switch from "react-switch";
import { useState } from 'react';
import { fullScreenICon, injected, menuIcon, moonIcon, nextControl, playControl, prevControl, settingmenu, sunIcon, template, tools, volumeMaxIcon, volumn } from '../../assets/icons';
import './MainPage.scss'
import { Button, Divider, Segmented, Tooltip } from 'antd';
import DraggebleSetting from './DraggebleSetting/DraggebleSetting';

function MainPage() {
    const [checked, setChecked] = useState(false)
    const [ changeMenu,setChangeMenu] = useState(false)
    const [ visibleSetting, setVisibleSetting] = useState(false)

    return ( 
        <div className='wrapper parent '>
            <div className='header' style={{background: '#ccc'}}>
                <div className='header__logo'>
                    <img src={LogoGif}/>
                </div>
                <div className='header__control'>
                    <div className='iconControl header__control-time'>
                        16:58 PM
                    </div>
                    <div className='iconControl header__control-switch'>
                        <Switch 
                            uncheckedIcon={
                                <div className='iconSwitch'>
                                    <img src={moonIcon}/>
                                </div>
                            }
                            checkedIcon = {
                                <div className='iconSwitch'>
                                    <img src={sunIcon}/>
                                </div>
                            }
                            onChange={() => setChecked(!checked)} 
                            checked={checked} 
                            onColor={'#f3a952'}    
                        />
                    </div>
                    <div className='iconControl header__control-itemControl'>
                        <div>
                            <img src={prevControl}/>
                        </div>
                        <div>
                            <img src={playControl}/>
                        </div>
                        <div>
                            <img src={nextControl}/>
                        </div>
                    </div>
                    <div className='iconControl icon__header'>
                        <div>
                            <img src={volumn}/>
                        </div>
                        <div>
                            <img src={fullScreenICon}/>
                        </div>
                        <div>
                            <img src={menuIcon}/>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='menu'>
                <div className='menu__item'>
                    <duv className='menu__item-show'>
                        <div onClick={() => setVisibleSetting(true)}>
                            <img src={settingmenu}/>
                        </div>
                        <div>
                            <img src={template}/>
                        </div>
                        <div>
                            <img src={injected}/>
                        </div>
                        <div onClick={() => setChangeMenu(!changeMenu)}>
                            <img src={tools}/>
                        </div>
                    </duv>
                    <div className={`menu__item-more ${changeMenu ? 'menu__item-change': ''}` }>
                        <div>
                            <img src={settingmenu}/>
                        </div>
                        <div>
                            <img src={template}/>
                        </div>
                        <div>
                            <img src={injected}/>
                        </div>
                        <div>
                            <img src={tools}/>
                        </div>
                    </div>
                </div>
               <DraggebleSetting visible={visibleSetting}/>
            </div>
        </div>
    );
}

export default MainPage;