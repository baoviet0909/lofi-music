import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import {
    fullScreenICon,
    injected,
    menuIcon,
    moonIcon,
    nextControl,
    playControl,
    prevControl,
    settingmenu,
    sunIcon,
    template,
    tools,
    volumn,
} from '../../assets/icons';
import { LogoGif } from '../../assets/images/index';
import { themeAction, themeState } from '../../slices/themeSlice';
import './MainPage.scss';
function MainPage() {
    const [checkedRain, setCheckedRain] = useState(false);
    const [checkedDay, setCheckedDay] = useState(false);
    const [changeMenu, setChangeMenu] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector(themeState);

    const getVideo = (theme) => {
        var selectVideo;
        if (theme.isRain && theme.isDay) {
            selectVideo = theme.rainDayVideo;
        } else if (theme.isRain && !theme.isDay) {
            selectVideo = theme.rainNightVideo;
        } else if (!theme.isRain && theme.isDay) {
            selectVideo = theme.dayVideo;
        } else {
            selectVideo = theme.nightVideo;
        }
        return selectVideo;
    };

    const handleSwitchRainDayNight = (rain) => {
        if (rain) {
            dispatch(
                themeAction.changeThemeRain({
                    isRain: !theme.isRain,
                })
            );
            setCheckedRain(!checkedRain);
        } else {
            dispatch(
                themeAction.changeThemeDay({
                    isDay: !theme.isDay,
                })
            );
            setCheckedDay(!checkedDay);
        }
    };
    return (
        <div className="wrapper">
            <div className="header">
                <div className="header__logo">
                    <img src={LogoGif} />
                </div>
                <div className="header__control">
                    <div className="iconControl header__control-time">16:58 PM</div>
                    <div className="iconControl header__control-switch">
                        <Switch
                            uncheckedIcon={
                                <div className="iconSwitch">
                                    <img src={moonIcon} />
                                </div>
                            }
                            checkedIcon={
                                <div className="iconSwitch">
                                    <img src={sunIcon} />
                                </div>
                            }
                            checked={checkedRain}
                            onChange={() => handleSwitchRainDayNight(true)}
                            onColor={'#f3a952'}
                        />
                        <Switch
                            uncheckedIcon={
                                <div className="iconSwitch">
                                    <img src={moonIcon} />
                                </div>
                            }
                            checkedIcon={
                                <div className="iconSwitch">
                                    <img src={sunIcon} />
                                </div>
                            }
                            onChange={() => handleSwitchRainDayNight(false)}
                            checked={checkedDay}
                            onColor={'#000'}
                        />
                    </div>
                    <div className="iconControl header__control-itemControl">
                        <div>
                            <img src={prevControl} />
                        </div>
                        <div>
                            <img src={playControl} />
                        </div>
                        <div>
                            <img src={nextControl} />
                        </div>
                    </div>
                    <div className="iconControl icon__header">
                        <div>
                            <img src={volumn} />
                        </div>
                        <div>
                            <img src={fullScreenICon} />
                        </div>
                        <div>
                            <img src={menuIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="menu__item">
                    <duv className="menu__item-show">
                        <div>
                            <img src={settingmenu} />
                        </div>
                        <div>
                            <img src={template} />
                        </div>
                        <div>
                            <img src={injected} />
                        </div>
                        <div onClick={() => setChangeMenu(!changeMenu)}>
                            <img src={tools} />
                        </div>
                    </duv>
                    <div className={`menu__item-more ${changeMenu ? 'menu__item-change' : ''}`}>
                        <div>
                            <img src={settingmenu} />
                        </div>
                        <div>
                            <img src={template} />
                        </div>
                        <div>
                            <img src={injected} />
                        </div>
                        <div>
                            <img src={tools} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="background">
                <video src={getVideo(theme)} muted autoPlay loop className="background" />
            </div>
        </div>
    );
}

export default MainPage;
