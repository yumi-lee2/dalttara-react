import SectionLayout from './SectionLayout'

export default function Metrics() {
  return (
    <SectionLayout id="metrics" num="05" icon="📊" title="Success Metrics" titleKo="성공 지표">
      <p className="prose"><strong>MVP 핵심 KPI</strong></p>
      <div className="kpi-grid">
        <div className="kpi">
          <div className="kpi-value">30%+</div>
          <div className="kpi-label">부활권 구매율</div>
        </div>
        <div className="kpi">
          <div className="kpi-value">50%</div>
          <div className="kpi-label">D7 잔존율</div>
        </div>
        <div className="kpi">
          <div className="kpi-value">70%+</div>
          <div className="kpi-label">알→첫 진화율</div>
        </div>
        <div className="kpi">
          <div className="kpi-value">15분+</div>
          <div className="kpi-label">평균 세션</div>
        </div>
        <div className="kpi">
          <div className="kpi-value">20%+</div>
          <div className="kpi-label">SNS 공유율</div>
        </div>
      </div>

      <p className="prose" style={{ marginTop: 28 }}><strong>비즈니스 목표</strong></p>
      <table className="data-table">
        <thead>
          <tr>
            <th>시점</th>
            <th>다운로드</th>
            <th>DAU</th>
            <th>핵심 목표</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3개월</td>
            <td>100K+</td>
            <td>15K+</td>
            <td>D7 50%, 첫 결제 전환 10%+</td>
          </tr>
          <tr>
            <td>12개월</td>
            <td>1M+</td>
            <td>—</td>
            <td>SNS 30% 공유, 트렌딩 분기 2회+</td>
          </tr>
        </tbody>
      </table>

      <div className="north-star">
        <div className="north-star-icon">⭐</div>
        <h3>"유니크한 달생이 공유"</h3>
        <p>월간 SNS에 공유된 고유 달생이 최종 형태 수. 감정적 소유감(완주) + 차별화(유일성) + 성장 엔진(바이럴)을 동시에 측정하는 North Star Metric</p>
      </div>
    </SectionLayout>
  )
}
