export default function SectionLayout({ id, num, icon, title, titleKo, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-header">
        <span className="section-num">{num}</span>
        <span className="section-icon">{icon}</span>
        <h2 className="section-title">{title} <span>{titleKo}</span></h2>
      </div>
      <div className="section-body">
        {children}
      </div>
    </section>
  )
}
