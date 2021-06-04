import Logo from './TopLogo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header (props) {

    const logoStyle = {
        width: 320,
        height: 'auto'
    }

    const headerStyle = {
        maxWidth: '40%'
    }

    return (
        <div className="header">
            <div style={{backgroundColor: '#fff'}}>
                <header>
                    <div style={headerStyle}>
                        <Link to='/'>
                            <img src={Logo} style={logoStyle} alt="水城市(みなぎ市)トップページへ" />
                        </Link>
                    </div>
                    <div style={headerStyle}>
                        <p>Change Language</p>
                        <p>サイトマップ</p>
                    </div>
                </header>
            </div>
            <div className="nav">
                <nav className="pc-nav">
                    <ul>
                        <li><Link to="#">ニュース</Link></li>
                        <li><Link to="/explorer/手続き">手続き</Link></li>
                        <li><Link to="#">くらし</Link></li>
                        <li><Link to="#">福祉・育児</Link></li>
                        <li><Link to="#">観光・文化</Link></li>
                        <li><Link to="#">事業者の方へ</Link></li>
                        <li><Link to="#">市政情報</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}