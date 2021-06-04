import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// import translation from '../Helpers/translation'

import "./Explorer.css"


export default function Top (props) {

    const { genre } = useParams();

    document.title = genre + " - 水城市役所"


    // これは仮のやつです
    const contents = {
        "もしもの場合":   [{
                            name: "救急",
                            url: '#'
                        },{
                            name: "消防",
                            url: '#'
                        },{
                            name: "防犯",
                            url: '#'
                        },{
                            name: "災害",
                            url: '#'
                        }],
        "引っ越し":      [{
                            name: "水城市へ転入",
                            url: '#'
                        },{
                            name: "水城市から転出",
                            url: '#'
                        },{
                            name: "水城市内の引っ越し(転居)",
                            url: '#'
                        },{
                            name: "受付時間",
                            url: '#'
                        },{
                            name: "転入・転居後の各種証明書について",
                            url: '#'
                        }],
        "ごみ・環境":         [{
                            name: "ごみカレンダー・ごみの分別",
                            url: '#'
                        },{
                            name: "環境保護・温暖化対策",
                            url: '#'
                        },{
                            name: "公害・環境測定",
                            url: '#'
                        },{
                            name: "再生可能エネルギー",
                            url: '#'
                        }],
        "相談":         [{
                            name: "各種相談窓口",
                            url: '#'
                        }],
        "みなぎオンライン支所":[{
                            name: "税金の納付をしたい",
                            url: '#'
                        },{
                            name: "マイナンバーカードに切り替えたい",
                            url: '#'
                        },{
                            name: "各種書類のうつしが欲しい",
                            url: '#'
                        },{
                            name: "住民票や戸籍に関する各種手続きをしたい",
                            url: '#'
                        },{
                            name: "各種制度の申請をしたい",
                            url: '#'
                        },{
                            name: "原付(125cc以下)のナンバー登録・変更",
                            url: '#'
                        },{
                            name: "来庁予約をとりたい",
                            url: '#'
                        }],
        "子育て支援":     [{}],
        "結婚・離婚":     [{}],
        "お悔やみ":       [{}],
        "仕事":         [{}],
        "介護・福祉":      [{}]
    }

    const contentsLink = []
    if(!Object.keys(contents[genre][0]).length){
        contentsLink.push(<p style={{fontWeight: 'bold', fontSize: '15px', marginTop: '5em'}}>コンテンツはありません</p>)
    }else{
        for(const data of contents[genre]){
            contentsLink.push(<Link to={data.url} className="contents-btn">{data.name}</Link>)
        }
    }


    useEffect(() => {
    }, [])

    return (
        <div>
            <h1 className="sectionHeader">{genre}</h1>
            <p style={{textAlign: 'center'}}>下から項目を選択してください</p>
            <div className="btn-box">
                {contentsLink}
            </div>
        </div>
    )
}