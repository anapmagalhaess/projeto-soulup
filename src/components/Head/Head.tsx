export default function Head() {
    return(
        <head>
            <meta charSet="UTF-8"/> {/*camelCase*/}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> {/*Tag de fechamento*/}
            <title>Soul Up</title>
            <link rel="stylesheet" href="./css/index.css"/>
            <link rel="shortcut icon" href="./img/img-icon.ico" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
            <script src="./js/auth-check.js" defer></script>
            <script src="./js/btn-mobile.js" defer></script>
        </head>
    );
}