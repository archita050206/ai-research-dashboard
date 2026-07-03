// type YearStats={
//         [year:number]:number
// };

import type { YearStats } from "../types/yearStats";

self.onmessage=(event)=>{
    const papers=event.data;
    //console.log(papers[0].publication_year);
    
    const stats:YearStats={};

    for(const paper of papers){
        const yr=paper.publication_year;
        stats[yr]=(stats[yr] || 0)+1;

    }
    self.postMessage(stats);
}