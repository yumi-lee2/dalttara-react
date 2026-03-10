import SectionLayout from './SectionLayout'

export default function Summary() {
  return (
    <SectionLayout id="summary" num="01" icon="📋" title="Executive Summary" titleKo="개요">
      <p className="prose">
        달따라는 플레이어의 대화 데이터를 학습해 고유한 성격과 외형으로 진화하는 AI 캐릭터 "달생이"를
        육성하고, 사건을 해결해 나가는 추리 로그라이크 게임입니다.
      </p>
      <p className="prose">
        기존 AI 캐릭터 플랫폼(Character.AI, AI Dungeon)은 감정적 소유감이 부족하고,
        기존 추리 게임(단간론파, 레이튼)은 캐릭터가 "내 것"이 아닙니다.
        달따라는 "다마고치 같은 애착"과 "내러티브 추리"를 결합한, 시장에 없는 하이브리드 경험을 제공합니다.
      </p>
      <div className="card-grid">
        <div className="card cyan">
          <div className="card-icon">💬</div>
          <h3>LLM 대화</h3>
          <p>자연어 기반 대화로 캐릭터의 성격과 말투가 형성</p>
        </div>
        <div className="card purple">
          <div className="card-icon">🎨</div>
          <h3>이미지 생성 AI</h3>
          <p>성장 단계마다 실시간으로 고유한 외형 생성</p>
        </div>
        <div className="card mint">
          <div className="card-icon">🌱</div>
          <h3>육성</h3>
          <p>추리 퀘스트를 통해 캐릭터의 최종 형태가 결정</p>
        </div>
      </div>
    </SectionLayout>
  )
}
