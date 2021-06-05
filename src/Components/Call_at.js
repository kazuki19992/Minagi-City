import './Call_at.css'
export default function Call_at (props) {
    return (
        <div className="call-box">
            <p className="call-title"><i class="fas fa-envelope-open-text fa-fw"></i> お問合せ先</p>
            <p className="call-Name">{props.name}</p>
            <p className="call-Address">{props.address}</p>
        </div>
    )
}