import footerImg from './Footer.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer (props) {
    return (
        <div className="footerFixed">
            <footer>
                <div className="contentsWrapper">
                    <div className="container1">
                        <img src={footerImg} alt="こちらは、水城市役所です" className="footerImg"/>
                        <div className="container2">
                            <p className="cityName">水城市役所</p>
                            <p>所在地: 福島県水城市水城本町3番地</p>
                            <p>閉庁日: 毎週土・日曜日/祝日・休日/年末年始(12月28日〜1月3日)</p>
                            <p>業務時間: 祝日を除く月曜日から金曜日の9:00〜18:00</p>
                            <p>法人番号: 2000020073008</p>
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="container4">
                        <Link to="#" className="footerLink1">このサイトについて</Link>
                        <Link to="#" className="footerLink1">著作権・リンク</Link>
                        <Link to="#" className="footerLink1">セキュリティポリシー</Link>
                        <Link to="#" className="footerLink1">姉妹都市協定について</Link>
                        <Link to="#" className="footerLink1">情報提供方針</Link>
                        <a href="http://www.city.iwaki.lg.jp/" target="__blank" className="footerLink1">モデルにした市</a>
                    </div>
                </div>
                <div className="copyrightSection">
                    <p>copyright © Minagi City All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}