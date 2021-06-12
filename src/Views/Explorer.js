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
        "結婚・離婚":     [{
                            name: '結婚時に必要な手続きとは',
                            url: '#'
                        },{
                            name: '離婚時に必要な手続きとは',
                            url: '#'
                        },{
                            name: '市が開催/協賛している街コン',
                            url: '#'
                        },{
                            name: 'DV相談窓口',
                            url: '#'
                        },{
                            name: '婚姻届を提出する',
                            url: '#'
                        },{
                            name: '離婚届を提出する',
                            url: '#'
                        },{
                            name: '記念樹プレゼント',
                            url: '#'
                        }],
        "お悔やみ":      [{
                            name: '親族が亡くなったときは',
                            url: '#'
                        },{
                            name: '死亡届・火葬許可証を提出する',
                            url: '#'
                        },{
                            name: '年金受給停止を行う',
                            url: '#'
                        },{
                            name: '介護保険資格喪失届を提出する',
                            url: '#'
                        },{
                            name: '住民票の抹消を行う',
                            url: '#'
                        },{
                            name: '雇用保険受給資格者証の返還をする',
                            url: '#'
                        },{
                            name: '国民年金の死亡一時金請求をする',
                            url: '#'
                        },{
                            name: '葬祭費・家族葬祭費請求をする',
                            url: '#'
                        },{
                            name: '高額医療費の還付申請',
                            url: '#'
                        }],
        "仕事":         [{}],
        "介護・福祉":      [{}],
        "手続き":[{
                    name: '手続書類ダウンロード',
                    url: '#'
                },{
                    name: 'みなぎオンライン支所',
                    url: '/explorer/みなぎオンライン支所'
                }],
        "ふるさと納税":   [{
                            name: 'ふるさと納税の返礼品一覧',
                            url: '/articles/000002'
                        },{
                            name: 'ふるさと納税とは',
                            url: '#'
                        }]
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