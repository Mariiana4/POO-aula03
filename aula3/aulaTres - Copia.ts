export default class Personagem{
    
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}

    status(): string {
        return(
            "Guerreiro: \n" +
            "\n Nome: " +
            this.nome + 
            ("\nEnergia: " + this.energia.toFixed(1)) + 
            ("\nAtaque: " + this.ataque.toFixed(1)) + 
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }

    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;

        if(this.energia > 0){
            console.log('Ops! Você morreu.');
        } else{
            if(this.defesa > 100){
                this.defesa = 0;
            }
        }
    }

    treinarDefesa(): void{
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;

            if(this.defesa > 100) {
                this.defesa = 0;  
            }
    }

    descansar(hour: number): void{
        this.energia += hour * Math.random() * 10;

        if(this.energia > 100) {
            this.energia = 100;
        }
    }

    batalhar(): number{
        let desgate : number = Math.random() * 100;

        this.energia -= desgate;
        return desgate;
    }

    isDead(): boolean{
        return this.energia < 0;
    }

}
console.log("OPS! Você morreu!");
