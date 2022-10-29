
export default class StartGame extends Phaser.Scene {
    private start;
    private sbtn;
    constructor(){
        super("StartGame");
    }
    preload(): void {

        this.load.setPath('assets');
        this.load.image("bg","bg.webp");
        this.load.image("btn","star.png");
    }

    create():void{
        this.start=this.add.image(300,300,'bg');
        this.sbtn=this.add.image(300,350,'btn').setInteractive();

        this.sbtn.on('pointerdown',(event)=>{
           this.scene.start('PlayScene');//鼠标点击开始游戏
        })
        
    }

    
}
