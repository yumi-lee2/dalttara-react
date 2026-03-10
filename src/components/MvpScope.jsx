import SectionLayout from './SectionLayout'

export default function MvpScope() {
  const included = [
    '알 선택 + 부화 0~10세 육성 사이클',
    '추리 스테이지 2-3개',
    '용궁 탈출 던전',
    'AI 대화 → 외형 진화',
    '성격/말투 형성',
    '나이별 배경 변화',
    '부활권 BM',
    '롤백 3회 무료',
    'NFT 졸업 카드',
    'SNS 공유',
    '가벼운 웹 기반',
  ]

  const excluded = [
    '오프라인 생명감',
    'AI 빌리지',
    '시즌 패스',
    '프리미엄 프롬프트',
    'WebGPU',
    '스테이블코인',
    '다중 달생이',
  ]

  return (
    <SectionLayout id="mvp" num="06" icon="🎯" title="MVP Scope" titleKo="MVP 범위">
      <p className="prose"><strong>포함 항목</strong></p>
      <div style={{ marginBottom: 20 }}>
        {included.map((item) => (
          <span key={item} className="included">✓ {item}</span>
        ))}
      </div>

      <p className="prose"><strong>제외 항목</strong></p>
      <div style={{ marginBottom: 28 }}>
        {excluded.map((item) => (
          <span key={item} className="excluded">✕ {item}</span>
        ))}
      </div>

      <p className="prose"><strong>수익 모델 (MVP)</strong></p>
      <div className="card-grid">
        <div className="card pink">
          <div className="card-icon">💖</div>
          <h3>파트너 부활권</h3>
          <p>핵심 BM. 감정적 유대가 구매로 전환</p>
        </div>
        <div className="card cyan">
          <div className="card-icon">🔄</div>
          <h3>스타일 롤백</h3>
          <p>3회 무료, 이후 유료. 프롬프트로 비슷하게 무료 복원 가능</p>
        </div>
        <div className="card purple">
          <div className="card-icon">🏆</div>
          <h3>NFT 졸업 카드</h3>
          <p>세상에 하나뿐인 최종 형태를 디지털 소장품으로</p>
        </div>
      </div>
    </SectionLayout>
  )
}
