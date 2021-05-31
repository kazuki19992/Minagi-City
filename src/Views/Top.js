import Emergency from "../Components/Emergency"
import Shortcut from "../Components/ShortcutTop"
import Carousell from "../Components/Carousell"
import AboutMinagi from "../Components/TopAboutMinagi"

import picLink1 from "../Components/img/link1.png"
import picLink2 from "../Components/img/link2.png"
import picLink3 from "../Components/img/link3.png"
import picLink4 from "../Components/img/link4.png"
import picLink5 from "../Components/img/link5.png"

import { Link } from 'react-router-dom'

import "./Top.css"


export default function Top (props) {
    document.title = "トップページ - 水城市役所"

    const emergencyCovid = {
        mode: "covid19",
        title: "福島県非常事態宣言発令中！",
        msg: "不要不急の外出は控えましょう！",
        detail: ["発令期間: 5月15日から5月31日まで"]
    }
    const emergencyWeather = {
        mode: "weather",
        title: "気象警報/注意報",
        detail: ["大雨特別警報", "土砂災害警戒情報", "竜巻注意情報", "洪水警報", "雷注意報", "高潮注意報"]
    }
    return (
        <div>
            <div className="top-content">
                <div className="left-content">
                    <Emergency data={emergencyCovid}/>
                    <Emergency data={emergencyWeather}/>
                </div>
                <div className="right-content">
                    <Carousell />
                </div>
            </div>
            <div style={{marginTop: "10px"}}>
                <Shortcut />
            </div>
            <div style={{marginTop: "10px", display: "flex"}}>
                <div style={{maxWidth: '500px', width: '20%'}}>
                    <h2 className="sectionHeader">リンク集</h2>
                    <div className="topLinkBox" >
                        <Link to="#"><img src={picLink1} className="banner" /></Link>
                        <Link to="#"><img src={picLink2} className="banner" /></Link>
                        <Link to="#"><img src={picLink3} className="banner" /></Link>
                        <a href="https://fukushima-covid19.web.app/" target="__brank"><img src={picLink4} className="banner" /></a>
                        <a href="https://www.pref.fukushima.lg.jp/" target="__brank"><img src={picLink5} className="banner" /></a>
                    </div>
                </div>
                <div style={{width: '80%', marginLeft: 10}}>
                    {/* トピックス */}
                    <h2 className="sectionHeader">トピックス</h2>
                    <div className="top-newsbox">
                        <input id="top-news-latest" type="radio" name="tab_item" checked />
                        <label class="tab_item" for="top-news-latest">最新のトピックス</label>
                        <input id="top-news-pv" type="radio" name="tab_item" />
                        <label class="tab_item" for="top-news-pv">よく見られているページ</label>
                        <input id="top-news-recruit" type="radio" name="tab_item" />
                        <label class="tab_item" for="top-news-recruit">募集情報</label>

                        <div class="tab_content" id="top-news-latest_content">
                            <div class="tab_content_description">
                                <p class="c-txtsp">コンテンツはありません</p>
                            </div>
                        </div>
                        <div class="tab_content" id="top-news-pv_content">
                            <div class="tab_content_description">
                                <p class="c-txtsp">よく見られているページはありません</p>
                            </div>
                        </div>
                        <div class="tab_content" id="top-news-recruit_content">
                            <div class="tab_content_description">
                                <p class="c-txtsp">募集情報はありません</p>
                            </div>
                        </div>
                    </div>

                    {/* 水城市について */}
                    <AboutMinagi />
                </div>
            </div>
        </div>
    )
}