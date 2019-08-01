let times = []

for (let i = 0; i < 24; i++) {
    if (i === 0) times.push('12:00am','12:30am')
    else if (i < 12) times.push(`${i}:00am`, `${i}:30am`)
    else if (i - 12 === 0) times.push('12:00pm','12:30pm')
    else times.push(`${i-12}:00pm`, `${i-12}:30pm`)
}

export default times
