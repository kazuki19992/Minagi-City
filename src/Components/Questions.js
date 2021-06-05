
import { Redirect } from 'react-router'
import './Questions.css'

export default function Questions (props) {

    const send = () => {
        setTimeout(() => {
            console.log(window.location.origin)
            window.location.href = window.location.origin + '/questions-thanks'
        }, 1200)
    }

    return (
        <div className="questions-box">
            <h3 className="questions-title"><span>このページに関するアンケート</span></h3>
            <div className="inner">
                <div style={{marginBottom: 10}}>
                    <p>1. このページは見つけやすかったですか？</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div><input type="radio" name="page_finding" value="1" /> はい</div>
                        <div><input type="radio" name="page_finding" value="0" /> どちらともいえない</div>
                        <div><input type="radio" name="page_finding" value="-1" /> いいえ</div>
                    </div>
                </div>
                <div style={{marginBottom: 10}}>
                    <p>2. このページはわかりやすかったですか？</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div><input type="radio" name="page_understand" value="1" /> はい</div>
                        <div><input type="radio" name="page_understand" value="0" /> どちらともいえない</div>
                        <div><input type="radio" name="page_understand" value="-1" /> いいえ</div>
                    </div>
                </div>
                <div style={{marginBottom: 10}}>
                    <p>3. このページは参考になりましたか？</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div><input type="radio" name="page_ref" value="1" /> はい</div>
                        <div><input type="radio" name="page_ref" value="0" /> どちらともいえない</div>
                        <div><input type="radio" name="page_ref" value="-1" /> いいえ</div>
                    </div>
                </div>

                <div style={{textAlign: 'center'}}>
                    <span className="sendButton" onClick={send}><i class="fas fa-paper-plane fa-fw"></i> 送信する</span>
                </div>
            </div>
        </div>
    )
}