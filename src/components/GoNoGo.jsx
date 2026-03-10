import SectionLayout from './SectionLayout'

const gates = [
  { gate: '감정적 훅', metric: '알→첫 진화 완료율', threshold: '≥70%', desc: '핵심 메커니즘 검증' },
  { gate: 'BM 검증',   metric: '부활권 구매율',    threshold: '≥30%', desc: '수익 모델 작동' },
  { gate: '리텐션',    metric: 'D7 잔존율',        threshold: '≥50%', desc: '육성 루프 습관화' },
  { gate: '바이럴',    metric: 'SNS 공유율',       threshold: '≥20%', desc: '자연 성장 가능' },
  { gate: '참여 깊이', metric: '평균 세션 시간',   threshold: '≥15분', desc: '조합 작동' },
]

export default function GoNoGo() {
  return (
    <SectionLayout id="gates" num="07" icon="🚦" title="Go / No-Go Gates" titleKo="진행/중단 기준">
      <table className="data-table">
        <thead>
          <tr>
            <th>게이트</th>
            <th>지표</th>
            <th>기준</th>
            <th>판단</th>
          </tr>
        </thead>
        <tbody>
          {gates.map(({ gate, metric, threshold, desc }) => (
            <tr key={gate}>
              <td><strong style={{ color: 'var(--cyan2)' }}>{gate}</strong></td>
              <td>{metric}</td>
              <td><strong style={{ color: 'var(--mint)' }}>{threshold}</strong></td>
              <td style={{ color: 'rgba(238,246,255,0.6)' }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card-grid" style={{ marginTop: 24 }}>
        <div className="card mint">
          <div className="card-icon">✅</div>
          <h3>5개 중 4개 통과</h3>
          <p>성장 단계 진행</p>
        </div>
        <div className="card yellow">
          <div className="card-icon">⚠️</div>
          <h3>3개 통과</h3>
          <p>실패 지표 개선 후 재시도</p>
        </div>
        <div className="card pink">
          <div className="card-icon">🔄</div>
          <h3>3개 미만</h3>
          <p>핵심 루프 재검토</p>
        </div>
      </div>
    </SectionLayout>
  )
}
