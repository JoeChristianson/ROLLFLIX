const picksContainer = $("#picked-movies-cont")

const renderPicks = ()=>{
    for (let i = 0;i<(Math.min(picks.length,10));i++){
        const btn = $("<button>")
        btn.text(picks[i].Title);
        picksContainer.append(btn);
    }
}

