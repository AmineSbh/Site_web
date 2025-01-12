
/**
 * Description placeholder
 *
 * @export
 * @param {{ checked: any; onChange: any; label: any; id: any; }} param0 
 * @param {*} param0.checked 
 * @param {*} param0.onChange 
 * @param {*} param0.label 
 * @param {*} param0.id 
 * @returns {*} 
 */
export function Checkbox({checked, onChange, label, id}) {
    return <div className="form-check">
        <input
            id={id}
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}