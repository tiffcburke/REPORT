let input = prompt('Ready to fill out your REPORT?')

while (input === 'yes') {
    let letter = prompt("Type the letter of the REPORT you'd like to update. Options are R ,E ,P ,O ,R2 ,T. To quit, type any other key!");
    if (letter.toUpperCase() === 'R') {
        let responseR = prompt('What have you been reading lately?');
        console.log(`READING: ${responseR}`);
    } else if (letter.toUpperCase() === 'E') {
        let responseE = prompt('What is your go to food right now?');
        console.log(`EATING: ${responseE}`);
    } else if (letter.toUpperCase() === 'P') {
        let responseP = prompt('What are you playing?');
        console.log(`PLAYING: ${responseP}`);
    }
    else if (letter.toUpperCase() === 'O') {
        let responseO = prompt('What is your recent obsession?');
        console.log(`OBSSESING: ${responseO}`);
    }
    else if (letter.toUpperCase() === 'R2') {
        let responseR2 = prompt('What would you recommend?');
        console.log(`RECOMMENDING: ${responseR2}`);
    }
    else if (letter.toUpperCase() === 'T') {
        let responseT = prompt('How are you treating yourself?');
        console.log(`TREATING: ${responseT}`);
    } else { break };

}

console.log('Catch ya next time!');