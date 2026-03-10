import SectionLayout from './SectionLayout'

export default function GrowthSystem() {
  return (
    <SectionLayout id="growth" num="03" icon="🥚" title="Growth System" titleKo="성장 시스템">
      <p className="prose">
        달생이는 0세부터 10세까지 성장하며, 각 단계마다 외형과 성격이 진화합니다.
        플레이어의 대화와 선택이 모든 것을 결정합니다.
      </p>

      <div className="evo-flow">
        <div className="evo-stage">
          <img src="/assets/egg.png" alt="알" />
          <span>알 (0세)</span>
        </div>
        <div className="evo-arrow">→</div>
        <div className="evo-stage">
          <img src="/assets/charac1.png" alt="자아형성" />
          <span>자아형성 (1~3세)</span>
        </div>
        <div className="evo-arrow">→</div>
        <div className="evo-stage">
          <img src="/assets/charac2.png" alt="사회적 확장" />
          <span>사회적 확장 (4~9세)</span>
        </div>
        <div className="evo-arrow">→</div>
        <div className="evo-stage">
          <img src="/assets/charac3.png" alt="졸업" />
          <span>졸업 (10세)</span>
        </div>
      </div>

      <div className="card-grid" style={{ marginTop: 24 }}>
        <div className="card yellow">
          <div className="card-icon">🥚</div>
          <div className="label">알 단계 (0세)</div>
          <p>달의 뒷면에서 알 선택. 초기 대화 패턴에 따라 색상, 무늬, 움직임이 결정되고 대화를 통해 부화</p>
        </div>
        <div className="card cyan">
          <div className="card-icon">🌱</div>
          <div className="label">자아형성기 (1~3세)</div>
          <p>대화 분석으로 '가치관 좌표' 형성. AI가 고유한 말투와 성격 정의. 범인 없는 사건으로 편견 측정</p>
        </div>
        <div className="card purple">
          <div className="card-icon">🔍</div>
          <div className="label">사회적 확장기 (4~9세)</div>
          <p>로그라이크 추리 퀘스트 수행. 해결 방식(논리 vs 감성)에 따라 외형이 실시간 변화</p>
        </div>
        <div className="card mint">
          <div className="card-icon">🎓</div>
          <div className="label">졸업 (10세)</div>
          <p>최종 직업 + AI 페르소나 확정. 이미지 생성으로 졸업 카드화. SNS 공유 트리거</p>
        </div>
      </div>
    </SectionLayout>
  )
}
