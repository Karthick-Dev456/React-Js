import React, { useMemo, useState } from 'react'

/** Slow on purpose: sum 1 + 2 + ... + n */
function sumOneToN(n) {
    let sum = 0
    for (let i = 1; i <= n; i += 1) {
        sum += i
    }
    return sum
}

const UseMemoHook = () => {
    const [count, setCount] = useState(1000)
    const [tick, setTick] = useState(0)

    const total = useMemo(() => sumOneToN(count), [count])

    return (
        <section>
            <h1>useMemo Hook</h1>
            <p>
                Sum from 1 to <strong>{count}</strong> = <strong>{total}</strong>
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => setCount((c) => c + 500)}>
                    Increase count (recomputes sum)
                </button>
                <button type="button" onClick={() => setTick((t) => t + 1)}>
                    Bump tick ({tick}) — same count, sum stays memoized
                </button>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.85 }}>
                <code>useMemo</code> only recalculates when <code>count</code> changes. Updating{' '}
                <code>tick</code> re-renders the component but skips running the sum again.
            </p>
        </section>
    )
}

export default UseMemoHook
