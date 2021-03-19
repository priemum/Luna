module.exports = {

    choose      : "The available languages are the following",
    available   : ( available, client ) => {

        return ( available.map( ( x ) => {

            const { ISO, name } = client.language[x].informations;

            return `\` ${ISO} \` : ${name} `

        } ) ).join( "\n" );

    },

    howUse      : "Enter the language code you want to use",
    timeEnd     : "The time is up, use the command again",
    done        : "The language has been changed",
    new         : "I will now speak in English"

};