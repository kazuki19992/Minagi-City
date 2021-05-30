import './ShortcutTop.css'
import { Link } from 'react-router-dom'
import TombIcom from './tomb.svg'
import Wedding from './wedding.svg'

export default function ShortcutTop (props) {
    return (
        <div className="shortcutBox">
            <p className="shortcutBoxTitle">テーマから探す</p>
            <div className="shortcutBtnBox">

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-house-damage fa-3x fa-fw"></i><br />
                        <p>もしものときは?</p>
                        <p className="subtitle">(災害, 救急, 防犯)</p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-house-user fa-3x fa-fw"></i><br />
                        <p>引っ越ししたい</p>
                        <p className="subtitle">(転出・転入)</p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-trash-alt fa-3x fa-fw"></i><br />
                        <p>
                            ゴミについて知りたい
                        </p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-comments fa-3x fa-fw"></i><br />
                        <p>
                            相談・なやみごと
                        </p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-laptop-house fa-3x fa-fw"></i><br />
                        <p>
                            みなぎオンライン支所
                        </p>
                        <p className="subtitle">(各種手続きをネットで行う)</p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-baby fa-3x fa-fw"></i><br />
                        <p>
                            子育て支援
                        </p>
                        <p className="subtitle">(妊娠・出産・育児・学校)</p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <img src={Wedding} height="50px"/><br />
                        <p>
                            結婚・離婚
                        </p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <img src={TombIcom} height="50px"/><br />
                        <p>
                            お悔やみ
                        </p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-briefcase fa-3x fa-fw"></i><br />
                        <p>
                            就職・退職
                        </p>
                    </div>
                </Link>

                <Link to="#" className="shortcutBtnLink">
                    <div className="shortcutBtn">
                        <i class="fas fa-wheelchair fa-3x fa-fw"></i><br />
                        <p>
                            介護・福祉
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}