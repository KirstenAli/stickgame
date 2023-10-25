const startScreenTemplate = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 game-component">
                    <img src="collectible-box-matches.jpg" alt="Game Image" class="game-image">
                    <p class="game-rules">{{rules}}</p>
                    <button class="play-button" @click="start">Play Now</button>
                </div>
            </div>
        </div>`;