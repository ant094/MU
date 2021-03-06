// Blok Kode untuk tampilan Player
function viewPlayer(data) {
     let articlesHTML   = "";
     let no             = 1;
     data.squad.forEach(data => {
         if (data.shirtNumber != null) {
             let age    = getAge(data.dateOfBirth);
             articlesHTML += `
                     <tr>
                         <td>${no++}</td>
                         <td>${data.name}</td>
                         <td class="hide-on-small-only">${data.nationality}</td>
                         <td class="hide-on-small-only">${age}</td>
                         <td>${data.position}</td>
                         <td>${data.shirtNumber}</td>
                     </tr>
                     `;
         }
     });
    return articlesHTML;
  }

// Blok Kode untuk tampilan Klasemen
function viewStanding(data) { 
    let articlesHTML = "";
    let standings    = data.standings[0].table;
    standings.forEach(data => {
        articlesHTML +=`
        <tr>
            <td>${data.position}</td>
            <td>
                <span>
                    <img src="images/${data.team.name.split(" ").join("")}.png" alt="" class="img-standing">
                </span>
                <span class="hide-on-small-only">${data.team.name}</span>
            </td>
            <td>${data.playedGames}</td>
            <td>${data.won}</td>
            <td>${data.draw}</td>
            <td>${data.lost}</td>
            <td>${data.goalDifference}</td>
            <td>${data.goalsAgainst}</td>
            <td>${data.goalsFor}</td>
            <td>${data.points}</td>
        </tr>          
        `;
    });
        return articlesHTML;
}

// Blok Kode untuk tampilan Pertandingan
function viewMatch(data) {
    let articlesHTML    = "";
    for (let i = 0; i < 6; i++) {
        let element     = data.matches[i];
        let homeTeam    = element.homeTeam.name.split(" ").join("");
        let awayTeam    = element.awayTeam.name.split(" ").join("");
        let matchDate   = getDate(element.utcDate);
        
            articlesHTML += `
                <a href="#matchId-${element.id}" class="match">
                    <div class="col s12 m12 l6 ">
                        <div class="card-panel pb-3">
                            <div class="row">
                                <div class="col s12 center-align"><b>Match Day ${element.matchday}</b></div>
                                <div class="col s4 center-align"> <img class="responsive-img" src="images/${homeTeam}.png" alt=""> </div>
                                <div class="col s4 center-align vs-match">
                                    <p>VS</p>
                                    <p class="fs-date">${matchDate}</p>
                                </div>
                                <div class="col s4 center-align"> <img class="responsive-img" src="images/${awayTeam}.png" alt=""> </div>
                            </div>
                        </div>
                    </div>
                </a>
                `;
    }
    return articlesHTML;
}

// Blok Kode untuk tampilan Pertandingan Id
 function viewMatchId(data) {
     let articlesHTML   = "";

     let homeTeam       = data.match.homeTeam.name.split(" ").join("");
     let awayTeam       = data.match.awayTeam.name.split(" ").join("");
     let matchDate      = getDate(data.match.utcDate);
     let matchTime      = data.match.utcDate.substr(11, 5);
     let headtoheadHome = data.head2head.homeTeam;
     let headtoheadAway = data.head2head.awayTeam;

     articlesHTML += `
        <div class="col l12 ">
            <div class="card-panel">
                <div class="row">
                    <div class="col s12 right-align">
                        <a class="waves-effect waves-light btn-small hide" id='notificationSaved'> saved
                            <i class="large material-icons">check_circle</i>
                        </a>
                    </div>
                    <div class="col s12 center-align">
                        <h5><b id="titleMatch">Match Day ${data.match.matchday}</b></h5>
                    </div>
                    <div class="col s4 center-align"> <img class="responsive-img" src="images/${homeTeam}.png" alt=""> </div>
                    <div class="col s4 center-align vs-matchId">
                        <p>${matchDate}</p>
                        <p><b>VS</b></p>
                        <p>${matchTime}</p>
                    </div>
                    <div class="col s4 center-align"> <img class="responsive-img" src="images/${awayTeam}.png" alt=""> </div>
                    <div class="col s12 m6 l6">
                        Wins: ${headtoheadHome.wins} Draws: ${headtoheadHome.draws} Losses: ${headtoheadHome.losses}
                    </div>
                    <div div class="col s12 m6 l6 right-align hide-on-small-only">
                        Wins: ${headtoheadAway.wins} Draws: ${headtoheadAway.draws} Losses: ${headtoheadAway.losses}
                    </div>
                    <div class="col s12 m6 l6 line-matchId">Venue: ${data.match.venue}</div>
                    <div class="col s12 m6 l6 right-align line-matchId">Competition: ${data.match.competition.name}</div>
                </div>
            </div>
        </div>
              `;
     return articlesHTML;
 }

 // Blok Kode untuk tampilan artice yang disimpan
