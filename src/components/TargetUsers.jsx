import SectionLayout from './SectionLayout'

export default function TargetUsers() {
  return (
    <SectionLayout id="users" num="04" icon="👤" title="Target Users" titleKo="타겟 유저">
      <div className="persona primary">
        <span className="persona-emoji">🎮</span>
        <div className="persona-name">"유진" — 추리 x 육성 하이브리드 플레이어</div>
        <div className="persona-role">25세 여성 / 직장인 / 동물의 숲 700시간+ / 단간론파 전 시리즈 클리어</div>
        <ul className="persona-detail">
          <li><strong>현재 불만:</strong> "동물의 숲은 귀엽지만 스토리가 없고, 단간론파는 재밌지만 캐릭터가 내 거라는 느낌이 없어"</li>
          <li><strong>원하는 것:</strong> 내가 키운 귀여운 파트너가 나와 함께 사건을 풀며 성장하는 경험</li>
          <li><strong>Aha! Moment:</strong> 알에서 깨어난 달생이가 첫 대화 후 외형이 바뀐 순간 — "내 말 때문에 바뀐 거야?!"</li>
        </ul>
      </div>

      <div className="persona secondary">
        <span className="persona-emoji">📱</span>
        <div className="persona-name">"서연" — SNS 공유형 캐주얼 플레이어</div>
        <div className="persona-role">21세 여성 / 대학생 / 포켓몬 고, 쿠키런 / 틱톡 매일 소비</div>
        <ul className="persona-detail">
          <li><strong>현재 불만:</strong> "뽑기 게임은 다 똑같은 캐릭터. 내가 만든 게 아니라 확률이 만든 거"</li>
          <li><strong>원하는 것:</strong> 친구들과 비교했을 때 완전히 다른 달생이 외형</li>
          <li><strong>Aha! Moment:</strong> 친구의 달생이와 내 달생이가 완전히 다른 외형/성격인 걸 비교한 순간</li>
        </ul>
      </div>

      <div className="persona" style={{ background: 'linear-gradient(145deg, rgba(77,232,255,0.08), rgba(13,34,82,0.7))', border: '1.5px solid rgba(77,232,255,0.18)', marginBottom: 0 }}>
        <span className="persona-emoji">👀</span>
        <div className="persona-name">"구경꾼" — SNS 바이럴 수신자</div>
        <div className="persona-role">직접 플레이하지 않지만 친구의 달생이를 SNS에서 접하는 사람</div>
        <ul className="persona-detail">
          <li><strong>전환 트리거:</strong> 독특한 부화 외형 / 성장 스크린샷 / 최종 형태 공유 / AI가 대화를 기억한다는 사실</li>
          <li><strong>펫 자동 대화:</strong> 육성한 펫의 성격(스탯) 기반 AI 프롬프트 생성 → API 연결로 펫들끼리 자동 대화를 주고받으며, 구경꾼이 이를 관전하는 콘텐츠</li>
        </ul>
      </div>
    </SectionLayout>
  )
}
