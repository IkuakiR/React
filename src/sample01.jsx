import { useState } from "react"

export default function Sample01() {

    // const [state, setState] = useState()
    const [state, setState] = useState(0)

    return (
        <>
            <div>
                <p>{state}</p>
            </div>
            <div>
                <button onClick={() => setState(state + 1)}>プラス</button>
                <button onClick={() => setState(state - 1)}>マイナス</button>
                <button onClick={() => { console.log('Hello World!');}}>表示</button>
            </div>
        </>
    )
} 