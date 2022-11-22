

const

<div className="checkBox">
  <p className={`checkBox-option ${!transaction.type ? 'active-green' : ''}`}>
    Доход
  </p>
  <label className="switch">
    <input
      className="switch"
      type="checkbox"
      name="type"
      onChange={handleInputChange}
      checked={transaction.type}
    />
    <div className="back">
      <div className="indicator">
        <Plus />
      </div>
    </div>
  </label>
  <p className={`checkBox-option ${transaction.type ? 'active-pink' : ''}`}>
    Расход
  </p>
</div>;