const endScreenTemplate =
    `<div class="modal fade" id="endScreenModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-danger">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">I win!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Let\'s Play Again!</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" id="playGameButton" @click="reload">Play New Game</button>
                </div>
            </div>
        </div>
    </div>`;