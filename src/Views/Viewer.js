import ReactMarkdown from 'react-markdown'
import Questions from '../Components/Questions'
import Call_at from '../Components/Call_at'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon
} from 'react-share';


import './Viewer.css'

export default function Viewer (props) {
    const initMd = 'しばらくおまちください。'
    const [markdownData, updateMarkdown] = useState(initMd)
    const [articleData, updateData] = useState({title: "取得中...", time: '取得中...'})
    const [callAddress, updateCallAddress] = useState({name: "取得中", address: null})

    const { articleId } = useParams();


    let dataList, title
    useEffect(()=> {
        // 記事情報すべてを取得
        axios.get(process.env.PUBLIC_URL + '/static/markdown/files.json').then((res) => {

            // 配列からデータ一覧を取得
            dataList = res.data[props.mode]

            let articleData
            for ( const data of dataList){
                if(data.id === articleId){
                    articleData = data
                    break
                }
            }
            console.log(articleData)
            title = articleData.title

            document.title = title + " - 水城市役所"

            updateData(articleData)

            // 記事データの取得
            axios.get(process.env.PUBLIC_URL + '/static/markdown/' + props.mode + '/' + articleData.pass).then((res) => {
                console.log(res.data)
                updateMarkdown(res.data)
            })

            // 問い合わせ先データを取得
            axios.get(process.env.PUBLIC_URL + '/static/org.json').then((res) => {
                console.log(res.data[articleData.call])
                updateCallAddress(res.data[articleData.call])
            })

        })
    }, [])

    return (
        <div>
            <div className="markdown-wrapper">
                <h1 className="title">{articleData.title}</h1>
                <div className="sharebuttons">
                    <div>
                        <LineShareButton url={[window.location.href]} title={[document.title]} style={{marginRight: 5}}>
                            <LineIcon size={32} borderRadius={10} />
                        </LineShareButton>
                        <TwitterShareButton url={[window.location.href]} title={[document.title]} style={{marginRight: 5}}>
                            <TwitterIcon size={32} borderRadius={10} />
                        </TwitterShareButton>
                        <FacebookShareButton url={[window.location.href]} quote={[document.title]} style={{marginRight: 5}}>
                            <FacebookIcon size={32} borderRadius={10} />
                        </FacebookShareButton>
                    </div>
                    <p className="updateTime">更新日時: {articleData.time}</p>
                </div>
                <ReactMarkdown
                    children={markdownData}
                    escapeHtml={false}
                />
            </div>
            <Call_at name={callAddress.name} address={callAddress.address} />
            <Questions />
        </div>
    )
}