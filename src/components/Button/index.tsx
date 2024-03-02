export function Button({ value, handleClick }: { value: string, handleClick: () => void }) {
    return <button style={{ height: "30px", width: "30px", backgroundColor: "#fff", border: "1px solid black", cursor: "pointer", fontWeight: "bolder" }} onClick={handleClick}>{ value }</button>;
}