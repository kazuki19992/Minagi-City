import Call_at from '../Components/Call_at'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Question-Thanks.css'
export default function Thanks (props) {
    const [callAddress, updateCallAddress] = useState({name: "取得中", address: null})
    console.log(props)

    useEffect(() => {
        const orgId = '000008'
        axios.get(process.env.PUBLIC_URL + '/static/org.json').then((res)=> {
            console.log(res.data[orgId])
            updateCallAddress(res.data[orgId])
        })
    }, [])

    const back = () => {
        props.history.goBack()
    }
    return (
        <>
            <div style={{textAlign: 'center', color: '#333'}}>
                <h2 className='sectionHeader'>アンケートのご協力ありがとうございました</h2>
                <p>水城市役所では皆様のアンケートをもとに、よりよい情報を発信できるよう努めてまいります。</p>
                <div className="thanksBtnBox" style={{marginBottom: '2.5em'}}>
                    <span className="backbtn" onClick={back}><i class="fas fa-arrow-left fa-fw"></i> 前のページへ戻る</span>
                </div>
            </div>
            <Call_at name={callAddress.name} address={callAddress.address}/>
        </>
    )
}