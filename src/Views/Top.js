import Emergency from "../Components/Emergency"
import Shortcut from "../Components/ShortcutTop"
import Carousell from "../Components/Carousell"
import AboutMinagi from "../Components/TopAboutMinagi"

import picLink1 from "../Components/img/link1.png"
import picLink2 from "../Components/img/link2.png"
import picLink3 from "../Components/img/link3.png"
import picLink4 from "../Components/img/link4.png"
import picLink5 from "../Components/img/link5.png"

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import "./Top.css"


export default function Top (props) {
    document.title = "トップページ - 水城市役所"

    const emergencyCovid = {
        mode: "covid19",
        title: "福島県新型コロナウイルス感染症重点対策",
        msg: "感染の再拡大を防止するため、以下の重点的な対策を行います。",
        detail: ["1. 一人ひとり基本的な感染対策を徹底しましょう。", "2. 感染リスクの高い行動は控えましょう。", "対象期間: 6月01日(火) ～ 6月30日(水)"]
    }
    const [ emergencyWeather, updateWeather ] = useState({mode: "weather", title: "気象警報/注意報", detail: ['しばらくお待ちください...']})

    // 気象警報/注意報を取得する
    const url = '/weather-api/'

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log('取得成功')

            const data = res.data
            console.log(data)

            // データ取得
            const warningArray = []
            for(const [key, value] of Object.entries(data)){
                if(value === 1){
                    if(key.slice(-4) === '特別警報'){
                        warningArray.unshift(key)
                    }else{
                        warningArray.push(key)
                    }
                }
            }

            const obj = {
                mode: "weather",
                title: "気象警報/注意報",
                detail: warningArray
            }

            updateWeather(obj)
        })
    }, [])

    return (
        <div>
            <div className="top-content">
                <div className="left-content">
                    <Emergency data={emergencyCovid} Link={true} href="https://www.pref.fukushima.lg.jp/uploaded/library/jutentaisaku.pdf"/>
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