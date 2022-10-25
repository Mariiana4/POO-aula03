"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aulaTres_1 = __importDefault(require("./aulaTres"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let person = new aulaTres_1.default('Sansa Stark', 100, 40, 20, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option !== 9) {
    console.log('|=========== PERSONAGEM ==========|');
    console.log('| 1. Treinar ataque               |');
    console.log('| 2. Treinar defesa               |');
    console.log('| 3. Descansar                    |');
    console.log('| 4. Entrar em batalha            |');
    console.log('| 8. Imprimir atributos            |');
    console.log('| 9. Sair                         |');
    console.log('|=================================|');
    option = +teclado("Escolha uma ação");
    switch (option) {
        case 1:
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            if (person.energia > 0) {
                console.log('Ops! Você morreu.');
            }
            else {
                if (person.defesa > 100) {
                    person.defesa = 0;
                }
                console.log("Guerreiro: ");
                console.log("Nome: ", person.nome);
                console.log("Energia: ", person.energia.toFixed(1));
                console.log("Ataque: ", person.ataque.toFixed(1));
                console.log("Defesa: ", person.defesa.toFixed(1));
                break;
            }
        case 2:
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;
            if (person.energia > 0) {
                console.log('Ops! Você morreu.');
            }
            else {
                if (person.defesa > 100) {
                    person.defesa = 0;
                }
            }
            console.log("Guerreiro: ");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 3:
            person.energia += Math.random() * 10;
            if (person.energia > 100) {
                person.energia = 100;
            }
            console.log("Guerreiro: ");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 4:
            person.energia -= Math.random() * 100;
            if (person.energia > 0) {
                console.log('Ops! Você morreu.');
            }
            console.log("Guerreiro: ");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 8:
            console.log("Guerreiro: ");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        default:
            break;
    }
}
