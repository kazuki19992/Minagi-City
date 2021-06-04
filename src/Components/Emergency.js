import "./Emergency.css"

export default function Emergency (props) {
    const data = props.data

    if(data.mode === "weather"){
        const warnData = []
        for(const list of data.detail){
            if(list !== 'しばらくお待ちください...'){
                const last2chars = list.slice(-2)
                switch(last2chars){
                    case '情報':{
                        warnData.push(<li className="weatherListCell CellAlarm">{list.slice(0, -4)}</li>)
                        break;
                    }
                    case '警報':{
                        const last4chars = list.slice(-4)
                        if(last4chars === '特別警報'){
                            warnData.push(<li className="weatherListCell CellCritical">{list.slice(0, -2)}</li>)
                        }else{
                            warnData.push(<li className="weatherListCell CellAlarm">{list.slice(0, -2)}</li>)
                        }
                        break;
                    }case '意報':{
                        warnData.push(<li className="weatherListCell CellWarning">{list.slice(0, -3)}</li>)
                        break;
                    }
                    default:{
                    }
                }
            }else{
                warnData.push(list)
            }
            // warnData.push(<li className="weatherListCell">{list}</li>)
        }
        let msg
        if(!warnData.length){
            msg = "現在、水城市周辺に警報/注意報は発令されていません。"
        }else if(warnData[0] === 'しばらくお待ちください...'){
            msg = "データ取得中..."
        }else{
            msg = "現在、水城市周辺に以下の警報/注意報が発令されています！"
        }
        return(
            <div className="weather-warning-wrapper">
                <p className="title"><i class="fas fa-cloud-sun-rain fa-fw"></i> {data.title}</p>
                <div className="contents">
                    <p className="msg">{msg}</p>
                    <ul className="warnList">
                        {warnData}
                    </ul>
                </div>
            </div>
        )
    }else if(data.mode === "covid19"){
        const msgList = []
        for(const detail of data.detail){
            msgList.push(<p>{detail}</p>)
        }
        return(
            <div className="weather-warning-wrapper">
                <p className="title"><i class="fas fa-virus fa-fw"></i> {data.title}</p>
                <div className="contents">
                    <p className="msg">{data.msg}</p>
                    {msgList}
                </div>
            </div>
        )
    }
    return null
}