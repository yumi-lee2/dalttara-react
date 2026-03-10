import SectionLayout from './SectionLayout'

export default function Vision() {
  return (
    <SectionLayout id="vision" num="02" icon="🔭" title="Core Vision" titleKo="핵심 비전">
      <p className="prose">
        <strong>문제:</strong> 현재의 AI 캐릭터 플랫폼은 대화 이상의 감정적 소유감을 주지 못하고,
        추리 게임은 캐릭터에 플레이어의 개성이 반영되지 않습니다.
        귀엽고, 영구적이고, "오직 나만의" 존재를 육성하면서 함께 성장하는 경험은 존재하지 않습니다.
      </p>

      <div className="card-grid">
        <div className="card pink">
          <div className="card-icon">💬</div>
          <div className="label">Character.AI</div>
          <h3>대화만 가능</h3>
          <p>귀엽지 않고, 시각적이지 않고, 성장 아크 없음</p>
        </div>
        <div className="card purple">
          <div className="card-icon">🔍</div>
          <div className="label">단간론파 / 레이튼</div>
          <h3>훌륭한 추리 디자인</h3>
          <p>고정된 캐릭터, 개인화 없음</p>
        </div>
        <div className="card orange">
          <div className="card-icon">🥚</div>
          <div className="label">다마고치</div>
          <h3>소유욕과 귀여움</h3>
          <p>서사적 깊이 없음</p>
        </div>
      </div>

      <p className="prose" style={{ marginTop: 28, marginBottom: 12 }}>
        <strong style={{ color: 'var(--cyan2)' }}>핵심 차별점</strong>
      </p>
      <div className="card-grid">
        <div className="card cyan">
          <div className="card-icon">🥚</div>
          <h3>"세상에 하나뿐인" 캐릭터</h3>
          <p>실시간 AI 이미지 생성으로 어떤 플레이어도 복제 불가능한 외형 진화</p>
        </div>
        <div className="card purple">
          <div className="card-icon">🧠</div>
          <h3>편견이 곧 게임플레이</h3>
          <p>자아형성기에서 플레이어의 심리가 실제 게임 메커니즘이 됨</p>
        </div>
        <div className="card mint">
          <div className="card-icon">🌱</div>
          <h3>성장이 내러티브를 결정</h3>
          <p>미스터리가 어려워지는 게 아니라 캐릭터 발달 단계에 따라 달라짐</p>
        </div>
      </div>
    </SectionLayout>
  )
}