function viewSaved(data) {
         let articlesHTML = "";
         const dataLength = data.length === 6 ? 6: data.length;
         
         for (let i = 0; i < dataLength; i++) {
             if (data[i].key === "standings") {
                 articlesHTML += `
                    <a href="#savedId-${data[i].key}" class="match">
                        <div class="col s12 m12 l6 ">
                            <div class="card-panel pb-3">
                                <div class="row">
                                    <div class="col s12 center-align"><b>Standings</b></div>
                                    <div class="col s12 l12 center-align"><img class="img-match" src="images/premier-league.jpg"> </div>
                                    <div class="col s12 center-align delete" value="Standings" id="standings">
                                    <a class="waves-effect waves-light btn w-100 red darken-2"><i class="material-icons right">delete</i>Delete</a></div>
                                </div>
                            </div>
                        </div>
                    </a>
  `;
                 i++;
             } else {
                        let element     = data[i].match;
                        let homeTeam    = element.homeTeam.name.split(" ").join("");
                        let awayTeam    = element.awayTeam.name.split(" ").join("");
                        let matchDate   = getDate(element.utcDate);
                        
                 articlesHTML += `
                    <a href="#savedId-${element.id}" class="match">
                        <div class="col s12 m12 l6 ">
                            <div class="card-panel pb-3">
                                <div class="row">
                                    <div class="col s12 center-align"><b id="titleMatch">Match Day ${element.matchday}</b></div>
                                    <div class="col s4 center-align"> <img class="img-match" src="images/${homeTeam}.png" alt=""> </div>
                                    <div class="col s4 center-align vs-match">
                                    <p>VS</p><p class="fs-date">${matchDate}</p>
                                    </div>
                                    <div class="col s4 center-align"> <img class="img-match" src="images/${awayTeam}.png" alt=""> </div>
                                    <div class="col s12 center-align delete" value="Match Day ${element.matchday}" id="matchId-${element.id}">
                                    <a class="waves-effect waves-light btn w-100 red darken-2"><i class="material-icons right">delete</i>Delete</a></div>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
             }
         }
           
         return articlesHTML;
     }

// Blok Kode untuk tampilan artice yang disimpan Berdasarkan Id
function viewSavedId(data) {
    let articleMatchId     = "";
    let articleStanding    = "";

    if (data.key !== "standings") {
        let homeTeam       = data.match.homeTeam.name.split(" ").join("");
        let awayTeam       = data.match.awayTeam.name.split(" ").join("");
        let matchDate      = getDate(data.match.utcDate);
        let matchTime      = data.match.utcDate.substr(11, 5);
        let headtoheadHome = data.head2head.homeTeam;
        let headtoheadAway = data.head2head.awayTeam;

        articleMatchId = `
        <div class="col l12 ">
            <div class="card-panel">
                <div class="row">
                    <div class="col s12 center-align">
                        <h5><b>Match Day ${data.match.matchday}</b></h5>
                    </div>
                    <div class="col s4 center-align"> <img class="img-matchId" src="images/${homeTeam}.png" alt=""> </div>
                    <div div class="col s4 center-align vs-matchId">
                        <p>${matchDate}</p>
                        <p><b>VS</b></p>
                        <p>${matchTime}</p>
                    </div>
                    <div class="col s4 center-align"> <img class="img-matchId" src="images/${awayTeam}.png" alt=""> </div>
                    <div class="col s12 m6 l6">
                        Wins: ${headtoheadHome.wins} Draws: ${headtoheadHome.draws} Losses: ${headtoheadHome.losses}
                    </div>
                    <div div class="col s12 m6 l6 right-align hide-on-small-only">
                        Wins: ${headtoheadAway.wins} Draws: ${headtoheadAway.draws} Losses: ${headtoheadAway.losses}
                    </div>
                    <div class="col s12 m6 l6 line-matchId">Venue: ${data.match.venue}</div>
                    <div class="col s12 m6 l6 right-align line-matchId">Competition: ${data.match.competition.name}</div>
                </div>
            </div>
        </div>
    `;
    } 

    let standings = data.standings[0].table;
    standings.forEach(data => {
        articleStanding += `
        <tr>
            <td>${data.position}</td>
            <td>
                <span><img src="images/${data.team.name.split(" ").join("")}.png" alt="" class="img-standing"></span> 
                <span class="hide-on-small-only">${data.team.name}</span>
            </td>
            <td>${data.playedGames}</td>
            <td>${data.won}</td>
            <td>${data.draw}</td>
            <td>${data.lost}</td>
            <td>${data.goalDifference}</td>
            <td>${data.goalsAgainst}</td>
            <td>${data.goalsFor}</td>
            <td>${data.points}</td>
        </tr>    
        `;
    });
    
return articlesHTML= {
                    standing : articleStanding, 
                    matchId  :articleMatchId
                };
}

// BLok kode untuk Tampilan Kesalahan
function viewError(text1) {
      const savedNothing = `
      <article class="text-justify fs-content">
        <div class="card-panel xl-mt-0 xl-mt-1 content">
            <div class = "row text-center" >
                    <p>${text1}</p>
                    <a href="index.html" style="color: blue;" ><u><i>Back to home</i></u></a>
                </div>
            </div>
        </div>
    </article>`;
    return savedNothing;
  }