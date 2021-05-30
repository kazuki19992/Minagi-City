import './TopAboutMinagi.css'
import Minagi from './Minagi.svg'

export default function AboutMinagi (props) {
    // 仮の値
    const human = {
        man: 135684,
        woman: 114396,
        other: 2234,
        family: 74320
    }
    return (
        <div>
            <h2 className="sectionHeader">水城市について</h2>
            <div class="Top-Minagi-Data-Box">
                <div class="box-title">水城市の人口・世帯数</div>
                <div>
                    <p>人口: {human.man + human.woman + human.other}人 (内訳: 男性:{human.man}人, 女性:{human.woman}人, その他: {human.other}人)</p>
                    <p>世帯数: {human.family}世帯</p>
                </div>
            </div>

            <div class="Top-Minagi-Data-Box">
                <div class="box-title">シンボルマーク</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={Minagi} width="200" />
                    </div>
                    <div className="Minagi-Symboldata">
                        <p className="title">水城市 シンボルマーク</p>
                        <p className="since">2021年5月29日 制定</p>
                        <p className="detail">
                            水城市の頭文字「み」と、未来へ羽ばたく鳥の形を図案化したもので、太平洋の青、そこから昇る太陽と市民の活気を表す赤、豊かな自然を表す緑の3色をまとっています。
                        </p>
                    </div>
                </div>
            </div>

            <div class="Top-Minagi-Data-Box">
                <div class="box-title">市の鳥、市の花、市の木</div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <img src={Minagi} width="200" />
                    </div>
                    <div className="Minagi-Symboldata">
                        <p className="title">市の鳥: 白鳥</p>
                        <p className="since">2021年5月29日 制定</p>
                        <p className="detail">
                            毎年冬になると我が市へ訪れる白鳥。
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}