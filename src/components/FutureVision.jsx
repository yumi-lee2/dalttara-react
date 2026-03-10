import SectionLayout from './SectionLayout'

export default function FutureVision() {
  return (
    <SectionLayout id="future" num="08" icon="🚀" title="Future Vision" titleKo="미래 비전">
      <div className="phase-list">
        <div className="phase">
          <div className="phase-title">2단계: 깊이 — MVP 검증 후</div>
          <ul>
            <li><strong>오프라인 생명감:</strong> "네가 없는 동안 이런 생각을 했어..."</li>
            <li><strong>AI 빌리지:</strong> 졸업한 달생이들의 자율 커뮤니티</li>
            <li><strong>프리미엄 프롬프트:</strong> 고유 성격 분기 해금</li>
          </ul>
        </div>
        <div className="phase p2">
          <div className="phase-title">3단계: 성장 — 6~12개월</div>
          <ul>
            <li><strong>시즌 패스 + 시즌 콘텐츠:</strong> 새 미스터리 아크, 한정 던전</li>
            <li><strong>스테이블코인 연동:</strong> 자연스러운 Web 3.0 결제</li>
            <li><strong>다중 달생이:</strong> 여러 파트너 육성</li>
          </ul>
        </div>
        <div className="phase p3">
          <div className="phase-title">4단계: 확장 — 12개월+</div>
          <ul>
            <li><strong>WebGPU 전환:</strong> 고품질 렌더링</li>
            <li><strong>달생이 간 교류:</strong> AI 빌리지에서 만남</li>
            <li><strong>IP 확장:</strong> 굿즈, 숏 애니메이션, 콜라보</li>
          </ul>
        </div>
      </div>

      <div className="north-star" style={{ marginTop: 24 }}>
        <div className="north-star-icon">🌙</div>
        <h3>"달따라하다"</h3>
        <p>"나만의 것을 키우다"라는 의미의 신조어화</p>
      </div>
    </SectionLayout>
  )
}
