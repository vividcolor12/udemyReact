/** @format */

export default function TabButton({ children, handleSelect, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={handleSelect}>{children}</button>
        </li>
    );
}
