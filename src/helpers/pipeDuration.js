


export default function pipeDuration(duration){
    const hours = Math.floor(duration/60)
    const minutes = duration%60
    return (
        hours + ":" + minutes
    )
}



