import Emergency from "../Components/Emergency"
import Shortcut from "../Components/ShortcutTop"

import "./Top.css"


export default function Top (props) {
    document.title = "トップページ - 水城市役所"

    const emergencyCovid = {
        mode: "covid19",
        title: "福島県緊急事態宣言発令中！",
        msg: "不要不急の外出は控えましょう！",
        detail: ["発令期間: 5月1日から5月31日まで"]
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
                </div>
                <div className="right-content">
                    <Emergency data={emergencyWeather}/>
                </div>
            </div>
            <Shortcut />
        </div>
    )
}