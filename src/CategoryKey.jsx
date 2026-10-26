import { categoryInfo, complexityInfo } from './categoryInfo.js'

function CategoryKey() {
  return (
    <section className="key">
      <h3>Key</h3>

      <div className="key-columns">
        <div>
          <h4>Categories</h4>
          <ul>
            {Object.entries(categoryInfo).map(([id, info]) => (
              <li key={id}>
                <span className="badge" style={{ background: info.color }}>{info.label}</span>
                {info.meaning}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Complexity</h4>
          <ul>
            {Object.entries(complexityInfo).map(([id, meaning]) => (
              <li key={id}><strong>{id}:</strong> {meaning}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CategoryKey