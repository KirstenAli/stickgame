const gameTemplate =
    `<div class="matchbox">
         <img src="matchstick.png"
          v-for="(match,index) in game.matchBox" :key="index"
          alt="Image + index"
          @click="removeMatchStick">
     </div>`;